


const initialState = {
    tasks: [
        {
            task: 'Сделать уборку',
            id: 1
        },
        {
            task: 'встретится с Alina',
            id: 2
        },
        {
            task: 'Привет мир',
            id: 3
        }
    ],
    tasksCount: 3
}


export default (state = initialState, action) => {
    switch(action.type) {
        case "ADD": {
            return {
                ...state,
                tasks: [...state.tasks, {
                    task: action.task,
                    id: state.tasks.length ? state.tasks[state.tasks.length - 1].id + 1 : 1
                }],
                tasksCount: state.tasksCount + 1
            }
        }
        case "DELETE": {
            return {
                ...state,
                tasks: state.tasks.filter(item => {
                    return item.id !== action.id
                }),
                tasksCount: state.tasksCount - 1
            }
        }
        case "IMPORTENT": {
            return {
                ...state,
                tasks: state.tasks.map((item) => {
                    if(item.id === action.id) {
                        return {
                            ...item, isImpotent: !item.isImpotent
                        }
                    }
                    return item
                })
            }
        }
        case "CHANGE": {
            return {
                ...state,
                tasks: state.tasks.filter((item) => {
                    return item.id !== action.id
                }),
                tasksCount: state.tasksCount -1
            }
        }
        default: return state
    }
}


export const addTasks = (task) => {
    return (dispath) => {
        return dispath({type: "ADD", task: task})
    }
}

export const deleteTasks = (id) => {
    return (dispath) => {
        return dispath({type: "DELETE", id})
    }
}

export const importantTasks = (id) => {
    return (dispath) => {
        return dispath({type: "IMPORTENT", id})
    }
}

export const ChangeTasks = ( id) => {
    return (dispath) => {
        return dispath({type: "CHANGE", id})
    }
}