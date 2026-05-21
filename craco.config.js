module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Optimize chunk splitting to eliminate duplicates
      webpackConfig.optimization = {
        ...webpackConfig.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            // Vendor libraries that are used in multiple chunks
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: 10,
              reuseExistingChunk: true,
            },
            // React Bootstrap and related utilities
            reactBootstrap: {
              test: /[\\/]node_modules[\\/](react-bootstrap|bootstrap)[\\/]/,
              name: 'react-bootstrap-vendor',
              priority: 20,
              reuseExistingChunk: true,
            },
            // React Responsive and css-mediaquery
            reactResponsive: {
              test: /[\\/]node_modules[\\/](react-responsive|css-mediaquery)[\\/]/,
              name: 'react-responsive-vendor',
              priority: 20,
              reuseExistingChunk: true,
            },
            // Common chunks shared between multiple entry points
            common: {
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        },
      };

      return webpackConfig;
    },
  },
};
