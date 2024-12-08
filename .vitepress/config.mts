import { defineConfig } from 'vitepress'

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
          text: '量子コンピュータ',
          items: [
            { text: '量子コンピュータの基礎', link: '/quantum/quantum-computer' },
            { text: '量子アルゴリズム', link: '/quantum/quantum-algorithm' }
          ]
        },
        {
          text: '量子情報',
          items: [
            { text: '量子ビット', link: '/quantum/qubit' },
            { text: '量子エンタングルメント', link: '/quantum/entanglement' }
          ]
        }
      ],
      '/math/': [
        {
          text: '数学',
          items: [
            { text: '微分積分', link: '/math/differential-calculus' },
            { text: '線形代数', link: '/math/linear-algebra' }
          ]
        }
      ],
      '/cs/': [
        {
          text: 'コンピュータサイエンス',
          items: [
            { text: 'アルゴリズム', link: '/cs/algorithm' },
            { text: 'データ構造', link: '/cs/data-structure' }
          ]
        }
      ],
      '/physics/': [
        {
          text: '物理学',
          items: [
            { text: '古典力学', link: '/physics/classical-mechanics' },
            { text: '量子力学', link: '/physics/quantum-mechanics' }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/warabi0141' },
      { icon: 'x', link: 'https://x.com/inu__warabi' }
    ],

    logo: '/logo.png',

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
  }
})