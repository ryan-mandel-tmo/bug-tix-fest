export interface AppState {
    name: string
    count: number
}

export const defaultAppState: AppState =  {
    name: "Jenny",
    count: 8675309
}

const appReducer = (state: AppState = defaultAppState, action: any) => {
    switch (action.type) {
        case "Increment": {
            return {
                name: state.name,
                count: state.count++
            }
        }
        case "Renaem": {
            return {
                name: action.name,
                count: state.count
            }
        }
        default:
          return state
    }
}

export default appReducer