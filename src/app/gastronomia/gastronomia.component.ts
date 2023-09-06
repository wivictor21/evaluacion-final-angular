import { Component } from '@angular/core';

import { COMIDA } from '../mock-comida';
import { Plato } from 'src/plato';
import { CULTURA } from '../mock-culturas';
import { RESTAURANTE } from '../mock-restaurantes';
import { Cultura } from 'src/cultura';

@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.component.html',
  styleUrls: ['./gastronomia.component.css']
})
export class GastronomiaComponent {
  comida=COMIDA
  culturaGastronomica=CULTURA
  restaurantes=RESTAURANTE

  selectedPlato?:Plato;
  onMouseDownCultura?:Cultura
  onMouseDownPlato?:Plato
  onMouseUpPlatp?:Plato
  elementoSeleccionado?: Cultura;

  onSelect(plato:Plato):void{
    this.selectedPlato = plato;
    alert("\n"+"Nombre de la receta: "+plato.nombre
    +"\nDescripcion: "+plato.descripcion
    +"\nProceso de preparación: "+plato.procesoPreparacion)
    console.log("On Mouse Down plato:", plato);
    console.log("Selected hero:", plato);
  }
  onMouseDownC(cultura:Cultura):number{
    this.onMouseDownCultura = cultura;
    alert("\n"+"Cultura "+cultura.nombre
    +"\n"+cultura.informacion)
    console.log("On Mouse Down plato:", cultura);
    return cultura.id
  }
  onMouseDownP(plato:Plato):void{
    this.onMouseDownPlato = plato;
    alert("\n"+"Receta: "+plato.nombre
    +"\nProceso de preparación: "+plato.procesoPreparacion)
    console.log("On Mouse Down plato:", plato);
  }
  onMouseOut():void{
    //alert('Mouse salió del área')
    console.log('Mouse salió del área');
  }

  OnMouseUpP():void{
    console.log("On Mouse UpHero plato");
  }

  seleccionarElemento(elemento: Cultura) {
    this.elementoSeleccionado = elemento;
  }

}
