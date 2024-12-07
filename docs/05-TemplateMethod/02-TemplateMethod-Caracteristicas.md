---
sidebar_position: 2
---

# Características del Patrón Template Method

El patrón **Template Method** se basa en definir el esqueleto de un algoritmo en una clase base, delegando los detalles específicos a subclases. Este enfoque proporciona flexibilidad, organización y reutilización de código. A continuación, se describen sus principales características:

---

## 1. **Estructura General en la Clase Base**

El algoritmo principal se define en la clase base mediante un método plantilla que establece la secuencia de pasos. Este método es genérico y no debe ser sobrescrito, garantizando que la estructura general del algoritmo permanezca constante.

### Ejemplo:
```javascript
class DataProcessor {
  process() {
    this.readData();  // Paso específico
    this.transformData();  // Paso específico
    this.saveData();  // Paso específico
  }

  readData() {
    throw new Error("Este método debe implementarse en una subclase.");
  }

  transformData() {
    throw new Error("Este método debe implementarse en una subclase.");
  }

  saveData() {
    throw new Error("Este método debe implementarse en una subclase.");
  }
}
```

## 2. Definición de Pasos Específicos en Subclases
Los detalles de los pasos del algoritmo son implementados por subclases. Esto permite la personalización del comportamiento mientras se mantiene la estructura general del algoritmo en la clase base.

```javascript
class CSVProcessor extends DataProcessor {
  readData() {
    console.log("Leyendo datos de un archivo CSV...");
  }

  transformData() {
    console.log("Transformando datos del archivo CSV...");
  }

  saveData() {
    console.log("Guardando datos procesados...");
  }
}

class JSONProcessor extends DataProcessor {
  readData() {
    console.log("Leyendo datos de un archivo JSON...");
  }

  transformData() {
    console.log("Transformando datos del archivo JSON...");
  }

  saveData() {
    console.log("Guardando datos procesados...");
  }
}
```

Ejemplo:

## 3. Evita la Duplicación de Código
El patrón Template Method elimina la necesidad de duplicar código al encapsular el flujo común del algoritmo en la clase base. Esto sigue el principio DRY (Don't Repeat Yourself).

## 4. Permite Personalización
Las subclases pueden personalizar los pasos específicos del algoritmo sin modificar la estructura general definida en la clase base.

## 5. Compatible con el Principio de Inversión de Dependencias
Al delegar las implementaciones específicas a subclases, el patrón Template Method facilita la adherencia a principios de diseño SOLID, promoviendo un código más flexible y mantenible.
