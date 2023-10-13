


export const addAllScripts = (dataScripts:object[]) => {
    return {
        type: 'ADD_ALL_SCRIPTS',
        payload:dataScripts
    }
}
export const deleteScriptById = (id:string) => {
    return {
        type: 'DELETE_SCRIPT',
        payload:id
    }
}