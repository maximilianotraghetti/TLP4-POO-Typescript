"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(id, nombre) {
        this.materialesPrestados = [];
        this.id = id;
        this.nombre = nombre;
    }
    Usuario.prototype.prestarMaterial = function (material) {
        throw new Error("Method not implemented.");
    };
    Usuario.prototype.prestar = function (material) {
        if (material.disponibilidad) {
            material.disponibilidad = false; // usar setter
            this.materialesPrestados.push(material);
            this.ultimaPrestacion = material; // guarda la última
            console.log("".concat(this.nombre, " ha prestado: ").concat(material.titulo));
        }
        else {
            console.log("El material \"".concat(material.titulo, "\" no est\u00E1 disponible."));
        }
    };
    Usuario.prototype.mostrarPrestados = function () {
        console.log("\uD83D\uDCDA Materiales prestados por ".concat(this.nombre, ":"));
        if (this.materialesPrestados.length === 0) {
            console.log("Ninguno.");
        }
        else {
            this.materialesPrestados.forEach(function (m) { return m.mostrarInfo(); }); // polimorfismo
        }
    };
    Usuario.prototype.mostrarUltimaPrestacion = function () {
        if (this.ultimaPrestacion) {
            console.log("\uD83D\uDD51 \u00DAltima prestaci\u00F3n de ".concat(this.nombre, ":"));
            this.ultimaPrestacion.mostrarInfo();
        }
        else {
            console.log("".concat(this.nombre, " a\u00FAn no ha prestado materiales."));
        }
    };
    return Usuario;
}());
exports.Usuario = Usuario;
