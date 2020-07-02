## ¿Qué es SSR?

SSR = Server Side Rendering.

Tal vez has leído el termino como Aplicaciones universales.

En SSR es el servidor el que se encarga de generar el HTML.

En Client Rendering es el Navegador el que se encarga de generar el HTML.

### Beneficios

- El sitio web o app carga más rápido ya que los recursos de la computadora no son utilizados sino los del servidor.

- Se recomienda para aplicaciones grandes o si la aplicación va a crecer en el futuro.

- Mejora el SEO (el posicionamiento en buscadores).
___

Para react las opciones para SSR existen dos:

- Next.js
- Gatsby

# Next.JS

Un framework sencillo para crear aplicaciones React con SSR.

## Características Principales

- Server Side Rendering
- Code Splitting y Lazy Loading a los Componentes
- Routing en base a los archivos
- Soporte para CSS
- Hot Reload ( cada vez que hagas cambios, va a recargar esos cambios )
- URL's Limpias

## ServerLess

- Pareciera que por el nombre significa "sin servidores" pero aún así hay un servidor.
- En lugar de tener que comprar un servidor físico y configurarlo, es una opción donde alguien más ofrece la contratación y renta del espacio. 

## Serverless y Front End

- Si eres desarrollador Front end, gracias a serverless puedes realizar actividades que solo un backend podría realizar como obtener datos de un BD.
- Cada día los servicios de serverless van agregando nuevas características que permiten crear aplicaciones full stack solo con conocimientos de front end o javascript.

## Los Servicios más populares de Serverless

- Google Firebase
- Google Cloud
- Amazon web services
- Microsoft Azure
- StdLib
- WebTask
- IBM Cloud Functions

## Existen otros Serverless...

- Netlify
- Github pages
- Firebase Hosting
- Google Forms
- PayPal
___

## Agregando Emotion a un Proyecto Next.js

```
yarn add @emotion/core  @emotion/styled babel-plugin-emotion @emotion/babel-preset-css-prop
```


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
