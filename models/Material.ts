import type { IBibliotecaItem } from "../interface/IBibliotecaItem";

abstract class Material implements IBibliotecaItem {
  readonly id: string;
  titulo: string;
  autor: string;
  protected disponible: boolean;  

  constructor(id: string, titulo: string, autor: string, disponible: boolean = true) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = disponible;
  }

  get disponibilidad(): boolean {
    return this.disponible;
  }

  set disponibilidad(valor: boolean) {
    this.disponible = valor;
  }

  abstract mostrarInfo(): void;
}
export { Material };