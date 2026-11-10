<template>
  <div :class="['inline-flex items-center justify-center', className]">
    <!-- QURAN BOOK -->
    <svg v-if="name === 'quran'" class="w-full h-full" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="105" rx="45" ry="10" fill="#E2E8F0"/>
      <!-- Book Stand (Rihal) -->
      <path d="M25 95L60 75L95 95" stroke="#92400E" stroke-width="6" stroke-linecap="round"/>
      <path d="M25 75L60 95L95 75" stroke="#78350F" stroke-width="6" stroke-linecap="round"/>
      <!-- Quran Opened Pages -->
      <path d="M60 40C50 35 30 35 15 42V82C30 75 50 75 60 80V40Z" fill="#F0FDF4" stroke="#059669" stroke-width="3"/>
      <path d="M60 40C70 35 90 35 105 42V82C90 75 70 75 60 80V40Z" fill="#ECFDF5" stroke="#059669" stroke-width="3"/>
      <!-- Gold Cover Trim -->
      <path d="M12 43C28 36 48 36 60 41" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M108 43C92 36 72 36 60 41" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Calligraphy Mock Lines -->
      <path d="M25 52H50M22 60H52M25 68H48" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
      <path d="M70 52H95M68 60H98M72 68H95" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
      <!-- Decorative Star in middle -->
      <circle cx="60" cy="30" r="10" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
      <path d="M60 23L62 28L67 30L62 32L60 37L58 32L53 30L58 28Z" fill="#F59E0B"/>
    </svg>

    <!-- MOSQUE / MASJID -->
    <svg v-else-if="name === 'mosque'" class="w-full h-full" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="110" rx="50" ry="8" fill="#E2E8F0"/>
      <!-- Building Base -->
      <rect x="25" y="65" width="70" height="42" rx="4" fill="#ECFDF5" stroke="#047857" stroke-width="3"/>
      <!-- Main Dome -->
      <path d="M35 65C35 40 60 25 60 25C60 25 85 40 85 65H35Z" fill="#10B981" stroke="#047857" stroke-width="3"/>
      <path d="M60 14V25M56 18H64" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
      <circle cx="60" cy="14" r="4" fill="#F59E0B"/>
      <!-- Left Minaret -->
      <rect x="12" y="45" width="12" height="62" rx="2" fill="#D1FAE5" stroke="#047857" stroke-width="2"/>
      <path d="M10 45C10 38 18 32 18 32C18 32 26 38 26 45H10Z" fill="#10B981" stroke="#047857" stroke-width="2"/>
      <!-- Right Minaret -->
      <rect x="96" y="45" width="12" height="62" rx="2" fill="#D1FAE5" stroke="#047857" stroke-width="2"/>
      <path d="M94 45C94 38 102 32 102 32C102 32 110 38 110 45H94Z" fill="#10B981" stroke="#047857" stroke-width="2"/>
      <!-- Center Arch Door -->
      <path d="M48 107V85C48 78 72 78 72 85V107H48Z" fill="#047857"/>
      <!-- Crescent on Dome -->
      <path d="M60 8C61.5 8 63 9 63 11C63 13 61.5 14 60 14C58 14 56.5 12 57 10C57.5 9 58.5 8 60 8Z" fill="#F59E0B"/>
    </svg>

    <!-- KA'BAH -->
    <svg v-else-if="name === 'kabah'" class="w-full h-full" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="108" rx="46" ry="8" fill="#CBD5E1"/>
      <!-- Isometric Cube -->
      <path d="M60 30L95 48V90L60 108L25 90V48L60 30Z" fill="#1E293B" stroke="#0F172A" stroke-width="3"/>
      <!-- Left shaded face -->
      <path d="M25 48L60 65V108L25 90V48Z" fill="#334155"/>
      <!-- Right lit face -->
      <path d="M60 65L95 48V90L60 108V65Z" fill="#1E293B"/>
      <!-- Golden Kiswah Border -->
      <path d="M25 58L60 74L95 58" stroke="#F59E0B" stroke-width="5" stroke-linecap="round"/>
      <path d="M25 61L60 77L95 61" stroke="#FEF3C7" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Golden Door (Bab al-Ka'bah) -->
      <rect x="68" y="72" width="14" height="24" rx="2" fill="#F59E0B" stroke="#B45309" stroke-width="1.5"/>
      <!-- Crescent glow above -->
      <circle cx="60" cy="20" r="10" fill="#FEF3C7" opacity="0.6"/>
      <path d="M60 14C63 14 65 17 64 20C63 23 60 24 57 23C60 21 61 17 60 14Z" fill="#D97706"/>
    </svg>

    <!-- WUDHU / WATER DROP -->
    <svg v-else-if="name === 'wudhu' || name === 'water'" class="w-full h-full" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="105" rx="35" ry="6" fill="#E2E8F0"/>
      <!-- Main Droplet -->
      <path d="M60 15C60 15 25 58 25 80C25 98 40.5 108 60 108C79.5 108 95 98 95 80C95 58 60 15 60 15Z" fill="#38BDF8" stroke="#0284C7" stroke-width="3"/>
      <!-- Highlight Reflection -->
      <path d="M42 65C38 72 38 82 44 88" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
      <!-- Gentle Waves inside -->
      <path d="M35 85C45 90 55 80 65 85C75 90 85 85 85 85" stroke="#BAE6FD" stroke-width="3" stroke-linecap="round"/>
      <circle cx="50" cy="50" r="4" fill="#FFFFFF" opacity="0.8"/>
      <!-- Sparkles -->
      <path d="M85 30L87 35L92 37L87 39L85 44L83 39L78 37L83 35Z" fill="#F59E0B"/>
    </svg>

    <!-- TAJWID SCROLL -->
    <svg v-else-if="name === 'tajwid'" class="w-full h-full" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="106" rx="40" ry="7" fill="#E2E8F0"/>
      <!-- Scroll Paper -->
      <rect x="25" y="25" width="70" height="70" rx="6" fill="#FFFBEB" stroke="#D97706" stroke-width="3"/>
      <!-- Scroll Rollers -->
      <rect x="20" y="20" width="80" height="10" rx="5" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
      <rect x="20" y="90" width="80" height="10" rx="5" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
      <!-- Arabic Calligraphy Sign -->
      <path d="M45 48C55 42 65 42 75 48" stroke="#059669" stroke-width="3" stroke-linecap="round"/>
      <path d="M40 62C50 56 70 56 80 62" stroke="#059669" stroke-width="3" stroke-linecap="round"/>
      <circle cx="60" cy="74" r="5" fill="#EF4444"/>
    </svg>

    <!-- TIMBANGAN AMAL (SCALE OF JUSTICE) -->
    <svg v-else-if="name === 'scale' || name === 'qada'" class="w-full h-full" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="110" rx="35" ry="6" fill="#E2E8F0"/>
      <!-- Base & Pillar -->
      <rect x="40" y="102" width="40" height="8" rx="4" fill="#94A3B8"/>
      <rect x="57" y="25" width="6" height="80" rx="3" fill="#64748B"/>
      <!-- Top Balance Beam -->
      <rect x="18" y="32" width="84" height="6" rx="3" fill="#F59E0B"/>
      <circle cx="60" cy="35" r="7" fill="#D97706"/>
      <!-- Left Pan -->
      <line x1="28" y1="38" x2="20" y2="65" stroke="#94A3B8" stroke-width="2"/>
      <line x1="28" y1="38" x2="36" y2="65" stroke="#94A3B8" stroke-width="2"/>
      <path d="M15 65C15 75 41 75 41 65H15Z" fill="#10B981" stroke="#047857" stroke-width="2"/>
      <!-- Right Pan -->
      <line x1="92" y1="38" x2="84" y2="65" stroke="#94A3B8" stroke-width="2"/>
      <line x1="92" y1="38" x2="100" y2="65" stroke="#94A3B8" stroke-width="2"/>
      <path d="M79 65C79 75 105 75 105 65H79Z" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2"/>
      <!-- Glowing Star on top -->
      <circle cx="60" cy="20" r="5" fill="#F59E0B"/>
    </svg>

    <!-- ECO TREE / EARTH -->
    <svg v-else-if="name === 'eco' || name === 'nature'" class="w-full h-full" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="108" rx="40" ry="7" fill="#E2E8F0"/>
      <!-- Trunk -->
      <path d="M54 105V65C54 60 50 55 45 50M66 105V65C66 58 72 52 78 48" stroke="#78350F" stroke-width="7" stroke-linecap="round"/>
      <!-- Foliage Clouds -->
      <circle cx="45" cy="45" r="22" fill="#10B981"/>
      <circle cx="75" cy="45" r="22" fill="#059669"/>
      <circle cx="60" cy="30" r="24" fill="#34D399"/>
      <!-- Little fruits -->
      <circle cx="50" cy="35" r="4" fill="#EF4444"/>
      <circle cx="70" cy="38" r="4" fill="#F59E0B"/>
      <circle cx="58" cy="48" r="4" fill="#EF4444"/>
    </svg>

    <!-- TROPHY / STAR CELEBRATION -->
    <svg v-else class="w-full h-full" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="108" rx="35" ry="6" fill="#E2E8F0"/>
      <!-- Trophy Cup -->
      <path d="M35 25H85V55C85 70 72 80 60 80C48 80 35 70 35 55V25Z" fill="#FBBF24" stroke="#D97706" stroke-width="3"/>
      <!-- Handles -->
      <path d="M35 35H25C20 35 18 48 25 55C30 60 35 58 35 55" stroke="#D97706" stroke-width="3"/>
      <path d="M85 35H95C100 35 102 48 95 55C90 60 85 58 85 55" stroke="#D97706" stroke-width="3"/>
      <!-- Stem and Base -->
      <rect x="55" y="80" width="10" height="18" fill="#F59E0B"/>
      <rect x="40" y="98" width="40" height="8" rx="3" fill="#D97706"/>
      <!-- Star on Cup -->
      <path d="M60 40L62 45L67 46L63 50L64 55L60 52L56 55L57 50L53 46L58 45Z" fill="#FFFFFF"/>
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

