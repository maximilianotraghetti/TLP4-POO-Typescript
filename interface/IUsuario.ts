import { Material } from "../models/Material";
interface IUsuario {
    id: string;
    nombre: string;

    prestarMaterial(material: Material): boolean;
} 
export type { IUsuario};