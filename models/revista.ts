import { Material } from "./Material";

class Revista extends Material {
    private numeroEdicion: number;

    constructor(id: string, titulo: string, autor: string, numeroEdicion: number, disponible: boolean = true) {
        super(id, titulo, autor, disponible);
        this.numeroEdicion = numeroEdicion;
    }

    mostrarInfo(): void {
        console.log(`Revista: ${this.titulo} - Autor: ${this.autor} - Edición: ${this.numeroEdicion}`);
    }
}
export { Revista };