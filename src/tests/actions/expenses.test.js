// import { removeExpense, editExpense } from '../../actions/expenses';

const removeExpense = ({ id }= {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

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
        description,
        note,
        amount,
        createdAt,
    }
});

test('Should setup remove expense action object', (value = 'aashi') => {
    const action = removeExpense({ id: '123456qwerty'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123456qwerty',
    })
})

test('Should setup edit expense action object', () => {
    const action = editExpense('123456qwerty', { note: 'allah'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123456qwerty',
        updates:{
            note: 'allah'
        }
    })
})

test('Should setup add expense action object with value', () => {
    const expenseData = {
        description: 'Rent',
        note:'room rent',
        amount: 100,
        createdAt: 1000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses:{
            ...expenseData
        }
    })
})

test('Should setup add expense action object without value', () => {
    const action = addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expenses:{
            description: '',
            note: '',
            amount:0,
            createdAt:0
        }
    })
})