<script setup lang="ts">
import { onBeforeUnmount, type Directive } from 'vue'

// Fade-in saat elemen masuk ke layar. Dipasang lewat directive v-reveal supaya
// elemen yang dibuat ulang (mis. saat hot reload) ikut terdaftar lagi.
const observer = typeof IntersectionObserver === 'undefined'
  ? undefined
  : new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer?.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15 })

const vReveal: Directive<HTMLElement> = {
  mounted(el) {
    el.classList.add('reveal')
    if (observer) observer.observe(el)
    else el.classList.add('is-visible')
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}

onBeforeUnmount(() => observer?.disconnect())

// Ikon dari set "logos" Iconify (https://icon-sets.iconify.design/logos/)
const skills: { name: string; icon: string; iconClass?: string }[] = [
  { name: 'HTML', icon: 'logos:html-5' },
  { name: 'CSS', icon: 'logos:css-3' },
  { name: 'SCSS', icon: 'logos:sass' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Vue.js', icon: 'logos:vue' },
  { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
  { name: 'PHP', icon: 'logos:php' },
  { name: 'MySQL', icon: 'logos:mysql-icon' },
  { name: 'REST API', icon: 'mdi:api', iconClass: 'text-blue-600' },
  { name: 'Git', icon: 'logos:git-icon' },
]

const aiTools: { name: string; icon: string }[] = [
  { name: 'Claude', icon: 'logos:claude-icon' },
  { name: 'OpenAI Codex', icon: 'logos:codex' },
  { name: 'Gemini', icon: 'devicon:gemini' },
  { name: 'GitHub Copilot', icon: 'logos:github-copilot' },
]
</script>

<template>
  <!-- Navbar -->
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="/"class="text-xl font-bold">DK</a>
      <nav class="space-x-4">
        <a href="#about" class="hover:text-blue-600">About</a>
        <a href="#skills" class="hover:text-blue-600">Skills</a>
        <a href="#projects" class="hover:text-blue-600">Projects</a>
        <a href="#contact" class="hover:text-blue-600">Contact</a>
      </nav>
    </div>
  </header>
  
  <!-- Hero -->
  <section class="bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 py-16 md:py-24 px-4">
    <div class="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
      <div class="text-center md:text-left order-2 md:order-1">
        <p class="text-lg text-gray-700 mb-2">Hi, I’m Diah Khoeriah 👋</p>
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-4">Frontend Developer</h1>
        <p class="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl md:mx-0 mx-auto">Building fast, responsive websites with Vue.js, Nuxt.js, TypeScript, WordPress, and Laravel OctoberCMS.</p>
        <div class="flex flex-wrap gap-3 justify-center md:justify-start">
          <a href="#contact" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 hover:shadow-lg transition">Contact Me</a>
          <a href="/CV-Diah-Khoeriah.pdf" download="CV-Diah-Khoeriah.pdf" class="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
            <iconify-icon icon="mdi:download" width="20" height="20"></iconify-icon>
            Download CV
          </a>
        </div>
        <dl class="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto md:mx-0">
          <div class="bg-white/70 backdrop-blur rounded-xl p-4 shadow-sm text-center">
            <dt class="sr-only">Experience</dt>
            <dd class="text-2xl md:text-3xl font-extrabold text-blue-600">7+</dd>
            <dd class="text-xs md:text-sm text-gray-600">Years Experience</dd>
          </div>
          <div class="bg-white/70 backdrop-blur rounded-xl p-4 shadow-sm text-center">
            <dt class="sr-only">Projects</dt>
            <dd class="text-2xl md:text-3xl font-extrabold text-blue-600">15+</dd>
            <dd class="text-xs md:text-sm text-gray-600">Projects Delivered</dd>
          </div>
          <div class="bg-white/70 backdrop-blur rounded-xl p-4 shadow-sm text-center">
            <dt class="sr-only">Technologies</dt>
            <dd class="text-2xl md:text-3xl font-extrabold text-blue-600">10+</dd>
            <dd class="text-xs md:text-sm text-gray-600">Technologies</dd>
          </div>
        </dl>
      </div>
      <div class="order-1 md:order-2 flex justify-center">
        <img src="../assets/images/profile-hero.jpg" alt="Diah Khoeriah" class="w-48 h-48 md:w-80 md:h-80 rounded-full object-cover ring-8 ring-white shadow-2xl" />
      </div>
    </div>
  </section>

  <!-- About Me -->
  <section id="about" v-reveal class="py-16 md:py-24 px-4 max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-center">
    <div>
      <p class="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">About Me</p>
      <h2 class="text-3xl md:text-4xl font-bold leading-tight text-gray-900 mb-6">Turning designs into fast, responsive websites</h2>
      <p class="text-lg leading-relaxed text-gray-700">I'm a frontend developer with 7+ years of experience at <strong class="text-gray-900">MNC Group</strong>, where I've built websites for brands like <strong class="text-gray-900">MNC Tourism Indonesia</strong>, <strong class="text-gray-900">Miss Indonesia</strong>, and <strong class="text-gray-900">Livelt International</strong>.</p>
      <p class="mt-4 text-lg leading-relaxed text-gray-700">I work mainly with Vue.js, Nuxt.js, and TypeScript, and I also build CMS-driven sites with WordPress and Laravel OctoberCMS. I enjoy turning designs into fast, responsive interfaces and I'm always learning something new.</p>
    </div>
    <ul class="space-y-4">
      <li class="flex gap-4 items-start bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <span class="shrink-0 w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
          <iconify-icon icon="mdi:vuejs" width="26" height="26"></iconify-icon>
        </span>
        <div>
          <h3 class="font-semibold text-gray-900">Modern Frontend</h3>
          <p class="text-sm text-gray-600">Vue.js, Nuxt.js, TypeScript, and Tailwind CSS</p>
        </div>
      </li>
      <li class="flex gap-4 items-start bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <span class="shrink-0 w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
          <iconify-icon icon="mdi:wordpress" width="26" height="26"></iconify-icon>
        </span>
        <div>
          <h3 class="font-semibold text-gray-900">CMS Websites</h3>
          <p class="text-sm text-gray-600">WordPress and Laravel OctoberCMS</p>
        </div>
      </li>
      <li class="flex gap-4 items-start bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <span class="shrink-0 w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
          <iconify-icon icon="mdi:api" width="26" height="26"></iconify-icon>
        </span>
        <div>
          <h3 class="font-semibold text-gray-900">API Integration</h3>
          <p class="text-sm text-gray-600">Connecting interfaces to REST APIs</p>
        </div>
      </li>
    </ul>
  </section>

  <!-- Skills -->
  <section id="skills" class="bg-gray-50 py-16 md:py-24 px-4">
    <div v-reveal class="max-w-6xl mx-auto">
      <div class="text-center mb-10">
        <p class="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">Skills &amp; Tools</p>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Technologies I work with</h2>
      </div>
      <ul class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        <li
          v-for="skill in skills"
          :key="skill.name"
          class="flex flex-col items-center justify-center gap-3 bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center hover:-translate-y-1 hover:shadow-md transition"
        >
          <iconify-icon :icon="skill.icon" width="44" height="44" :class="skill.iconClass"></iconify-icon>
          <span class="text-sm font-medium text-gray-700">{{ skill.name }}</span>
        </li>
      </ul>

      <h3 class="text-center text-sm font-semibold uppercase tracking-widest text-gray-500 mt-12 mb-6">AI Coding Tools</h3>
      <ul class="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
        <li
          v-for="tool in aiTools"
          :key="tool.name"
          class="flex flex-col items-center justify-center gap-3 bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center hover:-translate-y-1 hover:shadow-md transition"
        >
          <iconify-icon :icon="tool.icon" width="44" height="44"></iconify-icon>
          <span class="text-sm font-medium text-gray-700">{{ tool.name }}</span>
        </li>
      </ul>
    </div>
  </section>
  
  <!-- Projects -->
  <section id="projects" class="py-16 px-4 max-w-6xl mx-auto">
    <h3 v-reveal class="text-2xl font-bold mb-8 text-center">Selected Projects</h3>
    <div class="grid md:grid-cols-2 gap-8">
      <div v-reveal class="bg-white shadow rounded p-6 hover:-translate-y-1 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">Danapera</h4>
        <p class="mb-2">PHP, Wordpress CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://danapera.com/id/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
      <div v-reveal class="bg-white shadow rounded p-6 hover:-translate-y-1 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">Miss Indonesia 2025</h4>
        <p class="mb-2">Shadcn Vue + Tailwind CSS, Nuxt3 + Typescript, VeeValidate + Yup, i18n</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://missindonesia.id/id" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
      <div v-reveal class="bg-white shadow rounded p-6 hover:-translate-y-1 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">Enliven</h4>
        <p class="mb-2">PHP, Wordpress CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://enliven-jakarta.com/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
      <div v-reveal class="bg-white shadow rounded p-6 hover:-translate-y-1 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">Ancestry</h4>
        <p class="mb-2">PHP, Wordpress CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://ancestry-jakarta.com/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
      <div v-reveal class="bg-white shadow rounded p-6 hover:-translate-y-1 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">Dashboard Perindo Member Area</h4>
        <p class="mb-2">Vue, Nuxt</p>
        <p class="text-sm mb-4">Dashboard</p>
        <span class="inline-block text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded cursor-default">Internal / Private Project</span>
      </div>
      <div v-reveal class="bg-white shadow rounded p-6 hover:-translate-y-1 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">Dashboard NextSys Hospitality</h4>
        <p class="mb-2">Vue, Nuxt + Typescript</p>
        <p class="text-sm mb-4">Dashboard</p>
        <span class="inline-block text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded cursor-default">Internal / Private Project</span>
      </div>
      <div v-reveal class="bg-white shadow rounded p-6 hover:-translate-y-1 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">livelt International</h4>
        <p class="mb-2">PHP, Wordpress CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://livelt-international.com/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
      <div v-reveal class="bg-white shadow rounded p-6 hover:-translate-y-1 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">Livette</h4>
        <p class="mb-2">PHP, Wordpress CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://livette.id/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
      <div v-reveal class="bg-white shadow rounded p-6 hover:-translate-y-1 hover:shadow-lg">
       <h4 class="text-xl font-semibold mb-2">MNC Investor Forum 2022</h4>
       <p class="mb-2">HTML, CSS, Javascript</p>
       <p class="text-sm mb-4">Event Investor Relations Website</p>
       <a href="https://mncinvestorforum.com/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
     </div>
      <div v-reveal class="bg-white shadow rounded p-6 hover:-translate-y-1 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">MNC Insurance Broker</h4>
        <p class="mb-2">PHP, Wordpress CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://www.mnc-insurancebroker.com/id/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div> 
      <div v-reveal class="bg-white shadow rounded p-6 hover:-translate-y-1 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">Lido Adventure Park</h4>
        <p class="mb-2">PHP, Laravel October CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://lidoadventurepark.com" target="_blank" class="text-blue-600 hover:underline">Live Demo</a>
      </div>  
      <div v-reveal class="bg-white shadow rounded p-6 hover:-translate-y-1 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">MNC Tourism Indonesia</h4>
        <p class="mb-2">PHP, Laravel October CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://mnctourismindonesia.com/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a>
      </div>
      <div v-reveal class="bg-white shadow rounded p-6 hover:-translate-y-1 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">Federasi Futsal Indonesia</h4>
        <p class="mb-2">PHP, Laravel October CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://futsalindonesia.org/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
      <div v-reveal class="bg-white shadow rounded p-6 hover:-translate-y-1 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">MNC Financial Services</h4>
        <p class="mb-2">PHP, Wordpress CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://www.mncfinancialservices.com/id/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
      <div v-reveal class="bg-white shadow rounded p-6 hover:-translate-y-1 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">Trump Residences Indonesia</h4>
        <p class="mb-2">PHP, Laravel October CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://trumpresidencesindonesia.com/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="bg-blue-50 py-16 px-4">
    <div v-reveal class="max-w-2xl mx-auto text-center">
      <h3 class="text-2xl font-bold mb-4">Let’s Work Together</h3>
      <p class="mb-8">I am open to freelance work, project collaborations, or full-time job opportunities.</p>
      <a href="mailto:diahkhoeriah@gmail.com" class="inline-flex items-center gap-2 bg-blue-600 text-white text-lg px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 hover:shadow-lg transition">
        <iconify-icon icon="mdi:email-outline" width="24" height="24"></iconify-icon>
        Send Email
      </a>
      <p class="mt-3 text-sm text-gray-600">diahkhoeriah@gmail.com</p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <a href="https://wa.me/6287873293265" target="_blank" rel="noopener" class="inline-flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-full hover:border-green-600 hover:text-green-700 hover:-translate-y-0.5 transition">
          <iconify-icon icon="mdi:whatsapp" width="20" height="20"></iconify-icon>
          WhatsApp
        </a>
        <a href="https://www.linkedin.com/in/diahkhoeriah/" target="_blank" rel="noopener" class="inline-flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-full hover:border-blue-700 hover:text-blue-700 hover:-translate-y-0.5 transition">
          <iconify-icon icon="mdi:linkedin" width="20" height="20"></iconify-icon>
          LinkedIn
        </a>
        <a href="https://github.com/diahkhoeriah" target="_blank" rel="noopener" class="inline-flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-full hover:border-gray-900 hover:text-gray-900 hover:-translate-y-0.5 transition">
          <iconify-icon icon="mdi:github" width="20" height="20"></iconify-icon>
          GitHub
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-white py-4 text-center text-sm">
    © 2026 Diah Khoeriah
  </footer>
</template>
