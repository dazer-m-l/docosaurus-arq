---
sidebar_position: 4
---

# Ejemplo del Patrón Visitor

El patrón **Visitor** permite separar operaciones de los objetos sobre los cuales operan. Imaginemos un ejemplo cotidiano donde tenemos diferentes tipos de documentos (PDF y Word) y queremos realizar varias operaciones sobre ellos como imprimir, exportar o contar palabras.

---

## **Contexto del Ejemplo**

Tienes una estructura que representa documentos. Cada tipo de documento (PDF y Word) necesita realizar ciertas operaciones. En lugar de implementar la lógica dentro de las clases `PDFDocument` y `WordDocument`, delegamos esas operaciones a un visitante especializado.

---

## **Implementación del Patrón Visitor**

### 1. **Definición de la Estructura de Documentos**

Primero, definimos la interfaz base para todos los documentos, asegurándonos de que cada uno pueda aceptar un visitante.

```javascript
// Interfaz base para documentos
class Document {
  accept(visitor) {
    throw new Error("Este método debe ser implementado por subclases");
  }
}

// Clase PDFDocument
class PDFDocument extends Document {
  accept(visitor) {
    visitor.visitPDFDocument(this);
  }

  getContent() {
    return "Contenido del documento PDF";
  }
}

// Clase WordDocument
class WordDocument extends Document {
  accept(visitor) {
    visitor.visitWordDocument(this);
  }

  getContent() {
    return "Contenido del documento Word";
  }
}
```
### 2. Definición de Visitantes
Los visitantes implementan diferentes operaciones. Cada visitante tiene métodos específicos para cada tipo de documento.

```javascript
Copiar código
// Visitante para imprimir documentos
class PrintVisitor {
  visitPDFDocument(doc) {
    console.log("Imprimiendo: " + doc.getContent());
  }

  visitWordDocument(doc) {
    console.log("Imprimiendo: " + doc.getContent());
  }
}

// Visitante para contar palabras
class WordCountVisitor {
  visitPDFDocument(doc) {
    const words = doc.getContent().split(" ").length;
    console.log(`El documento PDF tiene ${words} palabras.`);
  }

  visitWordDocument(doc) {
    const words = doc.getContent().split(" ").length;
    console.log(`El documento Word tiene ${words} palabras.`);
  }
}
```
### 3. Uso del Patrón Visitor
Creamos documentos y les aplicamos diferentes visitantes.

```javascript
Copiar código
// Crear documentos
const pdf = new PDFDocument();
const word = new WordDocument();

// Crear visitantes
const printVisitor = new PrintVisitor();
const wordCountVisitor = new WordCountVisitor();

// Aplicar visitantes
console.log("=== Imprimiendo Documentos ===");
pdf.accept(printVisitor);
word.accept(printVisitor);

console.log("\n=== Contando Palabras ===");
pdf.accept(wordCountVisitor);
word.accept(wordCountVisitor);
```
## Salida del Ejemplo
Cuando ejecutas el código anterior, obtendrás la siguiente salida:

```   
Copiar código
=== Imprimiendo Documentos ===
Imprimiendo: Contenido del documento PDF
Imprimiendo: Contenido del documento Word

=== Contando Palabras ===
El documento PDF tiene 4 palabras.
El documento Word tiene 4 palabras.
```

## Explicación Simple
Estructura de Datos: Los documentos (`PDFDocument` y `WordDocument`) solo saben cómo aceptar visitantes. No tienen lógica específica para imprimir o contar palabras.

Visitantes: Los visitantes (`PrintVisitor` y `WordCountVisitor`) encapsulan la lógica específica para operar en los documentos.

Flexibilidad: Puedes agregar nuevos visitantes (por ejemplo, ExportVisitor) sin cambiar las clases de documentos.