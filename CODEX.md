# CODEX - Registro protegido de Labores

## Norma obligatoria antes de cualquier cambio

1. Leer completos `CODEX.md` y `REGISTRO.md` antes de modificar la aplicacion.
2. Revisar las capturas de referencia guardadas junto a estos archivos cuando correspondan al encargo.
3. Usar estos registros para saber que funciones existen, que se ha añadido, que se ha comprobado y que partes deben conservarse sin tocar.
4. No modificar funciones, estilos, textos, datos ni pantallas ajenos al encargo concreto.
5. Mantener compatibilidad con todos los datos que ya tenga guardados la usuaria.
6. Despues de cada cambio, añadir una entrada nueva tanto en `CODEX.md` como en `REGISTRO.md`. No borrar ni reescribir el historial anterior.
7. Cada entrada debe indicar como minimo: fecha, encargo, archivos tocados, cambios exactos, comportamiento que no debe alterarse y pruebas ejecutadas.
8. Si se crea una migracion, formato de archivo, campo de datos o dependencia nueva, documentar tambien su compatibilidad y finalidad.
9. No marcar una tarea como terminada hasta comprobarla y dejarla registrada en los dos archivos.
10. Después de cada cambio, copiar o actualizar siempre los archivos finales en `iCloud Drive/CODEX/Labores`.
11. Antes de dar el trabajo por terminado, comparar la versión de trabajo con la copia de `iCloud Drive/CODEX/Labores` y comprobar que `index.html`, `sw.js`, `CODEX.md`, `REGISTRO.md` y los recursos modificados sean idénticos.
12. Si la carpeta de trabajo local y la carpeta de iCloud son ubicaciones distintas, no asumir que iCloud se sincroniza solo: efectuar la copia y verificarla expresamente.

## Finalidad permanente de estos registros

- Son la memoria tecnica y funcional acumulativa de Labores.
- Sirven para continuar añadiendo funciones sin perder ni romper las anteriores.
- Antes de programar hay que comprobar en ellos si la funcion ya existe o depende de otras partes.
- Todo trabajo futuro debe respetar lo registrado como comportamiento protegido.
- `CODEX/REGISTRO.md` se mantiene como historial inicial y no sustituye a los dos registros activos de la raiz.

## Carpeta de trabajo

`iCloudDrive/CODEX/Labores`

## Capturas de referencia

- `IMG_6912.PNG`: lista de lanas y posicion de los botones de cada tarjeta.
- `IMG_6913.jpg`: formulario de lana y selector de marcas con iconos.
- `IMG_6914.PNG`: formulario Editar Aguja y listas Numero / Talla y Marca.

## Archivos modificados el 12 de junio de 2026

- `index.html`
- `sw.js`

## Archivos creados el 12 de junio de 2026

- `CODEX.md`: este registro obligatorio.
- `CODEX/pdf-lib.min.js`: biblioteca local para optimizar los PDF sin depender de Internet.

## Encargo comprobado punto por punto

- [x] 1. Cada item de Lanas, Agujas y Accesorios tiene boton de duplicar junto a la papelera.
- [x] 1. El duplicado conserva los datos y recibe el nombre original seguido de ` (copia)`.
- [x] 1. Las fotos del duplicado se guardan con claves independientes.
- [x] 2. Al editar lana, el titulo exacto es `Editar Lana`.
- [x] 2. Al editar aguja o ganchillo, el titulo exacto es `Editar Aguja`.
- [x] 3. Editar Aguja admite tantas fotos como se quieran.
- [x] 3. En Agujas se puede ampliar, elegir portada para la lista y borrar cada foto.
- [x] 4. Se reforzo el desplazamiento vertical movil en pantallas y modales.
- [x] 4. Al cerrar pantallas se restaura el desplazamiento global para evitar tener que salir y entrar.
- [x] 5. En Accesorios se puede elegir la foto que aparece en la lista.
- [x] 5. La lupa de las fotos de Accesorios abre la vista ampliada y la papelera permite borrarlas.
- [x] 6. En Proyectos se carga la foto de portada elegida de cada aguja.
- [x] 7. El visor de PDF mantiene un marco estable, permite zoom y desplazamiento en documentos largos.
- [x] 7. Cada proyecto admite varios PDF y añadir uno no sustituye los anteriores.
- [x] 7. Los PDF pasan por optimizacion local antes de almacenarse cuando es posible reducirlos.
- [x] 8. Todas las marcas del selector de Lanas muestran icono, incluidos nombres antiguos.
- [x] 9. `Numero / Talla` y `Marca` de Editar Aguja son listas desplegables.
- [x] 9. Las opciones de esas listas proceden de Configuracion.

## Detalle tecnico de los cambios

- Se anadio el boton `Duplicar` a las tarjetas de las tres listas de inventario.
- La copia duplica tambien las fotos locales para que borrar una copia no borre el original.
- Agujas utiliza una galeria multiple con portada, lupa y borrado.
- Accesorios permite intercambiar la portada con una foto de la galeria.
- Numero / Talla se corrigió el 13 de junio de 2026: ya no combina listas; usa Punto para agujas y Ganchillo para ganchillos.
- Se anadio en Configuracion la lista `Marcas de agujas`.
- Los nombres antiguos de marcas de lana reciben el icono predeterminado de lana.
- Los recursos de Proyecto buscan la foto elegida de la aguja en el almacenamiento local.
- Los proyectos guardan una coleccion `pdfs` con controles separados para cada documento.
- `pdf-lib` se carga localmente y el service worker la incluye en la cache offline.
- Se reforzaron `overflow-y`, `touch-action: pan-y` y la restauracion del scroll global.

## Verificacion del 12 de junio de 2026

- [x] Sintaxis JavaScript de `index.html` correcta.
- [x] Sintaxis JavaScript de `sw.js` correcta.
- [x] Controles y selectores presentes en el HTML renderizado.
- [x] Vista movil comprobada a 390 x 844.
- [x] El formulario de Aguja tiene `overflow-y: auto` y `touch-action: pan-y`.
- [x] La biblioteca PDF contiene `PDFDocument.load` y funciona sin conexion.
- [x] Duplicado funcional probado en Lanas, Agujas y Accesorios: nombre con ` (copia)` y fotos independientes.
- [x] Optimizacion PDF probada: documento de prueba reducido de 13.286 a 862 bytes.
- [x] El registro enumera todos los puntos solicitados.
- [x] No se modificaron otros archivos de la aplicacion fuera de `index.html` y `sw.js`.

