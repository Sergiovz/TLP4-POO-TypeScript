import { Libro } from "./models/Libro.js";
import { Revista } from "./models/Revista.js";
import { Usuario } from "./models/Usuario.js";

// Crear 2 libros
const libro1 = new Libro(
  1,
  "Cien Años de Soledad",
  "Gabriel García Márquez",
  471
);

const libro2 = new Libro(2, "Sapiens", "Yuval Noah Harari", 496);

// Crear 1 revista
const revista1 = new Revista(3, "National Geographic", "Varios", 202);

// Crear 1 usuario
const usuario1 = new Usuario(1, "Jhon Doe", "JhonDoe001@email.com");

// Prestar materiales
usuario1.prestar(libro2);
usuario1.prestar(revista1);

// Mostrar información de materiales prestados
console.log(usuario1.mostrarPrestados());
console.log("\n", usuario1.mostrarUltimaPrestacion());

// Demostrar polimorfismo
const materiales = [libro1, libro2, revista1];
for (const mat of materiales) {
  console.log(mat.mostrarInfo());
}
