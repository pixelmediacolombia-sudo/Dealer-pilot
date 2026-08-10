# Capturas de la landing

`index.html` espera estos tres archivos en esta carpeta. Los nombres
tienen que coincidir exactamente:

| Archivo | Pantalla | Dónde sale |
|---|---|---|
| `command-center.png` | Command center | Hero (sección 1) y recorte del Morning Brief (sección 3) |
| `publishing-cockpit.png` | Publishing Cockpit | Sección 4, "Publica solo" |
| `vehicle-catalog.png` | Vehicle Catalog | Sección 6, "Su feed entra solo" |

Tómalas a **2000 × 1099** o cualquier tamaño con esa proporción (~16:8.8).
El `width`/`height` del `<img>` está puesto en esos valores para reservar
el espacio y evitar saltos de layout; si cambias la proporción, actualiza
también esos dos atributos.

## Antes de publicar: quitar el nombre del cliente

Las capturas que se usaron para maquetar mostraban **Alpha Motorsport**
en la barra superior, **Alpha Manassas** en el selector de cuenta, y en
el catálogo salían números de stock reales con fotos marcadas "ALPHA".

Vuelve a tomarlas con la cuenta demo, donde el dealer aparece como
**Dealer Demo**, antes de subir la página.

## Ajustar el recorte del Morning Brief

La sección 3 reusa `command-center.png` y la encuadra con CSS. El control
está en `index.html`:

```css
.shot--brief img{ object-position: 34% 100%; }
```

Primer valor = horizontal, segundo = vertical. `100%` en el vertical
significa "pegado al fondo de la imagen", que es donde vive el Morning
Brief. Si en tu captura queda más arriba, baja ese número.
