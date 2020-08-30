// import {v1 as uuidv1} from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expenses) => ({
    type: 'ADD_EXPENSE',
    expenses
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description='',
            note='',
            amount=0,
            createdAt=0
        } = expenseData;
        const expense = { description, note, amount, createdAt}

        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({ 
                ...expense,
                id: ref.key
            }))
        })
    }
}

export const removeExpense = ({ id }= {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const setExpense = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpense = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
                const expenses = [];

                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });

                dispatch(setExpense(expenses))
            });
    };
};