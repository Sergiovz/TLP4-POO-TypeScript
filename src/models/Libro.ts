import { Material } from "./Material.js";

class Libro extends Material {
  constructor(
    id: number,
    titulo: string,
    autor: string,
    public paginas: number
  ) {
    super(id, titulo, autor);
    this.paginas = paginas;
  }

  mostrarInfo(): string {
    return `Libro - ID: ${this.id}, Título: ${this.titulo}, Autor: ${this.autor}, Número de Páginas: ${this.paginas}`;
  }
}

export { Libro };
