function withStoreConfig(nextConfig = {}) {
  const features = nextConfig.features || {}
  delete nextConfig.features
  console.log(nextConfig)
  console.log(nextConfig.env)
  nextConfig.env = nextConfig.env || {}

  Object.entries(features).forEach(([key, value]) => {
    if (value) {
      nextConfig.env[`FEATURE_${key.toUpperCase()}_ENABLED`] = true
    }
  })

  return nextConfig
}

module.exports = { withStoreConfig }
