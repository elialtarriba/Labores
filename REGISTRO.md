# Registro CODEX de Labores

> Documento principal obligatorio: `../CODEX.md`. Antes de cualquier cambio hay que leer primero ese archivo. Este registro se conserva como historial inicial.

Este archivo protege el comportamiento existente de la app. Antes de hacer cambios futuros hay que revisar este registro y las capturas guardadas en `CODEX/capturas`.

## Ubicacion de trabajo

- Carpeta indicada por Elisabeth: `iCloudDrive/CODEX/Labores`.
- Archivos modificados: `index.html` y `sw.js`.
- Archivos creados: `CODEX/REGISTRO.md`, `CODEX/pdf-lib.min.js` y las tres capturas de `CODEX/capturas`.
- En los siguientes encargos, revisar primero este registro y trabajar sobre esa carpeta de iCloud Drive.

## Norma de trabajo

- Leer completos `CODEX.md` y `REGISTRO.md` antes de empezar cualquier encargo.
- Consultarlos para conocer todo lo existente, lo añadido anteriormente y el comportamiento que no se debe tocar.
- No modificar funciones, estilos, datos ni pantallas que no formen parte del encargo concreto.
- Mantener compatibilidad con los datos ya guardados en el navegador.
- Probar los cambios en móvil y escritorio siempre que sea posible.
- Después de cada cambio, añadir una entrada nueva tanto en `CODEX.md` como en `REGISTRO.md`, sin borrar el historial anterior.
- Cada entrada debe incluir fecha, encargo, archivos tocados, cambios exactos, comportamiento protegido, migraciones o formatos nuevos y pruebas ejecutadas.
- No dar un trabajo por terminado hasta que esté comprobado y documentado en los dos archivos activos de la raíz.
- Después de cada cambio, actualizar siempre la entrega definitiva en `iCloud Drive/CODEX/Labores`.
- Si la carpeta local y la carpeta de iCloud son distintas, copiar expresamente los archivos; no suponer sincronización automática.
- Antes de terminar, comparar `index.html`, `sw.js`, `CODEX.md`, `REGISTRO.md` y cualquier recurso modificado para confirmar que la copia de iCloud sea idéntica.

## Objetivo de este registro

- Mantener una memoria acumulativa de la app para poder seguir añadiendo cosas con seguridad.
- Evitar repetir funciones, perder datos o romper comportamientos que ya funcionan.
- Dejar claro para futuros encargos qué existe, qué se añadió y qué partes no deben modificarse.
- `CODEX/REGISTRO.md` es únicamente el historial inicial conservado; los registros que deben actualizarse siempre son `CODEX.md` y `REGISTRO.md` de la raíz.

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
- `Número / Talla` se corrigió el 13 de junio de 2026 para usar una sola lista según el tipo; `Marca` usa `Marcas de agujas` en Configuración.
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

## Cambios realizados el 12 de junio de 2026, 23:50

- Se corrigieron los selectores de Composición y Tiendas para mostrar `Sin composición` y `Sin tienda` sin rayas.
- Se completan automáticamente los emojis ausentes de todas las listas configurables sin cambiar los emojis elegidos por la usuaria.
- Se eliminaron las caras sonrientes usadas como sustituto genérico.
- Se fijaron los iconos solicitados: `🟠` punto, `🟡` ganchillo, `🥢` marcas de agujas y `🛍️` tiendas.
- Se corrigió la selección de portada y el borrado de fotos en Editar accesorio.
- Se actualizó la caché a `labores-v58-cache`.
- Se añadieron como referencia `IMG_6926.PNG` a `IMG_6934.PNG`.

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Pruebas

- Sintaxis de `index.html` y `sw.js`: correcta.
- Migración de emojis antiguos: correcta.
- Borrado y cambio de portada de Accesorios: correctos con identificadores numéricos o de texto.
- Vista de escritorio sin errores de consola, sin filas vacías de emoji y sin sustitutos `😊`.

## Corrección del 13 de junio de 2026, 00:04

Se volvió a comprobar el flujo real de fotografías de Editar accesorio porque en Firefox la selección y el borrado todavía podían fallar visualmente o dejar referencias rotas.

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios

- Las papeleras de portada y galería actualizan la pantalla inmediatamente.
- Los archivos se borran definitivamente al guardar, sin borrar imágenes que aún estén en uso.
- Se normalizan claves locales y URL de las fotos.
- Se limpian las referencias antiguas cuyo archivo ya no existe.
- La selección de portada comprueba que la fotografía siga disponible.
- Caché actualizada a `labores-v59-cache`.

### Pruebas ejecutadas

- Recorrido completo en navegador con dos imágenes almacenadas en IndexedDB.
- Lupa y visor ampliado: correctos.
- Elegir portada, guardar y reabrir: correcto.
- Portada anterior devuelta a la galería: correcto.
- Borrar foto de galería, guardar y reabrir: correcto.
- Borrar portada, guardar y reabrir: correcto.
- Eliminación física de los dos archivos en IndexedDB: correcta.
- Limpieza de referencias antiguas rotas: correcta.
- Sintaxis JavaScript: correcta.

## Corrección del 13 de junio de 2026, 00:10

La captura `IMG_6937.PNG` mostró que `Número / Talla` de Editar Aguja combinaba dos listas de Configuración y añadía números de otras agujas.

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios

- Agujas usan únicamente la lista `Tallas de punto`.
- Ganchillos usan únicamente la lista `Tallas de ganchillo`.
- Cambiar `Tipo` actualiza inmediatamente `Número / Talla`.
- Se dejan de añadir números guardados en otras agujas.
- Se conserva únicamente el valor antiguo del registro editado si no figura en la lista correspondiente.
- Caché actualizada a `labores-v60-cache`.

### Pruebas ejecutadas

- Aguja circular con una lista de Punto exclusiva: correcta.
- Ganchillo con una lista de Ganchillo exclusiva: correcta.
- Ausencia de valores de la lista contraria: comprobada.
- Ausencia de números procedentes de otras agujas: comprobada.
- Conservación del valor antiguo del registro actual: comprobada.
- Sintaxis JavaScript: correcta.

## Función del 13 de junio de 2026 - Compartir proyectos

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios

- Botón `Compartir proyecto` dentro del proyecto abierto.
- Registro del nombre de la persona destinataria y desplegable `Compartido con`.
- Barra alargada `Compartidos` en Inicio para los proyectos recibidos.
- Importación aditiva: el proyecto recibido se añade como uno nuevo sin reemplazar datos.
- Paquete completo con fotos, PDFs, galería, tiempos, contadores, calculadora de puntos, finanzas, notas, medidas y materiales.
- Precios de recursos incorporados al proyecto compartido para mantener los cálculos financieros sin depender del inventario original.
- Identificadores y claves multimedia nuevos al importar para que la copia sea independiente.
- Nombre de la persona remitente configurable y visible en los proyectos recibidos.
- Manual actualizado y caché `labores-v62-cache`.

