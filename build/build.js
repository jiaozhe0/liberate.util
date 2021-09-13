const fs = require('fs-extra')
const render = require('json-templater/string')
const endOfLine = require('os').EOL
const path = require('path')

const toolFnPath = path.join(__dirname, './tool-fn.json')
const IMPORT_TEMPLATE = "export {{name}} from './src/{{package}}'"
const toolFnData = fs.readJsonSync(toolFnPath)

const toolLine = Object.keys(toolFnData).map((name) => {
  if (name.indexOf('_') === 0) {
    return render(IMPORT_TEMPLATE, {
      name: '*',
      package: name
    })
  }
  return render(IMPORT_TEMPLATE, {
    name: `{${name}}`,
    package: name
  })
})

const a = toolLine.join(endOfLine)

fs.writeFileSync(path.join(__dirname, '../main.js'), a)
