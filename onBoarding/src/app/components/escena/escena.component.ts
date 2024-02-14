import { Component, Input } from '@angular/core';
import { IStep } from '../../interfaces/i-step';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
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
    console.log(this.currentStep);
    this.indicatorsOk();
}
  
  previous():void{
    this.currentStep -= 1;
    console.log(this.currentStep);
    this.indicatorsOk();
  }

  cS(num:number){
    this.currentStep = num;
    console.log(this.currentStep);
    this.indicatorsOk();
  }
}