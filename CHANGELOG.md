# Changelog - LaboresSinConex

Todas las modificaciones, mejoras y adiciones de funcionalidades a este proyecto se documentarán en este archivo.

## [V19] - 2026-07-12

### Nuevas Funcionalidades
- **Apartado de Enlaces Web:** Se ha añadido un nuevo campo "Web" en la pestaña General de cada proyecto, ubicado justo encima de la ficha de fechas (Inicio y Fin). Este campo se presenta como una línea compacta para no saturar la pantalla. Incluye dos botones: uno para copiar instantáneamente todo su contenido al portapapeles, y otro para expandir el texto en una ventana grande (modal) en caso de que sea demasiado largo, permitiendo leerlo y editarlo cómodamente.
- **Temporizador Flotante (Píldora 3D):** Se ha implementado un temporizador en forma de píldora flotante. Ahora cuenta con un diseño 3D realista con degradados de color verde pastel, brillos integrados y sombra dura inferior para parecer un botón mecánico físico que pulula sobre la pantalla.
- **Control Arrastrable y Clic Rápido:** La interacción con la píldora ha sido mejorada. Ahora se hunde al pulsarla, y si la mantienes apretada puedes arrastrarla por toda la pantalla (y mantendrá esa nueva posición incluso si recargas). Si solo haces una **pulsación rápida** (un solo toque), soltará la animación e inmediatamente te llevará a la pestaña "Tiempo" del proyecto al que pertenece la píldora.
- **Gestión Inteligente de Cronómetros Múltiples:** Ahora, si intentas darle a "Empezar" en el tiempo de un proyecto, pero el sistema detecta que *ya tenías un cronómetro en marcha en otro proyecto distinto*, la aplicación te avisará para evitar errores humanos. Primero te preguntará si deseas cerrar y guardar el tiempo del otro proyecto. Si aceptas, te volverá a preguntar si quieres empezar el tiempo del proyecto actual. Esto evita duplicidades accidentales o perder tiempo mal contabilizado.
- **Formulario de Agujas / Ganchillos (Reorganización):** Se ha simplificado y reorganizado el formulario de edición de agujas:
  - Se han eliminado los campos redundantes "Longitud cable (cm)" y "Color (hex)".
  - Se ha añadido un nuevo campo "Notas" para escribir libremente.
  - El campo "Comprado en" ahora aparece justo antes del apartado Fotos, con el "Precio" debajo.
  - El campo "Ubicación" se ha movido al fondo de todo el formulario, de manera análoga al de las lanas.
- **Formulario de Accesorios (Reorganización):** Se ha alineado el formulario de accesorios para que coincida con el estilo de lanas y agujas: el campo "Notas" se ha movido bajo la Cantidad, el campo "Precio" se sitúa debajo de "Comprado en", y "Ubicación" se ha trasladado al final de todo el formulario.
- **Manual de Instrucciones Ampliado:** 
  - Se ha reestructurado el índice y el contenido para mayor claridad, añadiendo como primer punto del índice "Instalar la app" (para Android e iOS) y como último punto un enlace a los "Derechos de Copyright".
  - Se ha añadido un nuevo punto "**2. Pantalla de Inicio**" que explica de forma detallada cada uno de los botones y funciones de la pantalla principal (Buscar, Base de datos local, Sonido, Nuevo Proyecto, Filtros, Estadísticas, Temas e Inventario). Se han renumerado todos los puntos posteriores para mantener el orden.
  - En el apartado "Dentro del proyecto", se ha añadido la explicación sobre el funcionamiento de la nueva píldora 3D del temporizador, su sistema anti-duplicados, y la nueva línea de "Fechas inalterables" (para ver automáticamente cuándo se crea y termina un proyecto).
  - Se ha reescrito por completo el apartado de "Compartir y recibir proyectos", dividiéndolo en pasos claros y añadiendo la explicación sobre el Modo Solo Lectura, el sistema para evitar duplicados, y los nuevos destellos visuales al importar.
- **Visualización de Fechas:** Ahora, al abrir cualquier proyecto, en la pestaña "General" (justo debajo del "Estado") se mostrará una nueva línea elegante e informativa con la "Fecha de inicio" y la "Fecha fin". Si el proyecto aún no está terminado, la fecha fin se mostrará con un guión (-). Estas fechas no se pueden alterar manualmente.
- **Unificación visual de pestañas (Móvil y Mac):** Se han eliminado las reglas específicas que hacían que las pestañas de proyecto ("General", "Tiempo", "Contadores", etc.) se vieran planas y blancas en el móvil. Ahora heredarán exactamente el mismo diseño, grosor 3D y colores (terracota o según el tema activo) en todos los dispositivos.
- **Botones Secundarios Difuminados:** Los botones interiores del proyecto ('Buscar ficha', micrófono, 'Añadir', 'Foto' y '+PDFs') ahora utilizan un estilo "pastel suave": un color de fondo claro y semitransparente basado en el tema actual, con el texto en el color oscuro del tema, y una sombra 3D sutil de color gris clarito. Esto reduce su peso visual para evitar distracciones mientras mantienen su relieve 3D.
- **Modo Solo Lectura en Proyectos Compartidos:** Se ha implementado un estricto modo de "solo lectura" cuando abres un proyecto desde la pestaña de "Compartidos". En este estado, todos los botones de modificación, cuadros de texto, calculadoras, temporizadores, notas de voz y botones de guardar se volverán semi-transparentes (apagados) y estarán deshabilitados. Podrás navegar libremente por sus pestañas y visualizar todo el contenido o descargar sus PDFs, pero no podrás alterar el proyecto hasta que no lo pases a "Mis Proyectos" mediante el botón oficial.
- **Mejoras en la Importación de Proyectos:**
  - **Evitar duplicados:** Si intentas crear una copia de un proyecto compartido que ya habías importado previamente, el sistema te avisará y te preguntará si deseas sobreescribirlo completamente (perdiendo los cambios que tú hubieras hecho) o cancelar la operación, evitando que se generen copias infinitas del mismo proyecto.
  - **Distintivo Visual (Badge):** Los proyectos que hayas importado a tu lista de "Mis Proyectos" ahora lucirán una pequeña etiqueta verde en su tarjeta visible desde la pantalla de inicio, indicando "📥 Importado de: [Nombre de la persona]", para que puedas distinguirlos a simple vista de tus proyectos originales.
  - **Animación de Éxito al Importar:** Al terminar de importar un archivo, el botón de "Compartidos" parpadeará de forma llamativa durante 4 segundos. De la misma manera, cuando crees la copia oficial desde un proyecto compartido, el botón de "Todos" (Mis Proyectos) parpadeará para confirmarte visualmente que todo ha ido bien.
