import routes from './router.config'

// ref: https://umijs.org/config/
export default {
  routes,
  disableRedirectHoist: false,
  history: 'hash',
  outputPath: './dist',
  base: '/',
  publicPath: '/',
  mountElementId: 'root',
  targets: {
    chrome: 49, firefox: 45, safari: 10, edge: 13, ios: 10
  },
  exportStatic: false,
  mock: {
    exclude: [],//排除 mock 目录下不作 mock 处理的文件。
  },
  treeShaking: true,
  chainWebpack: (config, { webpack }) => {

  },
  // "theme": "./theme-config.js",
  theme: {
    // "@primary-color": "#1DA57A",
  },
  treeShaking: false,
  alias: {

  },
  devServer: {
  },
  proxy: {
    "/api": {
      "target": "http://www.baidu.com",
      "changeOrigin": true,
      "pathRewrite": { "^/api": "" }
    }
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'app',
      dll: false,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
