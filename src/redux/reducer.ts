import { DataGetScript } from "../pages/home/home"


//interfaces 
export interface DataScript {
    dataScripts: DataGetScript[]
}
export interface Action {
    type: string
    payload: any
}


const initialstate: DataScript = {
    dataScripts: []
}

const reducer = (state = initialstate, action: Action) => {
    switch (action.type) {

        case 'ADD_ALL_SCRIPTS':
            return {
                ...state,
                dataScripts: action.payload
            };
        case 'DELETE_SCRIPT':
            let dataScriptsFilter = state.dataScripts.filter((item)=>item._id !== action.payload)
            return {
                ...state,
                dataScripts:dataScriptsFilter
            };
        default:
            return {
                ...state,
            }

    }

}




export default reducer