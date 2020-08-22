import { createStore, combineReducers } from 'redux';
import { v1 as uuidv1} from 'uuid';

const addExpense = (
    { 
        description='',
        note='',
        amount=0,
        createdAt=0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expenses: {
        id: uuidv1(),
        description,
        note,
        amount,
        createdAt,
    }
});

const removeExpense = ({ id }= {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'

})

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

const getVisibileExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === 'amount') {
            return a.amount <b.amount ? 1 : -1;
        }
    })
}

const expensesReducerDefaultState = []

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [ ...state, action.expenses]
        case 'REMOVE_EXPENSE':
        return state.filter(({id}) => {
            return id !== action.id;
        })
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                };
            });
        default: 
        return state;
    }
};

const filterReducer = (state = filterReducerDefaultState ,action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy : action.sortBy
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy : action.sortBy
            }
        case 'SET_START_DATE': 
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE': 
            return {
                ...state,
                endDate: action.endDate
            }
        default: 
        return state;
    }
}

const store = createStore (combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visibileExpenses = getVisibileExpenses(state.expenses, state.filters);
    console.log(visibileExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 800, createdAt:2500}));
const expenseTwo = store.dispatch(addExpense({ description: 'Cofee', amount: 100, createdAt: 3000}));
// store.dispatch(removeExpense( {id: expenseOne.expenses.id}))
// store.dispatch(editExpense(expenseTwo.expenses.id, { amount: 150}))

// store.dispatch(setTextFilter('cofee'));
// store.dispatch(setTextFilter(''));

// store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(2000))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(3001))

const demoState = {
    expenses: [{
        id: 'jgfakefkadb',
        description: 'Rent',
        note: 'htis is room based rent',
        amount: 800,
        createdAt: 0
    }],
    filters: [{
        text: 'Rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }]
};