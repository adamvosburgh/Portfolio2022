module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"gatsbyRemarkPlugins":["gatsby-remark-import-code"],"remarkPlugins":[null,null],"extensions":[".mdx"],"defaultLayouts":{},"lessBabel":false,"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/adamvosburgh/Documents/Github/Portfolio2022"},
    },{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-theme-mdx-deck/gatsby-browser.js'),
      options: {"plugins":[],"basePath":"/slides"},
    }]
