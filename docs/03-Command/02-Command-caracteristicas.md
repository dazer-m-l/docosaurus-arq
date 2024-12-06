# Características del Patrón de Diseño Command

El patrón Command tiene una serie de características clave que lo convierten en una herramienta versátil y poderosa para el diseño de sistemas orientados a comandos. A continuación, se describen las principales características:

### 1. **Encapsulación de Solicitudes**
- Cada comando encapsula toda la información necesaria para ejecutar una operación, incluyendo:
  - El receptor (objeto que realizará la acción).
  - Los parámetros necesarios para la operación.
  - La acción específica que debe ejecutarse.

### 2. **Desacoplamiento**
- Desacopla al emisor de la solicitud (cliente) del receptor que realiza la operación.
- Esto permite que los comandos puedan ejecutarse sin que el cliente necesite conocer los detalles de la implementación del receptor.

### 3. **Uso de Interfaces Comunes**
- Todos los comandos implementan una interfaz común, generalmente con un método `execute()` para realizar la operación y, opcionalmente, un método `undo()` para revertirla.

### 4. **Soporte para Deshacer/Rehacer**
- Los comandos pueden almacenar un historial de acciones realizadas, permitiendo implementar fácilmente funcionalidades de deshacer y rehacer.
- Cada comando tiene un método `undo()` que revierte la operación realizada.

### 5. **Composición y Encadenamiento**
- Los comandos pueden combinarse o agruparse en comandos compuestos, que permiten ejecutar múltiples acciones en una secuencia definida.
- Esta característica es útil para implementar macros o flujos de operaciones complejas.

### 6. **Colas y Programación**
- Los comandos pueden almacenarse en una cola y ejecutarse en un orden específico o programarse para ejecutarse en un momento determinado.
- Esto es especialmente útil en sistemas que requieren tareas en segundo plano o ejecución diferida.

### 7. **Extensibilidad**
- Es fácil agregar nuevos comandos sin modificar el código existente, simplemente implementando una nueva clase que siga la interfaz común.
- Esto promueve el principio de diseño abierto/cerrado.

### 8. **Independencia del Receptor**
- El patrón permite que los comandos sean reutilizables con diferentes receptores.
- Esto mejora la flexibilidad del sistema y reduce la duplicación de código.

### 9. **Simplificación de Operaciones Complejas**
- Los comandos pueden encapsular operaciones complejas en objetos simples, lo que facilita la comprensión y el mantenimiento del código.




