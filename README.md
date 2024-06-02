<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<div align="center">
  <img  src="https://github.com/Electromayonaise/Electromayonaise/blob/main/Assets/github-contribution-grid-snake%20blacktest(1).svg"
       alt="snake" /></a>
</div>

# RESTfulShopping

## *Project Members: [Martín Gómez](https://github.com/Electromayonaise), [Julio Prado](https://github.com/jul109), [Daniel Plazas](https://github.com/DanielJPC19)*

Implementar una tienda en línea, la solución debe exponer servicios REST, usando nodeJs y express.

## Estructura del proyecto
``` bash
├── server/
│   ├── index.js
│   ├── routes/
│   │   ├── admin.js
│   │   ├── client.js
│   │   └── auth.js
│   └── models/
│       ├── product.js
│       ├── user.js
│       └── purchase.js
├── public/
│   ├── index.html
│   ├── admin.html
│   ├── client.html
│   ├── login.html
│   ├── register.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── scripts.js
│       ├── admin.js
│       ├── client.js
│       ├── login.js
│       └── register.js
├── package.json
└── README.md


```
### Para usar: 

Para lograr ejecutar este proyecto, deberá de seguir los siguientes pasos:

1. Instale NodeJs desde la página principal del producto (en caso de tenerlo instalado, hacer caso omiso).
2. Ingrese a la carpeta principal del proyecto.
3. En la línea de comandos, ejecute ``node server/index.js``, verá que se iniciará el servidor con un puerto seleccionado.
4. Abra su navegador de preferencia (Chrome, Firefox, Microsoft Edge, etc).
5. Entre a la direccion ``localhost:port``, ``port`` reemplacelo por el puerto que le muestre el servidor.
6. Disfrute del proyecto.

### Nota

En el caso de querer iniciar sesión como administrador, el usuario y contraseña son ``admin`` y ``adminspassword`` respectivamente. Tenga en cuenta que este usuario será el único encargado de crear productos, aunque usted podrá encontrar uno por defecto.

