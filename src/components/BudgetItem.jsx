import React from 'react'
import { calculateSpentByBudget, formatCurrency, formatPercentage } from '../helpers'

const BudgetItem = ({budget}) => {

  //amount is how much amount wee have for this budget for eg - 100 for shoes is budged
  const { id, name, amount, color } = budget;

  //will pass this particular budget id and get all the expenses spent in this budget category
  const spent = calculateSpentByBudget(id);

  return (
    <div className='budget'
      style={{
        "--accent": color
      }}
    >
      <div className="progress-text">
          <h2>{name}</h2>
          <p>{ formatCurrency(amount) } Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(amount - spent)} remaining</small>
      </div>
      
      </div>
  )
}

export default BudgetItem










