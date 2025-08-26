# Preguntas y respuestas sobre TypeScript

## 1. ¿Qué diferencia existe entre extends y implements en TypeScript?

- `extends` se utiliza para heredar de una clase base, obteniendo sus métodos y propiedades (herencia de implementación y comportamiento).
- `implements` se utiliza para obligar a una clase a cumplir con una interfaz, asegurando que implemente la estructura definida por la interfaz (solo define la estructura, no la implementación).

## 2. ¿Qué ventajas ofrece el tipado fuerte en funciones y clases?

- Permite detectar errores en tiempo de compilación.
- Facilita el autocompletado y la documentación en los editores.
- Mejora la mantenibilidad y legibilidad del código.
- Reduce errores en tiempo de ejecución.

## 3. ¿Qué significa que una clase sea abstracta?

- Una clase abstracta no puede ser instanciada directamente.
- Sirve como base para otras clases.
- Puede contener métodos abstractos (sin implementación) que deben ser implementados por las clases hijas.

## 4. ¿Por qué conviene usar getters y setters para el encapsulamiento?

- Permiten controlar el acceso y la modificación de propiedades privadas o protegidas.
- Facilitan la validación o lógica adicional al leer o escribir valores.
- Mejoran la seguridad y flexibilidad del código.

## 5. Ejemplos de tipado en TypeScript

### a. Función con parámetros obligatorios y opcionales

```typescript
function saludar(nombre: string, edad?: number): string {
  return edad ? `Hola, ${nombre}. Tienes ${edad} años.` : `Hola, ${nombre}.`;
}
```

### b. Función que devuelve una Promise

```typescript
function obtenerDatos(id: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Datos para ID: ${id}`), 1000);
  });
}
```
