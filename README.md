# KevStudio · Tienda de moda urbana

Landing page de una tienda online de ropa urbana ficticia, desarrollada con **Bootstrap 5** y **JavaScript** puro. El proyecto se centra en la maquetación responsive y en el uso de los componentes interactivos de Bootstrap.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5.3-7952B3?logo=bootstrap&logoColor=white)

<!-- Añade aquí una captura de la web, por ejemplo: -->
<!-- ![Vista previa de KevStudio](kevstudio/img/captura.png) -->

## Funcionalidades

- **Carrusel principal** con tres slides que enlazan a Catálogo, Novedades y Outlet.
- **Catálogo dividido por secciones**: catálogo general, Hombre, Mujer, Novedades (abrigos otoño–invierno 2026) y Outlet, con 18 productos en total.
- **Tarjetas generadas dinámicamente** desde JavaScript a partir de un array de productos, con precio, precio anterior y etiqueta (`nuevo`, `oferta`, `outlet`).
- **Modal de detalle** que se rellena con los datos del producto: imagen, descripción, porcentaje de descuento calculado, valoración con estrellas, número de reseñas, características y selector de talla.
- **Carrito lateral (offcanvas)** para añadir y eliminar productos, con contador de unidades en el navbar y cálculo del total en euros.
- **Notificaciones toast** al añadir un producto al carrito.
- **Newsletter "Club KS"** con validación de formulario de Bootstrap (nombre, email y aceptación de la política de privacidad).
- **Diseño responsive** adaptado a móvil, tablet y escritorio, con navbar colapsable.

## Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de la página |
| CSS3 | Estilos propios con variables CSS (paleta y tipografías) |
| Bootstrap 5.3.3 | Grid, navbar, carousel, modal, offcanvas, toast, cards, alerts y validación de formularios |
| Bootstrap Icons 1.11.3 | Iconografía |
| JavaScript (ES6) | Renderizado de productos, modal, carrito y newsletter |
| Google Fonts | Bebas Neue (títulos) y DM Sans (texto) |

## Estructura del proyecto

```
ProyectoBootStrap_KevinStudio/
└── kevstudio/
    ├── index.html        # Página principal
    ├── css/
    │   └── styles.css    # Estilos personalizados
    ├── js/
    │   └── main.js       # Datos de productos y lógica (modal, carrito, newsletter)
    └── img/
        ├── hero/         # Imágenes del carrusel
        └── productos/    # Imágenes de los productos
```

## Cómo ejecutarlo

1. Clona el repositorio:
   ```bash
   git clone https://github.com/kevinvillarroelmejia/ProyectoBootStrap_KevinStudio.git
   ```
2. Abre `kevstudio/index.html` en el navegador, o usa la extensión **Live Server** de VS Code.

No necesita instalación: Bootstrap, los iconos y las fuentes se cargan desde CDN, así que hace falta conexión a internet.

## Limitaciones

Es un proyecto de front-end sin servidor ni base de datos:

- Los productos están definidos en `main.js`.
- El carrito se guarda en memoria y se vacía al recargar la página.
- Los botones "Finalizar compra" y favoritos, y el envío de la newsletter, son solo visuales.

## Posibles mejoras

- Guardar el carrito en `localStorage`.
- Modificar la cantidad de cada producto desde el carrito y tener en cuenta la talla elegida.
- Añadir filtros y buscador de productos.
- Conectar con un back-end (por ejemplo Flask) y una base de datos.

## Autor

**Kevin Villarroel Mejía**
Estudiante de 2º de DAM en el IES Francisco de Goya (Madrid).
GitHub: [@kevinvillarroelmejia](https://github.com/kevinvillarroelmejia)

---

Proyecto con fines educativos. KevStudio es una marca ficticia y los datos de contacto que aparecen en la web no son reales.