### Pruebas ejecutadas

- Sintaxis de `index.html` y `sw.js`: correcta.
- 325 identificadores HTML comprobados sin duplicados.
- Inicio revisado en escritorio.
- Inicio revisado a 390 x 844 sin desbordamiento horizontal.
- Apertura de `Compartidos`, panel de importación y estado vacío: correctos.
- Consola del navegador: sin errores ni avisos.
- Actualización real de la caché offline: correcta.

## Norma reforzada del 13 de junio de 2026 - Memoria acumulativa

### Archivos modificados

- `CODEX.md`
- `REGISTRO.md`

### Cambios

- Lectura obligatoria de los dos registros activos antes de cada encargo.
- Actualización obligatoria de ambos registros después de cada cambio.
- Conservación íntegra del historial anterior.
- Registro mínimo obligatorio de fecha, encargo, archivos, cambios, comportamiento protegido, migraciones o formatos y pruebas.
- Aclaración de que `CODEX/REGISTRO.md` es solo el historial inicial conservado.

### Comportamiento protegido

- Todos los trabajos futuros deben seguir esta norma para poder continuar ampliando la app sin perder ni romper funciones anteriores.

### Pruebas

- Norma comprobada en los dos archivos activos de la raíz.

## Ajuste del 13 de junio de 2026 - Historial de envío y recepción

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios

- La persona que envía conserva destinatario y fecha.
- La persona que recibe conserva remitente y fecha de recepción.
- El desplegable final muestra de forma compacta `Enviado a María`, `Enviado a 3 personas` o `Recibido de Elisabeth`.
- Al abrirlo aparecen las entradas completas con nombre, sentido del intercambio y fecha.
- Si un proyecto recibido se reenvía, el resumen muestra también cuántas personas lo han recibido después.
- Caché actualizada a `labores-v63-cache`.

### Comportamiento protegido

- El historial permanece dentro de cada proyecto y no ocupa espacio mientras el desplegable está cerrado.
- El remitente original de un proyecto recibido debe conservarse.

### Pruebas

- Sintaxis de `index.html` y `sw.js`: correcta.
- Resúmenes de envío, recepción y reenvío comprobados en el código.

## Corrección del 13 de junio de 2026 - PDF en proyectos e iPad

### Encargo

- Reparar el borrado individual de PDF y la lupa, revisando el flujo completo sin afectar a las funciones existentes del proyecto.

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios

- Identificadores de proyectos y PDF comparados de forma compatible con datos numéricos antiguos y datos de texto actuales.
- Borrado exacto del documento elegido, guardado inmediato de la lista y eliminación física posterior de su archivo local.
- Protección frente a claves todavía utilizadas por otro PDF del mismo proyecto.
- Compatibilidad conservada con el formato antiguo de un solo PDF mediante `pdfKey`.
- La lupa usa el visor PDF nativo a pantalla completa en iPad/iPhone y mantiene el visor integrado en ordenador.
- Safari recibe la nueva pestaña durante el toque, antes de consultar IndexedDB, evitando su bloqueo.
- Botón `Abrir completo` añadido al visor integrado como alternativa compacta.
- El visor se cierra y libera su recurso temporal si se borra el documento abierto.
- Caché actualizada a `labores-v64-cache`.

### Comportamiento protegido

- Varios PDF continúan coexistiendo en un proyecto sin reemplazarse.
- La papelera de un PDF no puede eliminar los demás.
- Copias de seguridad, proyectos compartidos y formatos antiguos mantienen sus PDF.
- Ningún otro dato o apartado del proyecto cambia al abrir o borrar un PDF.
- No hay migración ni dependencia nueva; el almacenamiento continúa siendo local y compatible.

### Pruebas

- Sintaxis de los tres scripts internos de `index.html` y de `sw.js`: correcta.
- Dos PDF simulados: borrado del segundo, conservación del primero y eliminación de la clave correcta.
- PDF antiguo en `pdfKey`: borrado correcto.
- Compatibilidad de identificadores numéricos y de texto: correcta.
- Detección de iPad, iPadOS en modo escritorio y Mac: correcta.
- Apertura de pestaña anterior a la lectura asíncrona de IndexedDB: comprobada.
- 325 identificadores HTML únicos.
- Versión actualizada cargada sin errores de consola.
- Servidor local y enlace público activos con respuesta HTTP 200.

## Mejoras del 13 de junio de 2026 - Inventario, Configuración e informes

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios

- `Aguja utilizada` de Editar Lana se muestra como `Aguja Recomendada en Proyectos`; el campo interno anterior se mantiene por compatibilidad.
- Lanas, agujas y accesorios aceptan y conservan cantidad 0 cuando Cantidad está vacío.
- Las fichas nuevas siguen proponiendo cantidad 1, sin imponerla al guardar o reabrir.
- El historial añade saldo final a cada movimiento nuevo y registra los cambios de todos los campos editables de las fichas.
- Las ediciones muestran campos y valores anterior y nuevo; los cambios de fotos se identifican expresamente.
- Se completó el historial de movimientos con proyectos, incluida una ruta antigua de reserva de lana y las devoluciones al borrar un proyecto.
- Las 18 modificaciones directas de stock desde proyectos quedan registradas.
- Las 14 listas de Configuración se cierran cada vez que se entra en esa pantalla.
- Los títulos de los informes son `Informe Proyecto` e `Informe Proyecto Completo`.
- El botón final dice `Cerrar`.
- Los botones para enviar, imprimir y cerrar usan el mismo diseño 3D con intensidades distintas de los colores activos del tema.
- `WhatsApp / email` prepara el informe completo como archivo HTML y abre el menú de compartir del dispositivo; si no está disponible, descarga el archivo para adjuntarlo.
- Caché actualizada a `labores-v65-cache`.

### Compatibilidad y comportamiento protegido

- Los campos opcionales nuevos de movimientos son `saldo`, `detalle` y `tipo: edicion`; el historial antiguo sigue siendo válido.
- No se renombra ni migra el campo guardado `agujaUtilizada`.
- Ninguna lista de Configuración se modifica al cerrarse visualmente.
- El informe HTML conserva diseño, tablas, colores y fotos sin dependencias nuevas.
- Imprimir continúa permitiendo guardar el informe como PDF.
- Informe Completo sigue incluyendo evolución, notas y diario; Informe mantiene el resumen general y financiero.

### Pruebas

