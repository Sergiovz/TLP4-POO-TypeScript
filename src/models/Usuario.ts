import type { IUsuario } from "../interfaces/IUsuario.js";
import type { Material } from "./Material.js";

class Usuario implements IUsuario {
    private materialesPrestados: Material[] = [];
    ultimaPrestacion!: Material;

    constructor(
        public id: number,
        public nombre: string,
        public email: string
    ) {}

    prestar(material: Material): void {
        if (!material) {
            console.log(`El material no está disponible.`);
        }

        this.materialesPrestados.push(material);    
        this.ultimaPrestacion = material;
    }

    mostrarPrestados(): string {
        if (this.materialesPrestados.length === 0) {
            return "No hay materiales prestados.";
        }
        return this.materialesPrestados
            .map((mat, idx) => `${idx + 1}. ${mat.titulo} (${mat.autor})`)
            .join("\n");
    }

    mostrarUltimaPrestacion(): string {
        if (!this.ultimaPrestacion) {
            return "No hay última prestación registrada.";
        }
        return `Última prestación: ${this.ultimaPrestacion.titulo} (${this.ultimaPrestacion.autor})`;
    }
}

export { Usuario };