import React from 'react'
import './Card.css'

const Card = ({id,name,image_url,price,rating,grocery,setGrocery,handleAddToCart}) => {
  

    function handleDeleteClick(id){
        const deletedCard = grocery.filter(item => item.id !== id)
        setGrocery(deletedCard)
        fetch(`http://groceries-production-1.up.railway.app/groceries/${id}`,{
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json'
        },
        })
      }

  return (
    <div className='card'>
        <div className='image'>
            {image_url}
            <div className='details'>
             <p>{name}</p>
             <p>{price}</p>
             <p>{rating}</p>
<button className="addcart" onClick={() => handleAddToCart({id,name,image_url,price,rating})}>Add to Cart</button>  <button className='delete' onClick={() =>  handleDeleteClick(id)}>Delete</button>

             
            </div>
        </div>
    </div>
  )
}

export default Card;