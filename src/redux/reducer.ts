import { DataGetScript } from "../pages/home/home"


//interfaces 
export interface DataScript {
    dataScripts: DataGetScript[]
    dataScriptsByName:DataGetScript[]
}
export interface Action {
    type: string
    payload: any
}


const initialstate: DataScript = {
    dataScripts: [],
    dataScriptsByName:[]
}

const reducer = (state = initialstate, action: Action) => {
    switch (action.type) {

        case 'ADD_ALL_SCRIPTS':
            return {
                ...state,
                dataScripts: action.payload,
            };
        case 'ADD_SCRIPTS_BY_NAME':
            return {
                ...state,
                dataScriptsByName: action.payload
            };
        case 'DELETE_SCRIPTS_BY_NAME':
            return {
                ...state,
                dataScriptsByName: []
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