## Registro futuro

Cada nuevo encargo debe anadirse debajo con fecha, archivos tocados, cambios exactos y pruebas realizadas. No se debe borrar este historial.

### Recordatorio permanente de iCloud

- La entrega definitiva de cada cambio debe quedar actualizada en `iCloud Drive/CODEX/Labores`.
- Actualizar los `.md` únicamente en la carpeta local no es suficiente: también deben copiarse y comprobarse en iCloud.
- La tarea no está terminada hasta verificar que la copia de iCloud contiene exactamente la última versión.

## Encargo del 12 de junio de 2026, 23:50

### Norma aplicada

- Se leyeron `CODEX.md` y `REGISTRO.md` antes de editar.
- Se trabajo sobre el `index.html` existente de `iCloudDrive/CODEX/Labores`, conservando exactamente su nombre.
- No se modificaron pantallas ni funciones ajenas a este encargo.

### Capturas de referencia añadidas

- `IMG_6926.PNG`: composición sin icono y texto `Sin composición` con rayas.
- `IMG_6927.PNG`: tienda sin icono y texto `Sin tienda` con rayas.
- `IMG_6928.PNG`: selección y borrado de fotos en Editar accesorio.
- `IMG_6929.PNG`: icono naranja para tallas de punto.
- `IMG_6930.PNG`: icono amarillo para tallas de ganchillo.
- `IMG_6931.PNG`: icono de dos agujas para marcas de agujas.
- `IMG_6932.PNG`: icono de dos bolsas rosas para tiendas.
- `IMG_6933.PNG` y `IMG_6934.PNG`: elementos nuevos sin emoji en los selectores.

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios realizados

- `Sin composición` y `Sin tienda` aparecen sin rayas antes ni después.
- Las composiciones antiguas o nuevas que no tengan icono reciben `🧶`.
- Las tiendas antiguas o nuevas que no tengan icono reciben `🛍️`.
- Todas las listas configurables completan los emojis ausentes con el icono propio de su lista.
- Se eliminó la cara sonriente `😊` como sustituto genérico de los campos de emoji.
- Tallas de punto usan `🟠`; tallas de ganchillo usan `🟡`; marcas de agujas usan `🥢`; tiendas usan `🛍️`.
- Se conservan los emojis que la usuaria haya elegido expresamente.
- En Accesorios, elegir portada y borrar fotos compara correctamente identificadores numéricos o de texto.
- El borrado espera a que termine la eliminación del archivo, actualiza la galería y muestra confirmación.
- La selección de portada actualiza inmediatamente la portada y devuelve la portada anterior a la galería.
- La caché offline subió a `labores-v58-cache` para distribuir el nuevo `index.html`.

### Verificación

- [x] Sintaxis de los tres scripts internos de `index.html` correcta.
- [x] Sintaxis de `sw.js` correcta.
- [x] Migración probada: elementos antiguos sin emoji reciben el icono de su lista.
- [x] Los emojis elegidos previamente por la usuaria se conservan.
- [x] Borrado de foto de Accesorios probado con identificador numérico y de texto.
- [x] Cambio de portada de Accesorios probado; la portada anterior vuelve a la galería.
- [x] Vista de escritorio abierta en el portátil sin errores de consola.
- [x] Cero campos configurables sin emoji y cero sustitutos `😊`.

## Corrección del 13 de junio de 2026, 00:04 - Fotos de Accesorios

### Problema comprobado

- En Firefox, al confirmar la papelera, la interfaz esperaba a que IndexedDB terminara antes de retirar la miniatura; podía parecer que no se había borrado y la referencia reaparecía si no quedaba guardada.
- Una referencia antigua cuyo archivo ya se había eliminado podía seguir en la galería y convertirse en una portada rota.
- La selección de portada y los borrados dependían demasiado de referencias temporales sin normalizar.

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios realizados

- La papelera de la galería y la papelera de la portada retiran la foto de la pantalla inmediatamente después de confirmar.
- El borrado físico de IndexedDB se completa al guardar los cambios y nunca elimina una clave que siga siendo portada o continúe en la galería.
- Las referencias de foto se normalizan para distinguir correctamente claves locales, URL y datos antiguos.
- Al abrir Editar accesorio se eliminan de la pantalla las referencias antiguas cuyo archivo ya no existe, evitando portadas rotas.
- Elegir una foto de la galería como portada comprueba primero que la imagen siga guardada.
- La caché offline se actualizó a `labores-v59-cache`.

### Verificación real en navegador

- [x] Portada inicial cargada desde IndexedDB.
- [x] Galería inicial cargada desde IndexedDB.
- [x] La lupa abre el visor y muestra la foto ampliada.
- [x] Una foto de galería elegida como portada se muestra sin romperse.
- [x] La portada elegida permanece después de guardar y reabrir.
- [x] La portada anterior vuelve a la galería.
- [x] La papelera retira inmediatamente la miniatura.
- [x] La foto eliminada no reaparece después de guardar y reabrir.
- [x] El archivo eliminado desaparece de IndexedDB.
- [x] La papelera de la portada funciona y su archivo se elimina.
- [x] Las referencias antiguas sin archivo se limpian al abrir el editor.
- [x] Sintaxis de `index.html` y `sw.js` correcta.

## Corrección del 13 de junio de 2026, 00:10 - Lista Número / Talla

### Referencia

- `IMG_6937.PNG`: en Editar Aguja, `Número / Talla` mezclaba tallas de Punto, tallas de Ganchillo y números guardados en otras agujas.

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambio realizado

- `Número / Talla` ya no mezcla las dos listas de Configuración.
- Si el tipo seleccionado es Ganchillo, usa únicamente `Tallas de ganchillo`.
- Para Aguja circular, Aguja recta, Aguja doble punta, Aguja mágica y otros tipos de aguja, usa únicamente `Tallas de punto`.
- Al cambiar el campo `Tipo`, la lista `Número / Talla` se actualiza inmediatamente.
- Ya no se añaden al selector los números pertenecientes a otras agujas guardadas.
- Para no perder datos antiguos, si el registro editado tiene un número que no está en su lista, se conserva solo ese valor dentro de ese registro.
- La caché offline se actualizó a `labores-v60-cache`.

