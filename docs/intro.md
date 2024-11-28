---
sidebar_position: 1
---
# Patrón Observer

El patrón **Observer** pertenece a los patrones de diseño de comportamiento. Establece una relación **uno-a-muchos** entre objetos, de forma que cuando un objeto (*sujeto*) cambia su estado, todos los objetos dependientes (*observadores*) son notificados automáticamente.

---

## Representación gráfica
El diagrama UML del patrón Observer se ve así:

![Diagrama UML del patrón Observer](https://refactoring.guru/images/patterns/diagrams/observer/structure.png)

1. **Subject** (Sujeto): Define una interfaz para agregar, eliminar y notificar observadores.
2. **ConcreteSubject** (Sujeto Concreto): Implementa el sujeto, almacena su estado y notifica a los observadores sobre los cambios.
3. **Observer** (Observador): Interfaz que define el método `update()`.
4. **ConcreteObserver** (Observador Concreto): Implementa la interfaz `Observer` y reacciona a las notificaciones del sujeto.

---


---

## Características principales
### ¿Cuándo usarlo?
- Cuando varios objetos necesitan ser informados de un cambio en el estado de otro objeto.
- Para implementar sistemas **reactivos**, donde el cambio en un objeto desencadena actualizaciones automáticas.

### Ventajas
1. **Desacoplamiento**: Los observadores no necesitan conocer los detalles del sujeto.
2. **Escalabilidad**: Es fácil agregar o eliminar observadores sin modificar el sujeto.
3. **Flexibilidad**: Los objetos pueden comunicarse de manera dinámica.

### Desventajas
1. **Complejidad**: Aumenta con el número de sujetos y observadores.
2. **Costos de rendimiento**: La notificación puede volverse costosa si hay demasiados observadores.
3. **Orden de actualización**: No hay garantía sobre el orden en que se notifican los observadores.

---

