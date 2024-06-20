import * as postgresAPI from "../DB/API"

export type TContext = {
    DB: typeof postgresAPI
}

export const createContext = (): TContext => ({
    DB: postgresAPI
})