// Use CommonJS require below so we can dynamically import during build-time.
if (process.env.NODE_ENV === "production") {
  // ("production");
  module.exports = require("./configureStore.prod");
} else {
  // ("development");
  module.exports = require("./configureStore.dev");
}
