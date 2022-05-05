var plugins = [{
      plugin: require('/Users/adamvosburgh/Documents/Github/Portfolio2022/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"gatsbyRemarkPlugins":["gatsby-remark-import-code"],"remarkPlugins":[null,null],"extensions":[".mdx"],"defaultLayouts":{},"lessBabel":false,"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/adamvosburgh/Documents/Github/Portfolio2022"},
    },{
      plugin: require('/Users/adamvosburgh/Documents/Github/Portfolio2022/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/adamvosburgh/Documents/Github/Portfolio2022/node_modules/gatsby-plugin-theme-ui/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/adamvosburgh/Documents/Github/Portfolio2022/node_modules/gatsby-theme-mdx-deck/gatsby-ssr'),
      options: {"plugins":[],"basePath":"/slides"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
