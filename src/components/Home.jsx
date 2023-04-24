import React from 'react'
import Slider from './Slider';
import CardItem from './cart/CartItem';

const Home = (props) => {
  return (
    <div style={{marginLeft: "200px", marginRight: "200px", marginTop: "20px"}}>
        <Slider />
        <CardItem item={props.item}
        overlayItems={props.overlayItems}
        setOverlayItems={props.setOverlayItems}
        />
    </div>
  )
}

export default Home