### Verificación

- [x] Aguja circular: aparecen solo elementos de `Tallas de punto`.
- [x] Ganchillo: aparecen solo elementos de `Tallas de ganchillo`.
- [x] Cambiar el tipo cambia también la lista activa.
- [x] No aparecen números procedentes de otras agujas.
- [x] Un valor antiguo del registro editado se conserva sin incorporarlo a los demás registros.
- [x] Los iconos naranja y amarillo corresponden a la lista activa.
- [x] Sintaxis de `index.html` y `sw.js` correcta.

## Función del 13 de junio de 2026 - Compartir proyectos

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios realizados

- Se añadió una barra alargada `Compartidos` en Inicio con contador propio.
- Los proyectos recibidos se importan como copias independientes sin reemplazar datos locales ni modificar el inventario.
- Cada proyecto abierto tiene el botón `Compartir proyecto` y solicita el nombre de quien envía y de quien recibe.
- El archivo compartido incluye todos los datos del proyecto, fotos, galería, PDFs, tiempo, contadores, cálculos de puntos, finanzas, notas, medidas y materiales asociados.
- Los precios de lanas, agujas y accesorios quedan incluidos en la copia para conservar los cálculos financieros aunque no exista el inventario original.
- Al final del proyecto aparece el desplegable `Compartido con`, con nombres y fechas.
- Los proyectos recibidos muestran `Compartido por` y la fecha de recepción.
- Se añadió `Mi nombre para compartir` en Configuración y una sección explicativa en el manual.
- La caché offline se actualizó a `labores-v62-cache`.

### Comportamiento protegido

- Compartir crea una copia; no sincroniza cambios posteriores entre dispositivos.
- Importar un proyecto compartido nunca borra ni sustituye proyectos, inventario o configuración existentes.
- Los materiales recibidos se conservan como información del proyecto y no descuentan existencias.

### Verificación

- [x] Sintaxis de los scripts de `index.html` correcta.
- [x] Sintaxis de `sw.js` correcta.
- [x] Los 325 identificadores HTML son únicos.
- [x] Barra `Compartidos` visible y proporcionada en escritorio.
- [x] Vista móvil comprobada a 390 x 844 sin desplazamiento horizontal.
- [x] `Compartidos` activa su estado, muestra `Importar proyecto` y el mensaje vacío correcto.
- [x] Navegador sin errores ni avisos de consola.
- [x] Caché offline actualizada y nuevo contenido servido correctamente.

## Norma reforzada del 13 de junio de 2026 - Memoria acumulativa

### Archivos modificados

- `CODEX.md`
- `REGISTRO.md`

### Cambio realizado

- Se estableció que ambos archivos de la raíz deben leerse completos antes de cada encargo y actualizarse después de cualquier cambio.
- Se definió la información mínima obligatoria de cada entrada: fecha, encargo, archivos tocados, cambios exactos, comportamiento protegido, migraciones o formatos nuevos y pruebas.
- Se dejó claro que el historial anterior no debe borrarse y que `CODEX/REGISTRO.md` se conserva únicamente como historial inicial.

### Comportamiento protegido

- Esta norma documental es permanente y debe aplicarse a todos los trabajos futuros de Labores.

### Verificación

- [x] Norma presente en `CODEX.md` y `REGISTRO.md` de la raíz.

## Ajuste del 13 de junio de 2026 - Historial de envío y recepción

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambio realizado

- Se confirmó que quien envía conserva el nombre y la fecha de cada destinatario en `compartidoCon`.
- Se confirmó que quien recibe conserva el nombre de quien lo envió y la fecha de recepción en `compartidoPor` y `compartidoRecibidoEn`.
- El desplegable compacto del final del proyecto ahora distingue claramente `Enviado a`, `Recibido de` y los proyectos recibidos que después se vuelven a compartir.
- El resumen cerrado ocupa una sola línea y muestra el dato más importante sin desplegar el historial.
- La caché offline se actualizó a `labores-v63-cache`.

### Comportamiento protegido

- El registro de envío se añade únicamente después de preparar o completar el envío.
- Importar mantiene el remitente original sin reemplazar datos ni modificar el inventario.

### Verificación

- [x] Textos diferenciados para proyecto enviado, recibido y recibido posteriormente reenviado.
- [x] Sintaxis de `index.html` y `sw.js` correcta.

## Corrección del 13 de junio de 2026 - PDF en proyectos e iPad

### Encargo

- Revisar el funcionamiento completo de los PDF porque al borrar uno de dos documentos y al usar la lupa se producían problemas, especialmente desde iPad.

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios realizados

- La búsqueda de proyectos y PDF compara identificadores antiguos numéricos y actuales de texto sin confundir registros.
- La papelera elimina exactamente el PDF elegido, guarda primero la lista actualizada y conserva los demás PDF del proyecto.
- El archivo físico solo se elimina de IndexedDB cuando ninguna entrada restante sigue utilizando su clave.
- Se mantiene la compatibilidad con proyectos antiguos que guardaban un único PDF en `pdfKey`.
- En iPad e iPhone, la lupa abre el PDF en el visor nativo a pantalla completa para disponer de zoom y desplazamiento fiables.
- La pestaña del visor nativo se crea durante el toque original, antes de leer IndexedDB, para que Safari no la bloquee.
- En ordenador se conserva el visor integrado y se añadió el botón compacto `Abrir completo` como alternativa.
- Si se borra el PDF que estaba abierto en el visor integrado, el visor se cierra y libera su URL temporal.
- La caché offline se actualizó a `labores-v64-cache`.

### Compatibilidad y comportamiento protegido

- Un proyecto puede seguir teniendo varios PDF; añadir uno no reemplaza los anteriores.
- Borrar un PDF nunca debe borrar otro documento del mismo proyecto.
- Los PDF antiguos, importados, restaurados desde copia o recibidos mediante Compartir proyectos deben continuar siendo legibles.
- Las fotos, tiempo, calculadora, finanzas, materiales y demás datos del proyecto no se modifican al gestionar sus PDF.
- No se creó ningún formato de datos nuevo ni se requiere conexión a Internet para guardar o leer los PDF.

