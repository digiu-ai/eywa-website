const path = require("path");
const fs = require("fs");
const nodeExternals = require("webpack-node-externals");
const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
module.exports = (webpackEnv) => {
  console.log(process.env.NODE_ENV);
  const isEnvDevelopment = process.env.NODE_ENV === "development";
  const isEnvProduction = !isEnvDevelopment;
  return {
    mode: isEnvProduction ? "production" : "development",
    // Stop compilation early in production
    bail: isEnvProduction,
    entry: "./server/server.ts",
    devtool: isEnvProduction ? false : "cheap-module-source-map",
    target: "node",

    externals: [nodeExternals()],

    output: {
      path: path.resolve("server-build"),
      filename: "server.js",
    },

    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@src": path.resolve(__dirname, "./src"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@stores": path.resolve(__dirname, "./src/stores"),
      },
    },
    module: {
      rules: [
        // Process application JS with Babel.
        // The preset includes JSX, Flow, TypeScript, and some ESnext features.
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          include: ["src", "server"].map(resolveApp),
          loader: require.resolve("babel-loader"),
          options: {
            customize: require.resolve(
              "babel-preset-react-app/webpack-overrides"
            ),

            plugins: [
              [
                require.resolve("babel-plugin-named-asset-import"),
                {
                  loaderMap: {
                    svg: {
                      ReactComponent:
                        "@svgr/webpack?-svgo,+titleProp,+ref![path]",
                    },
                  },
                },
              ],
            ],
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            // See #6846 for context on why cacheCompression is disabled
            cacheCompression: false,
            compact: isEnvProduction,
          },
        },
      ],
    },
  };
};
