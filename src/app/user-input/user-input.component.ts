import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewUserInput } from '../new-user-input.model';
import { InvestmentsCalculator } from '../investments.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent 
{  
  newUserInput: NewUserInput = {initialInvestment: 0, annualInvestment: 0, expectedReturn: 5, duration: 10};

  constructor(public investmentsResults: InvestmentsCalculator) {};

  onCalculate()
  {
    if(this.newUserInput.annualInvestment>=0 && this.newUserInput.duration>0 && this.newUserInput.initialInvestment>0 && this.newUserInput.expectedReturn>0)
    {  
      this.investmentsResults.calculateInvestmentsResults(this.newUserInput);
      this.newUserInput.initialInvestment = 0;
      this.newUserInput.annualInvestment = 0;
      this.newUserInput.expectedReturn = 5;
      this.newUserInput.duration = 10;
    }
    else
      alert("Insert valid values!!");
  }
}
