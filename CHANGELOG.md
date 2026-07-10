# Changelog - LaboresSinConex

Todas las modificaciones, mejoras y adiciones de funcionalidades a este proyecto se documentarán en este archivo.

## [V1] - 2026-06-29

### Añadido
- Se ha añadido la etiqueta de versión "V1" en la esquina inferior derecha de la pantalla principal para poder realizar el seguimiento de las versiones del programa.

### Modificado
- **Calculadora:** Se ha reemplazado la antigua calculadora integrada en el modal (`#modal-calculator`) por la nueva versión de la calculadora desarrollada en la carpeta `CALCULADORA`.
- La nueva calculadora ha sido integrada directamente en el archivo `index.html`, añadiendo sus estilos CSS, estructura HTML y lógica JavaScript.
- Se ha eliminado la opción de personalización de colores de la calculadora (el botón de edición de temas) para simplificar la interfaz, tal y como se solicitó.
- El botón "Salir" de la nueva calculadora ha sido adaptado para que ejecute la función `exitCalculator()`, permitiendo cerrar el modal correctamente y volver a la pantalla inicial de LaboresSinConex.

## [V2] - 2026-06-29

### Arreglos
- **Logo EliBi:** Se ha incrustado el logo en formato base64 directamente en `index.html` para asegurar que cargue al funcionar sin conexión.
- **Historial de la Calculadora:** Se ha corregido la superposición en dispositivos móviles, elevando el `z-index` de la ventana del historial.

## [V3] - 2026-06-29

### Arreglos
- **Historial de la Calculadora:** Se ha eliminado el icono decorativo de chat (`💬`) en cada línea del historial para evitar solapamientos con los números en pantallas pequeñas.
- **Paleta de Colores:** Se ha restaurado la paleta de selección de colores (botón `🎨` y su panel con los 30 temas predeterminados) y se ha solucionado un fallo que impedía que se cargasen correctamente los colores al hacer clic.
- Se ha atenuado la visibilidad de la etiqueta de versión (V3) poniéndola en color gris claro.

## [V4] - 2026-06-29

### Arreglos y Ajustes Visuales
- **Interfaz del botón Nuevo Proyecto:** Se ha modificado el botón "Insertar Proyecto" para que tenga el mismo tamaño, forma y comportamiento que los botones adyacentes de herramientas. Ahora se muestra perfectamente alineado en la cuadrícula inferior del encabezado y cuenta con la misma adaptación automática a móviles.
- **Paleta de Colores:** Se ha eliminado el texto "Predetermin..." del botón de paleta de colores, dejando únicamente el icono 🎨 para ganar espacio en pantalla.
- **Botón de Instrucciones:** Se ha modificado el botón con el icono de libro 📖 (Instrucciones) para que tenga forma cuadrada con cantos redondeados (12px) y comparta la misma altura que el título superior ("Mis Proyectos").
- **Importación de Copias de Seguridad:** Se ha añadido un tiempo de espera seguro (2 segundos) al importar una copia de seguridad local. Esto garantiza que Safari en iOS termine de escribir los datos en memoria permanente (`localStorage`) antes de recargar la aplicación, evitando la pérdida de datos al cerrar la app poco después.
- **Manejo de Errores de Base de Datos:** Se han fortalecido las funciones internas de guardado asíncrono (IndexedDB). Se han integrado comprobaciones (`try...catch`) para interceptar fallos del sistema al crear o leer archivos (el error de "Promesa rechazada: null"), impidiendo que cuelguen la app. Ahora, si algo falla, se muestra un aviso de error pero el resto del proyecto se crea y se guarda con normalidad.

## [V6] - 2026-06-29

