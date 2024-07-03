
import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import  '../start/style.css'

export default function StarRating({noOfStars = 5}){
        const [rating, setRating] = useState(0)
        const [hover,setHover] = useState(0)

        function handleClick(getCurrentIndex){
            setRating(getCurrentIndex === rating? "active" :getCurrentIndex)

        }
        function handleMouseMove(getCurrentIndex){
            setHover(getCurrentIndex)
        }
        function handleMouseLeave(){
            setHover(rating)
        }
       
        return <div>
            {[...Array(noOfStars)].map((_, index)=>{
                index += 1
                return (
                    <FaStar
                    key={index}
                    className={index <= (hover || rating)? 'active' : 'inactive'}
                    onClick={()=> handleClick(index)}
                    onMouseMove={()=>handleMouseMove(index)}
                    onMouseLeave={()=> handleMouseLeave()}
            
                    />
                 )
            })}
        
      </div>
}