/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://shenlife.tw", // TODO: 替換為實際域名
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
