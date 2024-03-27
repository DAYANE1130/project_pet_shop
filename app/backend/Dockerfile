
# Escolha uma imagem base. Node é a escolha óbvia para uma aplicação Node.js
FROM node:16.14-alpine

# Defina o diretório de trabalho no container
WORKDIR /app-backend

# Copie o arquivo package.json (e o package-lock.json, se disponível) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o resto dos arquivos do projeto para o diretório de trabalho
COPY . .

# Exponha a porta que a aplicação vai usar
EXPOSE 8080

# Defina o comando para iniciar a aplicação
CMD [ "npm", "start" ]