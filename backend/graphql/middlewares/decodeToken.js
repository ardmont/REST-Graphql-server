const jwt = require('jsonwebtoken')

module.exports = (token) => {
  try {
    // Verifies the token an decodes it
    const tokenData = jwt.verify(token, process.env.SECRET)
    const decodedToken = { ...tokenData, authenticated: true }

    return decodedToken
  } catch (err) {
    return { authenticated: false }
  }
}
