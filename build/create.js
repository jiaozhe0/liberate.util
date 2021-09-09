const fs = require('fs-extra')
const path = require('path')

const toolFnPath = path.join(__dirname, './tool-fn.json')

function getFileName() {
  try {
    const name = process.argv[2]
    if (name) {
      return name
    }
    console.error('请输入文件名，如 make ')
    process.exit()
  } catch (err) {
    process.exit()
  }
}
const fileName = getFileName()
const fnPath = path.join(`./src/${fileName}.js`)
const fnContent = `
export {${fileName}}`

fs.writeFileSync(fnPath, fnContent, 'utf8')

if (fs.pathExistsSync(toolFnPath)) {
  const toolFnData = fs.readJsonSync(toolFnPath)
  toolFnData[fileName] = fnPath
  fs.writeJSONSync(toolFnPath, toolFnData)
} else {
  fs.writeJSONSync(toolFnPath, { [fileName]: fnPath })
}
