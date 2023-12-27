import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  public counter = signal(10);  //le damos un valor inicial
  //usando una señal, angular puede saber todos los lugares donde se están usando estas señales

  //la función computed se va a ejecutar cuando el valor de la señal cambie
  //esta señal es de SÓLO LECTURA
  public squareCounter = computed( () => this.counter() * this.counter());

  increaseBy( value: number){
    this.counter.update(current => current + value);
  }

}
