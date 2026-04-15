module.exports = {
  apps: [
    {
      name: "uptask-backend",
      script: "dist/index.js",
      cwd: "/var/www/upTaskBackend",
      watch: false,
      time: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
