<template>
  <footer
    class="bg-white/80 dark:bg-neutral-900/80 shadow-md shadow-black/20 hover:shadow-xl border-t border-gray-100 dark:border-stone-800 backdrop-blur-lg transition-all duration-300"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand & Description -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 flex items-center justify-center">
              <UIcon name="i-ph-code" />
            </div>
            <span>divyansh</span>
          </div>
          <p class="mb-6 max-w-md">
            Founder & Senior Engineer architecting next-generation AI-powered SaaS platforms. 
            Building enterprise-grade systems that serve 100k+ users with cutting-edge 
            technologies and innovative solutions.
          </p>
          <div class="flex items-center gap-4">
            <UButton
              to="https://www.linkedin.com/in/divyans/"
              external
              aria-label="LinkedIn Profile"
              variant="ghost"
              class="transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <UIcon name="i-ph-linkedin-logo" />
            </UButton>
            <UButton
              to="https://twitter.com/divyanshdixit"
              external
              aria-label="Twitter Profile"
              variant="ghost"
              class="transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <UIcon name="i-ph-twitter-logo" />
            </UButton>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <ULink to="/"> Home </ULink>
            </li>
            <li>
              <ULink to="/about"> About </ULink>
            </li>
            <!-- <li>
              <ULink to="/projects"> Projects </ULink>
            </li> -->
            <li>
              <ULink to="/blog"> Blog </ULink>
            </li>
          </ul>
        </div>

        <!-- Expertise -->
        <div>
          <h3 class="mb-4">Expertise</h3>
          <ul class="space-y-3">
            <li>
              <ULink to="/projects"> AI & SaaS Development </ULink>
            </li>
            <li>
              <ULink to="/about"> Technical Leadership </ULink>
            </li>
            <li>
              <ULink to="/services#expertise"> Enterprise Architecture </ULink>
            </li>
            <!-- <li>
              <ULink to="/contact"> Get In Touch </ULink>
            </li> -->
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p>
            © {{ new Date().getFullYear() }} Divyansh Dixit. All rights
            reserved.
          </p>
          <div class="flex items-center gap-6">
            <ULink to="/contact?faqs=1"> FAQs </ULink>
            <ULink to="/contact"> Contact </ULink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
