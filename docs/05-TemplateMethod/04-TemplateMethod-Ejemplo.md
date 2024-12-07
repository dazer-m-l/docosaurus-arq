---
sidebar_position: 4
---

# Ejemplo del Patrón Template Method

El patrón **Template Method** se utiliza para definir el esqueleto de un algoritmo en una clase base, permitiendo que las subclases implementen partes específicas sin modificar la estructura general del algoritmo.

A continuación, veremos un ejemplo práctico diseñado para ser fácil de entender, incluso para alguien sin experiencia previa en este tema.

---

## Ejemplo Práctico: Preparar Bebidas

Imaginemos que estamos desarrollando una aplicación que prepara diferentes tipos de bebidas calientes, como té y café. Aunque el proceso general para preparar ambas bebidas es similar, los detalles específicos varían. El patrón **Template Method** nos permite definir un flujo común para preparar bebidas, dejando que las subclases implementen los pasos personalizados.

### 1. Clase Base: `BebidaCaliente`

La clase base define el método plantilla `prepararBebida`, que contiene el flujo general del algoritmo.

```javascript
class BebidaCaliente {
  // Método plantilla: define el flujo general
  prepararBebida() {
    this.hervirAgua();
    this.agregarIngredientes();
    this.servirEnTaza();
    this.agregarExtras();
  }

  hervirAgua() {
    console.log("Hirviendo agua...");
  }

  servirEnTaza() {
    console.log("Sirviendo en la taza...");
  }

  // Métodos abstractos que deben ser implementados por las subclases
  agregarIngredientes() {
    throw new Error("Este método debe ser implementado por una subclase");
  }

  agregarExtras() {
    throw new Error("Este método debe ser implementado por una subclase");
  }
}
```

## 2. Subclase: `Te`
La clase Te implementa los pasos específicos para preparar té.

```javascript
Copiar código
class Te extends BebidaCaliente {
  agregarIngredientes() {
    console.log("Agregando bolsita de té...");
  }

  agregarExtras() {
    console.log("Agregando limón...");
  }
}
```

## 3. Subclase: `Cafe`
La clase Cafe implementa los pasos específicos para preparar café.

```javascript
Copiar código
class Cafe extends BebidaCaliente {
  agregarIngredientes() {
    console.log("Agregando café molido...");
  }

  agregarExtras() {
    console.log("Agregando azúcar y leche...");
  }
}
```

## 4. Uso del Patrón
Ahora, podemos crear instancias de las bebidas y preparar cada una sin preocuparnos por los detalles de la implementación.

```javascript
Copiar código
// Preparar té
const te = new Te();
console.log("Preparando té:");
te.prepararBebida();

console.log("\n");

// Preparar café
const cafe = new Cafe();
console.log("Preparando café:");
cafe.prepararBebida();
```
#### Salida Esperada
Al ejecutar el código anterior, obtenemos:
```
Preparando té:
Hirviendo agua...
Agregando bolsita de té...
Sirviendo en la taza...
Agregando limón...

Preparando café:
Hirviendo agua...
Agregando café molido...
Sirviendo en la taza...
Agregando azúcar y leche...
```
## Explicación concreta (Por puntos clave)
Clase Base Común: La clase `BebidaCaliente` define el flujo general del algoritmo en el método prepararBebida.
Personalización con Subclases: Las subclases `Te` y `Cafe` implementan los métodos abstractos para personalizar los pasos específicos.

Reutilización del Código: El flujo común (`hervirAgua` y `servirEnTaza`) no necesita reescribirse en cada subclase.

Extensibilidad: Si en el futuro se necesita agregar otra bebida, como chocolate caliente, simplemente se crea una nueva subclase que implemente los métodos necesarios.