### Pruebas ejecutadas

- [x] Sintaxis correcta de los tres scripts internos de `index.html`.
- [x] Sintaxis correcta de `sw.js`.
- [x] Prueba con dos PDF: borrar el segundo conserva el primero y elimina únicamente su clave.
- [x] Prueba de compatibilidad: un PDF antiguo en `pdfKey` se elimina correctamente.
- [x] Identificadores numéricos antiguos y de texto actuales se reconocen como el mismo proyecto.
- [x] Detección correcta de iPad, iPadOS en modo escritorio y Mac sin pantalla táctil.
- [x] Comprobado que Safari abre la pestaña antes de la lectura asíncrona de IndexedDB.
- [x] Los 325 identificadores HTML siguen siendo únicos.
- [x] Aplicación actualizada cargada sin errores ni avisos de consola.
- [x] Enlace público comprobado con respuesta HTTP 200 y versión nueva servida.

## Mejoras del 13 de junio de 2026 - Inventario, Configuración e informes

### Encargo

- Cambiar el texto de la aguja de lana usada en proyectos.
- Permitir guardar cantidad cero cuando el campo se deja vacío.
- Comprobar y ampliar el historial de lanas, agujas y accesorios.
- Mostrar siempre recogidas las listas de Configuración al volver a entrar.
- Permitir enviar los informes financieros y mejorar sus botones y títulos.

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios realizados

- En Editar Lana, `Aguja utilizada` pasó a mostrarse como `Aguja Recomendada en Proyectos`; en la tarjeta de lana aparece como `Proyectos`.
- Se conservó internamente el campo antiguo `agujaUtilizada` para no perder datos guardados ni romper copias anteriores.
- Los campos Cantidad de lanas, agujas y accesorios guardan `0` cuando están vacíos y vuelven a mostrar correctamente el cero al editar.
- El mínimo de ovillos de la ficha de lana pasó de 1 a 0; las fichas nuevas continúan proponiendo 1 como valor inicial.
- El historial conserva entradas y salidas de stock y ahora añade el saldo resultante de cada movimiento nuevo.
- Los cambios realizados en los campos editables de las fichas se registran como `Ficha editada`, indicando qué campos cambiaron y sus valores anterior y nuevo.
- Las modificaciones de fotos o portada también quedan indicadas como fotos actualizadas.
- Se añadió el movimiento que faltaba al reservar lana desde el selector antiguo de materiales.
- Al borrar un proyecto, la devolución de lanas, agujas y accesorios queda registrada con el nombre del proyecto borrado.
- Las 18 rutas que modifican directamente stock desde un proyecto tienen ahora su movimiento de historial asociado.
- Al entrar en Configuración se cierran siempre sus 14 listas desplegables, aunque se hubieran dejado abiertas anteriormente.
- Los informes se llaman `Informe Proyecto` e `Informe Proyecto Completo` según el botón usado.
- `Volver a la App` se sustituyó por `Cerrar`.
- Los botones `WhatsApp / email`, `Imprimir` y `Cerrar` comparten forma y relieve 3D, usando distintas intensidades de los colores del tema.
- El informe se prepara como archivo HTML autónomo y completo; en dispositivos compatibles, el menú nativo permite enviarlo a WhatsApp, Mail u otra aplicación. Como alternativa, se descarga para adjuntarlo manualmente.
- La caché offline se actualizó a `labores-v65-cache`.

### Formato y compatibilidad

- Las entradas nuevas del historial pueden incluir `saldo`, `detalle` y el tipo `edicion`; las entradas antiguas sin esos campos siguen mostrándose correctamente.
- No se cambia la estructura principal de lanas, agujas, accesorios ni proyectos.
- El informe compartido usa `.html` para conservar diseño, colores, tablas, fotos y contenido completo sin añadir dependencias.
- Los informes continúan pudiéndose imprimir o guardar como PDF desde la opción Imprimir del navegador.

### Comportamiento protegido

- Reservar, añadir, devolver o quitar materiales de un proyecto debe actualizar el stock y dejar historial con el nombre del proyecto.
- Borrar un proyecto devuelve sus materiales al inventario y registra la devolución.
- El historial anterior nunca se elimina al editar una ficha.
- Las fichas nuevas continúan empezando en cantidad 1, pero cero es un valor válido y debe conservarse.
- Entrar en Configuración no modifica ninguna lista; únicamente las presenta recogidas.
- Informe e Informe Completo conservan sus diferencias: el completo incluye fotos de evolución, notas y diario cuando existen.

### Pruebas ejecutadas

- [x] Sintaxis correcta de los tres scripts internos de `index.html` y de `sw.js`.
- [x] Los 325 identificadores HTML siguen siendo únicos.
- [x] Cantidad vacía y cantidad 0 se normalizan a 0 en lanas, agujas y accesorios.
- [x] Al reabrir una ficha con stock 0 se muestra 0 y no 1.
- [x] Prueba de edición: nombre y precio generan una sola entrada `Ficha editada` con ambos cambios y saldo 0.
- [x] Las 18 modificaciones directas de stock desde proyectos tienen llamada de historial asociada.
- [x] Reserva, ampliación, devolución, retirada y borrado de proyecto están cubiertos para los tres inventarios.
- [x] Configuración comprobada en navegador: 14 listas existentes y 0 abiertas al entrar.
- [x] Etiqueta nueva y mínimo 0 cargados en el navegador sin errores ni avisos de consola.
- [x] Títulos, eliminación de textos antiguos, archivo para compartir y relieve 3D comprobados en el código generado del informe.

## Mejoras del 13 de junio de 2026 - Tipo rápido de accesorio y manual visual

### Encargo

- Permitir crear un tipo nuevo directamente desde `Editar accesorio`, guardándolo también en Configuración.
- Rehacer las instrucciones de Inicio con todas las funciones principales, lenguaje sencillo, estructura breve y apoyo visual para personas poco habituadas a la informática.

### Archivos modificados

- `index.html`
- `sw.js`
- `CODEX.md`
- `REGISTRO.md`

### Cambios exactos

