import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpense from '../selectors/expenses';
import GetExpenseTotal from '../selectors/ExpenseTotal';


const ExpenseSummary = ({ expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount <= 1 ? 'expense' : 'expenses' ;
    const formattedExpenseTotal = numeral(expenseTotal /100).format('$0,0.00')
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpense(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: GetExpenseTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);