# Registro CODEX de Labores

> Documento principal obligatorio: `../CODEX.md`. Antes de cualquier cambio hay que leer primero ese archivo. Este registro se conserva como historial inicial.

Este archivo protege el comportamiento existente de la app. Antes de hacer cambios futuros hay que revisar este registro y las capturas guardadas en `CODEX/capturas`.

## Ubicacion de trabajo

- Carpeta indicada por Elisabeth: `iCloudDrive/CODEX/Labores`.
- Archivos modificados: `index.html` y `sw.js`.
- Archivos creados: `CODEX/REGISTRO.md`, `CODEX/pdf-lib.min.js` y las tres capturas de `CODEX/capturas`.
- En los siguientes encargos, revisar primero este registro y trabajar sobre esa carpeta de iCloud Drive.

## Norma de trabajo

- No modificar funciones, estilos, datos ni pantallas que no formen parte del encargo concreto.
- Mantener compatibilidad con los datos ya guardados en el navegador.
- Probar los cambios en móvil y escritorio siempre que sea posible.
- Anotar aquí cada modificación funcional y cualquier migración de datos.

## Capturas de referencia recibidas el 12 de junio de 2026

- `capturas/IMG_6912.PNG`: lista de lanas; el botón de duplicar debe aparecer junto a la papelera en cada tarjeta.
- `capturas/IMG_6913.jpg`: formulario de lana y lista de marcas; todas las opciones deben mostrar icono. El título de edición debe ser `Editar Lana`.
- `capturas/IMG_6914.PNG`: formulario de aguja; `Número / Talla` y `Marca` deben ser listas configurables. El título debe ser `Editar Aguja`.

## Encargo actual

- [x] Botón de duplicar en lanas, agujas y accesorios. El nombre duplicado termina en ` (copia)`.
- [x] Títulos exactos `Editar Lana` y `Editar Aguja`.
- [x] Galería de múltiples fotos en agujas con portada, ampliación y borrado.
- [x] Desplazamiento vertical fiable en todas las pantallas y modales.
- [x] Selección de foto de portada en accesorios, con lupa y borrado.
- [x] Foto guardada de la aguja visible al asignarla a un proyecto.
- [x] Visor PDF ampliable, estable y con desplazamiento para documentos largos.
- [x] Múltiples PDFs por proyecto sin sobrescribir los anteriores y optimización de almacenamiento.
- [x] Icono visible en todas las marcas del selector de lanas.
- [x] Listas configurables de `Número / Talla` y `Marca` en Editar Aguja.

## Cambios realizados el 12 de junio de 2026

- Se añadió el botón `⧉` junto a la papelera en cada tarjeta de lana, aguja y accesorio.
- La copia duplica también sus fotos con claves independientes para que borrar una no afecte a la otra.
- Se corrigieron los títulos a `🧶 Editar Lana` y `🔧 Editar Aguja`.
- Las agujas aceptan múltiples fotos y permiten ampliar, elegir portada y borrar cada imagen.
- Los accesorios permiten convertir una foto adicional en portada, ampliar y borrar portada o galería.
- `Número / Talla` usa las tallas configuradas de punto y ganchillo; `Marca` usa una nueva lista `Marcas de agujas` en Configuración.
- Todas las marcas de lana muestran `🧶` aunque procedan de datos antiguos sin icono.
- Las fotos de las agujas en proyectos se cargan desde IndexedDB igual que en las listas.
- Los proyectos guardan una colección `pdfs`; cada PDF tiene clave, nombre, tamaño y controles independientes.
- Se añadió `pdf-lib` local en `CODEX/pdf-lib.min.js` para optimizar PDFs sin depender de Internet.
- El visor PDF mantiene un tamaño fijo, usa su barra de zoom y permite desplazamiento vertical.
- Se reforzó el scroll móvil y se restaura el `overflow` global al abrir/cerrar pantallas y tras errores del informe.
- El service worker subió a caché `labores-v57-cache` e incluye la librería PDF offline.

## Verificación

- Sintaxis JavaScript de `index.html`: correcta.
- Sintaxis de `sw.js`: correcta.
- Optimización PDF probada: archivo de muestra reducido de 1286 a 861 bytes.
- Navegador local sin errores ni avisos de consola.
- Duplicados comprobados en las tres listas con `(copia)`.
- Vista móvil comprobada a 390 x 844: formulario de aguja desplazable, con `overflow: auto` y `touch-action: pan-y`.

## Actualización del 13 de junio de 2026 - Versión 68

- Los registros activos continúan siendo `CODEX.md` y `REGISTRO.md` de la raíz; este historial deja constancia de la actualización.
- PDF interno a pantalla completa con `Salir del PDF` y sin apertura normal en otra pestaña.
- Confirmación obligatoria antes de duplicar y botón de inventario entre stock y precio.
- Listas estrictamente ligadas a Configuración, sin valores antiguos añadidos ni rayas decorativas.
- `➕ Añadir…` incorporado al Tipo de proyecto con persistencia en Configuración.
- Calculadora sin marco, título ni emoji y con botón pequeño `Salir`.
- Informes compartidos como texto compatible con WhatsApp y correo.
- Cloudinary eliminado por completo; multimedia guardada localmente.
- Caché actualizada a `labores-v68-cache`.
- Recordatorio: copiar y comparar siempre los cambios en `iCloud Drive/CODEX/Labores`.

## Actualización del 13 de junio de 2026 - Versión 69

- Cabecera del proyecto reorganizada: título legible arriba y botones debajo.
- `Tipo` de la ficha abierta incorpora `➕ Añadir…`, elección de emoji y persistencia en Configuración.
- Visor PDF sustituido por PDF.js local: páginas ajustadas al ancho, sin desplazamiento lateral y con scroll vertical.
- Añadidos los recursos locales de PDF.js 6.0.227 y su licencia dentro de `CODEX/`.
- Caché actualizada a `labores-v69-cache`.
- Los registros activos siguen siendo `CODEX.md` y `REGISTRO.md`; copiar y comparar siempre la versión final con iCloud.

## Actualización del 13 de junio de 2026 - Versión 70

- Los tres botones de la parte superior de ambos informes tienen tamaño idéntico.
- El efecto 3D usa bases claras de los colores activos del tema para destacar sobre la barra oscura.
- Se mantienen intactos el contenido, envío, impresión y cierre de los informes.
- Caché actualizada a `labores-v70-cache`.
- Copiar y comparar siempre la versión final con `iCloud Drive/CODEX/Labores`.
