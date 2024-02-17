const { join } = require("path");

module.exports = {
  apps: [
    {
      script: "app.js",
      watch: ".",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
