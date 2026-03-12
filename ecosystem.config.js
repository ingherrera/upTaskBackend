module.exports = {
  apps: [
    {
      name: "uptask-backend",
      script: "index.js",
      cwd: "/var/www/upTaskBackend/dist",
      watch: false, // Cámbialo a true si quieres que reinicie al detectar cambios
      time: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