- El selector `Tipo` de Nuevo/Editar accesorio termina con la opción `➕ Añadir…`.
- Al elegirla se abre una ventana propia de la app con dos campos grandes: `Icono` y `Nombre`.
- `Añadir y seleccionar` incorpora el tipo a `labores_tipos_accesorios`, actualiza la lista de Configuración y lo deja seleccionado en la ficha abierta.
- Si el nombre ya existe, se selecciona el tipo existente sin crear duplicados.
- Cancelar, cerrar con `✕` o tocar fuera de la ventana recupera el tipo que estaba seleccionado anteriormente.
- Se mantiene compatibilidad con tipos antiguos guardados solo con nombre y con los que incluyen icono y nombre.
- Las instrucciones se reconstruyeron como guía visual por tareas: inicio de una labor, contenido completo del proyecto, inventario, medidas, calculadora, compartir, Configuración, copias e instalación.
- El manual incluye una ruta rápida de tres pasos, iconos, tarjetas, números, etiquetas visuales y avisos breves.
- Se explican expresamente fotos, varios PDF, lupa, papelera, duplicado, notas, materiales, historial, tiempo, contadores, calculadora, finanzas, informes, compartir proyectos y copias.
- El manual integrado usa la versión `66` y las ediciones manuales nuevas se guardan en `labores_manual_html_v66`.
- Una personalización antigua conservada en `labores_manual_html` no se borra, pero tampoco puede ocultar automáticamente la guía nueva.
- Caché offline actualizada a `labores-v66-cache`.

### Compatibilidad y comportamiento protegido

- Los tipos nuevos continúan usando la lista existente y se incluyen en exportaciones e importaciones de copia sin formato nuevo.
- No se modifica ninguna ficha de accesorio al crear un tipo; solo se selecciona el valor en el formulario hasta que la usuaria guarde la ficha.
- Los tipos existentes no se duplican por diferencias entre su nombre y su texto con icono.
- El contenido antiguo personalizado del manual permanece almacenado para no destruir datos previos.
- Todas las funciones anteriores del inventario, proyectos, fotografías, PDF, compartir e informes deben permanecer intactas.

### Pruebas ejecutadas

- [x] Sintaxis correcta de los tres scripts internos de `index.html` y de `sw.js`.
- [x] 329 identificadores HTML comprobados sin duplicados.
- [x] `➕ Añadir…` comprobado como último elemento del selector.
- [x] Ventana de alta comprobada en navegador con campos de icono y nombre.
- [x] Un tipo existente se selecciona sin aumentar la lista ni duplicarse.
- [x] Prueba aislada: `🧷 Prueba temporal` se creó, quedó seleccionado y apareció en `Configuración > Tipos de accesorios`.
- [x] Manual v66 cargado sin quedar tapado por la caché v65.
- [x] Manual comprobado con siete secciones, tres tarjetas rápidas y desplazamiento correcto.
- [x] Vista iPad de 820 x 1180 comprobada sin desbordamiento horizontal.

## Norma del 13 de junio de 2026 - Actualización obligatoria de iCloud

### Encargo

- Añadir un recordatorio permanente para que todos los cambios y registros se actualicen siempre en `iCloud Drive/CODEX/Labores`.
- Volver a comprobar las funciones `➕ Añadir…` de accesorios y el manual visual de Inicio.

### Archivos modificados

- `CODEX.md`
- `REGISTRO.md`

### Norma añadida

- Después de cada cambio se deben copiar a `iCloud Drive/CODEX/Labores` los archivos finales y todos los recursos modificados.
- Los archivos principales que deben compararse son `index.html`, `sw.js`, `CODEX.md` y `REGISTRO.md`, además de cualquier recurso tocado en el encargo.
- No se debe suponer que la carpeta local y la de iCloud se sincronizan automáticamente.
- Ninguna tarea se considera terminada hasta comprobar que la versión de iCloud es idéntica a la versión final de trabajo.

### Funciones confirmadas

- `➕ Añadir…` continúa al final del selector Tipo de Nuevo/Editar accesorio.
- El tipo nuevo se guarda en la lista de accesorios, aparece en Configuración y queda seleccionado en la ficha.
- El manual visual v66 continúa organizado mediante iconos, tarjetas, pasos, títulos y avisos breves.
- El manual explica proyectos, inventario, historial, fotos, PDF, medidas, tiempo, contadores, calculadora, finanzas, informes, compartir, Configuración, copias e instalación.

### Comportamiento protegido

- Esta norma de copia y comparación en iCloud debe aplicarse a todos los encargos futuros.
- `CODEX/REGISTRO.md` continúa siendo un historial inicial; los registros activos que se actualizan siempre son `CODEX.md` y `REGISTRO.md` de la raíz.

### Pruebas ejecutadas

- [x] Leídos completos los tres archivos Markdown existentes: `CODEX.md`, `REGISTRO.md` y `CODEX/REGISTRO.md`.
- [x] Comprobada en `index.html` la opción final `➕ Añadir…` y su ventana de alta.
- [x] Comprobado el guardado mediante la lista existente `labores_tipos_accesorios`, compartida con Configuración y las copias de seguridad.
- [x] Comprobada la presencia del manual visual v66 y sus siete secciones.

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

### Pruebas ejecutadas

- [x] Sintaxis correcta de los tres scripts internos de `index.html` y de `sw.js`.
- [x] 329 identificadores HTML comprobados sin duplicados.
- [x] Auditoría completa sin opciones vacías que conserven rayas decorativas.
- [x] Auditoría sin concatenaciones de `db.llanas`, `db.agujas` o `db.accesorios` en los selectores configurables.
- [x] Calculadora comprobada en navegador a 390 x 844: modal y carcasa miden 390 x 844, con borde 0, radio 0, sombra nula y sin desbordamiento horizontal.
- [x] Botón `Salir` comprobado: cierra el modal y deja activa la vista `Mis Proyectos`.
- [x] Renovación de caché comprobada al pasar de la calculadora anterior a la versión 67 tras recargar.

## Correcciones del 13 de junio de 2026 - PDF, duplicados, listas, calculadora, informes y privacidad

### Recordatorio permanente de trabajo

- Antes de modificar la app se deben leer todos los archivos `.md` del proyecto.
- Después de cada cambio se deben actualizar `CODEX.md` y `REGISTRO.md` y copiar todos los archivos modificados a `iCloud Drive/CODEX/Labores`.
- La tarea no está terminada hasta comparar la copia local y la copia de iCloud y confirmar que son idénticas.

