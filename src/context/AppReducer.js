export default (state,action)=>{
    switch(action.type){
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                transactions: action.payload,
                loading: false,
            }
        case 'LOGING_IN':
            return {
                ...state,
                user: action.payload.user,
                transactions: action.payload.transactions,
                loading: false,
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(e=>(e._id!==action.payload)),
            }
        case 'ADD_TRANSACTION':
            return {
              ...state,
                transactions: action.payload,
            }
        case 'LOGING_OUT':
            return {
                ...state,
                transactions: [],
                user:null,
                loading:false,
            }
        default:
            return state;
    }
}
