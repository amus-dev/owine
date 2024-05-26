<img src="https://raw.githubusercontent.com/amus-dev/owine/main/src/assets/logos/footer-logo.webp" alt="
     Logo Owine" width="300" /><br>
_Landing de campaña para Ö-61_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Instalación 🔧

_Debe instalar todas las dependencias del proyecto con su gestor de paquetes favorito_

- npm

```bash
npm install
```

- pnpm

```bash
pnpm install
```

## Ambientar proyecto local 🛠️

_Para levantar el proyecto de manera local debe realizar lo siguiente_
_Se debe crear un archivo llamado .env en la raiz del proyecto (folder src)_

_Agregar esta variable, la cual debe apuntar a la URL de desarrollo alojada en simplicity_

```bash
BASE_URL="https://simplicity.cl/owine"
```

_Agregar esta variable, la cual es la KEY del Recaptcha Google_

```bash
PUBLIC_VITE_SITE_RECAPTCHA_KEY="KEY_RECAPTCHA"
```

_Para obtener esta key se debe crear en la página de administrador de Google, debe ser la versión v2 del Recaptcha_

- [Crear aquí](https://www.google.com/recaptcha/admin/create)
- [Documentación](https://developers.google.com/recaptcha/intro?hl=es-419)

## Despliegue Producción 📦

_Para desplegar la APP en producción debe crear un archivo .env.production en la raiz del proyecto (folder /src)_
_Agregar esta variable, la cual debe apuntar a la URL de producción alojada en simplicity_

```bash
BASE_URL="confirmar"
```

_Agregar esta variable, la cual es la KEY del Recaptcha Google_

```bash
PUBLIC_VITE_SITE_RECAPTCHA_KEY="KEY_RECAPTCHA"
```

## Sitio en Desarrollo 🛠️

_Para visualizar el sitio en ambiente desarrollo se ingresa en la siguiente URL_

- [Owine - Dev](https://simplicity.cl/owine)

## Sitio en Producción 🛠️

_Para visualizar el sitio en producción se ingresa en la siguiente URL_

- Por confirmar

## Construido con 🛠️

_La estructura del proyecto esta creado con Atomic Design y las herramientas utilizadas son:_

- [Astro](https://docs.astro.build/en/getting-started/)
- [Tailwind](https://tailwindcss.com/)

## Autores ✒️

- **Alexander Urrutia** - [codeamus](https://github.com/mts4)
