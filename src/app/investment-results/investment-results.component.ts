import { Component, Input, inject } from '@angular/core';
import { AnnualData } from '../../investment.model';
import { NewUserInput } from '../new-user-input.model';
import { UserInputComponent } from '../user-input/user-input.component';
import { CurrencyPipe } from '@angular/common';
import { InvestmentsCalculator } from '../investments.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [UserInputComponent, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent 
{
  annualData = inject(InvestmentsCalculator);
}