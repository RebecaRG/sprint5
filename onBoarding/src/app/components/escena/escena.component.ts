import { Component, Input} from '@angular/core';
import { IStep } from '../../interfaces/i-step';
import {
  trigger, transition, style, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-escena',
  standalone: true,
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss', 
  animations: [
    trigger('animSlider', [
      transition('* <=> *', [
       animate('1s', keyframes([
          style({ transform: 'translateX(-10px)', offset: 0.1 }),
          style({ transform: 'translateX(10px)', offset: 0.2 }),
          style({ transform: 'translateX(-5px)', offset: 0.3 }),
          style({ transform: 'translateX(5px)', offset: 0.4 }),
          style({ transform: 'translateX(-3px)', offset: 0.5 }),
          style({ transform: 'translateX(3px)', offset: 0.6 }),
          style({ transform: 'translateX(-2px)', offset: 0.7 }),
          style({ transform: 'translateX(2px)', offset: 0.8 }),
          style({ transform: 'translateX(0)', offset: 1 }),
        ])),
      ]),
    ])
  ]
})

export class EscenaComponent {
  @Input() 
  steps: IStep[] = [];
  currentStep = 0;

  indicatorsOk():void {
    
    document.querySelectorAll('#indicators button').forEach(button => {
      button.classList.remove('active');
    });
  
    let button = document.querySelector(`#indicators button[id="${this.currentStep}"]`);
    if (button) {
      button.classList.add('active');
    }  
  }
  
  next():void{
    this.currentStep  += 1;
    
    this.indicatorsOk();
  }

  previous():void{
    this.currentStep -= 1;
    this.indicatorsOk();
  }

  cS(num:number){
    this.currentStep = num;
    this.indicatorsOk();
  }
}