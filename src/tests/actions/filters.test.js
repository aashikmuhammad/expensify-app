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

test('Should generate set start date action object', () => {
    const action = setStartDate( 123456 )
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: 123456
    })
});

test('Should generate set end date action object', () => {
    const action = setEndDate( 123456 )
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: 123456
    })
});

test('Should sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    
    })
});

test('Should sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    
    })
});

test('Should set a text for filter with name', () =>{
    const action = setTextFilter('aashi');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'aashi'
    })
});

test('Should set a text for filter without name', () =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});