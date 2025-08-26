"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var libros_1 = require("./models/libros");
var revista_1 = require("./models/revista");
var Usuario_1 = require("./models/Usuario");
// Crear materiales
var libro1 = new libros_1.Libro("1", "El Quijote", "Cervantes", 863);
var libro2 = new libros_1.Libro("2", "Cien años de soledad", "García Márquez", 471);
var revista1 = new revista_1.Revista("3", "National Geographic", "Varios", 150);
// Crear usuario
var usuario1 = new Usuario_1.Usuario("1", "Maximiliano");
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
var items = [libro1, libro2, revista1];
items.forEach(function (item) { return item.mostrarInfo(); });
