const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Optimize chunk splitting to eliminate duplicates
      webpackConfig.optimization = {
        ...webpackConfig.optimization,
        usedExports: true,
        sideEffects: false,
        minimize: true,
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            // Vendor libraries that are used in multiple chunks
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
            // React Bootstrap and related utilities
            reactBootstrap: {
              test: /[\\/]node_modules[\\/](react-bootstrap|bootstrap)[\\/]/,
              name: "react-bootstrap-vendor",
              priority: 20,
              reuseExistingChunk: true,
              enforce: true,
            },
            // React Responsive and css-mediaquery
            reactResponsive: {
              test: /[\\/]node_modules[\\/](react-responsive|css-mediaquery)[\\/]/,
              name: "react-responsive-vendor",
              priority: 20,
              reuseExistingChunk: true,
              enforce: true,
            },
            // Common chunks shared between multiple entry points
            common: {
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };

      // Add bundle analyzer plugin
      if (process.env.ANALYZE_BUNDLE === "true") {
        webpackConfig.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: "bundle-report.html",
            openAnalyzer: false,
            generateStatsFile: true,
            statsFilename: "bundle-stats.json",
          }),
        );
      }

      // Enable aggressive tree-shaking
      webpackConfig.mode = "production";

      return webpackConfig;
    },
  },
};
