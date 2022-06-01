import { configureStore } from '@reduxjs/toolkit'
import {  SongSlice } from './slice/SongSlice'
import { SongsSlice } from './slice/SongsSlice'



export const Store = configureStore({
    // reducer duoc chua ben file slice va cac action 
    reducer:{
        songs: SongsSlice.reducer,
        song: SongSlice.reducer
    }
})