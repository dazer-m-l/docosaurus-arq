# Patrón Observer
---
El **Patrón Observer** es uno de los patrones de diseño más conocidos y utilizados. Este patrón sigue el principio de **desacoplamiento** entre los objetos, es decir, reduce las dependencias directas entre los objetos. En lugar de que un objeto interactúe directamente con otros, se establece una relación de "notificación", donde un objeto (llamado sujeto u observable) notifica a otros objetos (llamados observadores) de cualquier cambio que ocurra, sin necesidad de que los observadores pregunten constantemente por esa información.

## Representación gráfica
El diagrama UML del patrón Observer se ve así:

![Diagrama UML del patrón Observer](https://refactoring.guru/images/patterns/diagrams/observer/structure.png)

---

## Componentes del patrón Observer
Para comprender mejor cómo funciona el patrón Observer, es importante conocer sus componentes clave:

- El **sujeto observable** es el objeto que mantiene una lista de observadores y notifica a estos observadores cuando cambia su estado. Puede haber varios sujetos observables en una aplicación, y cada uno puede tener su propia lista de observadores.

- Los **observadores** son objetos que desean ser notificados cuando cambia el estado del sujeto observable. Cada observador implementa una interfaz o clase abstracta que define un método de actualización. Este método se llama automáticamente cuando el sujeto observable notifica un cambio.

---

Este patrón es ideal en situaciones donde el cambio de estado de un objeto requiere que varios otros objetos sean informados y actualizados automáticamente, sin necesidad de que esos objetos conozcan la existencia o detalles internos unos de otros.

Un ejemplo clásico de este patrón es un sistema de notificación en aplicaciones, como una aplicación de clima en donde los usuarios desean recibir notificaciones cuando el pronóstico cambie.

---
