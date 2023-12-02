import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  faviconGlyph : "🤞",
  banner: {
    key: 'sub2nck',
    text: (
      <a href="https://youtube.com/@necakco" target="_blank">
        💜 Sub to necakco plz →
      </a>
    )
  },
  primaryHue: 183,
  primarySaturation: 33,
  logo: <span>CheatCL <strong>2.0</strong> 😎</span>,
  project: {
    link: 'https://github.com/nck404/',
  },
  chat: {
    link: 'https://cheatcl.web.app/discord',
  },
  docsRepositoryBase: 'https://cheatcl.web.app',
  footer: {
    text: '2023@ Cheatcl 2.0',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Cheatcl'
    }
  }
}

export default config
