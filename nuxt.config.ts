import tailwindcss from "@tailwindcss/vite"
import { definePerson } from "nuxt-schema-org/schema"

// https://nuxt.com/docs/api/configuration/nuxt-config
const IS_DEV = import.meta.dev

export default defineNuxtConfig({
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
  },

  css: ["./app/assets/css/main.css"],

  compatibilityDate: "2025-07-31",

  content: {
    renderer: {
      anchorLinks: false,
    },
    build: {
      markdown: {
        rehypePlugins: {
          "rehype-external-links": {
            target: "_blank",
            rel: "noopener noreferer",
          },
        },
        highlight: {
          theme: {
            // Default theme (same as single string)
            default: "github-light",
            // Theme used if `html.dark`
            dark: "github-dark",
            // Theme used if `html.sepia`
            sepia: "monokai",
          },
        },
        toc: {
          depth: 2,
          searchDepth: 2,
        },
      },
    },
    preview: {
      dev: IS_DEV,
      api: "https://api.nuxt.studio",
      gitInfo: {
        name: "divyansh-portfolio",
        owner: "divyanshdixit",
        url: "https://github.com/divyanshdixit/divyansh-portfolio",
      },
    },
  },

  debug: false,

  devtools: { enabled: IS_DEV },

  experimental: {
    typedPages: true,
    buildCache: true,
    headNext: true,
    lazyHydration: true,
    viewTransition: true,
  },

  eslint: {},

  // fonts: {},

  icon: {
    clientBundle: {
      scan: true,
    },
  },

  // image: {},

  modules: [
    "@nuxtjs/color-mode",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/ui",
    // "@nuxt/image",
    // "@nuxtjs/mdc",
    "@nuxtjs/seo",
    // "nuxt-feedme",
    "@nuxt/content",
    "nuxt-mcp",
    "@nuxt/eslint",
  ],

  nitro: {
    preset: "github-pages",
    prerender: {
      crawlLinks: true,
      failOnError: false,
      autoSubfolderIndex: true,
    },
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
  },

  routeRules: {
    "/**": {
      static: true,
      prerender: true,
    },
    "/blog/**": {
      static: true,
      prerender: true,
    },
  },

  site: {
    indexable: true,
    url: "https://divyanshdixit.dev",
    name: "Divyansh Dixit - Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer specializing in Java, Spring Boot, Angular, and cloud technologies. Building scalable enterprise solutions with expertise in microservices and AI-powered applications.",
    defaultLocale: "en",
    enabled: true,
  },

  ssr: true,

  typescript: {
    strict: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  schemaOrg: {
    identity: definePerson({
      // Basic Information, if applicable
      name: "Divyansh Dixit",
      givenName: "Divyansh",
      familyName: "Dixit",
      additionalName: "divyanshdixit", // middle name or other additional names
      alternateName: "Divyansh Dixit",

      // Profile Information, if applicable
      image: "/divyansh.png",
      description:
        "Senior Full Stack Developer specializing in Java, Spring Boot, Angular, and cloud technologies. Building scalable enterprise solutions with expertise in microservices and AI-powered applications.",
      jobTitle:
        "Senior Full Stack Developer | Java Expert | Cloud Architecture",

      // Contact & Social, if applicable
      email: "divyanshdixit2001@gmail.com",
      url: "https://divyanshdixit.dev",
      sameAs: [
        "https://github.com/divyanshdixit",
        "https://linkedin.com/in/divyansh-dixit",
      ],

      // Professional Details, if applicable
      worksFor: {
        "@type": "Organization",
        name: "Supercoder",
        url: "https://supercoder.com",
      },
    }),
  },
})
