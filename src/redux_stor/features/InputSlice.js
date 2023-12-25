import {createSlice} from '@reduxjs/toolkit'


const CardData = createSlice({
    name: 'card-data',
    initialState:{
        cards:[
            {
                title:'Total Accounts',
                current_value:2104,
                pre_value:1751,
                days:30
            },
            {
                title:'MRR Retention',
                current_value:'102.4%',
                pre_value:1751,
                days:30
            },
            {
                title:'Average MRR per Account',
                current_value:2104,
                pre_value:1751,
                days:30
            },
            {
                title:'Open Tickets',
                current_value:2104,
                pre_value:1751,
                days:30
            },
        ]
    },
    reducers:{

    }
})

export default CardData.reducer