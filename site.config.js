const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Somi Hwang",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "UI Engineer | Frontend Developer",
    bio: "",
    email: "somi.c.hwang@gmail.com",
    linkedin: "somichwang",
    github: "somangoi",
    instagram: "somi.dev",
  },
  projects: [
    {
      name: `Slid`,
      href: "https://home.slid.cc/",
    },
    {
      name: `Okay to Bleed`,
      href: "https://okaytobleed.com/",
    },
    {
      name: `Gongsamo`,
      href: "https://gongsamo.kr/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "somolog",
    description: "Welcome to somangoi-log!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configuration (required)
  link: "https://www.somihwang.com/",
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: [
      "Somi Hwang",
      "황소미",
      "UI Engineer",
      "UX Engineer",
      "UX 엔지니어",
      "개발자",
      "프론트엔드",
    ],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "somangoi/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
