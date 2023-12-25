import {createSlice} from '@reduxjs/toolkit'

const chart = createSlice({
    name:'chart_data',
    initialState:{
        charts: [
            {
              id: Math.random() * 1000000,
              type: "line",
              data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
                datasets: [
                  {
                    label: "MRR Growth",
                    data: [10, 3, 40, 5, 60, 23],
                  },
                ],
              },
            },
            {
              id: Math.random() * 1000000,
              type: "line",
              data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
                datasets: [
                  {
                    label: "MRR Growth",
                    data: [10, 3, 40, 5, 60, 23],
                  },
                ],
              },
            },
          ],
        },
        reducers:{
            setType: (state, action) => {
                state.charts.filter(value => {
                  if (value.id == action.payload.id){ value.type = action.payload.type;}
                });
                return state;
            },
        }
})

export const{setType}= chart.actions
export default chart.reducer