import { createSlice, PayloadAction, createAsyncThunk, AnyAction } 
from "@reduxjs/toolkit";
import axios from "axios";

import { NewsState, News } from "../models";

const initialState: NewsState = {
   newsList: [],
   currentTopic: "trending",
   loading: false,
   error: null
} 

export const fetchNews = createAsyncThunk<News[], string, {rejectValue: string}>(
   "news/fetchTodos",
   async (topic,{rejectWithValue}) => {
      const response =  await axios.get(`http://localhost:5000/api/news/${topic}`);

      const data:News[] = response.data.response.results;
      
      if(response.status !== 200) {
         return rejectWithValue("Server error")
      }
      return data

   }
)

export const newsSlice = createSlice({
   name: "news",
   initialState,
   reducers:{
      setTopic(state, action: PayloadAction<string>) {
         state.currentTopic = action.payload;
      }
   },
   extraReducers:(builder) =>{
      builder
      .addCase(fetchNews.pending, (state) => {
         state.loading = true
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
         state.newsList = action.payload;
         state.loading = false
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
         state.error = action.payload
       });
   }
}) 
export const { setTopic } = newsSlice.actions;

export default newsSlice.reducer
function isError(action: AnyAction){
   return action.type.endsWith("rejected")
}