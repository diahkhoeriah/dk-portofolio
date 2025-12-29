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
    <p class="text-xl mb-4">Frontend Web Developer | Fullstack Wordpress CMS, Laravel October CMS, Vue.js, Typescript, Nuxt.js, Looker Studio  </p>
    <div class="space-x-4">
      <a href="#contact" class="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-600 hover:text-white">Contact Me</a>
      <a href="/cv" class="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-600 hover:text-white active:bg-blue-600">Download CV</a>
    </div>
  </section>

  <!-- About Me -->
  <section id="about" class="py-16 px-4 max-w-4xl mx-auto">
    <h3 class="text-2xl font-bold mb-4">About Me</h3>
    <p class="text-justify">I am a frontend web developer with over 7 years of experience in building responsive web interfaces using Laravel alongside OctoberCMS, WordPress CMS, and modern technologies such as Vue.js, TypeScript, and Nuxt.js. I am skilled in processing and visualizing data using Looker Studio to generate informative, interactive, and easy-to-understand reports and dashboards with data sources from BigQuery and CSV files.  Likes to learn new things and is used to working in teams and individually.</p>
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
        <div>
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/looker.svg"
              class="w-12 h-12 mx-auto" />
          <p class="mt-2">Looker Studio</p>
        </div>
      </div>

    </div>
  </section>
  
  <!-- Projects -->
  <section id="projects" class="py-16 px-4 max-w-6xl mx-auto">
    <h3 class="text-2xl font-bold mb-8 text-center">Selected Projects</h3>
    <div class="grid md:grid-cols-2 gap-8">
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
        <a href="" class="text-blue-600 hover:underline">Live Demo</a> 
      </div>
      <div class="bg-white shadow rounded p-6">
        <h4 class="text-xl font-semibold mb-2">Dashboard NextSys Hospitality</h4>
        <p class="mb-2">Vue, Nuxt + Typescript</p>
        <p class="text-sm mb-4">Dashboard</p>
        <a href="" class="text-blue-600 hover:underline">Live Demo</a> 
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
        <h4 class="text-xl font-semibold mb-2">MNC Land</h4>
        <p class="mb-2">PHP, Laravel October CMS</p>
        <p class="text-sm mb-4">Company Profile</p>
        <a href="https://mncland.com/" target="_blank" class="text-blue-600 hover:underline">Live Demo</a>
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
      <p class="mb-4">I am open to freelance work, project collaborations, or full-time job opportunities.  </p>
      <p>Email: <a href="mailto:diahkhoeriah@gmail.com" target="_blank" class="hover:underline">diahkhoeriah@gmail.com</a></p>
      <p>WhatsApp: <a href="https://wa.me/6287873293265" class=" ">+62 878-7329-3265</a></p>
      <p>GitHub: <a href="https://github.com/diahkhoeriah" target="_blank" class="hover:underline">diahkhoeriah</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/diahkhoeriah/" target="_blank" class="hover:underline">diahkhoeriah</a></p>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-white py-4 text-center text-sm">
    © 2025 DK.
  </footer>
</template>


