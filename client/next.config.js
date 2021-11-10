
module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/product/review',
        destination: '/',
        permanent: false
      },
    ]
  },

  images: {
    domains: ["d3t32hsnjxo7q6.cloudfront.net", "via.placeholder.com","shop-product.s3.ap-northeast-2.amazonaws.com","shop-product.s3.amazonaws.com"],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  typescript: {
    ignoreBuildErrors: true,  // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
  }
}
