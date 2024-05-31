import { Component, inject } from '@angular/core';
import { UserInputComponent } from './user-input/user-input.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentsCalculator } from './investments.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})
export class AppComponent 
{
  annualData = inject(InvestmentsCalculator);
}
