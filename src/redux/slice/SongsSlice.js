

// lay 1 danh sach

import {  createSlice } from '@reduxjs/toolkit'
import data from '../../data/songs.json'

export const SongsSlice = createSlice({
    name : "songs",
    initialState: {
        songs: []
    },
    reducers:{
        getListSong : (state) => {
            state.songs = data
        }
    }
})

export const { getListSong} = SongsSlice.actions;

export const songsSelecter = (state) => state.songs