import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLabelDirective } from './directives/custom-label.directive';



@NgModule({
  declarations: [ //las directvas tienen que estar declaradas en el módulo como si fuera un componente
    CustomLabelDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [  //se tienen que exportar si las queremos usar fuera de este módulo tmbn
    CustomLabelDirective
  ]
})
export class SharedModule { }
