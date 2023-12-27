import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'  //los nombres de las directivas se meten entre llaves
})
export class CustomLabelDirective implements OnInit{ //se programa muy similar a un componente normal

  private htmlElement? : ElementRef<HTMLElement>;
  private _color: string = 'red';
  //sabemos que es de este tipo porque es lo que devuelven los formularios l dar error
  private _errors? : ValidationErrors | null;

  //los @Input aparecen como "atributos" en el html y se pueden referenciar y darles valor con []
  //se usa SET para poder recibir el valor
  @Input() set color( value: string ){
    this._color = value;
    this.setStyle();
  }

  @Input() set errors( value : ValidationErrors | null | undefined){
    this._errors = value;
    this.setErrorMsg();
  }


  constructor( private el: ElementRef<HTMLElement>) {
    //console.log(el);
    this.htmlElement = el;

    this.htmlElement.nativeElement.innerHTML = 'Hola mundo';  //podemos hacer cualquier tipo de cambio en el elemento
  }

  ngOnInit(): void {
    //console.log('Hola desde la customLabel');
    this.setStyle();
  }

  setStyle(): void {

    if(!this.htmlElement) return;

    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMsg() : void {
    if(!this.htmlElement) return;
    if(!this._errors) {
      this.htmlElement.nativeElement.innerText = 'No hay errores';
      return;
    }

    const errors = Object.keys(this._errors);

    if(errors.includes('required')){
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
      return;
    }
    if(errors.includes('minlength')){
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];

      this.htmlElement.nativeElement.innerText = `Mínimo ${current}/${min} caracteres`;
      return;
    }
    if(errors.includes('email')){
      this.htmlElement.nativeElement.innerText = 'Se necesita un email válido';
      return;
    }
  }

}