- Sintaxis de `index.html` y `sw.js`: correcta.
- 325 identificadores HTML únicos.
- Cantidad vacía y cero comprobadas en los tres inventarios.
- Historial de edición probado con varios campos y saldo cero.
- Las 18 rutas de cambio directo de stock de proyectos tienen registro asociado.
- Configuración probada en navegador con 14 listas y ninguna abierta al entrar.
- Etiqueta nueva y mínimo cero visibles; navegador sin errores de consola.
- Títulos, envío de archivo y botones 3D de informes comprobados.

## Mejoras del 13 de junio de 2026 - Tipo rápido de accesorio y manual visual

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios

- El selector `Tipo` de Nuevo/Editar accesorio incorpora al final `➕ Añadir…`.
- La opción abre una ventana sencilla para escribir icono y nombre.
- Al confirmar, el tipo se guarda en la lista existente `labores_tipos_accesorios`, aparece en Configuración y queda seleccionado en la ficha.
- Los nombres existentes se reutilizan sin crear duplicados.
- Cancelar o cerrar recupera la selección anterior.
- Se corrigió la comparación entre tipos guardados con nombre y tipos cuyo valor incluye icono.
- Las instrucciones de Inicio se sustituyeron por un manual visual, breve y completo, organizado por tareas de labores.
- Incluye proyectos, notas, fotos, PDF, materiales, historial, medidas, tiempo, contadores, calculadora, finanzas, informes, compartir, Configuración, copias e instalación.
- El diseño usa iconos, tarjetas, pasos numerados, etiquetas y avisos para facilitar una lectura inmediata.
- El manual nuevo se identifica como versión `66`; sus ediciones se guardan en `labores_manual_html_v66`.
- El contenido personalizado antiguo de `labores_manual_html` se conserva, pero deja de sustituir automáticamente el manual nuevo.
- Caché actualizada a `labores-v66-cache`.

### Compatibilidad y comportamiento protegido

- No hay un formato nuevo para tipos de accesorios: siguen formando parte de Configuración y de las copias existentes.
- Crear un tipo no guarda ni modifica la ficha de accesorio hasta pulsar `Guardar accesorio`.
- Se conservan tipos antiguos con o sin icono y el manual personalizado anterior no se elimina.
- No deben alterarse el resto del inventario, los proyectos, multimedia, compartir ni informes.

### Pruebas

- Sintaxis de `index.html` y `sw.js`: correcta.
- 329 identificadores HTML únicos.
- Opción `➕ Añadir…` situada al final y ventana propia abierta correctamente.
- Tipo existente seleccionado sin duplicado.
- Tipo nuevo creado en una prueba aislada, seleccionado y visible inmediatamente en Configuración.
- Manual v66 comprobado en navegador después de renovar la caché.
- Siete secciones y tres tarjetas rápidas visibles.
- Vista iPad 820 x 1180 sin desbordamiento horizontal.

## Norma del 13 de junio de 2026 - Actualización obligatoria de iCloud

### Archivos modificados

- `CODEX.md`
- `REGISTRO.md`

### Norma permanente

- Cada cambio debe copiarse o actualizarse siempre en `iCloud Drive/CODEX/Labores`.
- La carpeta local y la carpeta de iCloud pueden ser ubicaciones distintas; por ello se debe realizar la copia expresamente.
- Antes de cerrar un encargo, se deben comparar los archivos principales y los recursos tocados para comprobar que ambas ubicaciones contienen exactamente la misma versión.
- Actualizar los registros locales sin actualizar sus copias de iCloud no completa el trabajo.

### Funciones reconfirmadas

- `➕ Añadir…` está al final de Tipo en Nuevo/Editar accesorio.
- Crear un tipo lo guarda en la lista compartida con Configuración y lo selecciona en la ficha.
- Las instrucciones de Inicio corresponden al manual visual v66, con siete apartados breves y completos, iconos, tarjetas y pasos numerados.

### Comportamiento protegido

- Esta comprobación de iCloud es obligatoria en todos los encargos futuros.
- `CODEX.md` y `REGISTRO.md` de la raíz siguen siendo los dos registros activos; `CODEX/REGISTRO.md` se conserva como historial inicial.

### Pruebas

- Leídos completos los tres archivos `.md` existentes.
- Selector y ventana `➕ Añadir…` comprobados en el código actual.
- Persistencia en `labores_tipos_accesorios` y actualización de Configuración comprobadas.
- Manual visual v66 y sus siete secciones comprobados.

## Mejoras del 13 de junio de 2026 - Listas limpias y calculadora a pantalla completa

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios

- Las listas configurables dejan de mezclar sus opciones con valores encontrados en fichas antiguas.
- Se corrigieron expresamente marcas de lana, composiciones, tiendas y marcas de agujas, que eran los cuatro selectores que concatenaban datos históricos del inventario.
- El resto de listas configurables fue auditado para confirmar que usa únicamente su lista de Configuración.
- Al editar una ficha antigua cuyo valor ya no existe en Configuración, solo esa ficha conserva temporalmente su propio valor y lo identifica como `guardado en esta ficha`; no aparece en fichas nuevas ni en otros registros.
- Al abrir una ficha nueva se limpian también esas opciones temporales para impedir que pasen de una edición a otra.
- Se retiraron las rayas decorativas del principio y final de todas las primeras opciones vacías: ahora se lee `Sin especificar`, `Sin marca`, `Selecciona`, `Elige...`, etc.
- La calculadora ocupa toda la pantalla disponible en móvil, sin marco, esquinas redondeadas, sombra ni relleno exterior.
- El título y el nuevo botón 3D `Salir` forman parte de la propia calculadora.
- `Salir` cierra la calculadora y vuelve directamente a `Mis Proyectos`.
- Caché offline actualizada a `labores-v67-cache`.

### Compatibilidad y comportamiento protegido

- No se modifica ni se borra ningún dato histórico del inventario.
- Los valores antiguos solo se muestran en la ficha concreta que ya los tenía, evitando perderlos al guardar una edición.
- Las listas de Configuración siguen siendo la única fuente de opciones normales.
- Los selectores de materiales de proyecto continúan mostrando el inventario porque no son listas de Configuración.
- Se mantienen intactos los botones, pantalla, herramientas de porcentajes, sonidos, colores y operaciones de la calculadora.

### Pruebas

- Sintaxis correcta de los tres scripts internos de `index.html` y de `sw.js`.
- 329 identificadores HTML comprobados sin duplicados.
- Auditoría completa sin opciones vacías que conserven rayas decorativas.
- Auditoría sin concatenaciones de `db.llanas`, `db.agujas` o `db.accesorios` en los selectores configurables.
- Calculadora comprobada en navegador a 390 x 844: modal y carcasa miden 390 x 844, con borde 0, radio 0, sombra nula y sin desbordamiento horizontal.
- Botón `Salir` comprobado: cierra el modal y deja activa la vista `Mis Proyectos`.
- Renovación de caché comprobada al pasar de la calculadora anterior a la versión 67 tras recargar.

