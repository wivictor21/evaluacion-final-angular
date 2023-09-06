import { number } from "prop-types";

export interface Plato {
    id:number;
    nombre:string;
    descripcion:string;
    imagen:string;
    procesoPreparacion:string;
    video:string;
    culturaGastronomica:number[]
}