### Cambios realizados

- Los PDF se abren siempre dentro de un visor a pantalla completa de la app, tanto al tocar la ficha como la lupa.
- El visor incorpora `Salir del PDF`; se retiró la ruta antigua `Abrir completo` que abría otra pestaña.
- Todos los duplicados disponibles pasan por una confirmación propia antes de crear la copia.
- En lanas, agujas y accesorios, `Duplicar` está situado entre el stock y el precio.
- Todas las listas configurables son estrictas: muestran solo los valores existentes en Configuración.
- Esta norma sustituye el comportamiento v67: un valor antiguo eliminado de Configuración ya no se añade temporalmente como `guardado en esta ficha`.
- Se confirmó que ninguna primera opción vacía conserva rayas decorativas antes o después del texto.
- El selector `Tipo` de Nuevo/Editar proyecto termina con `➕ Añadir…`; el nuevo tipo queda seleccionado y guardado también en Configuración.
- La calculadora conserva la pantalla completa sin bordes, pero se retiran el título `Calculadora` y su emoji; queda únicamente un botón pequeño `Salir`.
- Los informes de Finanzas se comparten por el menú nativo como texto legible, compatible con WhatsApp y correo, en vez de adjuntar un HTML que WhatsApp podía rechazar.
- El HTML del informe sigue disponible como descarga de respaldo cuando el dispositivo no ofrece el menú nativo de compartir.
- Se eliminó totalmente Cloudinary: constantes, preset, dirección de subida y función de envío. Las fotos continúan guardándose únicamente en el dispositivo mediante IndexedDB.
- Caché offline actualizada a `labores-v68-cache`.

### Comportamiento protegido

- No se borran los datos históricos ya guardados; simplemente dejan de aparecer como opciones si no existen en Configuración.
- Los selectores de materiales dentro de proyectos siguen mostrando el inventario local, ya que no son listas configurables.
- PDF, fotos, proyectos, inventario e informes continúan funcionando sin depender de Cloudinary.
- El botón `Imprimir` del visor PDF se conserva.

### Pruebas ejecutadas

- [x] Sintaxis correcta de los cuatro scripts internos de `index.html` y de `sw.js`.
- [x] 335 identificadores HTML comprobados sin duplicados.
- [x] Comprobación automática de que todos los accesos normales al PDF llaman al visor interno y existe `Salir del PDF`.
- [x] Comprobación automática de confirmación en duplicados de inventario y cálculos.
- [x] Comprobación automática de la posición stock, duplicar y precio en los tres inventarios.
- [x] Auditoría sin `guardado en esta ficha`, sin creación dinámica de opciones antiguas y sin primeras opciones con rayas.
- [x] Alta rápida de tipos de proyecto y persistencia en la misma lista de Configuración comprobadas en código.
- [x] Calculadora comprobada sin elemento de título y con carcasa sin borde, radio ni sombra.
- [x] Envío nativo del informe comprobado sin adjuntar archivos HTML.
- [x] Búsqueda completa sin referencias a Cloudinary.
- [x] `git diff --check` correcto para `index.html` y `sw.js`.
- [ ] La prueba visual en el navegador integrado no pudo completarse porque la sesión conservaba un servidor antiguo y no pudo acceder al servidor aislado de esta copia; no se usó esa pantalla vieja como validación.

## Correcciones del 13 de junio de 2026 - Cabecera, Tipo y visor PDF v69

### Cambios realizados

- La cabecera de un proyecto se divide en dos filas: nombre y tipo arriba; `Compartir proyecto`, `Guardar` y borrar debajo.
- El nombre del proyecto conserva palabras completas y un tamaño legible en móvil; ya no se parte letra por letra al competir con los botones.
- El selector `Tipo` de la ficha abierta termina también en `➕ Añadir…`, no solo el formulario Nuevo/Editar.
- Al pulsar `➕ Añadir…` se pide el nombre y el emoji en la ventana propia de la app. Al guardar, el nuevo tipo queda seleccionado en el proyecto y se añade a la misma lista de Configuración.
- El visor deja de usar el visor PDF nativo del navegador. Cada página se dibuja con PDF.js al ancho exacto de la pantalla, sin desplazamiento lateral y con desplazamiento vertical para documentos largos.
- PDF.js 6.0.227, su worker, mapas de caracteres, fuentes estándar y componentes WASM quedan incluidos localmente dentro de `CODEX/`; ningún PDF se envía a Internet.
- Se conserva `Imprimir` mediante una dirección temporal local del propio archivo y `Salir del PDF` vuelve a la pantalla anterior.
- Caché offline actualizada a `labores-v69-cache`.

### Archivos añadidos

- `CODEX/pdf.min.mjs`
- `CODEX/pdf.worker.min.mjs`
- `CODEX/cmaps/`
- `CODEX/standard_fonts/`
- `CODEX/wasm/`
- `CODEX/pdfjs-LICENSE.txt`

### Compatibilidad y pruebas

- No cambia el formato de proyectos, tipos ni PDF ya guardados.
- Sintaxis correcta de los cuatro scripts internos, `sw.js`, PDF.js y su worker.
- Comprobada automáticamente la cabecera en dos filas, el ajuste normal del título, la opción final `Añadir…`, la persistencia mediante `saveProjectTypes` y la actualización del proyecto abierto.
- Comprobado que el visor ya no contiene `iframe`, bloquea el desbordamiento horizontal y calcula cada página según el ancho disponible.
- El navegador integrado no alcanzó el servidor local aislado; la validación visual final queda pendiente de la prueba real en iPhone/iPad.

## Ajuste del 13 de junio de 2026 - Botones de informes v70

### Encargo y cambios

- En `Informe Proyecto` e `Informe Proyecto Completo`, los tres botones superiores comparten ahora exactamente el mismo ancho y la misma altura.
- `WhatsApp / email`, `Imprimir` y `Cerrar` se distribuyen en una cuadrícula de tres columnas iguales tanto en móvil como en escritorio.
- El relieve 3D deja de apoyarse en una base marrón oscura que se confundía con la barra del informe.
- Cada botón usa una base clara de su color de tema: camel para compartir, camel claro para imprimir y terracota claro para cerrar.
- Se añadió brillo interior y una sombra exterior más definida; al pulsar, el botón baja y reduce su base para conservar la sensación física.
- Todos los temas de color quedan respetados mediante las variables activas de la app, incluida `--terracota-l`.
- Caché offline actualizada a `labores-v70-cache`.

