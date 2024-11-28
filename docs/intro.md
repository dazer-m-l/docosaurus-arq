---
sidebar_position: 1
---

# patrón Observer

El patrón Observer es uno de los patrones de diseño más utilizados en la programación orientada a objetos. Se clasifica dentro de los patrones de comportamiento y su principal función es establecer una relación de dependencia uno a muchos entre objetos, de manera que cuando un objeto cambia su estado, todos los objetos que dependen de él son notificados y actualizados automáticamente. Este patrón es especialmente útil en situaciones en las que múltiples objetos necesitan conocer y reaccionar a los cambios en el estado de otro objeto.

## Componentes del patrón Observer
Para comprender mejor cómo funciona el patrón Observer, es importante conocer sus componentes clave:

- El **sujeto observable** es el objeto que mantiene una lista de observadores y notifica a estos observadores cuando cambia su estado. Puede haber varios sujetos observables en una aplicación, y cada uno puede tener su propia lista de observadores.

- Los **observadores** son objetos que desean ser notificados cuando cambia el estado del sujeto observable. Cada observador implementa una interfaz o clase abstracta que define un método de actualización. Este método se llama automáticamente cuando el sujeto observable notifica un cambio.


## Beneficios del patrón Observer
El patrón Observer ofrece varios beneficios importantes en el desarrollo de software:

- **Desacoplamiento:**los sujetos observables y los observadores están desacoplados, lo que significa que pueden cambiar y evolucionar de forma independiente sin afectarse mutuamente.
- **Modularidad** puede agregar nuevos observadores sin modificar el código del sujeto observable. Esto facilita la extensibilidad del sistema.
Reutilización de código: los observadores se pueden reutilizar en diferentes contextos, ya que no dependen del sujeto observable específico.