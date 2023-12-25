import React from 'react'
import Card from './Card'
import{useSelector} from 'react-redux'

const CardWrap = () => {
    const state = useSelector(state => state.card_data.cards)
    
    return(
        <section className='flex gap-5 flex-wrap w-full'>
            {state.map(card => {
                
                return(
                    
                    <div
            key={Math.random() * 10000}
            className='w-full sm:w-[45%] md:w-1/5 lg:w-1/5 xl:w-1/5'
          >
            <Card
              tittle={card.title}
              current_value={card.current_value}
            />
          </div>
                )
            })}
        </section>
    )
}

export default CardWrap
