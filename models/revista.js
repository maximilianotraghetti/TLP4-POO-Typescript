"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revista = void 0;
var Material_1 = require("./Material");
var Revista = /** @class */ (function (_super) {
    __extends(Revista, _super);
    function Revista(id, titulo, autor, numeroEdicion, disponible) {
        if (disponible === void 0) { disponible = true; }
        var _this = _super.call(this, id, titulo, autor, disponible) || this;
        _this.numeroEdicion = numeroEdicion;
        return _this;
    }
    Revista.prototype.mostrarInfo = function () {
        console.log("Revista: ".concat(this.titulo, " - Autor: ").concat(this.autor, " - Edici\u00F3n: ").concat(this.numeroEdicion));
    };
    return Revista;
}(Material_1.Material));
exports.Revista = Revista;