## Correcciones del 13 de junio de 2026 - Versión 68

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`
- `CODEX/REGISTRO.md`

### Norma permanente

- Leer los archivos `.md` antes de cada encargo.
- Registrar cada cambio en los Markdown activos.
- Copiar siempre los archivos finales a `iCloud Drive/CODEX/Labores`.
- Comparar la carpeta local con iCloud antes de considerar terminado el trabajo.

### Cambios

- El visor PDF pasa a pantalla completa dentro de la app y muestra `Salir del PDF`.
- Tocar el PDF o la lupa abre el mismo visor interno; se elimina `Abrir completo` y la apertura automática en otra pestaña.
- Duplicar inventario o cálculos pide confirmación mediante una ventana propia.
- En las tarjetas de lanas, agujas y accesorios, `Duplicar` queda entre stock y precio.
- Los selectores configurables muestran exclusivamente las opciones actuales de Configuración.
- Se elimina el comportamiento transitorio `guardado en esta ficha` de v67 porque seguía haciendo aparecer elementos no configurados.
- Las primeras opciones vacías quedan sin rayas decorativas.
- `Tipo` de proyecto incorpora al final `➕ Añadir…`, con guardado inmediato en Configuración y selección en la ficha.
- La calculadora queda a pantalla completa, sin bordes, sin título y sin emoji, con un `Salir` pequeño.
- Los informes de Finanzas usan texto legible en el menú nativo de compartir para evitar el rechazo de archivos HTML por WhatsApp.
- Cuando no existe el menú nativo, el informe HTML se descarga como alternativa.
- Se elimina todo el código de Cloudinary. No queda dirección, preset ni función de subida; las imágenes se guardan localmente en IndexedDB.
- La caché cambia de `labores-v67-cache` a `labores-v68-cache`.

### Comportamiento protegido

- No se eliminan proyectos, inventario, fotos, PDF ni valores históricos guardados.
- Los valores históricos que ya no existen en Configuración permanecen en el dato guardado, pero no se muestran como opciones de la lista.
- Los selectores de inventario usados para asignar materiales a un proyecto no se confunden con listas configurables.
- Se conserva la impresión del PDF y la descarga de respaldo del informe.

### Pruebas

- Sintaxis de los cuatro scripts internos de `index.html` y de `sw.js`: correcta.
- 335 identificadores HTML únicos.
- PDF: todos los accesos normales usan `openPdfPreview`; no queda `openPdfDocument`.
- Duplicados: las dos funciones públicas pasan por `requestDuplicateAction`.
- Inventario: tres pies de tarjeta con orden stock, duplicar y precio.
- Listas: sin `guardado en esta ficha`, sin `new Option` y sin rayas en la primera opción.
- Proyecto: opción final `➕ Añadir…`, ventana propia y guardado mediante `saveProjectTypes`.
- Calculadora: sin `.calculator-title`; borde, radio y sombra exterior a cero.
- Informe: `navigator.share` recibe título y texto, sin propiedad `files`.
- Cloudinary: búsqueda completa sin coincidencias.
- Caché: `labores-v68-cache`.
- `git diff --check -- index.html sw.js`: correcto.
- Prueba visual no usada como validación porque el navegador integrado mantenía una copia servida anteriormente y no alcanzó el servidor aislado de la versión actual.

## Correcciones del 13 de junio de 2026 - Versión 69

### Cambios

- La cabecera del proyecto muestra el título y el tipo en una primera fila y sitúa los botones debajo, evitando que el nombre se parta letra por letra en móvil.
- El `Tipo` del proyecto abierto termina en `➕ Añadir…`. El alta permite escoger emoji y nombre, selecciona el nuevo tipo y lo guarda en la lista compartida con Configuración.
- El visor PDF usa PDF.js 6.0.227 incluido en la app: páginas completas ajustadas al ancho, sin movimiento lateral y con desplazamiento vertical.
- Los PDF siguen siendo locales. PDF.js, worker, mapas de caracteres, fuentes y WASM están dentro de `CODEX/` y no requieren subir el documento a ningún servicio.
- Se mantienen `Imprimir` y `Salir del PDF`.
- Caché cambiada a `labores-v69-cache`.

### Archivos

- Modificados: `index.html`, `sw.js`, `CODEX.md`, `REGISTRO.md` y `CODEX/REGISTRO.md`.
- Añadidos: `CODEX/pdf.min.mjs`, `CODEX/pdf.worker.min.mjs`, `CODEX/cmaps/`, `CODEX/standard_fonts/`, `CODEX/wasm/` y `CODEX/pdfjs-LICENSE.txt`.

### Pruebas

- Sintaxis de la app, service worker y módulos PDF correcta.
- Cabecera de dos filas y título con corte normal comprobados en código.
- Opción final `Añadir…`, ventana de emoji/nombre, guardado en Configuración y actualización del proyecto abierto comprobados.
- Visor sin `iframe`, sin desbordamiento horizontal y con escala exacta al ancho comprobado.
- La prueba visual automática no pudo conectarse al servidor local aislado; se debe confirmar el aspecto final en el dispositivo real.

## Ajuste del 13 de junio de 2026 - Versión 70

### Cambios

- Los tres botones superiores de `Informe Proyecto` e `Informe Proyecto Completo` tienen el mismo ancho y la misma altura.
- La barra usa una cuadrícula de tres columnas iguales en móvil y escritorio.
- El relieve oscuro se sustituye por bases claras del tema: camel, camel claro y terracota claro.
- Los botones conservan brillo superior, sombra exterior y movimiento hacia abajo al pulsarlos, haciendo visible el efecto 3D sobre la barra marrón.
- Caché actualizada a `labores-v70-cache`.

### Compatibilidad y pruebas

- Se conserva sin cambios el envío por WhatsApp/email, la impresión, el cierre y todo el contenido de ambos informes.
- No hay cambios de datos ni migraciones.
- Sintaxis de `index.html` y `sw.js` correcta.
- Barra compartida por ambos informes, tres columnas, tamaños iguales y sombras claras comprobados en código.
- El navegador integrado bloqueó la previsualización del archivo local por seguridad; queda la comprobación visual en el dispositivo real.

## Correcciones del 14 de junio de 2026 - Versión 71

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios

- Cabecera móvil con nombre legible a ancho completo y botones debajo.
- `➕ Añadir…` garantizado al final de Tipo, con emoji, nombre, compatibilidad con tipos antiguos y guardado en Configuración.
- Visor PDF al ancho, sin desplazamiento lateral, con scroll vertical, menor consumo de memoria y vista alternativa si falla el dibujo.
- Corrección de PDF.js 6: se destruye `PDFDocumentLoadingTask` y no el documento, cuyo método `destroy()` no existe.
- Compartidos excluidos de todos los contadores y filtros de proyectos propios.
- Materiales compartidos de solo lectura, sin operaciones sobre el inventario local.
- Copia del compartido como Idea o Proyecto, duplicando fotos y PDF y conservando el recibido original.
- Informes financieros enviados y descargados como `.pdf` `application/pdf`, nunca como texto.
- Caché actualizada a `labores-v71-cache`.

### Comportamiento protegido

- Los compartidos conservan pestañas, medidas, fotos, galería, PDF, cálculos, finanzas e informes.
- Pueden guardar nuevas fotos y PDF sin tocar las existencias locales.
- La copia personal es independiente y puede utilizar después las listas y el inventario propios.
- Se mantienen proyectos, inventario, datos históricos y formatos PDF antiguos.

### Pruebas

- Sintaxis de `index.html` y `sw.js`: correcta.
- 339 identificadores HTML únicos.
- PDF real de 2,2 MB cargado y primera página dibujada con PDF.js.
- Generación local de PDF verificada con cabecera `%PDF-`.
- Compartición comprobada como archivo `application/pdf`, sin envío de texto como sustituto.
- Separación de estadísticas, filtros y materiales compartidos comprobada.
- Vista móvil inicial 390 x 844 cargada; la apertura automatizada de proyectos personales fue bloqueada por privacidad.

## Corrección del 14 de junio de 2026 - Versión 72

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Envío PDF de los dos informes

- Corregido el error mostrado al pulsar `Enviar PDF` en `Informe Proyecto` y `Informe Proyecto Completo`.
- Las fotografías se reducen a un máximo de 1400 píxeles antes de entrar en el PDF, evitando el consumo de memoria de las imágenes originales de cámara en iPhone.
- El texto del informe filtra caracteres incompatibles con la fuente PDF y conserva de forma segura los datos españoles y financieros.
- La biblioteca PDF puede recargarse localmente si una versión anterior de la caché no la dejó disponible.
- Hay un segundo intento automático sin imágenes si una foto concreta impide completar el documento; el resultado sigue siendo un PDF con el contenido del informe.
- WhatsApp, Mail y las demás aplicaciones del menú de compartir reciben un archivo `.pdf` `application/pdf`, no texto.
- Caché actualizada a `labores-v72-cache`.

### Comprobaciones

- Informe normal: `Informe-normal.pdf`, `application/pdf`, cabecera `%PDF-`.
- Informe completo con galería y notas: `Informe-completo.pdf`, `application/pdf`, cabecera `%PDF-`.
- Caracteres españoles, euro, libra, comillas, viñetas y caracteres pegados conflictivos procesados.
- Ambos botones y ambos modos usan el generador corregido.
- Compartición configurada con `files: [file]`; sin texto como sustituto.
- Sintaxis correcta de `index.html` y `sw.js`; 339 identificadores únicos.
- Aplicación completa cargada en el navegador local. La apertura automática de un proyecto personal fue bloqueada por la política de privacidad del navegador y no se intentó eludirla.

## Corrección del 14 de junio de 2026 - Versión 73

### Problema

- En Safari de iPhone, `Enviar PDF` podía no hacer nada porque el código generaba el archivo después del toque y llamaba a `navigator.share()` tras varios `await`.
- Safari requiere conservar la activación directa del usuario para abrir WhatsApp, Mail o el menú del sistema.

### Cambios

- Preparación automática del PDF al abrir `Informe Proyecto` o `Informe Proyecto Completo`.
- Estado inicial visible `⏳ Preparando PDF…` y estado final `📄 Enviar PDF`.
- Notificación al pulsar mientras se prepara y botón `↻ Reintentar PDF` si ocurre un error.
- Compartición síncrona desde el toque, sin espera previa, con un archivo `.pdf` `application/pdf` ya preparado.
- Descarga directa conservada para navegadores sin Web Share de archivos; si Safari rechaza el menú, el botón cambia a `⬇️ Descargar PDF`.
- Caché actualizada a `labores-v73-cache`.

### Comprobaciones

- La llamada a `navigator.share()` se ejecuta directamente desde el botón.
- Archivo de prueba recibido: `Informe-Proyecto-Prueba.pdf`, `application/pdf`.
- Respaldo mediante segundo toque de descarga comprobado en código.
- Modos normal y completo conectados al mismo flujo corregido.
- Tres scripts internos y `sw.js` con sintaxis correcta.
- 340 identificadores HTML únicos.
- No se envió información real a WhatsApp, Mail ni terceros.

## Mejoras del 14 de junio de 2026 - Versión 74

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios

- Los dos informes financieros muestran `WhatsApp / email` al terminar de preparar su PDF.
- Se retiró la comprobación insegura de `navigator.canShare()` y el menú nativo se abre directamente desde el toque con el archivo PDF ya preparado.
- Safari ya no puede terminar silenciosamente: se informa de preparación, error, reintento o descarga de respaldo.
- Las copias personales de proyectos recibidos conservan el remitente y la fecha mediante `compartidoCopiaPor` y `compartidoCopiaFecha`.
- `Compartido por...` queda visible en tarjetas de Mis Proyectos, en la cabecera del proyecto y en su historial compacto.
- Botón grande `← Inicio` con relieve 3D en la ficha del proyecto.
- Inicio reorganizado en dos filas de controles 3D, con el botón `+` ocupando ambas filas.
- Texto simplificado a `Base de datos local`; categorías más compactas para mostrar más proyectos.
- Sonido global activable desde Inicio y sincronizado con la calculadora.
- Selector rápido de temas pastel, Blanco suave, Negro difuminado, Predeterminado y nuevo Mixpastel.
- Manual v74 con índice enlazado, explicación de las novedades y correo final `lisaltarriba@gmail.com`.
- Caché actualizada a `labores-v74-cache`.

### Compatibilidad y comportamiento protegido

- No se borran ni migran proyectos existentes; los dos campos de procedencia son opcionales y aditivos.
- Se mantienen los PDF locales, las fotos, los dos tipos de informe y la descarga de respaldo.
- Las preferencias anteriores de sonido y tema continúan usando las mismas claves locales.

### Pruebas

- Sintaxis de scripts y service worker correcta; 353 identificadores únicos.
- Inicio comprobado en escritorio y a 390 x 844 sin desplazamiento horizontal.
- Mixpastel, sonido global, índice enlazado y correo final comprobados en navegador.
- Consola sin errores ni avisos.
- Flujo PDF probado con archivo `.pdf` `application/pdf` para éxito de `navigator.share`, excepción inmediata, rechazo asíncrono y ausencia de Web Share.
- Descarga o aviso visible confirmado en todos los fallos; no se envió información real a terceros.
- Origen de compartidos copiados conservado y visible comprobado automáticamente.

## Mejoras del 14 de junio de 2026 - Versión 75 (Encargo diseño cabecera móvil)

### Archivos modificados

- `index.html`
- `LaboresV15.html` (copia)
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios realizados

- Reorganización de la cabecera en la vista detalle del proyecto para optimizar espacio en móviles.
- Los botones superiores pasan a estar en una fila compacta: `← Inicio` (rectangular al principio), seguido de `Compartir proyecto` y `Guardar`.
- `Compartir proyecto` y `Guardar` ahora comparten el mismo color, relieve 3D y diseño.
- El nombre del proyecto y el botón `Borrar` ocupan la fila inferior, y el botón papelera ahora se sitúa a la derecha del título, con formato cuadradito.
- Se actualizó el service worker a `labores-v75-cache`.

### Comportamiento protegido

- No se han borrado funciones previas, se mantienen intactas todas las operaciones de guardado, borrar y compatibilidad con versiones compartidas.
- En dispositivos de escritorio se mantiene la estructura y las funcionalidades.

### Pruebas ejecutadas

- [x] Sintaxis de HTML y CSS revisada.
- [x] Cabecera visual de `index.html` y estructura `display: grid` en la media query.
- [x] Posicionamiento correcto y formato 3D en los botones de Compartir y Guardar.
- [x] Service worker actualizado correctamente.

## Mejoras del 14 de junio de 2026 - Versión 76 (Ajuste visual botones inicio y cabecera)

### Archivos modificados

- `index.html`
- `LaboresV15.html` (copia)
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios realizados

- Al entrar en un proyecto (vista detalle), se ocultan completamente los botones de la cabecera general (`Buscar`, `Base de datos local`, `Sonido`, `Temas`) para dejar la interfaz más limpia.
- Se ha reducido la altura de los botones de la barra superior (Buscar, Base de datos, Sonido, Temas) para que ocupen menos espacio vertical.
- El botón `+ Nuevo proyecto` ahora es perfectamente cuadrado (chiclet 3D), dejando de ser ovalado, y su altura coincide exactamente con la suma de las dos filas de los botones adyacentes.
- Diseño 3D en todos los botones mencionados, con un color marrón claro oscuro/pastel (`#A88675` a `#8D6B5A`) y texto claro (`#FFF3EB`), creando una experiencia táctil satisfactoria.

