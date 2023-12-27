const path = require('path')
const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
    webpack: {
        alias: {
            "@": resolve("src"), // 需要写绝对路径哦
            "components": resolve("src/components"),
            "utils": resolve("src/utils")
        }
    }
} 