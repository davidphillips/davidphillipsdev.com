// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/davidphillips/Developer/davidphillipsdev.com/src/pages/index.js"))
}

exports.json = {
  "index.json": require("/Users/davidphillips/Developer/davidphillipsdev.com/.cache/json/index.json")
}