import User from './user'
import { CaseReducer, configureStore, PayloadAction } from '@reduxjs/toolkit'

export type Reducer<T> = CaseReducer<T, PayloadAction<Partial<T>>>

export type RootState = ReturnType<typeof Store.getState>

const Store = configureStore({ reducer: { user: User.reducer } })

export default Store