### Comportamiento protegido

- No se han borrado funciones previas.
- Las funciones de cambio de tema, mute, búsqueda y base de datos local siguen intactas, solo se ha modificado la capa visual (CSS).

## Mejoras del 14 de junio de 2026 - Versión 77 (Corrección de errores: PDF y Visor)

### Archivos modificados

- `index.html`
- `LaboresV15.html` (copia)
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios realizados

- **Corrección de bloqueo al preparar PDF:** Se corrigió la ruta de la biblioteca `pdf-lib.min.js`, que apuntaba erróneamente a la carpeta CODEX. Al no encontrar el archivo, la aplicación se quedaba atascada esperando. Ahora el PDF se genera correctamente y el botón cambia a 'WhatsApp / email' sin quedarse bloqueado.
- **Corrección del visor de PDF (lupa):** Se forzó mediante CSS que el documento PDF renderizado se encaje estrictamente al ancho de la pantalla del dispositivo. Esto elimina el molesto rebote o desplazamiento horizontal al intentar hacer scroll vertical.

### Comportamiento protegido

- No se han modificado las lógicas internas de guardado ni de cálculos financieros.
- La exportación de datos sigue intacta y los documentos se generan con total privacidad de forma local.

## Mejoras del 14 de junio de 2026 - Versión 78 (Rediseño PDF y Ajustes UI)

