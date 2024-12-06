# Patrones de Diseño de Comportamiento

Los **patrones de diseño de comportamiento** se enfocan en la asignación de responsabilidades entre los objetos y la forma en que colaboran entre sí, optimizando la comunicación y evitando el acoplamiento excesivo.

---

### 1. Chain of Responsibility (Cadena de Responsabilidad)
![Cadena de Responsabilidad](https://refactoring.guru/images/patterns/diagrams/chain-of-responsibility/solution1-en.png?id=dccad3e628bd2b8f1856c99369ca6e5b)  
**Propósito**: Permite pasar una solicitud a lo largo de una cadena de objetos receptores hasta que uno de ellos la maneje.

**Ejemplo**: En un sistema de soporte técnico, la solicitud de un cliente puede ser dirigida a diferentes niveles de soporte hasta que se resuelva.

---

### 2. Command (Comando)
![Comando](https://refactoring.guru/images/patterns/diagrams/command/structure-indexed.png?id=95529d7282dc7bc1c5bc443423b1cf4f)  
**Propósito**: Encapsula una solicitud como un objeto, permitiendo parametrizar objetos con diferentes solicitudes, encolar solicitudes o realizar operaciones de deshacer.

**Ejemplo**: Un control remoto que puede tener diferentes botones para diferentes acciones, donde cada botón es un comando encapsulado.

---

### 3. Interpreter (Intérprete)
![Intérprete](https://reactiveprogramming.io/_next/image?url=%2Fbooks%2Fpatterns%2Fimg%2Fpatterns%2Finterpreter2.png&w=3840&q=75)  
**Propósito**: Dado un lenguaje, define una gramática para interpretar las frases del lenguaje.

**Ejemplo**: Un compilador que traduce código fuente en un lenguaje de programación a un lenguaje de bajo nivel.

---

### 4. Iterator (Iterador)
![Iterador](https://refactoring.guru/images/patterns/diagrams/iterator/structure-indexed.png?id=7bc28907ff6b480db6635a93ebaa10ff)  
**Propósito**: Proporciona una forma de acceder secuencialmente a los elementos de un objeto compuesto sin exponer su representación subyacente.

**Ejemplo**: Una lista o colección de objetos que se puede recorrer sin exponer su estructura interna.

---

### 5. Mediator (Mediador)
![Mediador](https://refactoring.guru/images/patterns/diagrams/mediator/structure-indexed.png?id=a82d4cf1b92a4f72af32f231ffd21131)  
**Propósito**: Define un objeto que encapsula cómo interactúan un conjunto de objetos. El mediador promueve un diseño donde los objetos no se comunican directamente, sino a través del mediador.

**Ejemplo**: En un chat en línea, el mediador es el servidor que facilita la comunicación entre los usuarios.

---

### 6. Memento (Memento)
![Memento](https://refactoring.guru/images/patterns/diagrams/memento/structure1-indexed.png?id=f79a8356b087ae6b004aec42b787ae2e)  
**Propósito**: Captura y externaliza el estado interno de un objeto sin violar la encapsulación, de modo que el objeto pueda restaurar su estado más tarde.

**Ejemplo**: La función "Deshacer" en aplicaciones de edición de texto.

---

### 7. Observer (Observador)
![Observador](https://ejemplo.com/imagenes/observer_pattern.jpg)  
**Propósito**: Define una dependencia de uno a muchos entre ob

