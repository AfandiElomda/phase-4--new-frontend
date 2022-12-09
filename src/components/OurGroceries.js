import React, {useState,useEffect,} from 'react'
import './OurGroceries.css'
import Card from './Card'
import img1 from '../assets/fiona-smallwood-iUxjs-F0voI-unsplash.jpg'
import img2 from '../assets/fitnish-media-v1Afu8vbEU8-unsplash.jpg'
import img3 from '../assets/giorgio-trovato-fczCr7MdE7U-unsplash.jpg'
import img4 from '../assets/klara-kulikova-CPMZguYURMw-unsplash.jpg'
import img5 from '../assets/marisol-benitez-QvkAQTNj4zk-unsplash.jpg'


const Groceries = () => {
  
  const [grocery, setGrocery] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("http://groceries-production-1.up.railway.app/groceries")
      .then((r) => r.json())
      .then(data => setGrocery(data))
  }, []);
    

  const groceryData = grocery.map((item) =>{
    return  (
      <Card
      key={item.id}
      {...item}
      grocery = {grocery}
      setGrocery = {setGrocery}
      handleAddToCart={handleAddToCart}
      // id={item.id}
      // name={item.name}
      // image_url={item.image_url}
      // price={item.price}
      // rating={item.rating}
      />
   
    ) }
  )
 
   function handleAddToCart(item){
    cart.push(item);
    console.log(cart);
   }

  return (
    <div className='groceries'>
        <h1>Our Groceries</h1>
        <div className='container'>
          <img src={img1} alt={''}/>
          <img src={img2} alt={''}/>
          <img src={img3} alt={''}/>
          <img src={img4} alt={''}/>
          <img src={img5} alt={''}/>
        </div>
        
        <div className='groceryData'>{groceryData}</div> 
    </div>
  )
}

export default Groceries