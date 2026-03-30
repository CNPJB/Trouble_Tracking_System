FROM node:22.19.0-slim

# ติดตั้ง OpenSSL สำหรับ Prisma
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# สร้าง Prisma Client
RUN npx prisma generate

EXPOSE 3001

# รัน migration และเริ่ม server
CMD npx prisma migrate deploy && npm start