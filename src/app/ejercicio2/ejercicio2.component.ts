import { Component } from '@angular/core';
import * as math from 'mathjs';


@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.scss'
})
export class Ejercicio2Component {


  expresion: string = '';


  constructor(){

  }


  agregarNumero(numero: number) {
    this.expresion += numero.toString();
  }

  agregarOperacion(operacion: string) {
    if (operacion === '×') {
      this.expresion += '*'; // Usar el asterisco '*' en la expresión
    } else if(operacion === '÷'){
      this.expresion += '÷';
    }else if(operacion === '^'){
      this.expresion += '^';
    }else {
      this.expresion += operacion;
    }

  }

  limpiar() {
    this.expresion = '';
  }

  calcular() {
    try {
      console.log('Expresión:', this.expresion);
      const resultado = math.evaluate(this.expresion.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '^'));
      this.expresion = resultado.toString();
    } catch (error) {
      console.error('Error al evaluar la expresión:', error);
      this.expresion = 'Error';
    }
  }

  borrarUnNumero(){
    const numeros = this.expresion.split('');

    numeros.pop();

    this.expresion = numeros.join('');
  }

}
