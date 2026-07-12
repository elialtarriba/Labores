# Changelog - LaboresSinConex

Todas las modificaciones, mejoras y adiciones de funcionalidades a este proyecto se documentarán en este archivo.

## [V19] - 2026-07-12

### Nuevas Funcionalidades
- **Temporizador Flotante (Píldora):** Se ha implementado un temporizador en forma de píldora flotante de color verde pastel. Esta píldora se muestra de forma constante en la parte superior central de la pantalla mientras haya un temporizador activo (botón "Empezar" en la pestaña Tiempo de un proyecto).
- **Control Arrastrable:** La píldora se puede arrastrar por toda la pantalla para que no moleste. Si se recarga la app, la píldora vuelve a su posición central original.
- **Acceso Directo:** Haciendo doble clic (o doble toque rápido) en la píldora flotante, la aplicación navega instantáneamente al proyecto en cuestión y abre directamente su pestaña "Tiempo" para poder detenerlo o editarlo.
- **Aguja Utilizada Dinámica:** En la pestaña General de los proyectos, debajo de "Técnica", se ha añadido el campo "Aguja utilizada en el proyecto". Este campo es inteligente: si eliges la técnica "Punto", muestra tu lista de agujas de punto; si eliges "Ganchillo", muestra tu lista de ganchillos; y si eliges otra técnica, te permite escribir libremente. Al cambiar de técnica, el campo se vacía automáticamente para evitar errores.
- **Formulario Lanas o Hilos:** Se ha reorganizado el formulario para crear un flujo más natural al editar un ovillo. Se ha movido el campo "Ubicación" al final del todo (debajo de Notas), se han movido los campos "Comprado en" y "Precio/ovillo" debajo de "Ganchillo - aguja recomendada", y se ha eliminado el campo sobrante "Aguja Recomendada en Proyectos" para no sobrecargar el formulario.
- **Limpieza de repositorio:** Se han eliminado los scripts temporales de Python (`.py`) utilizados para la automatización e inserción de código durante el desarrollo de las últimas versiones, dejando el entorno limpio para subir a GitHub.

### Arreglos y Ajustes Visuales
- **Barra de Navegación Inferior (Móvil):** Se ha incrementado aún más el margen inferior de la barra (5 píxeles adicionales) para asegurar una comodidad total y evitar conflictos con la zona inferior de los teléfonos móviles.
- **Botones de Navegación 3D:** La barra inferior de secciones se ha rediseñado para que los botones tengan un aspecto 3D "físico" y grueso, con una sombra dura debajo. Ahora, los botones adoptan el color oscuro de tu tema principal para hacer contraste, y al pulsar uno (activarlo), este se "hunde" mecánicamente y pasa a ser de un color muy claro y luminoso del tema para que quede totalmente claro en qué pantalla te encuentras.
- **Detalle de Proyecto (Móvil):** Dentro de la ficha de un proyecto, se ha ajustado la distribución superior de los botones (Inicio, Compartir, Guardar y Borrar) para que quepan todos alineados en una sola fila en las pantallas de los teléfonos.
- **Detalle de Proyecto (Limpieza Visual):** Se ha eliminado el encabezado "Información del proyecto" que aparecía encima de los campos principales, ya que resultaba redundante y ocupaba espacio innecesario.
- **Pestañas de Detalle (Efecto 3D):** Se ha ajustado el espaciado (padding) inferior de las pestañas de proyecto (General, Tiempo, etc.) y se ha duplicado el tamaño de su sombra para que no se corten y muestren un aspecto 3D más profundo y realista.
- **Botón de Instrucciones (Oculto):** El botón de instrucciones con icono de libro de la barra superior ahora se oculta de forma automática al entrar al detalle de cualquier proyecto para liberar espacio.
- **Nueva versión:** Se ha actualizado la etiqueta de versión de la aplicación visible en la esquina inferior derecha a **V19**.

