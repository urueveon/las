const config = {
  siteTitle: 'نتائج السودان ',
  siteTitleShort: 'نتائج السودان',
  siteTitleAlt: 'نتائج السودان',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://sudansscr.com',
 
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'موقع مختص في تقديم وعرض نتائج الشهادة السودانية وشهادة الاساس ويساعد في استخراج الشهادة بصورة مجانية من وزارة التربية والتعليم.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-163125090-1',
  postDefaultCategoryID: 'نتائج السودان ',
  userName: 'نتائج السودان ',
  userEmail: 'info@sudansscr.com',
  userTwitter: 'omar_m7a',
  gatsby_disqus_name: 'disqus_hjOB22hyru',
  menuLinks: [
   
    {
      name: 'الشهادة السودانية',
      link: '/categories/الشهادة-السودانية/'
    },
 {
      name: 'شهادة الاساس  ',
      link: '/categories/شهادة-الاساس/'
    },
    {
      name: ' استخراج نتيجة الشهادة السودانية',
      link: 'https://results.sudansscr.com/'
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
