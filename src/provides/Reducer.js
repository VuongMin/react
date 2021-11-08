export const initialstate = {
    products:[],
    carts:[],
    reviewOfUser:null,
    userLogin:''
}
export  const reducer = (state,action)=>{
       switch (action.type) {
           case 'API_PRODUCTS':
              return {...state,products:action.data}
            case 'ADD_TO_CART':
                 const item = state.carts.find(item=>item.id ==action.cart.id)
                 if(item){
                     const index = state.carts.findIndex(item=>item.id==action.cart.id)
                     state.carts[index]= action.cart
                     return {...state,carts:[...state.carts]}
                 }
                return {...state,carts:[...state.carts,action.cart]}
            case 'GET_DATA_REVIEWSOFUSER_FIRST_TIME':
                return {...state,reviewOfUser:action.value}
            case 'USER_COMMENT':
                return {...state,reviewOfUser:action.value}
            case 'ADD_USERLOGIN':
                return {...state,userLogin:action.value}
           default:
             return state
       }
}