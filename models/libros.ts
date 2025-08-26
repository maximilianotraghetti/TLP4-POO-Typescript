import { Material } from "./Material";

class Libro extends Material {
  private numeroPaginas: number;

  constructor(id: string, titulo: string, autor: string, numeroPaginas: number, disponible: boolean = true) {
    super(id, titulo, autor, disponible);
    this.numeroPaginas = numeroPaginas;
  }

  mostrarInfo(): void {
    console.log(`Libro: ${this.titulo} - Autor: ${this.autor} - Páginas: ${this.numeroPaginas}`);
  }
}
export { Libro };