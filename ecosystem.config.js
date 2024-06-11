const { join } = require("path");

module.exports = {
  apps: [
    {
      script: "app.js",
      watch: ".",
      env: {
        NODE_ENV: "development",
      },
      env_proÏduction: {
        NODE_ENV: "production",
      },
    },
  ],
};
