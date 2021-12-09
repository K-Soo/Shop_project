
module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/product/review',
        destination: '/',
        permanent: false
      },
      {
        source: '/auth/login/find-id',
        destination: '/',
        permanent: false
      },
      {
        source: '/order/orderform',
        destination: '/',
        permanent: false
      },
    ]
  },
  images: {
    domains: ["d3t32hsnjxo7q6.cloudfront.net", "via.placeholder.com","shop-product.s3.ap-northeast-2.amazonaws.com","shop-product.s3.amazonaws.com"],
  },
  typescript: {
    ignoreBuildErrors: true,  // Dangerously allow production builds to successfully complete even if
  }
}
