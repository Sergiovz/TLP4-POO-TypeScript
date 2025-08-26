import type { IBibliotecaItem } from "../interfaces/IBibliotecaItem.js";

abstract class Material implements IBibliotecaItem {
  constructor(
    public id: number,
    public titulo: string,
    public autor: string
  ) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  abstract mostrarInfo(): string;
}

export { Material };
