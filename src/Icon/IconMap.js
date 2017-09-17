const fileList = require.context('./icons', true, /[\s\S]*$/)
const iconMap = {}
fileList.keys().forEach(fileName => {
	fileName = fileName.replace('./', '')
	iconMap[fileName.replace('.svg', '')] = require(`./icons/${fileName}`)
});

export default iconMap

