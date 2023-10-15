## Guía para Ejecutar la Aplicación con Docker
Este repositorio contiene una aplicación que ha sido dockerizada para simplificar su configuración y despliegue. La aplicación consta de un servidor (backend) construido con python y fastApy y una interfaz de usuario (frontend) construido con React.js, ambos ejecutándose en contenedores separados, con una base de datos MongoDB.

## Requisitos
Antes de comenzar, asegúrate de tener instalado Docker en tu sistema.

## Instrucciones
Siga estos pasos para ejecutar la aplicación Docker en su sistema local:

1. Descarga este repositorio de la siguiente direccion y descomprímelo en una ubicación de tu elección.

   https://drive.google.com/file/d/1vGHcMWebq7p3gm65a_ovejq8WAk7iH3O/view?usp=drive_link
   
3. Abre una terminal o línea de comandos y navega hasta el directorio raíz de la aplicación (Tecnica Wiber)
 (donde se encuentra el archivo `docker-compose.yml`).
4. Ejecuta el siguiente comando para construir y ejecutar los contenedores:

       docker-compose up -d --build

5. Espera que termine de cargar y abre la app en tu navegador en la dirección:

       http://localhost:3000/

¡Listo! La aplicación debería estar funcionando y disponible para su uso.
Podras crear, guardar, editar y  eliminar Scripts para su posterior uso .
