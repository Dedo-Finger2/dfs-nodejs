import * as path from "node:path"
import * as fs from "node:fs"

function getAllFolders(rootPath) {
  let allFolders = [];
  function scanFolder(currentPath) {
    const items = fs.readdirSync(currentPath)
    items.forEach((item) => {
      const itemPath = path.join(currentPath, item)
      if (fs.lstatSync(itemPath).isDirectory()) {
        allFolders.push(itemPath);
        scanFolder(itemPath)
      }
    })
  }
  scanFolder(rootPath)
  return allFolders
}

const rootPath = "/home/aneto/TEMP/markdown listing testing";
const folders = getAllFolders(rootPath);
console.log(folders);