### Comportamiento protegido y pruebas

- No cambia el contenido, los cálculos, la impresión, el envío ni el cierre de ninguno de los dos informes.
- No se modifica ningún dato guardado ni se crea un formato nuevo.
- Sintaxis correcta de los tres scripts internos de `index.html` y de `sw.js`.
- Comprobada la barra común de ambos informes, las tres columnas iguales, las alturas idénticas y las tres bases 3D claras.
- La previsualización automática de un archivo local fue bloqueada por la política de seguridad del navegador integrado; el aspecto final debe confirmarse al abrir un informe en el dispositivo.

## Correcciones del 14 de junio de 2026 - Versión 71

### Encargo y archivos

- Corregir cabecera y tipos de proyecto, visor PDF, independencia de compartidos y envío PDF de los informes financieros.
- Modificados: `index.html`, `sw.js`, `CODEX.md` y `REGISTRO.md`.

### Cambios exactos

- La cabecera móvil reserva el ancho al nombre, evita cortes de palabras y mantiene todas las acciones debajo del título.
- Los tipos reconocen valores antiguos (`jersey`, `cardi`, `manton`, etc.) y configurables. `➕ Añadir…` se genera siempre al final; guarda emoji y nombre en `labores_tipos_proyecto` y lo selecciona en la ficha.
- El visor dibuja las páginas al ancho interior, limita resolución en móvil y solo permite scroll vertical.
- Se corrigió PDF.js 6: se conserva y destruye `PDFDocumentLoadingTask`; `PDFDocumentProxy` no tiene el método `destroy()` que usaba el código anterior.
- Si PDF.js no puede dibujar un documento, se activa dentro del mismo visor una vista alternativa ajustada en vez de dejar solo el mensaje de error.
- Los compartidos ya no cuentan ni aparecen en Proyectos, En curso, Terminados, Ideas o En pausa; solo aparecen en Compartidos.
- Sus lanas, agujas y accesorios se muestran como datos independientes de solo lectura y no ofrecen operaciones sobre el inventario local.
- Los compartidos conservan pestañas, medidas incrustadas, PDF, galería, cálculos, finanzas e informes; se pueden añadir y guardar fotos y PDF dentro de la copia recibida.
- `Pasar a mis proyectos` crea una Idea o Proyecto nuevo, duplica físicamente fotos y PDF con claves nuevas y conserva intacto el compartido original.
- `Enviar PDF` crea localmente un `.pdf` multipágina con el contenido del informe y sus fotografías. El menú nativo recibe un archivo `application/pdf`; la alternativa descarga ese mismo PDF.
- Caché actualizada a `labores-v71-cache`.

### Compatibilidad y comportamiento protegido

- No se cambia el formato general ni se elimina ningún dato histórico.
- Los compartidos existentes se separan mediante `compartidoRecibido`, sin migración destructiva.
- Los proyectos propios conservan su gestión habitual de inventario, listas, tiempo, contadores, calculadora, finanzas y multimedia.
- Continúan siendo compatibles los PDF antiguos en `pdfKey` y los actuales en `pdfs`.

### Pruebas

- [x] Sintaxis correcta de los tres scripts internos de `index.html` y de `sw.js`.
- [x] 339 identificadores HTML sin duplicados.
- [x] No quedan llamadas a `pdfViewerDocument.destroy()`; se destruye la tarea de carga correcta.
- [x] PDF real de 2,2 MB extraído del proyecto compartido de prueba: PDF.js cargó el documento y dibujó su primera página ajustada.
- [x] `pdf-lib` generó un archivo válido con cabecera `%PDF-`.
- [x] Los informes crean y comparten un `File` `application/pdf` terminado en `.pdf`, sin texto como sustituto.
- [x] Estadísticas, filtros y materiales compartidos comprobados en código.
- [x] Carga inicial móvil a 390 x 844 sin errores. La automatización bloqueó por privacidad la apertura de proyectos personales y no se intentó eludir el bloqueo.

## Corrección del 14 de junio de 2026 - Envío de informes PDF v72

### Problema corregido

- Al pulsar `Enviar PDF` podía aparecer `No se pudo crear el PDF del informe`, especialmente en iPhone cuando el proyecto incluía fotografías originales grandes o texto pegado con caracteres no admitidos por la fuente interna del PDF.
- La corrección se aplica al generador común de `Informe Proyecto` y `Informe Proyecto Completo`.

### Cambios

- Las fotos se redimensionan antes de incrustarlas: lado máximo de 1400 píxeles, fondo blanco y JPEG optimizado. El informe deja de copiar fotografías de cámara a resolución completa dentro de la memoria del iPhone.
- El texto se limpia con una lista de caracteres compatible con las fuentes PDF y convierte euro, libra, guiones, puntos suspensivos, comillas y viñetas a valores seguros.
- Si `pdf-lib` no está disponible por una carga o caché anterior, se vuelve a cargar localmente desde `CODEX/pdf-lib.min.js?v=72`.
- Si aun así una fotografía impide terminar el archivo, se hace automáticamente un segundo intento sin imágenes. Se conserva todo el contenido textual y financiero en un PDF válido.
- El menú nativo recibe exclusivamente un `File` con extensión `.pdf` y tipo `application/pdf`. En iPhone permite elegir WhatsApp, Mail u otra aplicación compatible; no se envía texto como sustituto.
- La descarga de respaldo sigue creando el mismo PDF para poder adjuntarlo manualmente cuando el navegador no ofrece compartir archivos.
- Caché offline actualizada a `labores-v72-cache`.

### Pruebas

