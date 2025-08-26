import { Libro } from "./models/libros";
import { Revista } from "./models/revista";
import { Usuario } from "./models/Usuario";

// Crear materiales
const libro1 = new Libro("1", "El Quijote", "Cervantes", 863);
const libro2 = new Libro("2", "Cien años de soledad", "García Márquez", 471);
const revista1 = new Revista("3", "National Geographic", "Varios", 150);

// Crear usuario
const usuario1 = new Usuario("1", "Maximiliano");

// Prestar materiales
usuario1.prestar(libro1);
usuario1.prestar(libro2);
usuario1.prestar(revista1);

// Mostrar lista de materiales prestados
usuario1.mostrarPrestados();

// Mostrar última prestación
usuario1.mostrarUltimaPrestacion();

// Polimorfismo
console.log("\n🎭 Demostración de polimorfismo:");
const items = [libro1, libro2, revista1];
items.forEach(item => item.mostrarInfo());
