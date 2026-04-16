module.exports = {
  apps: [
    {
      name: "uptask-backend",
      // script: "dist/index.js",
      script: "node_modules/.bin/tsx", // para no buildear en cada modificacion
      args: "src/index.ts", // iguL
      cwd: "/var/www/upTaskBackend",
      watch: false,
      time: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
