import { Injectable } from "@angular/core";
import { type NewUserInput } from "./new-user-input.model";
import { type AnnualData } from "../investment.model";

@Injectable({ providedIn: "root"})
export class InvestmentsCalculator
{
    investmentsResults?: AnnualData[];

    calculateInvestmentsResults(userInput: NewUserInput)
    {
        const annualData: AnnualData[] = [];
        let investmentValue = userInput.initialInvestment;
      
        for (let i = 0; i < userInput.duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (userInput.expectedReturn / 100);
          investmentValue += interestEarnedInYear + userInput.annualInvestment;
          const totalInterest =
            investmentValue - userInput.annualInvestment * year - userInput.initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: userInput.annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: userInput.initialInvestment + userInput.annualInvestment * year,
          });
        }
      
        this.investmentsResults = annualData;
    }
}