### Arreglos y Ajustes Visuales
- **Botones de herramientas:** Se ha corregido el color de los botones del menú de inicio (Buscar, Base de datos local, Sonido, Temas, Insertar Proyecto y el botón de Instrucciones), los botones del menú superior dentro de cada proyecto (Inicio, Compartir proyecto y Guardar), **y los botones de la pestaña general de los proyectos ('Buscar ficha', 'Foto' y '+ PDFs')**. Ahora todos se adaptan dinámicamente al tema elegido utilizando el color principal de la paleta actual (más suave y menos intenso que en pruebas anteriores), en lugar de quedarse marrones de forma estática. Esto mejora la legibilidad con texto en blanco y aplica sombras a juego.
- **Botón de Instrucciones:** Se ha ocultado el texto "Instrucciones" de su interior para que quede exclusivamente el icono (📖) y se han forzado unas medidas fijas. Esto, sumado a que el título "Mis Proyectos" ahora puede encogerse en pantallas móviles, garantiza que el botón mantenga su forma de cuadrado perfecto en todo momento y no se deforme.
- **Tipografía unificada:** Se ha estandarizado la fuente tipográfica a un mismo formato (Lato, tamaño 13px y letra extragruesa) en todo el grupo de botones principales (incluyendo la barra de búsqueda), logrando una simetría estética en todo el bloque de opciones.

## [V99] - 2026-07-01

### Arreglos
- **Restauración del sistema**: Se ha regenerado `index.html` usando `fix.js` para recuperar los scripts finales (`pdf-lib.min.js`, Service Worker) que habían sido borrados accidentalmente por una modificación parcial.

## [V10] - 2026-07-01

### Arreglos
- **Calculadora:** Se ha verificado que la calculadora integrada previene el zoom automático al hacer doble toque (ya contaba con `touch-action: manipulation`).
- **Limpieza de archivos:** Se han borrado los archivos temporales y scripts usados para la reparación y depuración de la aplicación para mantener el repositorio limpio de cara a la subida a GitHub.
- Se ha actualizado la etiqueta de versión a V10.

## [V99] - 2026-07-01 (Limpieza)

### Arreglos
- **Limpieza del Repositorio**: Se eliminaron scripts temporales y archivos de prueba (`fix_index.py`, `.txt` de 3MB, etc.) que no aportaban al funcionamiento y ocupaban espacio innecesario.

## [V100] - 2026-07-01

### Arreglos
- **Arranque local**: Se ha corregido el molesto mensaje de error 'Promesa rechazada' que saltaba al abrir la aplicación localmente en el navegador, omitiendo y atrapando de forma silenciosa el registro del modo sin conexión (Service Worker) cuando se ejecuta directamente desde los archivos locales.

## [V7] - 2026-07-01
### Modificado
- Se ha ajustado la forma y altura de los botones de la pantalla principal (Sonido, Temas, Insertar Proyecto) para que sean idénticos (forma de píldora, 38px de altura).
- Se ha ocultado el texto del botón de la paleta de colores para que muestre únicamente el icono 🎨.

## [V9] - 2026-07-01

### Arreglos
- **Generación de PDF**: Se ha optimizado la carga de imágenes en el informe para que se haga en paralelo, reduciendo drásticamente los tiempos de espera y evitando que la pantalla de "Generando informe..." se quede bloqueada.
- **Sintaxis**: Se ha solucionado un error de etiquetas HTML en el código de impresión de notas que causaba que el navegador cortara la carga y mostrara el código en texto plano.
- **Limpieza**: Se han eliminado los archivos temporales de diagnóstico y pruebas para limpiar el repositorio antes de subir a GitHub.

## [V101] - 2026-07-10

### Añadido
- **Animaciones UI/UX:** Se ha implementado un sistema completo de animaciones suaves (estilo iOS) en toda la aplicación para mejorar la experiencia de usuario de manera sutil y sin afectar el rendimiento o el diseño existente.
  - Transición tipo fade/scale al abrir proyectos y modales.
  - Efecto tipo fade/slide en las pestañas inferiores de los detalles de proyectos.
  - Rebote táctil en los contadores (`.anim-bounce`).
  - Animación suave en barras de progreso (`progress`, `.progress-fill`).
  - Animación de fade/scale para las nuevas tarjetas y filtrado en el buscador.
  - Notificaciones de guardado rediseñadas tipo "píldora" superior (estilo "toast") con transiciones suaves de entrada y salida.
  - Pulsación intermitente en las tarjetas de inventario cuando queda poco stock.
  - Pulsación única en la barra de "Compartidos" al recibir un nuevo proyecto.
  - Transición fluida al alternar entre modo Claro y Oscuro.
  - Compatibilidad completa con la preferencia de accesibilidad de sistema (`prefers-reduced-motion`) desactivando las animaciones automáticamente.
