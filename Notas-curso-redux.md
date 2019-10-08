## ¿Qué es React Router y cómo instalarlo?
Si estás empezando la escuela de JavaScript desde este curso deberás crear una copia del repositorio de Platzi Video:

`git clone https://github.com/platzi/PlatziVideo.git`
Una vez tienes listo el repositorio vas a crear una nueva rama para trabajar en ella a lo largo del curso:

`git checkout -b feature/router-redux`
Ya que nos encontramos dentro de la rama vamos a instalar React Router, la librería que nos va a permitir manejar rutas dentro de nuestra aplicación:

`npm install react-router-dom --save`

## Crear nuestro archivo de Rutas
Dentro de nuestro proyecto vamos a crear una carpeta llamada routes donde vamos a ir añadiendo las rutas que necesitemos en la aplicación.
Las rutas que añadamos debemos definirlas con el componente Route y estas deben estar encapsuladas dentro del componente BrowserRouter del paquete de react-router-dom. Para definir una ruta con el componente Route debemos pasarle las props de:
path para indicar la url.
exact si queremos que funcione única y exactamente con la url que le digamos.
component para indicarle el componente que va a renderizar.
De seguro no tienes el paquete json-server instalado, instalalo de forma global con el comando:
`sudo npm install -g json-server`
terminal 1
`json-server initialState.json`

terminal 2 `npm run start`
