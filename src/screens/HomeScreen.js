import React from 'react'
import { menuData } from '../data'
import Food from '../components/Food'

export default function HomeScreen() {
  return (
   <div>
    <div className='row'>
        {
            menuData.map((food)=>{
                return(
                    <div className='col-md-4'> 

                      <div>
                     <Food food={food}/>
                     </div>
                    </div>
                )
            })
        }

    </div>
   </div>
  )
}
