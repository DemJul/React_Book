
const initialState = {
    items: [],
    // загрузка данных
    isLoaded: false
}


const books = (state = initialState, action) => {
     if (action.type === 'SET_BOOKS'){
         return{
            //  старые данные
             ...state,
            //  payload - массив книг
             items: action.payload,
         }
     }
     return state;
}

export default books;