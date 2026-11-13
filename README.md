# emp

Web estática en HTML, CSS y JavaScript, sin dependencias ni compilación.

## Estructura

- `index.html`: contenido y estructura.
- `css/style.css`: estilos responsive y modo claro/oscuro.
- `js/main.js`: interacciones.
- `assets/`: recursos gráficos (añadir según se necesiten).

## Probar localmente

Abre `index.html` en tu navegador o ejecuta `python3 -m http.server 8000` desde el directorio del proyecto y visita `http://localhost:8000/`.

## Publicar en GitHub Pages

1. Para usar Pages gratuito, configura el repositorio como público en `Settings > General > Danger Zone > Change repository visibility`.
2. En `Settings > Pages > Build and deployment`, selecciona `Deploy from a branch`.
3. Selecciona la rama `main`, carpeta `/(root)` y guarda.
4. Cuando termine el despliegue, la URL será `https://hylian-from-hyrule.github.io/emp/`.

Cada cambio posterior en `main` actualizará el sitio automáticamente.
