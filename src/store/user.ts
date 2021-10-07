import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { UserType, UserResType } from 'types/user'
import { Reducer } from 'store'

interface GetUserParams {
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
  async ({ id }: GetUserParams) => {
    const { data } = await axios.get(`api/users/${id}`)
    const { success, user }: UserResType = data

    if (success) return { user }
  }
)

const update: Reducer<UserState> = (state, { payload }) => ({
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
