import {configureStore } from '@reduxjs/toolkit'
import Cards from './features/InputSlice'
import Charts from './features/ChartSlice'
export const store = configureStore({
    reducer:{
        card_data: Cards,
        chart_data: Charts,
        
    }
})