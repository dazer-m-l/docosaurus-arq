# Características del Patrón Observer
---

El **Patrón Observer** tiene varias características clave que lo hacen adecuado para una variedad de escenarios de diseño. A continuación se detallan sus principales características:

1. **Desacoplamiento entre el sujeto y los observadores**:
   - Uno de los puntos más importantes del patrón es que el sujeto no necesita saber nada sobre las clases observadoras ni cómo reaccionarán ante los cambios. El sujeto solo notifica a los observadores registrados, y los observadores se encargan de reaccionar al cambio. Este desacoplamiento hace que el sistema sea más flexible y fácil de mantener.
   
2. **Relación uno a muchos**:
   - Este patrón establece una relación "uno a muchos" entre el sujeto y los observadores. Un solo sujeto puede ser observado por múltiples observadores. Cuando el estado del sujeto cambia, todos los observadores son notificados simultáneamente.
   
3. **Notificación automática**:
   - Los observadores se mantienen informados de los cambios sin necesidad de que ellos mismos soliciten actualizaciones. Esto permite que el sistema sea reactivo y eficiente, ya que los objetos solo se actualizan cuando es necesario.
   
4. **Flexibilidad en la adición y eliminación de observadores**:
   - Un aspecto valioso del patrón es que permite agregar o quitar observadores de manera dinámica sin afectar la funcionalidad del sujeto. Esto es útil en sistemas en los que los observadores pueden cambiar en función de las necesidades del momento.

5. **Facilidad de extensión**:
   - El patrón facilita la extensión de un sistema sin alterar el código existente. Al agregar nuevos observadores o modificar su comportamiento, se puede hacer sin modificar el sujeto ni otros observadores. Esto favorece el principio de **abierto/cerrado** (abierto para extensión, cerrado para modificación).

6. **Desempeño controlado**:
   - Aunque puede ser costoso notificar a un gran número de observadores, el patrón puede ser optimizado según las necesidades del sistema, garantizando que el número de notificaciones no degrade el desempeño de la aplicación.

---

## ¿Cuándo usarlo?
- Cuando varios objetos necesitan ser informados de un cambio en el estado de otro objeto.
- Para implementar sistemas **reactivos**, donde el cambio en un objeto desencadena actualizaciones automáticas.

---
