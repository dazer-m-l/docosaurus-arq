---
sidebar_position: 2
---

# Características del Patrón Visitor

El patrón **Visitor** se caracteriza por su capacidad de separar algoritmos y estructuras de datos, permitiendo un diseño modular, extensible y fácil de mantener. A continuación, se describen sus principales características:

---

## 1. **Separación de Algoritmos y Datos**

El patrón **Visitor** desacopla las operaciones (algoritmos) de las estructuras de datos sobre las que actúan. Esto significa que las clases que representan datos no necesitan incluir lógica para cada operación posible, manteniéndose más enfocadas en sus responsabilidades.

### Ejemplo:

```javascript
class PDFDocument {
  accept(visitor) {
    visitor.visitPDFDocument(this); // Delegar operación al visitante
  }
}

class WordDocument {
  accept(visitor) {
    visitor.visitWordDocument(this);
  }
}
```
Aquí, PDFDocument y WordDocument no implementan lógica específica para sus operaciones; simplemente delegan el trabajo al visitante.

## 2. Doble Despacho
El patrón utiliza el concepto de doble despacho, donde tanto el tipo del objeto visitado como el tipo del visitante determinan la operación que se ejecutará. Esto permite realizar acciones específicas para cada combinación de visitante y objeto.

Ejemplo:
```javascript
Copiar código
class PrintVisitor {
  visitPDFDocument(doc) {
    console.log("Imprimiendo documento PDF.");
  }

  visitWordDocument(doc) {
    console.log("Imprimiendo documento Word.");
  }
}
```

El método accept(visitor) en cada clase asegura que se llame al método correcto del visitante según el tipo del objeto.

## 3. Extensibilidad
El patrón facilita la adición de nuevos algoritmos sin modificar la estructura de datos existente. Para agregar una nueva funcionalidad, solo se necesita implementar una nueva clase visitante que implemente los métodos adecuados para cada tipo de objeto.

Ejemplo:
Agregar un nuevo visitante para exportar documentos:

```javascript
Copiar código
class ExportVisitor {
  visitPDFDocument(doc) {
    console.log("Exportando documento PDF a formato PNG.");
  }

  visitWordDocument(doc) {
    console.log("Exportando documento Word a formato TXT.");
  }
}
```

No es necesario cambiar PDFDocument ni WordDocument, ya que ambas clases aceptarán el nuevo visitante.

## 4. Consistencia en la Estructura de Objetos
Las clases que forman la estructura de objetos no necesitan modificarse cuando se añaden nuevas operaciones. Esto asegura que el diseño siga el principio Open/Closed (abierto para extensión, cerrado para modificación).

Ejemplo:
La estructura de documentos puede ser representada por:

```javascript
Copiar código
class PDFDocument { /* Datos específicos del PDF */ }
class WordDocument { /* Datos específicos del Word */ }
```

Estas clases permanecen inalteradas al introducir visitantes como PrintVisitor o ExportVisitor.

## 5. Flexibilidad
El patrón Visitor permite implementar operaciones complejas que requieren información sobre múltiples objetos en la estructura. También es útil para realizar validaciones o transformaciones que afectan diferentes partes del sistema.

## 6. Reutilización de Código
Los visitantes pueden ser reutilizados con diferentes estructuras de objetos que compartan una interfaz común. Esto promueve la consistencia y evita duplicar lógica.

## 7. Soporte para Jerarquías de Clases
El patrón funciona bien con jerarquías de clases complejas, donde diferentes subtipos requieren tratamientos específicos. El visitante maneja esta complejidad con métodos especializados para cada tipo.

## 8. Simplicidad para Operaciones Frecuentes
Para operaciones comunes, como impresión, exportación o generación de reportes, el patrón simplifica la implementación al centralizar la lógica en un único visitante.