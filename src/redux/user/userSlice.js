import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    isAuthenticated: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            const user = {
                id: nanoid(),
                name: action.payload.name,
                email: action.payload.email
            }

            state.isAuthenticated = true;
            state.currentUser = user;
            
        },

        logout: (state, action) => {
            state.currentUser = null;
            state.isAuthenticated = false
        },

        
    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer