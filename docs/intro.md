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