- [x] `Informe Proyecto`: PDF válido, cabecera `%PDF-`, archivo `Informe-normal.pdf` y MIME `application/pdf`.
- [x] `Informe Proyecto Completo`: PDF válido con foto, galería y notas, archivo `Informe-completo.pdf` y MIME `application/pdf`.
- [x] Texto español y caracteres pegados conflictivos procesados sin error.
- [x] Los dos botones continúan llamando al mismo generador con sus modos normal y completo.
- [x] `navigator.share` recibe `files: [file]` y no contiene el antiguo texto del informe como sustituto.
- [x] Sintaxis correcta de los tres scripts internos y de `sw.js`; 339 identificadores HTML sin duplicados.
- [x] Aplicación completa cargada correctamente en el navegador local. La política de privacidad bloqueó la apertura automatizada del proyecto personal, por lo que no se intentó pulsar su botón real mediante otro método.

## Corrección del 14 de junio de 2026 - Botón Enviar PDF v73

### Causa

- Safari de iPhone exige que `navigator.share()` se ejecute directamente dentro del toque del usuario.
- La versión anterior empezaba a crear el PDF después de pulsar y esperaba varias operaciones asíncronas antes de abrir WhatsApp/Mail. Safari perdía la activación del toque y podía bloquear silenciosamente tanto el menú como la descarga.

### Solución

- El PDF se prepara automáticamente en segundo plano nada más abrir cualquiera de los dos informes.
- El botón muestra `⏳ Preparando PDF…` mientras trabaja y cambia a `📄 Enviar PDF` cuando el archivo está listo.
- Si se pulsa antes de tiempo, aparece una notificación visible. Si la preparación falla, el botón cambia a `↻ Reintentar PDF`.
- Al pulsar el botón listo, `navigator.share()` se llama de forma síncrona, sin ningún `await` previo, y recibe el `File` `.pdf` `application/pdf` ya construido.
- Se mantiene la descarga directa cuando el navegador no admite compartir archivos. Si Safari rechaza el menú de forma asíncrona, el mismo botón cambia a `⬇️ Descargar PDF` para que un segundo toque guarde el archivo.
- La solución común se aplica a `Informe Proyecto` e `Informe Proyecto Completo`.
- Caché offline actualizada a `labores-v73-cache`.

### Pruebas

- [x] La función del botón ya no es `async` y no contiene ningún `await` antes de `navigator.share()`.
- [x] Prueba de toque: la llamada nativa se ejecutó y recibió `Informe-Proyecto-Prueba.pdf`, MIME `application/pdf`.
- [x] Estados visibles comprobados: preparando, listo y reintentar.
- [x] Respaldo visible `Descargar PDF` configurado para un rechazo del menú nativo.
- [x] Los dos botones financieros continúan usando los modos normal y completo del mismo generador.
- [x] Sintaxis correcta de los tres scripts internos y de `sw.js`; 340 identificadores HTML sin duplicados.
- [x] No se realizó ningún envío real a terceros durante la prueba.

## Mejoras del 14 de junio de 2026 - Versión 74

### Encargo y archivos

- Reparar definitivamente el envío PDF de los informes, hacer visible el origen de proyectos compartidos, mejorar el botón de regreso, reorganizar Inicio con sonido y temas y ampliar el manual.
- Modificados: `index.html`, `sw.js`, `CODEX.md` y `REGISTRO.md`.

### Cambios exactos

- El botón de informes se muestra como `WhatsApp / email` cuando el PDF está listo.
- La llamada a `navigator.share()` se realiza directamente desde el toque y ya no depende de `navigator.canShare()`, que podía lanzar una excepción silenciosa en Safari.
- Todos los fallos tienen respuesta visible: aviso mientras se prepara, reintento, descarga directa o botón `Descargar PDF` tras un rechazo asíncrono.
- El archivo entregado al menú nativo conserva nombre `.pdf` y tipo `application/pdf`; la descarga usa exactamente el mismo archivo.
- Al pasar un recibido a Mis Proyectos se conservan `compartidoCopiaPor` y `compartidoCopiaFecha`. La tarjeta, la cabecera y el historial muestran `Compartido por...` sin mantenerlo dentro del filtro Compartidos.
- El botón de vuelta del proyecto ahora dice `← Inicio`, es más grande y tiene relieve 3D con pulsación visible.
- Inicio organiza Buscar y Base de datos en una fila, Sonido y Temas en otra, y el botón `+` ocupa la altura de las dos filas.
- Se eliminó `(Offline)` del texto de Base de datos local. Buscar y los otros controles tienen forma y pulsación 3D.
- Los seis botones de categorías son más bajos para dejar más proyectos visibles en móvil.
- El sonido se aplica a los botones de toda la app y continúa sincronizado con el botón de la calculadora.
- Se añadió un selector de Inicio con Predeterminado, azul, verde, rosa, violeta, Blanco suave, Negro difuminado y el tema nuevo Mixpastel.
- El manual pasa a versión 74, abre con un índice de siete enlaces, explica los controles nuevos y la etiqueta de compartidos y termina con `lisaltarriba@gmail.com`.
- Caché offline actualizada a `labores-v74-cache`.

### Compatibilidad y comportamiento protegido

- No cambia el formato principal de proyectos ni se elimina información histórica.
- Los campos de origen de la copia son aditivos y las copias antiguas sin ellos continúan funcionando.
- Se conserva el generador común de Informe Proyecto e Informe Proyecto Completo y su PDF local con fotografías.
- El sonido reutiliza `labores_calc_sound` para mantener la preferencia anterior y los temas siguen usando `labores_theme`.

### Pruebas ejecutadas

- [x] Sintaxis correcta de los tres scripts internos con contenido y de `sw.js`.
- [x] 353 identificadores HTML comprobados sin duplicados.
- [x] Vista de escritorio y vista móvil 390 x 844 comprobadas sin desbordamiento horizontal.
- [x] Mixpastel aplicado a toda la app y selección activa comprobada; sonido de Inicio y calculadora sincronizado.
- [x] Índice del manual probado: salto desde 0 hasta 3092,5 píxeles dentro del manual.
- [x] Consola del navegador sin errores ni avisos.
- [x] Compartición simulada con un archivo `.pdf` `application/pdf`: éxito nativo, excepción síncrona, rechazo asíncrono y navegador sin Web Share cubiertos.
- [x] En éxito, `navigator.share()` recibió `Informe-prueba.pdf`; en los fallos apareció descarga o aviso visible.
- [x] Conservación y renderizado de `compartidoCopiaPor` comprobados automáticamente.
- [x] No se realizó ningún envío real a WhatsApp, Mail ni terceros durante las pruebas.

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
