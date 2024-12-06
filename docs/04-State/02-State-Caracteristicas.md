---
sidebar_position: 2
---

# Características del Patrón State

El patrón **State** es un patrón de diseño de comportamiento que permite a un objeto cambiar su comportamiento cuando su estado interno cambia. Las principales características del patrón State se centran en la flexibilidad, la modularidad y la capacidad de extender el comportamiento de un objeto sin modificar su código base. A continuación, se detallan sus características más importantes:

---

## 1. **Encapsulación de Estados**

El patrón **State** encapsula cada estado en su propia clase. Esto significa que cada estado tiene su propia implementación de comportamiento, lo que facilita la gestión y expansión del sistema sin alterar el código central.

#### Ejemplo:
```javascript
class PendingState {
  handleRequest() {
    console.log("La orden está pendiente.");
  }
}

class ShippedState {
  handleRequest() {
    console.log("La orden ha sido enviada.");
  }
}

class DeliveredState {
  handleRequest() {
    console.log("La orden ha sido entregada.");
  }
}
```

## 2. Delegación de Responsabilidades

En lugar de tener lógica compleja en la clase principal, el patrón **State** delega la responsabilidad del comportamiento a las clases de los estados específicos. Esto hace que la clase principal sea más sencilla y su lógica más clara.

#### Ejemplo:

```javascript
class Order {
  constructor() {
    this.state = new PendingState(); // Estado inicial
  }

  setState(state) {
    this.state = state; // Cambiar el estado
  }

  processOrder() {
    this.state.handleRequest(); // Delegar al estado actual
  }
}
```

Aquí, la clase `Order` no se preocupa por cómo manejar los diferentes estados. Simplemente delega la responsabilidad a los objetos de estado.

## 3. Extensibilidad

El patrón **State** permite agregar nuevos estados sin necesidad de modificar el código existente. Si se desea agregar un nuevo estado, simplemente se crea una nueva clase que implemente los comportamientos correspondientes para ese estado. Esto proporciona una excelente extensión para el sistema sin afectar el diseño ya existente.

#### Ejemplo:

```javascript
class CanceledState {
  handleRequest() {
    console.log("La orden ha sido cancelada.");
  }
}
```

Si en el futuro se requiere agregar un estado "Cancelado", se puede hacer sin modificar el código existente, simplemente añadiendo una nueva clase `CanceledState`.

## 4. Reducción de Condicionales

El patrón **State** ayuda a eliminar la necesidad de estructuras condicionales como `if-else` o `switch` para manejar los diferentes comportamientos de un objeto. El comportamiento se decide mediante la delegación a las clases de estado, lo que reduce significativamente el código condicional y mejora la legibilidad.

#### Ejemplo:

Antes de usar el patrón **State**:

```javascript
class Order {
  constructor() {
    this.state = "pending";
  }

  processOrder() {
    if (this.state === "pending") {
      console.log("La orden está pendiente.");
    } else if (this.state === "shipped") {
      console.log("La orden ha sido enviada.");
    } else if (this.state === "delivered") {
      console.log("La orden ha sido entregada.");
    }
  }
}
```

Con el patrón **State**:

```javascript
class Order {
  constructor() {
    this.state = new PendingState(); // Estado inicial
  }

  setState(state) {
    this.state = state; // Cambiar el estado
  }

  processOrder() {
    this.state.handleRequest(); // Delegar al estado actual
  }
}
```

Este enfoque reduce la necesidad de condicionales, haciendo que el código sea más fácil de entender y mantener.

## 5. Responsabilidad Única

Cada clase de estado tiene la responsabilidad única de manejar un comportamiento específico asociado con su estado. Esto sigue el principio de **Responsabilidad Única** (SRP), que es uno de los principios SOLID. Al delegar las responsabilidades a las clases de estado, el código es más limpio y modular.

#### Ejemplo:

Cada clase de estado maneja únicamente su propio comportamiento. Esto asegura que cada parte del código esté organizada y fácil de gestionar.

---