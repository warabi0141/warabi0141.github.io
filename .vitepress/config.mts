import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';
import { buildEndGenerateOpenGraphImages } from '@nolebase/vitepress-plugin-og-image';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "わらびのメモ帳",
  description: "備忘録です",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quantum', link: '/quantum' },
      { text: 'Math', link: '/math' },
      { text: 'Computer Science', link: '/cs' },
      { text: 'Physics', link: '/physics' },
    ],

    sidebar: {
      '/quantum/': [
        {
          text: "量子",
          items: generateSidebar({
            documentRootPath: '.',
            basePath: '/quantum',
            scanStartPath: '/quantum',
            useTitleFromFileHeading: true,
            useFolderTitleFromIndexFile: true,
            useFolderLinkFromIndexFile: true,
          })
        }
      ],
      '/math/': [
        {
          text: '数学',
          items: generateSidebar({
            documentRootPath: '.',
            basePath: '/math',
            scanStartPath: '/math',
            useTitleFromFileHeading: true,
            useFolderTitleFromIndexFile: true,
            useFolderLinkFromIndexFile: true,
          })
        }
      ],
      '/cs/': [
        {
          text: 'コンピュータサイエンス',
          link: '/cs',
          items: generateSidebar({
            documentRootPath: '.',
            basePath: '/cs',
            scanStartPath: '/cs',
            useTitleFromFileHeading: true,
            useFolderTitleFromIndexFile: true,
            useFolderLinkFromIndexFile: true,
          })
        }
      ],
      '/physics/': [
        {
          text: '物理学',
          items: generateSidebar({
            documentRootPath: '.',
            basePath: '/physics',
            scanStartPath: '/physics',
            useTitleFromFileHeading: true,
            useFolderTitleFromIndexFile: true,
            useFolderLinkFromIndexFile: true,
          })
        }
      ]
    },

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/warabi0141/warabi0141.github.io' },
      { icon: 'x', link: 'https://x.com/inu__warabi' }
    ],

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
  },
  markdown: {
    math: true
  },
  plugins: [
    buildEndGenerateOpenGraphImages({
      baseUrl: 'https://warabi0141.github.io',
    })
  ]
})