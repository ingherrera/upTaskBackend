module.exports = {
  apps: [
    {
      name: "uptask-backend",
      script: "./dist/index.js",
      cwd: "./", // Usa el directorio donde se encuentre este archivo
      watch: false,
      time: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
