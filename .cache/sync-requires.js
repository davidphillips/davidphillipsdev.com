// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/davidphillips/Developer/davidphillipsdev.com/.cache/dev-404-page.js")),
  "component---src-pages-gatsby-config-js": preferDefault(require("/Users/davidphillips/Developer/davidphillipsdev.com/src/pages/gatsby-config.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/davidphillips/Developer/davidphillipsdev.com/src/pages/index.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/davidphillips/Developer/davidphillipsdev.com/.cache/json/dev-404-page.json"),
  "gatsby-config.json": require("/Users/davidphillips/Developer/davidphillipsdev.com/.cache/json/gatsby-config.json"),
  "index.json": require("/Users/davidphillips/Developer/davidphillipsdev.com/.cache/json/index.json")
}