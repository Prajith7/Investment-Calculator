import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

function Result({ userInput }) {
  const resultData = calculateInvestmentResults(userInput);
  const initalInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intrest (Year)</th>
          <th>Total Investment</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData?.map((ele) => {
          const totalIntrest =
            ele.valueEndOfYear -
            ele.annualInvestment * ele.year -
            initalInvestment;
         const totalAmountInvested = ele.valueEndOfYear - totalIntrest
          return (
            <tr key={ele.year}>
              <td>{ele.year}</td>
              <td>{formatter.format(ele.valueEndOfYear)}</td>
              <td>{formatter.format(ele.interest)}</td>
              <td>{formatter.format(totalIntrest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Result;
