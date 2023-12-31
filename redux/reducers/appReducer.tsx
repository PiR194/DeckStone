import { CardProps } from '../../props/favProps'
import {FETCH_DATA, ADD_FAVORITE_DATA, SET_FAVS} from '../constants'
import StorageHeart from '../../service/AsyncStorage'

const initialState = {
    cards: [],
    favoriteCards: []
}


// @ts-ignore
export default appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE_DATA: //Ajout d'une carte aux favoris
            
            const a : CardProps  = action.payload
            if(a.route.bool ==false){
                if(state.favoriteCards == undefined){
                    const tab = [a.route.card]
                    StorageHeart.setItem("favoriteList",tab)
                    return {...state, favoriteCards : tab};
                }
                //@ts-ignore
                if( Array.from(state.favoriteCards).every((elem) => elem.id != a.route.card.id)){

                    //@ts-ignore
                    const tab = state.favoriteCards.concat([a.route.card])
                    StorageHeart.setItem("favoriteList",tab)
                    return {...state, favoriteCards : tab};
                }
                return {...state}
            }
            else{
                const tab = state.favoriteCards.filter((item) => item!= a.route.card)
                StorageHeart.setItem("favoriteList",tab)
                return {...state, favoriteCards : tab };
            }

            
        case FETCH_DATA: //Récupération des données des cartes depuis l'API
            return {...state, cards: action.payload};


        case SET_FAVS: //Récupération des favoris depuis l'async storage
            //@ts-ignore
            return {...state, favoriteCards: action.payload}
        default:
            return state;
    }
}

