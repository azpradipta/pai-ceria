<template>
  <div :class="['inline-flex items-center justify-center select-none', className]">
    
    <!-- 1. QURAN BOOK -->
    <svg v-if="name === 'quran'" class="w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="105" rx="45" ry="10" fill="#CBD5E1"/>
      <path d="M25 95L60 75L95 95" stroke="#92400E" stroke-width="7" stroke-linecap="round"/>
      <path d="M25 75L60 95L95 75" stroke="#78350F" stroke-width="7" stroke-linecap="round"/>
      <path d="M60 40C50 34 30 34 15 42V84C30 76 50 76 60 82V40Z" fill="#F0FDF4" stroke="#059669" stroke-width="3.5"/>
      <path d="M60 40C70 34 90 34 105 42V84C90 76 70 76 60 82V40Z" fill="#ECFDF5" stroke="#059669" stroke-width="3.5"/>
      <path d="M12 43C28 35 48 35 60 41" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
      <path d="M108 43C92 35 72 35 60 41" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
      <path d="M25 52H50M22 62H52M25 72H48" stroke="#10B981" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M70 52H95M68 62H98M72 72H95" stroke="#10B981" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="60" cy="28" r="12" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2.5"/>
      <path d="M60 20L62 26L68 28L62 30L60 36L58 30L52 28L58 26Z" fill="#F59E0B"/>
    </svg>

    <!-- 2. MOSQUE / MASJID -->
    <svg v-else-if="name === 'mosque'" class="w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="110" rx="50" ry="8" fill="#CBD5E1"/>
      <rect x="25" y="65" width="70" height="42" rx="4" fill="#ECFDF5" stroke="#047857" stroke-width="3"/>
      <path d="M35 65C35 40 60 22 60 22C60 22 85 40 85 65H35Z" fill="#10B981" stroke="#047857" stroke-width="3.5"/>
      <path d="M60 12V22M56 16H64" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
      <circle cx="60" cy="11" r="4.5" fill="#F59E0B"/>
      <rect x="12" y="45" width="12" height="62" rx="2" fill="#D1FAE5" stroke="#047857" stroke-width="2.5"/>
      <path d="M10 45C10 38 18 30 18 30C18 30 26 38 26 45H10Z" fill="#10B981" stroke="#047857" stroke-width="2.5"/>
      <rect x="96" y="45" width="12" height="62" rx="2" fill="#D1FAE5" stroke="#047857" stroke-width="2.5"/>
      <path d="M94 45C94 38 102 30 102 30C102 30 110 38 110 45H94Z" fill="#10B981" stroke="#047857" stroke-width="2.5"/>
      <path d="M48 107V84C48 76 72 76 72 84V107H48Z" fill="#047857"/>
    </svg>

    <!-- 3. MAKHRAJ / HIJAIYAH (LIDAH, TENGGOROKAN, BIBIR) -->
    <svg v-else-if="name === 'makhraj' || name === 'hijaiyah'" class="w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="50" fill="#ECFDF5" stroke="#10B981" stroke-width="3"/>
      <!-- Speech bubble & lips -->
      <path d="M35 55C35 45 48 42 60 48C72 42 85 45 85 55C85 68 70 78 60 78C50 78 35 68 35 55Z" fill="#F43F5E" stroke="#BE123C" stroke-width="2.5"/>
      <path d="M42 55C50 60 70 60 78 55" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Sound waves / Harakat -->
      <path d="M88 40C95 46 95 64 88 70" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
      <path d="M95 32C105 42 105 70 95 80" stroke="#F59E0B" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Arabic letters floating -->
      <text x="32" y="34" font-family="Amiri, serif" font-size="22" font-weight="bold" fill="#047857">أ</text>
      <text x="54" y="28" font-family="Amiri, serif" font-size="22" font-weight="bold" fill="#D97706">ب</text>
      <text x="76" y="34" font-family="Amiri, serif" font-size="22" font-weight="bold" fill="#0284C7">ت</text>
      <rect x="30" y="86" width="60" height="18" rx="9" fill="#047857"/>
      <text x="60" y="99" font-family="Nunito, sans-serif" font-size="9" font-weight="900" fill="#FFFFFF" text-anchor="middle">MAKHĀRIJ</text>
    </svg>

    <!-- 4. RUKUN IMAN (BINTANG 6 SUDUT BERSINAR) -->
    <svg v-else-if="name === 'rukun-iman' || name === 'iman'" class="w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="52" fill="#FFFBEB" stroke="#F59E0B" stroke-width="3"/>
      <!-- Glowing Star of 6 Pillars -->
      <polygon points="60,18 73,42 100,42 79,60 88,86 60,70 32,86 41,60 20,42 47,42" fill="#FBBF24" stroke="#D97706" stroke-width="3"/>
      <circle cx="60" cy="56" r="16" fill="#047857" stroke="#F59E0B" stroke-width="2"/>
      <text x="60" y="62" font-family="Nunito, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">6</text>
      <text x="60" y="104" font-family="Nunito, sans-serif" font-size="10" font-weight="900" fill="#92400E" text-anchor="middle">RUKUN IMAN</text>
    </svg>

    <!-- 5. RUKUN ISLAM (5 PILAR / MENARA) -->
    <svg v-else-if="name === 'rukun-islam'" class="w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="52" fill="#ECFDF5" stroke="#059669" stroke-width="3"/>
      <!-- 5 Pillars -->
      <rect x="22" y="42" width="10" height="48" rx="3" fill="#10B981" stroke="#047857" stroke-width="1.5"/>
      <rect x="38" y="34" width="10" height="56" rx="3" fill="#059669" stroke="#047857" stroke-width="1.5"/>
      <rect x="55" y="26" width="10" height="64" rx="3" fill="#047857" stroke="#064E3B" stroke-width="1.5"/>
      <rect x="72" y="34" width="10" height="56" rx="3" fill="#059669" stroke="#047857" stroke-width="1.5"/>
      <rect x="88" y="42" width="10" height="48" rx="3" fill="#10B981" stroke="#047857" stroke-width="1.5"/>
      <!-- Golden Arch Top -->
      <path d="M18 90H102" stroke="#F59E0B" stroke-width="4" stroke-linecap="round"/>
      <text x="60" y="106" font-family="Nunito, sans-serif" font-size="9" font-weight="900" fill="#065F46" text-anchor="middle">5 RUKUN ISLAM</text>
    </svg>

    <!-- 6. WUDHU & TATA CARA BERSUCI (AIR & TETESAN BERSIH) -->
    <svg v-else-if="name === 'wudhu' || name === 'bersuci'" class="w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="52" fill="#F0F9FF" stroke="#0284C7" stroke-width="3"/>
      <!-- Big Water Droplet -->
      <path d="M60 18C60 18 32 54 32 74C32 90 44 100 60 100C76 100 88 90 88 74C88 54 60 18 60 18Z" fill="#38BDF8" stroke="#0284C7" stroke-width="3"/>
      <path d="M44 65C40 72 40 80 46 86" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
      <!-- Clean sparkles -->
      <circle cx="50" cy="50" r="4" fill="#FFFFFF"/>
      <path d="M78 35L80 40L85 41L80 43L78 48L76 43L71 41L76 40Z" fill="#F59E0B"/>
      <text x="60" y="112" font-family="Nunito, sans-serif" font-size="9" font-weight="900" fill="#0369A1" text-anchor="middle">THAHARAH & WUDU</text>
    </svg>

    <!-- 7. NABI ADAM & POHON SURGA -->
    <svg v-else-if="name === 'nabi-adam'" class="w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="52" fill="#FEFCE8" stroke="#CA8A04" stroke-width="3"/>
      <!-- Tree of Paradise -->
      <path d="M56 95V65C56 60 52 56 46 52M64 95V65C64 60 70 56 74 50" stroke="#78350F" stroke-width="6" stroke-linecap="round"/>
      <circle cx="48" cy="45" r="18" fill="#15803D"/>
      <circle cx="72" cy="45" r="18" fill="#16A34A"/>
      <circle cx="60" cy="32" r="20" fill="#22C55E"/>
      <circle cx="54" cy="36" r="3.5" fill="#EF4444"/>
      <circle cx="66" cy="40" r="3.5" fill="#EF4444"/>
      <!-- Light / Taubat beam -->
      <path d="M60 12L60 22M48 16L54 22M72 16L66 22" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
      <text x="60" y="108" font-family="Nunito, sans-serif" font-size="9" font-weight="900" fill="#854D0E" text-anchor="middle">NABI ADAM A.S.</text>
    </svg>

    <!-- 8. NABI IDRIS (PENA, KITAB, & JARUM JAHIT) -->
    <svg v-else-if="name === 'nabi-idris'" class="w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="52" fill="#FAF5FF" stroke="#9333EA" stroke-width="3"/>
      <!-- Quill / Pen -->
      <path d="M35 85L45 75L85 35C88 32 92 32 95 35C98 38 98 42 95 45L55 85L40 90L35 85Z" fill="#A855F7" stroke="#7E22CE" stroke-width="2"/>
      <path d="M40 90L32 95L35 85" fill="#581C87"/>
      <!-- Needle & Thread (Jarum & Benang Jahit) -->
      <path d="M30 30L55 45" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round"/>
      <path d="M55 45C65 52 75 40 85 50" stroke="#EC4899" stroke-width="2.5" stroke-dasharray="3 3"/>
      <!-- Book Parchment -->
      <rect x="28" y="60" width="34" height="26" rx="3" fill="#FFFBEB" stroke="#D97706" stroke-width="2"/>
      <line x1="33" y1="68" x2="56" y2="68" stroke="#D97706" stroke-width="1.5"/>
      <line x1="33" y1="74" x2="50" y2="74" stroke="#D97706" stroke-width="1.5"/>
      <text x="60" y="110" font-family="Nunito, sans-serif" font-size="9" font-weight="900" fill="#6B21A8" text-anchor="middle">NABI IDRIS A.S.</text>
    </svg>

    <!-- 9. TAJWID MIM SUKUN & QALQALAH -->
    <svg v-else-if="name === 'tajwid' || name === 'mim-sukun' || name === 'qalqalah'" class="w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="52" fill="#F0FDFA" stroke="#0D9488" stroke-width="3"/>
      <!-- Scroll Diploma -->
      <rect x="25" y="28" width="70" height="64" rx="6" fill="#FFFBEB" stroke="#D97706" stroke-width="2.5"/>
      <circle cx="60" cy="50" r="16" fill="#0D9488"/>
      <!-- Arabic Letter Mim Sukun or Qaf -->
      <text x="60" y="58" font-family="Amiri, serif" font-size="24" font-weight="bold" fill="#FFFFFF" text-anchor="middle">مْ</text>
      <!-- Sound ripple waves (Pantulan Qalqalah) -->
      <path d="M36 78C46 72 74 72 84 78" stroke="#0D9488" stroke-width="3" stroke-linecap="round"/>
      <text x="60" y="108" font-family="Nunito, sans-serif" font-size="9" font-weight="900" fill="#0F766E" text-anchor="middle">HUKUM TAJWID</text>
    </svg>

    <!-- 10. ASMAUL HUSNA -->
    <svg v-else-if="name === 'asmaul-husna'" class="w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="52" fill="#FEF3C7" stroke="#D97706" stroke-width="3"/>
      <!-- Islamic 8-Point Star Octagram -->
      <rect x="30" y="30" width="60" height="60" rx="4" fill="#F59E0B" transform="rotate(45 60 60)"/>
      <rect x="30" y="30" width="60" height="60" rx="4" fill="#D97706"/>
      <circle cx="60" cy="60" r="22" fill="#FFFFFF"/>
      <text x="60" y="66" font-family="Amiri, serif" font-size="22" font-weight="bold" fill="#B45309" text-anchor="middle">الله</text>
      <text x="60" y="108" font-family="Nunito, sans-serif" font-size="9" font-weight="900" fill="#92400E" text-anchor="middle">ASMAUL HUSNA</text>
    </svg>

    <!-- 11. PUASA RAMADAN & SUNAH -->
    <svg v-else-if="name === 'puasa'" class="w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="52" fill="#EEF2FF" stroke="#4F46E5" stroke-width="3"/>
      <!-- Crescent Moon -->
      <path d="M68 25C50 25 38 40 38 60C38 80 52 92 70 92C62 86 58 74 58 60C58 44 62 34 68 25Z" fill="#FBBF24" stroke="#D97706" stroke-width="2"/>
      <!-- Lantern (Fanous) hanging -->
      <line x1="78" y1="20" x2="78" y2="45" stroke="#D97706" stroke-width="2"/>
      <polygon points="78,45 86,52 83,68 73,68 70,52" fill="#EF4444" stroke="#B91C1C" stroke-width="1.5"/>
      <circle cx="78" cy="58" r="3" fill="#FEF3C7"/>
      <text x="60" y="108" font-family="Nunito, sans-serif" font-size="9" font-weight="900" fill="#3730A3" text-anchor="middle">IBADAH PUASA</text>
    </svg>

    <!-- 12. HALAL & THAYYIB -->
    <svg v-else-if="name === 'halal'" class="w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="52" fill="#ECFDF5" stroke="#10B981" stroke-width="3"/>
      <!-- Green Badge Shield -->
      <path d="M60 22L86 34V60C86 78 60 94 60 94C60 94 34 78 34 60V34L60 22Z" fill="#10B981" stroke="#047857" stroke-width="2.5"/>
      <!-- Arabic Halal Calligraphy -->
      <circle cx="60" cy="56" r="18" fill="#FFFFFF"/>
      <text x="60" y="63" font-family="Amiri, serif" font-size="18" font-weight="bold" fill="#047857" text-anchor="middle">حَلَال</text>
      <text x="60" y="110" font-family="Nunito, sans-serif" font-size="9" font-weight="900" fill="#065F46" text-anchor="middle">HALALAN THAYYIB</text>
    </svg>

    <!-- 13. ZAKAT, INFAK, SEDEKAH & WAKAF -->
    <svg v-else-if="name === 'zakat' || name === 'wakaf'" class="w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="52" fill="#FEF3C7" stroke="#D97706" stroke-width="3"/>
      <!-- Charity Box & Gold Coins -->
      <rect x="35" y="48" width="50" height="42" rx="6" fill="#047857" stroke="#064E3B" stroke-width="2.5"/>
      <rect x="48" y="44" width="24" height="6" rx="3" fill="#D97706"/>
      <!-- Falling Gold Coin with Star -->
      <circle cx="60" cy="30" r="14" fill="#FBBF24" stroke="#D97706" stroke-width="2.5"/>
      <path d="M60 23L62 28L67 29L63 33L64 38L60 35L56 38L57 33L53 29L58 28Z" fill="#D97706"/>
      <text x="60" y="108" font-family="Nunito, sans-serif" font-size="9" font-weight="900" fill="#92400E" text-anchor="middle">ZAKAT & WAKAF</text>
    </svg>

    <!-- 14. TIMBANGAN QADA & QADAR (TAKDIR) -->
    <svg v-else-if="name === 'qada-qadar' || name === 'takdir'" class="w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="52" fill="#F8FAFC" stroke="#64748B" stroke-width="3"/>
      <!-- Central Pillar -->
      <rect x="58" y="28" width="4" height="64" rx="2" fill="#475569"/>
      <rect x="42" y="88" width="36" height="6" rx="3" fill="#334155"/>
      <!-- Balance Beam -->
      <line x1="22" y1="36" x2="98" y2="36" stroke="#F59E0B" stroke-width="4" stroke-linecap="round"/>
      <circle cx="60" cy="36" r="6" fill="#D97706"/>
      <!-- Left Pan (Ikhtiar) -->
      <line x1="28" y1="38" x2="20" y2="62" stroke="#94A3B8" stroke-width="1.5"/>
      <line x1="28" y1="38" x2="36" y2="62" stroke="#94A3B8" stroke-width="1.5"/>
      <path d="M16 62C16 70 40 70 40 62H16Z" fill="#10B981" stroke="#047857" stroke-width="1.5"/>
      <!-- Right Pan (Takdir) -->
      <line x1="92" y1="38" x2="84" y2="62" stroke="#94A3B8" stroke-width="1.5"/>
      <line x1="92" y1="38" x2="100" y2="62" stroke="#94A3B8" stroke-width="1.5"/>
      <path d="M80 62C80 70 104 70 104 62H80Z" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
      <text x="60" y="108" font-family="Nunito, sans-serif" font-size="9" font-weight="900" fill="#334155" text-anchor="middle">QADA & QADAR</text>
    </svg>

    <!-- 15. ECO-ISLAM & LINGKUNGAN -->
    <svg v-else-if="name === 'eco' || name === 'lingkungan'" class="w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="52" fill="#F0FDF4" stroke="#16A34A" stroke-width="3"/>
      <!-- Sprouting Sapling in Hands -->
      <path d="M40 86C50 94 70 94 80 86" stroke="#D97706" stroke-width="5" stroke-linecap="round"/>
      <path d="M60 86V50" stroke="#15803D" stroke-width="4" stroke-linecap="round"/>
      <!-- Green Leaves -->
      <path d="M60 62C48 54 46 40 60 40C60 48 60 56 60 62Z" fill="#22C55E" stroke="#15803D" stroke-width="1.5"/>
      <path d="M60 52C72 44 74 30 60 30C60 38 60 46 60 52Z" fill="#4ADE80" stroke="#15803D" stroke-width="1.5"/>
      <!-- Little bird singing -->
      <circle cx="82" cy="42" r="5" fill="#F59E0B"/>
      <path d="M87 42L92 40L87 44Z" fill="#D97706"/>
      <text x="60" y="108" font-family="Nunito, sans-serif" font-size="9" font-weight="900" fill="#14532D" text-anchor="middle">PEDULI ALAM</text>
    </svg>

    <!-- 16. KHULAFAUR RASYIDIN (SAHABAT NABI) -->
    <svg v-else-if="name === 'sahabat' || name === 'khulafaur-rasyidin'" class="w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="52" fill="#FFF1F2" stroke="#E11D48" stroke-width="3"/>
      <!-- Shield & 4 Stars (Abu Bakar, Umar, Usman, Ali) -->
      <path d="M60 22L88 34V60C88 78 60 94 60 94C60 94 32 78 32 60V34L60 22Z" fill="#BE123C" stroke="#881337" stroke-width="2.5"/>
      <!-- 4 Golden Stars inside shield -->
      <circle cx="50" cy="48" r="4.5" fill="#FBBF24"/>
      <circle cx="70" cy="48" r="4.5" fill="#FBBF24"/>
      <circle cx="50" cy="66" r="4.5" fill="#FBBF24"/>
      <circle cx="70" cy="66" r="4.5" fill="#FBBF24"/>
      <text x="60" y="108" font-family="Nunito, sans-serif" font-size="9" font-weight="900" fill="#9F1239" text-anchor="middle">4 SAHABAT NABI</text>
    </svg>

    <!-- DEFAULT: TROPHY & STAR -->
    <svg v-else class="w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="52" fill="#FEF3C7" stroke="#D97706" stroke-width="3"/>
      <path d="M35 32H85V58C85 72 72 80 60 80C48 80 35 72 35 58V32Z" fill="#FBBF24" stroke="#D97706" stroke-width="3"/>
      <path d="M35 40H26C20 40 18 52 26 58C30 62 35 60 35 58" stroke="#D97706" stroke-width="3"/>
      <path d="M85 40H94C100 40 102 52 94 58C90 62 85 60 85 58" stroke="#D97706" stroke-width="3"/>
      <rect x="55" y="80" width="10" height="15" fill="#F59E0B"/>
      <rect x="40" y="95" width="40" height="8" rx="3" fill="#D97706"/>
      <path d="M60 42L62 48L68 49L64 54L65 60L60 56L55 60L56 54L52 49L58 48Z" fill="#FFFFFF"/>
    </svg>

  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: 'quran'
  },
  className: {
    type: String,
    default: 'w-24 h-24'
  }
});
</script>
