


export const addAllScripts = (dataScripts:object[]) => {
    return {
        type: 'ADD_ALL_SCRIPTS',
        payload:dataScripts
    }
}
export const addScriptByName = (dataScripts:object[]) => {
    return {
        type: 'ADD_SCRIPTS_BY_NAME',
        payload:dataScripts
    }
}
export const deleteScriptByName = () => {
    return {
        type: 'DELETE_SCRIPTS_BY_NAME',
    }
}
export const deleteScriptById = (id:string) => {
    return {
        type: 'DELETE_SCRIPT',
        payload:id
    }
}