- **Nuevas Animaciones de Celebración 🎉:**
  - **Lluvia de Confeti al ver Terminados:** Cada vez que pulses la pestaña o filtro de "Terminados" en la pantalla de inicio, serás recibido con una lluvia de 4 segundos de pequeños y coloridos confetis redondos para celebrar tu esfuerzo. Además, si tienes el sonido activado, sonará un breve y alegre arpegio musical.
  - **Corazón y Felicidades mejorados:** Cuando marques un proyecto como "Terminado", el gran corazón dibujado y la palabra "¡Felicidades!" ahora lucen mucho mejor: el texto está enmarcado en un elegante rectángulo blanco con sombra y borde a juego para que se lea perfectamente. La duración de la animación y del confeti se ha ampliado a 6.5 segundos, y se ha triplicado la cantidad de confeti (250 piezas) para que llene completamente la pantalla y dure más. Además, si tienes el sonido activado, la animación irá acompañada de una melodía triunfal de 6 segundos generada internamente por la app. **(Nuevo):** El color del texto "¡Felicidades!", su borde y el trazo del corazón grande ya no son de color fijo, sino que se tiñen automáticamente del color oscuro de tu tema actual.
  - **Layout Optimizado:** Dentro de la carpeta "Compartidos", los botones superiores se han reorganizado para que "Guardar", "Pasar a mis proyectos", "Borrar" e "Inicio" estén todos visibles y accesibles en la misma línea, quedando el botón de "Borrar" habilitado para que puedas deshacerte del archivo compartido en cualquier momento sin necesidad de importarlo.
  - **Ajuste visual en Tarjetas:** Se ha añadido un pequeño margen inferior (aire) debajo del distintivo de proyecto importado en la tarjeta para evitar que quede demasiado pegado al texto inferior y mejorar la lectura visual.
- **Sonido especial en Proyectos:** Se ha programado un nuevo sonido agradable (tipo "ding!") exclusivo para cuando tocas encima de la tarjeta de un proyecto en la lista de Inicio o en Compartidos. Este sonido respeta el botón global de "Sonido: sí/no" de la pantalla de inicio, por lo que si tienes los sonidos apagados, la tarjeta seguirá siendo completamente silenciosa.
- **Aguja Utilizada Dinámica:** En la pestaña General de los proyectos, debajo de "Técnica", se ha añadido el campo "Aguja utilizada en el proyecto". Este campo es inteligente: si eliges la técnica "Punto", muestra tu lista de agujas de punto; si eliges "Ganchillo", muestra tu lista de ganchillos; y si eliges otra técnica, te permite escribir libremente. Al cambiar de técnica, el campo se vacía automáticamente para evitar errores.
- **Formularios más limpios:** 
  - Al pulsar en "Nuevo proyecto", el formulario ahora está muy simplificado para que sea rápido empezar a trabajar. Solo te preguntará por los datos indispensables: Nombre, Tipo, Técnica, Estado y Fecha de inicio. Todo lo demás (medidas, lanas, agujas, patrones, etc.) estará oculto en este primer paso, pero podrás rellenarlo cómodamente más adelante pulsando en "Editar proyecto".
  - En el formulario de "Editar proyecto", justo debajo de las notas iniciales, se ha añadido una línea informativa de solo lectura que te muestra la fecha exacta en que creaste el proyecto ("Fecha inicio") y la fecha en que lo terminaste ("Fecha fin", que se rellena de forma automática e independiente cuando cambias el estado del proyecto a "Terminados").
  - En el formulario de Lanas e Hilos se ha reorganizado el orden para crear un flujo más natural al editar un ovillo. Se ha movido el campo "Ubicación" al final del todo (debajo de Notas), se han movido los campos "Comprado en" y "Precio/ovillo" debajo de "Ganchillo - aguja recomendada", y se ha eliminado el campo sobrante "Aguja Recomendada en Proyectos" para no sobrecargar el formulario.
- **Limpieza de repositorio:** Se han eliminado los scripts temporales de Python (`.py`) utilizados para la automatización e inserción de código durante el desarrollo de las últimas versiones, dejando el entorno limpio para subir a GitHub.

### Arreglos y Ajustes Visuales
- **Títulos de Historial Discretos:** Los modales de "Historial de Movimientos" se han estilizado para ser más funcionales y discretos. Ahora el título utiliza una fuente más pequeña, se mantiene todo en una única línea (icono, texto y nombre del artículo), y se oculta automáticamente con puntos suspensivos si el nombre es demasiado largo, dejando de ser el foco principal del modal.
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
