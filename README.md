# Descripción

Sitio web del modelo de negocios de Kawaii Store un e-commerce mediante dropshipping de dulces asiáticos para fans del anime y k-pop en Perú para el curso de Comercio Electronico.

# Tecnologías y arquitectura

La aplicación utiliza la arquitectura moderna de Server-Centric que nos ofrece Nextjs utilizando tecnologias como React Server Component(RSC), Server Actions, App Router y Server Side Rendering(SSR).
Además, se utiliza Typescript como lenguaje de programación, PostgreSQL para la base de datos, Prisma como el ORM para interactuar la base de datos con el servidor y Docker como entorno de desarrollo para simular una base de datos local PostgreSQL.

## Paso para probar la aplicación en desarrollo

1. Clonar el repositorio.
2. Crear una copia del `.env.template` y renombrarlo a `.env` y cambiar las variables de entorno.
3. Instalar las dependencias `npm install`
4. Levantar la base de datos `docker compose up -d`
5. Correr las migraciones de Prisma `npx prisma migrate dev`
6. Ejecutar el scrip de seed para poblar la base de datos con datos iniciales`npm run seed`
7. Correr el proyecto en modo desarrollo `npm run dev`
8. Limpiar el localStorage del navegador para evitar datos persistentes de sesiones anteriores.

## Aplicación en producción

La aplicación está actualmente en producción. La base de datos se encuentra alojada en Neon Tech, mientras que la aplicación web está desplegada en Vercel.

Se puede acceder a la aplicación en producción desde la siguiente URL:
https://kawaii-store.vercel.app/
