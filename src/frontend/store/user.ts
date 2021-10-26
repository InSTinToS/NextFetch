import { UsersResType, UserType } from 'types/routes/users'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ReducerType } from 'frontend/store'

interface GetUserParamsType {
  id?: number
}

export interface UserState {
  user?: UserType
  loading: boolean
}

export const initialState: UserState = {
  loading: true
}

export const getUser = createAsyncThunk(
  'user/getUser',
  async ({ id }: GetUserParamsType) => {
    const { data } = await axios.get(`api/users/${id}`)
    const { success, users }: UsersResType = data

    if (success) return { users }
  }
)

const update: ReducerType<UserState> = (state, { payload }) => ({
  ...state,
  user: { ...state.user, ...payload }
})

const User = createSlice({
  name: 'user',
  initialState,
  reducers: { update, reset: () => initialState },
  extraReducers: ({ addCase }) => {
    addCase(getUser.pending, state => ({ ...state }))

    addCase(getUser.fulfilled, (state, { payload }) => ({
      ...state,
      ...payload,
      loading: false
    }))
  }
})

export const UserActions = User.actions

export default User
