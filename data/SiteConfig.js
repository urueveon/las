const config = {
  siteTitle: 'اور ويب',
  siteTitleShort: 'اور ويب',
  siteTitleAlt: 'اور ويب',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://www.ur-web.com',
 
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'محتوى هادف وترفيهي يتكون من تدوينات وشروحات برامج بالاضافة الى ادوات مصغرة ومتعددة.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-163125090-1',
  postDefaultCategoryID: 'اور ويب',
  userName: 'اور ويب',
  userEmail: 'info@ur-web.com',
  userTwitter: 'omar.m7a',
  gatsby_disqus_name: 'disqus_hjOB22hyru',
  menuLinks: [
   
    {
      name: 'المنشورات',
      link: '/blog/'
    },
 {
      name: 'ادوات المهام ',
      link: '/tools/'
    },
    {
      name: 'اتصل بنا',
      link: '/contact/'
    }
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff'
};

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
