const siteMetadata = {
  title: 'eden Blog',
  author: 'eden',
  headerTitle: 'Bin',
  description: '개발 블로그',
  language: 'ko-KR',
  siteUrl: 'https://www.edenyun.tech',
  siteRepo: 'https://github.com/seongbiny/blog.git',
  siteLogo: '/static/images/로고이름.png',
  image: '/static/images/프로필사진.png',
  socialBanner: '/static/images/social-banner.png',
  email: 'seongbiny@gmail.com',
  github: 'https://github.com/seongbiny',
  linkedin: '',
  locale: 'ko-KR',
  analytics: {
    googleAnalyticsId: '(옵션)',
  },
  comment: {
    provider: 'utterances',
    utterancesConfig: {
      repo: 'seongbiny/blog',
      issueTerm: 'title',
      label: 'Comment 💬',
      theme: 'github-light',
      darkTheme: 'github-dark',
    },
  },
}

module.exports = siteMetadata
