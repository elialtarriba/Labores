# Changelog - LaboresSinConex

Todas las modificaciones, mejoras y adiciones de funcionalidades a este proyecto se documentarán en este archivo.

## [V1] - 2026-06-29

### Añadido
- Se ha añadido la etiqueta de versión "V1" en la esquina inferior derecha de la pantalla principal para poder realizar el seguimiento de las versiones del programa.

### Modificado
- **Calculadora:** Se ha reemplazado la antigua calculadora integrada en el modal (`#modal-calculator`) por la nueva versión de la calculadora desarrollada en la carpeta `CALCULADORA`.
- La nueva calculadora ha sido integrada directamente en el archivo `index.html`, añadiendo sus estilos CSS, estructura HTML y lógica JavaScript.
- Se ha eliminado la opción de personalización de colores de la calculadora (el botón de edición de temas y la paleta de colores) para simplificar la interfaz, tal y como se solicitó.
- El botón "Salir" de la nueva calculadora ha sido adaptado para que ejecute la función `exitCalculator()`, permitiendo cerrar el modal correctamente y volver a la pantalla inicial de LaboresSinConex.
