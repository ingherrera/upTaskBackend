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
        PORT: 4000,
        DATABASE_URL: "mysql://uptask-user:Pascual71@localhost:3306/uptask",
        // FRONTEND_URL:"http://localhost:3000",
        FRONTEND_URL: "http://192.168.122.155:3000",
        FRONTEND_URL1: "http://localhost:8000",
        JWT_SECRET: "palabraUltraRecontraSecreta",
      },
    },
  ],
};
