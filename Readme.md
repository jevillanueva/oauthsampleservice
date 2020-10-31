#Implementación del servicio utilizando docker.

La arquitectura utiliza una configuración de 4 contenedores:

- MongoDB para la base de datos.
- Contenedor con la API
- Contenedor con el Frontend React
- Contenedor con Nginx para unir mediante proxy el api y el frontend.

Para compilar el API y el Backend se utiliza las URL de los repositorios GIT

- Backend: https://github.com/jevillanueva/oauthsamplebackend.git
- Frontend: https://github.com/jevillanueva/oauthsamplefrontend.git


Configurar las variables de entorno de:
- [backend.env](./backend.env)
y configurar el GOOGLE_CLIENT_ID en el docker-compose para el build del frontend:
- [docker-compose](./docker-compose.yml#L16)

Para compilar y levantar la pila utilizar:

```sh
$ docker-compose up -d --build
```