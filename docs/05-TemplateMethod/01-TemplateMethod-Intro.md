---
sidebar_position: 1
---

# Introducción al Patrón Template Method

El patrón **Template Method** es un patrón de diseño de comportamiento que define el esqueleto de un algoritmo en una clase base, permitiendo que las subclases redefinan ciertos pasos del algoritmo sin cambiar su estructura general. Este patrón es ampliamente utilizado para reutilizar código y establecer un comportamiento común, mientras se permite personalización en partes específicas.

---

## Contexto

El patrón **Template Method** se utiliza cuando:

1. Existe un algoritmo cuyo flujo general debe mantenerse constante, pero algunas partes pueden variar según el contexto.
2. Deseas evitar la duplicación de código en clases relacionadas al definir un comportamiento común en una clase base.

Por ejemplo, en una aplicación que maneja diferentes tipos de datos (como CSV, JSON o XML), el proceso de lectura y procesamiento de datos puede seguir un flujo general, pero los detalles de cómo se leen los datos varían según el formato. 

---

## Propósito

El propósito principal del patrón **Template Method** es:

1. **Definir un algoritmo genérico** en una clase base.
2. **Permitir personalización** en ciertas partes del algoritmo a través de métodos abstractos o sobrescribibles en subclases.
3. Promover la reutilización de código y respetar el principio DRY (Don't Repeat Yourself).

Con este enfoque, las subclases pueden implementar las variaciones específicas sin modificar la estructura principal.

---

En los siguientes apartados, exploraremos las características, ventajas, desventajas y ejemplos detallados del patrón **Template Method**.
