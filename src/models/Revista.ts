import { Material } from "./Material.js";

class Revista extends Material {
  constructor(
    id: number,
    titulo: string,
    autor: string,
    public numeroEdicion: number
  ) {
    super(id, titulo, autor);
    this.numeroEdicion = numeroEdicion;
  }

  mostrarInfo(): string {
    return `Revista - ID: ${this.id}, Título: ${this.titulo}, Autor: ${this.autor}, Número de Edición: ${this.numeroEdicion}`;
  }
}

export { Revista };