### Archivos modificados
- `index.html`
- `LaboresV15.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios realizados
- **Botones de Inicio**: Se unificó la altura y el ancho de los 4 botones principales (Buscar, Base de datos, Sonido, Temas) utilizando CSS, evitando saltos de línea largos mediante truncamiento (`text-overflow: ellipsis`). 
- **Botón "Nuevo Proyecto"**: Se incrementó notoriamente el relieve y sombra 3D, añadiendo un degradado vertical para destacar el botón frente a los demás y asegurando que cubra las dos filas visualmente.
- **Scroll del Visor PDF**: Se blindó la estructura del visor de PDF para iOS Safari forzando `width: 100vw !important` y deshabilitando cualquier desbordamiento mediante `overflow-x: hidden !important` tanto en la hoja de estilos como en el script que inyecta los `canvas` (`pdf.js`).
- **Web Share en iOS**: Al detectar que WhatsApp iOS falla recurrentemente si se envía un texto, título y un archivo a la vez mediante `navigator.share`, se han eliminado los campos superfluos, compartiendo exclusivamente el bloque de archivos (`files: [file]`).
- **Rediseño Estructural del PDF Exportado**: Se reemplazó la extracción de texto lineal (sin formato) por un "motor de renderizado" local implementado directamente sobre `pdf-lib`. Ahora la app dibuja cabeceras, fondos en colores pastel crema y texto terracota, líneas divisoras, y organiza estructuradamente tablas completas (Materiales y Mano de Obra) emulando exactamente la interfaz visual del reporte HTML original.

### Comportamiento protegido
- Generación 100% offline y privada (dibujo de PDF a nivel local en el dispositivo del usuario).

## Actualización Rápida (14 de junio 2026 - Temas Elibi)
- Se han añadido dos temas nuevos basados en paletas pastel: "Elibi 1" y "Elibi 2".
- Los colores se extrajeron de capturas de calculadoras.
- Se agregaron las opciones al selector de temas de la interfaz de inicio.

## Mejoras del 14 de junio de 2026 - Ajustes de UI y PDF (Versión 79)

### Archivos modificados
- `index.html`
- `LaboresV15.html`

### Cambios realizados
- **Nombres de Temas**: Se actualizó `applyTheme` para cambiar el texto del botón `🎨 Temas` al nombre del tema activo.
- **Temas Elibi**: Se inyectaron las variables CSS correctas de los temas `elibi1` y `elibi2` en `window._themes` para que funcionen correctamente.
- **Grilla de botones**: Se forzó la grilla a `1fr 1fr` estrictos y se igualó la altura del botón "+" para encajar exactamente en el bloque 2x2.
- **Scroll de PDF en iOS**: Se añadió bloqueo total en el `body` (`position: fixed`, `overflow: hidden`) al abrir el PDF.
- **Fallback de WhatsApp**: Si `navigator.share` falla al compartir el PDF en iOS, se captura el error y se ejecuta una descarga directa del archivo como plan de contingencia.

## Mejoras del 14 de junio de 2026 - Rediseño de Inventario (Versión 80)

### Archivos modificados
- `index.html`
- `LaboresV15.html`

### Cambios realizados
- **Intercambio visual en Lanas, Agujas y Accesorios**: Se reestructuró la maquetación HTML de las tarjetas de inventario.
- **Stock reubicado**: La información de "STOCK: X" se ha movido a la esquina superior derecha (antiguo lugar de la basura) y se le ha dado formato de "medalla/badge" para destacar visualmente.
- **Botones de acción agrupados**: El botón redondo de basura se ha eliminado. En su lugar, se ha añadido un botón de borrar ("🗑 Borrar") con la misma forma "chiclet" y estilo visual que el botón "⧉ Duplicar". Ambos botones se han agrupado en la parte inferior izquierda de la tarjeta.
- **Limpieza del pie de tarjeta**: El pie inferior (`inventory-card-footer`) ahora aloja los botones de acción a la izquierda y el precio (si lo hay) a la derecha de forma más estructurada y balanceada mediante flexbox.

## Mejoras del 14 de junio de 2026 - Ajuste de Botones Principales (Versión 81)

### Archivos modificados
- `index.html`
- `LaboresV15.html`

### Cambios realizados
- **Botones uniformes**: Se forzó mediante CSS que el botón de "Base de datos local" (`.fb-pill`) se expanda exactamente al 100% del ancho de su columna y se centre el contenido. De esta forma, ya no es más corto que el botón de la paleta de colores y ambos miden visualmente lo mismo, generando una cuadrícula perfectamente cuadrada.

## Mejoras del 14 de junio de 2026 - Ajustes en Notas y Medidas (Versión 82)

### Archivos modificados
- `index.html`
- `LaboresV15.html`

### Cambios realizados
- **Fichas de Medidas**: Se ha rediseñado la tarjeta de medidas ("Medidas de personas") para adoptar la nueva estética del inventario. El antiguo botón de la papelera en la esquina superior se ha eliminado y ahora cuenta con un pie de tarjeta (`inventory-card-footer`) con el nuevo botón unificado de "🗑 Borrar".
- **Notas de Proyecto más compactas**: Se ha ajustado el CSS del historial de notas (`timeline-entry`) dentro de los proyectos. Se ha reducido drásticamente el espacio en blanco (el `padding` vertical bajó de 12px a 6px, y el margen entre elementos se redujo de 16px a 10px), haciendo que la lectura sea mucho más continua y aprovechando mejor el espacio de la pantalla. El cuadro para escribir una nueva nota también se ha acercado al listado.

## Mejoras del 14 de junio de 2026 - Ajustes de UI en Botones (Versión 83)

### Archivos modificados
- `index.html`
- `LaboresV15.html`

### Cambios realizados
- **Botón de Borrar en Medidas**: Se corrigió la falta de la clase CSS base (`.inventory-duplicate-btn`) que hacía que el botón de borrar en la lista de medidas no tuviera el estilo 3D de píldora que se esperaba.
- **Cuadrícula de Herramientas de Inicio**: Se forzó mediante CSS que todos los botones de la cuadrícula superior (`home-tool` y `fb-pill`) tengan exactamente el mismo padding, margen nulo, bordes redondeados idénticos (`16px`), y que el contenido esté alineado rígidamente a la izquierda (`justify-content: flex-start`). Esto unifica completamente el diseño y tamaño del botón "Base de datos local" con el botón "Temas", dejándolos simétricos y homogéneos.

## Mejoras del 14 de junio de 2026 - Dictado por Voz Nativo (Versión 84)

### Archivos modificados
- `index.html`
- `LaboresV15.html`

### Cambios realizados
- **Botón de Micrófono en Notas**: Se añadió un nuevo botón `🎙️` en la sección "Notas del proyecto" junto al botón "Añadir".
- **Nueva Ventana (Modal Dictation)**: Se inyectó un nuevo modal y hoja de estilos (animación pulse roja) dedicados exclusivamente a mostrar la captura de audio en tiempo real y permitir al usuario revisar y editar lo transcrito antes de guardarlo.
- **Implementación de SpeechRecognition**: Se implementó una lógica completa de captura de voz utilizando `webkitSpeechRecognition` / `SpeechRecognition` nativo del navegador, garantizando que todo funcione localmente sin servidores externos. Soporta resultados en tránsito (`interimResults = true`), pausas manuales, detección de errores y anexado de texto.

## Mejoras del 14 de junio de 2026 - Actualización del Manual (Versión 85)

### Archivos modificados
- `index.html`
- `LaboresV15.html`

### Cambios realizados
- **Rediseño del Índice del Manual**: Se le dio un formato visual mucho más atractivo y estructurado (como una botonera) a los enlaces del índice. Ahora, al pulsarlos, hacen *scroll* suavemente hacia la sección deseada dentro del propio panel de instrucciones, mejorando drásticamente la usabilidad del manual.
- **Sección de Dictado por Voz**: Se incluyó en el manual (sección 5) toda la explicación sobre cómo utilizar la nueva función de "Dictado por Voz", destacándola como herramienta de accesibilidad para tejedores.

## Mejoras del 14 de junio de 2026 - Limpieza de Barra Superior (Versión 86)

### Archivos modificados
- `index.html`
- `LaboresV15.html`

### Cambios realizados
- **Contextualidad en la barra superior**: Se programó la interfaz para que detecte si estás en Inicio (Proyectos) o dentro del Inventario/Medidas.
- **Ocultación de botones**: Si entras a Lanas, Agujas, Accesorios o Medidas, los botones de "Base de datos", "Sonido" y "Temas" desaparecen automáticamente para no saturar la pantalla.
- **Nuevo botón Volver**: En su lugar, aparece un flamante botón oscuro y 3D de "← Inicio" junto a la barra de "Buscar", facilitando la vuelta a la pantalla principal sin confusiones. El botón "Añadir" de la derecha se mantiene intacto.

## Corrección del 14 de junio de 2026 - Arreglo de Error de Código Visible (Versión 87)

### Archivos modificados
- `index.html`
- `LaboresV15.html`

### Cambios realizados
- **Resolución de Error Crítico de Sintaxis**: Se detectó y solucionó un error por el cual el código fuente de la función del Dictado por Voz se había inyectado por accidente dentro de la función generadora de informes PDF, rompiendo la estructura de la aplicación y mostrando código de programación directamente en la pantalla de inicio del usuario. El código defectuoso se ha eliminado y restaurado a su correcta posición al final del documento.

## Mejoras del 14 de junio de 2026 - Textos y Diseño de Botón Añadir (Versión 88)

### Archivos modificados
- `index.html`
- `LaboresV15.html`

### Cambios realizados
- **Textos de Botón Personalizados**: Se actualizaron los textos del botón flotante/principal para que al entrar a los apartados ponga exactamente "Añadir lanas", "Añadir agujas", "Añadir accesorios" y "Añadir medidas", tal y como se solicitó.
- **Armonía Visual (Diseño Oscurito 3D)**: Se inyectó CSS dinámico para que, cuando estés dentro de estos apartados, este botón de "Añadir" cambie su color terracota original por el color madera oscuro (`var(--bark)`) con efecto 3D pronunciado, igualándose exactamente en estética y color al nuevo botón de "← Inicio".
- **Ajuste de anchuras**: La cuadrícula superior ahora permite que el botón "Añadir" se expanda lo suficiente para mostrar los textos largos sin aplastarlos, y el botón de inicio mantiene un tamaño compacto a su lado.

## Corrección del 14 de junio de 2026 - Texto en Botón Añadir (Versión 89)

### Archivos modificados
- `index.html`
- `LaboresV15.html`

### Cambios realizados
- **Visibilidad del texto**: Se forzó la aparición del texto ("Añadir lanas", "Añadir agujas", etc.) en el botón principal, ya que una antigua regla CSS lo mantenía oculto.
- **Ocultar icono +**: Se eliminó el símbolo `+` para que el texto sea el protagonista absoluto y el botón coincida estéticamente al 100% con el botón "← Inicio".

## Mejoras del 14 de junio de 2026 - Rediseño del Botón de Inicio (Versión 90)

### Archivos modificados
- `index.html`
- `LaboresV15.html`

### Cambios realizados
- **Botón "Insertar nuevo proyecto"**: En la pantalla principal, se cambió el texto del botón de "+ Nuevo proyecto" a "+ Insertar nuevo proyecto", forzando que el texto se mantenga siempre visible junto al símbolo +.
- **Unificación de Diseño Visual**: Se ha aplicado la paleta de color "oscurita" (madera, `var(--bark)`) con su respectivo sombreado 3D a este botón principal para que haya coherencia absoluta de diseño en todas las secciones de la app.

## Corrección del 14 de junio de 2026 - Restauración del Diseño en Inicio (Versión 91)

### Archivos modificados
- `index.html`
- `LaboresV15.html`

### Cambios realizados
- **Restauración de Color Original**: Se corrigió el error por el cual el botón de "Insertar nuevo proyecto" en la página principal se había vuelto oscuro por error. Ahora vuelve a lucir su precioso color terracota original, mientras que en las páginas de herramientas ("Lanas", etc.) sigue siendo oscuro.
- **Arreglo de Cuadrícula en Móvil**: El botón se veía aplastado en la captura de pantalla porque se forzó a estar en la misma línea en pantallas pequeñas. Se ha ajustado para que en el móvil ocupe su propia fila y se lea a la perfección "＋ Insertar nuevo proyecto".

## Corrección del 14 de junio de 2026 - Proporción de Botones (Versión 92)

### Archivos modificados
- `index.html`
- `LaboresV15.html`

### Cambios realizados
- **Botón Inicio más compacto**: Se forzó al botón "← Inicio" a ocupar estrictamente el ancho necesario para su texto, anulando una regla general que intentaba estirarlo al máximo. Ahora es una píldora corta y elegante.
- **Botón Añadir más largo**: Se le asignó un ancho mínimo mayor (`220px`) y más relleno lateral (`32px`) al botón de "Añadir" en las vistas de herramientas. Ahora es el botón dominante de la derecha, luciendo un aspecto más estirado y profesional, con la barra de búsqueda equilibrando el espacio central.

## Corrección del 14 de junio de 2026 - Pulido de Interfaz y Móvil (Versión 93)

### Archivos modificados
- `index.html`
- `LaboresV15.html`

### Cambios realizados
- **Espacios en blanco de las Notas**: Se arregló un fallo técnico por el cual el código invisible de espaciado creaba saltos de línea inútiles en las Notas del proyecto. Ahora el texto queda ajustado y el espacio se aprovecha al máximo.
- **Botón de Inicio**: Se le ha devuelto su efecto 3D característico (el hundimiento y sombreado). Además, se ha ajustado el tamaño de la letra y se le permite dividirse en dos líneas, de forma que "Insertar nuevo proyecto" cabe perfectamente sin descuadrarse.
- **Cuadrícula en versión Móvil**: Se aplicó una reestructuración de la cuadrícula superior exclusiva para móviles. Ahora, al entrar en Lanas, Agujas, etc., la pantalla de tu móvil pondrá el botón "← Inicio" a la izquierda, el botón "Añadir..." a la derecha, y **la barra de Buscar pasará a ocupar toda la segunda línea**, haciendo que ningún botón se corte y quede todo de lo más profesional.

## Corrección del 14 de junio de 2026 - Arreglo del Botón Inicio en Móvil (Versión 94)

### Archivos modificados
- `index.html`
- `LaboresV15.html`

### Cambios realizados
- **Reestructuración de la pantalla de Inicio ("Mis Proyectos") en móviles**: Antes, el botón "+ Insertar nuevo proyecto" intentaba encajarse a la fuerza a la derecha de los 4 botones pequeños (Buscar, Base de datos, etc), quedando horriblemente aplastado y cortado. 
- **Solución**: Ahora, al detectar que la pantalla es de móvil, la cuadrícula pone los 4 botones pequeños en la parte superior y **el botón "+ Insertar nuevo proyecto" baja a una nueva línea ocupando todo el ancho de la pantalla**. Esto permite que el texto se lea gigante, claro, y que luzca su espectacular diseño 3D sin estrecheces.

## Corrección del 14 de junio de 2026 - Ajuste visual de la barra de Notas (Versión 95)

### Archivos modificados
- `index.html`
- `LaboresV15.html`

### Cambios realizados
- **Barra de Notas más fina**: Se ha reducido la altura del recuadro "Escribe una nota..." para que solo ocupe 1 línea de alto por defecto, haciendo que toda esa zona se vea mucho más recogida y estéticamente bonita.
- **Botones uniformes**: El botón del micrófono y el de "Añadir" de las notas ahora tienen exactamente el mismo tamaño, forma cuadrada con bordes redondeados, y ambos comparten ese color madera oscuro y el efecto 3D que pediste. Ahora toda la franja encaja visualmente a la perfección.

## Corrección del 14 de junio de 2026 - Cuadrícula Superior de Inicio (Versión 96)

### Archivos modificados
- `index.html`
- `LaboresV15.html`

### Cambios realizados
- **Botón Insertar recogido y oscuro**: El botón "+ Insertar nuevo proyecto" de la página principal de "Mis Proyectos" ahora adopta el mismo color madera oscurito que tanto te gustaba en los otros botones de añadir.
- **Cuadrícula de 2 y 3 botones**: Se ha reconstruido el puzzle de botones de la cabecera en los móviles. Ahora la fila 1 contiene "Buscar" y "Base de datos" repartiéndose la mitad de la pantalla cada uno. La fila 2 contiene "Sonido", "Temas" y "+ Insertar" compartiendo la pantalla a partes iguales (un tercio cada uno). El texto y el + se han rediseñado para que quepan de maravilla sin estorbar.
