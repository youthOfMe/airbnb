const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
    // less
    plugins: [
        {
            plugin: CracoLessPlugin,
            // options: {
            //     lessLoaderOptions: {
            //         lessOptions: {
            //             modifyVars: { '@primary-color': '#1DA57A' },
            //             javascriptEnabled: true,
            //         }
            //     }
            // }
        }
    ],
    // webpack
    webpack: {
        alias: {
            "@": resolve("src"), // 需要写绝对路径哦
            "components": resolve("src/components"),
            "utils": resolve("src/utils")
        }
    }
}