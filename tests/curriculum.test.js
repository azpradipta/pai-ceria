import { test } from 'node:test';
import assert from 'node:assert/strict';
import { allKelasData, getAllBabsForKelas, getMateriByKelasAndBab, getSavedProgress } from '../src/data/paiData.js';

test('URL identifies the exact curriculum even when the old preference differs', () => {
  assert.equal(getMateriByKelasAndBab(6, 'k6-lama-bab-10', 'cp-baru').mode, 'cp-lama');
  assert.equal(getMateriByKelasAndBab(6, 'k6-baru-bab-10', 'cp-lama').mode, 'cp-baru');
  for (const invalid of ['bab-10', 'k5-lama-bab-10', 'k6-baru-bab-99', 'k6-lama-bab-01', 'k6-other-bab-10']) {
    assert.equal(getMateriByKelasAndBab(6, invalid), null, invalid);
  }
});

test('all 60 chapters have substantial material, references, activities, and playable questions', () => {
  const ids = new Set();
  let count = 0;
  for (const kelas of Object.keys(allKelasData)) {
    for (const mode of ['cp-lama', 'cp-baru']) {
      const chapters = getAllBabsForKelas(kelas, 0, mode);
      assert.equal(chapters.length, 10);
      assert.equal(getAllBabsForKelas(kelas, 1, mode).length, 5);
      assert.equal(getAllBabsForKelas(kelas, 2, mode).length, 5);
      for (const chapter of chapters) {
        count++;
        assert.ok(!ids.has(chapter.id), chapter.id); ids.add(chapter.id);
        assert.equal(getMateriByKelasAndBab(kelas, chapter.id).id, chapter.id);
        assert.equal(chapter.materi.subBab.length >= 3, true, chapter.id);
        assert.ok(chapter.materi.subBab.every(sub => sub.uraian || sub.dalil || sub.lafal || sub.tabelInfo || Object.values(sub).some(value => Array.isArray(value) && value.length > 0)), chapter.id);
        assert.ok(chapter.materi.sumber[0].file.endsWith(mode === 'cp-lama' ? '.pdf' : '.docx'));
        assert.ok(chapter.materi.aktivitas.length >= 3);
        assert.ok(chapter.materi.latihan.length >= 3);
        assert.ok(chapter.game.questions.length >= 3, chapter.id);
        for (const question of chapter.game.questions) {
          assert.ok(question.tanya && question.alasan, chapter.id);
          assert.ok(question.opsi.length >= 2 && question.opsi.every(Boolean), chapter.id);
          assert.ok(Number.isInteger(question.benar) && question.benar >= 0 && question.benar < question.opsi.length, chapter.id);
        }
        if (chapter.game.tipe === 'order') assert.deepEqual(chapter.game.steps.map(s => s.order), chapter.game.steps.map((_,i) => i + 1));
        if (chapter.game.tipe === 'memory-card') {
          const pairs = new Map();
          for (const card of chapter.game.cards) pairs.set(card.pairId, (pairs.get(card.pairId) || 0) + 1);
          assert.ok([...pairs.values()].every(n => n === 2), chapter.id);
        }
      }
    }
  }
  assert.equal(count, 60);
});

test('book material follows the supplied PDF rather than the old DOCX column', () => {
  assert.match(getMateriByKelasAndBab(5, 'k5-lama-bab-5').judul, /Fathu Makkah/);
  assert.match(getMateriByKelasAndBab(5, 'k5-lama-bab-6').judul, /Ali Imran/);
  assert.equal(getMateriByKelasAndBab(6, 'k6-baru-bab-1').materi.subBab.find(sub => sub.ayatList).ayatList.length, 8);
  assert.equal(getMateriByKelasAndBab(6, 'k6-lama-bab-1').materi.subBab.find(sub => sub.ayatList).ayatList.length, 11);
  assert.equal(getMateriByKelasAndBab(6, 'k6-lama-bab-6').materi.subBab.find(sub => sub.ayatList).ayatList.length, 19);
});

test('learning remains available when storage is inaccessible or malformed', () => {
  assert.deepEqual(getSavedProgress(), { completedGames: {}, readChapters: {} });
  globalThis.localStorage = { getItem: () => '{broken' };
  assert.deepEqual(getSavedProgress(), { completedGames: {}, readChapters: {} });
  globalThis.localStorage = { getItem: () => JSON.stringify({ stars: 50, readChapters: { a: true } }) };
  assert.deepEqual(getSavedProgress(), { completedGames: {}, readChapters: { a: true } });
  delete globalThis.localStorage;
});
