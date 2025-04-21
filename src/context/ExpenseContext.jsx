import React, { createContext, useEffect, useReducer } from 'react'


const ExpenseContext = createContext()

const initialState = {
    expenses : [],
    loading : false,
    error : null,

}


const expenseReducer = (state,action)=>{
    switch(action.type){
        case  "ADD_EXPENSE" :
            return {...state,expenses : [...state.expenses,action.payload]};
        case "DELETE_EXPENSE" : 
            return {...state,expenses : state.expenses.filter((expense)=>expense.id !== action.payload.id)};
        
        case "UPDATE_EXPENSE" : 
            return {...state,expenses : state.expenses.map((expense)=> expense.id === action.payload.id ? action.payload : expense )};
        
        case "SET_EXPENSE" :
            return {...state,expenses : action.payload}
    
        
        case "SET_LOADING" :
            return {...state,loading : action.payload};
        
        case "SET_ERROR" : 
            return {...state,error : action.payload};

        default :
        return state
    }
}



export function ExpenseProvider ({children}){
    const [state,dispatch] = useReducer(expenseReducer,initialState)
    const value = {
        ...state,
        newExpense : (expense)=>{
            const newExpense = {
                ...expense,
                id : crypto.randomUUID,
            };
            dispatch({type : "ADD_EXPENSE" , payload : newExpense})
        },
        deleteExpence : (id)=>dispatch({ type : "DELETE_EXPENSE" ,payload : {id : id} }),
        updateExpence : (expense)=> dispatch({ type : "UPDATE_EXPENSE" , payload : expense})
    
    }

    useEffect(()=>{

        try{

            localStorage.setItem("expenses" , JSON.stringify(state.expenses))

        }catch(e){
            console.log("error while saving expenses in localstorage ", e)
            dispatch({type : "SET_ERROR" , payload : e})
        }

    },[state.expenses])
    return (
        <>
        <ExpenseContext.Provider value={value}>
            {children}
        </ExpenseContext.Provider>
        </>
    )
}

export const useContext = ()=>{
    const context = useContext(ExpenseContext)

}