## [V17] - 2026-07-12

### Nuevas Funcionalidades
- **Barra Global de Temporizador Activo:** Se ha añadido un indicador flotante en la parte superior de la aplicación que detecta y se muestra globalmente si hay algún proyecto con el temporizador corriendo. 
- **Píldora de Tiempo Móvil:** El indicador ahora es arrastrable (draggable) por la pantalla. Puedes moverlo con el dedo o el ratón a cualquier rincón, y la aplicación recordará exactamente dónde lo dejaste aunque cambies de proyecto o recargues la página. Al pulsar sobre ella, la aplicación navega directamente al proyecto activo y abre su pestaña "Tiempo" para controlarlo.

### Arreglos y Ajustes Visuales
- **Pestañas de Proyecto (`.detail-tab`):** Ahora las pestañas dentro de un proyecto (General, Tiempo, Contadores, etc.) adquieren un tono claro del color principal del tema escogido. Cuando se seleccionan, el fondo se vuelve blanco completamente (`#fff`) para destacar en qué pestaña te encuentras en todo momento.
- **Botones de Notas del Proyecto:** Los botones de "Añadir" y el icono de micrófono 🎙️ en la sección de "Notas del proyecto" ahora utilizan exactamente la misma estética y el color del tema actual (`.btn-primary`) que el resto de botones principales. Además, tanto botones como caja de texto son más reducidos en altura y alinean perfectamente.
- **Botón Copyright:** Se ha eliminado el texto/botón de Copyright de la pantalla de inicio principal para dejarla más limpia. Ahora se ubica como un pequeño y discreto botón circular con el símbolo "©" al final del manual de instrucciones.
- Se ha actualizado la etiqueta de versión de la aplicación a **V17**.

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

## [V12] - 2026-07-10

### Añadido
- **Animación de Celebración:** Se ha creado una animación especial de un pequeño ovillo que dibuja un corazón cuando se marca un proyecto como "Terminado". Se ha diseñado para ser una seña de identidad cálida y artesanal que celebra el trabajo finalizado. Esta animación se muestra solo una vez por proyecto.
- **Versión Actualizada:** Se ha actualizado el indicador visual de la versión a `V12` en la pantalla principal.

## [V13] - 2026-07-10

### Arreglos y Ajustes Visuales
- **Corrección de guardado:** Se ha solucionado un error que aparecía al intentar guardar un nuevo proyecto.
- **Versión Actualizada:** Se ha actualizado el indicador visual de la versión a `V13` en la pantalla principal.

## [V14] - 2026-07-11

### Añadido
- **Animación "Terminados":** Se ha ampliado la duración de la animación a 5 segundos. Ahora incluye un efecto de caída de confeti y un mensaje de "¡Felicidades!" sobre el corazón y el ovillo.
- **Copyright y Licencia:** Se ha integrado un footer dinámico y permanente de "Copyright © Elisabeth Altarriba 2026" con un enlace que abre un modal de "Licencia de Uso". Este modal explica las condiciones de uso de la aplicación, estableciendo que es para uso estrictamente personal y no comercial.

### Modificado
- **Contadores (iPad):** Se ha corregido la disposición de los contadores en pantallas grandes (iPad). Los botones de atajo ahora se muestran horizontalmente encima de los contadores, de manera idéntica a como se ven en el iPhone.
- **Calculadora:** Se ha actualizado la calculadora integrada reemplazándola por completo con el código de la aplicación independiente (Calculadora). Ahora cuenta con su diseño final y todas sus funcionalidades completas dentro de Labores.
- **Botón Temas:** Se ha reactivado la visibilidad del texto "Temas" debajo del icono de la paleta de colores.
- **Versión Actualizada:** Se ha actualizado el indicador visual de la versión a `V14` en la pantalla principal.
- **Limpieza de código:** Se han eliminado bloques duplicados de código de animación que se habían acumulado en el archivo principal.
