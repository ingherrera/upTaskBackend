# Usa una imagen base de Node.js, recomendada para Express
FROM node:22-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /Backend


# Copia los archivos de configuración de dependencias (package.json y package-lock.json)
# Esto optimiza el caché de la capa, ya que si cambian solo las dependencias,
# no se necesita reconstruir las capas anteriores
COPY package*.json ./

# Instala las dependencias de Node.js
RUN npm install
# RUN npm install -g nodemon

#Instala cliente Mysql
RUN apk add --no-cache mariadb-client



# Copia todo el código de tu aplicación al contenedor
COPY . .

# Expone el puerto en el que escucha tu aplicación Express (por defecto 3000 o el que uses)
EXPOSE 3000

# Comando para iniciar tu aplicación Express
# CMD ["nodemon", "app.js"]
CMD ["npm", "run", "dev"]