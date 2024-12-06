---
sidebar_position: 4
---

# Ejemplo del Patrón State

El patrón **State** es útil cuando el comportamiento de un objeto cambia en función de su estado interno. A continuación, se presenta un ejemplo para comprender mejor cómo funciona este patrón.

---

## Escenario

Imagina un sistema de gestión de pedidos en una tienda en línea. Cada pedido puede estar en diferentes estados: **Pendiente**, **Enviado**, **Entregado** o **Cancelado**. Cada estado tiene un comportamiento diferente al procesar el pedido.

---

## Implementación

### Clase Principal: `Order`

La clase `Order` representa un pedido. No contiene lógica específica para cada estado, sino que delega el comportamiento a los objetos de estado.

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
## Estados

Cada estado es una clase separada que implementa el método handleRequest para definir su comportamiento.

#### Estado Pendiente
```javascript
Copiar código
class PendingState {
  handleRequest() {
    console.log("La orden está pendiente.");
  }
}
```
#### Estado Enviado
```javascript
Copiar código
class ShippedState {
  handleRequest() {
    console.log("La orden ha sido enviada.");
  }
}
```
#### Estado Entregado

```javascript
Copiar código
class DeliveredState {
  handleRequest() {
    console.log("La orden ha sido entregada.");
  }
}
```
#### Estado Cancelado
```javascript
Copiar código
class CanceledState {
  handleRequest() {
    console.log("La orden ha sido cancelada.");
  }
}
```
## Uso
El siguiente código muestra cómo interactuar con el sistema de pedidos utilizando el patrón State:

```javascript
Copiar código
const order = new Order(); // Estado inicial: Pendiente
order.processOrder(); // Salida: La orden está pendiente.

order.setState(new ShippedState()); // Cambiar a estado Enviado
order.processOrder(); // Salida: La orden ha sido enviada.

order.setState(new DeliveredState()); // Cambiar a estado Entregado
order.processOrder(); // Salida: La orden ha sido entregada.

order.setState(new CanceledState()); // Cambiar a estado Cancelado
order.processOrder(); // Salida: La orden ha sido cancelada.
```
## Explicación
Cambio Dinámico de Comportamiento:

La clase Order cambia dinámicamente su comportamiento al delegar las responsabilidades a las clases de estado.
Modularidad:

Cada estado es una clase separada, lo que facilita la adición de nuevos estados o la modificación de los existentes sin alterar el código de la clase principal.
Reducción de Complejidad:

Al evitar estructuras condicionales complejas, el código es más fácil de entender y mantener.