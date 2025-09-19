<script setup lang="ts">
useHead({
  title: "Divyansh Dixit - Founder & Senior Full Stack Developer",
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png?v=3",
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      href: "/favicon.png?v=3",
    },
    {
      rel: "apple-touch-icon",
      href: "/divyansh.png",
    },
  ],
  meta: [
    {
      name: "google-site-verification",
      content: "HCL7-zzyR002AD-QxBUEhq9uwSKx2KWCsamU0ANbBW8",
    },
    {
      name: "msvalidate.01",
      content: "8E520DCC754D9DE129C9B0DAC9334070",
    },
  ],
})
</script>
<template>
  <div>
    <div>
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <NuxtRouteAnnouncer />
    </div>
  </div>
</template>
