<script setup lang="ts"></script>

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
  
  <section class="text-center py-20 bg-blue-100">
    <h2 class="text-4xl font-bold mb-2">Hi, I’m Diah Khoeriah 👋</h2>
    <p class="text-xl mb-4">Frontend Web Developer | Fullstack Wordpress CMS, Laravel October CMS, Vue.js, Typescript, Nuxt.js</p>
    <div class="space-x-4">
      <a href="#contact" class="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-600 hover:text-white">Contact Me</a>
      <a href="/CV-Diah-Khoeriah.pdf" download="CV-Diah-Khoeriah.pdf" class="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-600 hover:text-white active:bg-blue-600">Download CV</a>
    </div>
  </section>

  <!-- About Me -->
  <section id="about" class="py-16 px-4 max-w-4xl mx-auto">
    <h3 class="text-2xl font-bold mb-4">About Me</h3>
    <p class="text-justify">I'm a frontend web developer with 7+ years of experience at MNC Group, where I've built websites for brands like MNC Tourism Indonesia, Miss Indonesia, and Livelt International. I work mainly with Vue.js, Nuxt.js, and TypeScript, and I also build CMS-driven sites with WordPress and Laravel OctoberCMS. I enjoy turning designs into fast, responsive interfaces and I'm always learning something new.</p>
  </section>

  <!-- Skills -->
  <section id="skills" class="bg-gray-100 py-16 px-4">  
    <div class="max-w-4xl mx-auto">
      <h3 class="text-2xl font-bold mb-6 text-center">Skills & Tools</h3>
      <div class="grid grid-cols-3 sm:grid-cols-5 gap-6 text-center">
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              class="w-12 h-12 mx-auto" />
          <p class="mt-2">HTML</p>
        </div>
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              class="w-12 h-12 mx-auto" />
          <p class="mt-2">CSS</p>
        </div>
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              class="w-12 h-12 mx-auto" />
          <p class="mt-2">SCSS</p>
        </div>
        <div>
          <img src="../assets/images/php.png"
              class="w-12 h-12 mx-auto" />
          <p class="mt-2">php</p>
        </div>  
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              class="w-12 h-12 mx-auto" />
          <p class="mt-2">MySQL</p>
        </div>
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              class="w-12 h-12 mx-auto" />
          <p class="mt-2">JavaScript</p>
        </div>
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
              class="w-12 h-12 mx-auto" />
          <p class="mt-2">Vue.js</p>
        </div>
        <div>
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/postman.svg"
              class="w-12 h-12 mx-auto" />
          <p class="mt-2">REST API</p>
        </div>

        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              class="w-12 h-12 mx-auto" />
          <p class="mt-2">Git</p>
        </div>

        <div>
          <img src="../assets/images/tailwind.png"
              class="w-12 h-12 mx-auto object-contain" />
          <p class="mt-2">Tailwind CSS</p>
        </div>
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              class="w-12 h-12 mx-auto" />
          <p class="mt-2">TypeScript</p>
        </div>

        <!-- Nuxt.js -->
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"
              class="w-12 h-12 mx-auto" />
          <p class="mt-2">Nuxt.js</p>
        </div>
      </div>

    </div>
  </section>
  
  <!-- Projects -->
  <section id="projects" class="py-16 px-4 max-w-6xl mx-auto">
    <h3 class="text-2xl font-bold mb-8 text-center">Selected Projects</h3>
    <div class="grid md:grid-cols-2 gap-8">
      <div class="bg-white shadow rounded p-6">
        <h4 class="text-xl font-semibold mb-2">Danapera</h4>
        <p class="mb-2">PHP, Wordpress CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://danapera.com/id/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
      <div class="bg-white shadow rounded p-6">
        <h4 class="text-xl font-semibold mb-2">Miss Indonesia 2025</h4>
        <p class="mb-2">Shadcn Vue + Tailwind CSS, Nuxt3 + Typescript, VeeValidate + Yup, i18n</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://missindonesia.id/id" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
      <div class="bg-white shadow rounded p-6">
        <h4 class="text-xl font-semibold mb-2">Enliven</h4>
        <p class="mb-2">PHP, Wordpress CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://enliven-jakarta.com/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
      <div class="bg-white shadow rounded p-6">
        <h4 class="text-xl font-semibold mb-2">Ancestry</h4>
        <p class="mb-2">PHP, Wordpress CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://ancestry-jakarta.com/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
      <div class="bg-white shadow rounded p-6">
        <h4 class="text-xl font-semibold mb-2">Dashboard Perindo Member Area</h4>
        <p class="mb-2">Vue, Nuxt</p>
        <p class="text-sm mb-4">Dashboard</p>
        <span class="inline-block text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded cursor-default">Internal / Private Project</span>
      </div>
      <div class="bg-white shadow rounded p-6">
        <h4 class="text-xl font-semibold mb-2">Dashboard NextSys Hospitality</h4>
        <p class="mb-2">Vue, Nuxt + Typescript</p>
        <p class="text-sm mb-4">Dashboard</p>
        <span class="inline-block text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded cursor-default">Internal / Private Project</span>
      </div>
      <div class="bg-white shadow rounded p-6">
        <h4 class="text-xl font-semibold mb-2">livelt International</h4>
        <p class="mb-2">PHP, Wordpress CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://livelt-international.com/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
      <div class="bg-white shadow rounded p-6">
        <h4 class="text-xl font-semibold mb-2">Livette</h4>
        <p class="mb-2">PHP, Wordpress CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://livette.id/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
      <div class="bg-white shadow rounded p-6">
       <h4 class="text-xl font-semibold mb-2">MNC Investor Forum 2022</h4>
       <p class="mb-2">HTML, CSS, Javascript</p>
       <p class="text-sm mb-4">Event Investor Relations Website</p>
       <a href="https://mncinvestorforum.com/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
     </div>
      <div class="bg-white shadow rounded p-6">
        <h4 class="text-xl font-semibold mb-2">MNC Insurance Broker</h4>
        <p class="mb-2">PHP, Wordpress CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://www.mnc-insurancebroker.com/id/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div> 
      <div class="bg-white shadow rounded p-6">
        <h4 class="text-xl font-semibold mb-2">Lido Adventure Park</h4>
        <p class="mb-2">PHP, Laravel October CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://lidoadventurepark.com" target="_blank" class="text-blue-600 hover:underline">Live Demo</a>
      </div>  
      <div class="bg-white shadow rounded p-6">
        <h4 class="text-xl font-semibold mb-2">MNC Tourism Indonesia</h4>
        <p class="mb-2">PHP, Laravel October CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://mnctourismindonesia.com/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a>
      </div>
      <div class="bg-white shadow rounded p-6">
        <h4 class="text-xl font-semibold mb-2">Federasi Futsal Indonesia</h4>
        <p class="mb-2">PHP, Laravel October CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://futsalindonesia.org/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
      <div class="bg-white shadow rounded p-6">
        <h4 class="text-xl font-semibold mb-2">MNC Financial Services</h4>
        <p class="mb-2">PHP, Wordpress CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://www.mncfinancialservices.com/id/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
      <div class="bg-white shadow rounded p-6">
        <h4 class="text-xl font-semibold mb-2">Trump Residences Indonesia</h4>
        <p class="mb-2">PHP, Laravel October CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://trumpresidencesindonesia.com/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="bg-blue-50 py-16 px-4">
    <div class="max-w-2xl mx-auto text-center">
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
