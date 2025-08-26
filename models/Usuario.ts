import { Material } from "./Material";
import type { IUsuario } from "../interface/IUsuario";
class Usuario implements IUsuario {
  id: string;
  nombre: string;
  private materialesPrestados: Material[] = [];
  private ultimaPrestacion!: Material;  // non-null assertion

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
    prestarMaterial(material: Material): boolean {
        throw new Error("Method not implemented.");
    }

  prestar(material: Material): void {
    if (material.disponibilidad) {
      material.disponibilidad = false;   // usar setter
      this.materialesPrestados.push(material);
      this.ultimaPrestacion = material;  // guarda la última
      console.log(`${this.nombre} ha prestado: ${material.titulo}`);
    } else {
      console.log(`El material "${material.titulo}" no está disponible.`);
    }
  }

  mostrarPrestados(): void {
    console.log(`📚 Materiales prestados por ${this.nombre}:`);
    if (this.materialesPrestados.length === 0) {
      console.log("Ninguno.");
    } else {
      this.materialesPrestados.forEach(m => m.mostrarInfo()); // polimorfismo
    }
  }

  mostrarUltimaPrestacion(): void {
    if (this.ultimaPrestacion) {
      console.log(`🕑 Última prestación de ${this.nombre}:`);
      this.ultimaPrestacion.mostrarInfo();
    } else {
      console.log(`${this.nombre} aún no ha prestado materiales.`);
    }
  }
}
export { Usuario };