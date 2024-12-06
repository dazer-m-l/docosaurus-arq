# Introducción al Patrón de Diseño Command

El patrón de diseño **Command** es un patrón de comportamiento que encapsula una solicitud como un objeto, permitiendo parametrizar clientes con diferentes solicitudes, programar la ejecución de comandos o realizar un seguimiento de operaciones que puedan deshacerse. Este patrón actúa como un intermediario entre el objeto que invoca una operación y el que realiza la acción.

El objetivo principal del patrón Command es desacoplar el emisor de la solicitud (cliente) del receptor que realiza la acción. Esto se logra encapsulando toda la información necesaria para ejecutar un comando en una clase independiente.

El patrón Command es ideal para situaciones donde se necesita:
1. **Encapsular solicitudes:** Almacenar comandos en una cola, programar su ejecución o registrar operaciones para deshacerlas posteriormente.
2. **Desacoplar componentes:** Separar quién solicita una acción de quién la ejecuta.
3. **Ampliar funcionalidad dinámicamente:** Agregar nuevas operaciones sin cambiar el código del cliente o del invocador.

## Contexto Común de Uso
- **Sistemas de interfaz gráfica:** Los botones y menús pueden estar vinculados a comandos específicos.
- **Colas de tareas:** Donde los comandos se almacenan y ejecutan en un orden específico.
- **Registro de operaciones deshacer/rehacer:** Cada acción ejecutada puede revertirse utilizando el comando correspondiente.
- **Macros:** Encadenar múltiples comandos para ejecutarlos en secuencia.

El patrón Command es una herramienta poderosa para estructurar aplicaciones que requieren operaciones dinámicas, reversibles o altamente configurables, proporcionando una base sólida para sistemas flexibles y extensibles.
