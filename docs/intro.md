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

## Componentes del patrón Observer
Para comprender mejor cómo funciona el patrón Observer, es importante conocer sus componentes clave:

- El **sujeto observable** es el objeto que mantiene una lista de observadores y notifica a estos observadores cuando cambia su estado. Puede haber varios sujetos observables en una aplicación, y cada uno puede tener su propia lista de observadores.

- Los **observadores** son objetos que desean ser notificados cuando cambia el estado del sujeto observable. Cada observador implementa una interfaz o clase abstracta que define un método de actualización. Este método se llama automáticamente cuando el sujeto observable notifica un cambio.

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

## Implementación del patrón Observer
La implementación del patrón Observer varía según el lenguaje de programación utilizado. Sin embargo, el flujo general de cómo funciona este patrón permanece constante. Aquí hay un resumen de los pasos típicos para implementar el patrón Observer:

1. **Definir la interfaz del observador:** crea una interfaz o clase abstracta que declare el método de actualización que los observadores deben implementar.
2. **Implementar observadores:** crea clases concretas que implementen la interfaz del observador. Estas clases definirán cómo reaccionarán ante las notificaciones del sujeto observable.
3. **Definir el sujeto observable:** crea una clase para el sujeto observable y agregue métodos para registrar, eliminar y notificar observadores. También debe mantener un estado interno que pueda cambiar con el tiempo.
4. **Notificar a los observadores:** cuando el estado del sujeto observable cambie, llame al método de notificación y pase los datos relevantes a todos los observadores registrados.

---