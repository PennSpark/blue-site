module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "spark-blue",
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
