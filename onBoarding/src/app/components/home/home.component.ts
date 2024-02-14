import { Component, Input, inject } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { StepsService } from '../../services/steps.service';
import { IStep } from '../../interfaces/i-step';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public iStepService : StepsService = inject(StepsService);
  steps: IStep[] = this.iStepService.getSteps() ;
}
