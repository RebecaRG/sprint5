import { Injectable } from '@angular/core';
import { IStep } from '../interfaces/i-step';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  public steps : IStep[] = [{
    title: 'Dedica moltes hores:',
    descripcion: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
    img: '../../../assets/images/time_managment.svg',
    bgcolor: '#4DA2A9',
  },
  {
    title: 'Programa projectes propis:',
    descripcion: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
    img: '../../../assets/images/programming.svg',
    bgcolor: '#D3D4D9',
  },
  {
    title: 'Procura descansar:',
    descripcion: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
    img: '../../../assets/images/meditation.svg',
    bgcolor: '#FFD167',
  }];

  constructor() {}

  getSteps() : IStep[]{
    return this.steps;
  }

}
