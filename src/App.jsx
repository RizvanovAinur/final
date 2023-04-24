import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css"
import { useState,useEffect} from 'react';
import axios from 'axios';
import Home from './components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import Basket from './components/basket/Basket'
import Form from './components/Form'
import Descript from './components/descript/descript';

export const AppContext = React.createContext({})

function App() {
//хранения данных туров
const [tyrs, setTyrs] = useState([])
//для корзины
const [overlayItems, setOverlayItems] = useState([])
useEffect (()=>{
  async function axiosData(){
    const tyrsData = await axios.get('https://641c5d7e1a68dc9e4607b165.mockapi.io/testTabl1')
    const cartData = await axios.get('https://641c5d7e1a68dc9e4607b165.mockapi.io/testTabl2')

    setTyrs(tyrsData.data)
    setOverlayItems(cartData.data)
  }
  axiosData();
},[])


const deleteItems=(id)=>{
  axios.delete(`https://641c5d7e1a68dc9e4607b165.mockapi.io/testTabl1/${id}`)
  setOverlayItems((objDelete)=> objDelete.filter(item=> item.id !==id))
}

const isAdded=(myId)=>{
  return overlayItems.some((objIsAdded)=> objIsAdded.myId === myId)
}

return (
    
  <AppContext.Provider
  value={
    {
      tyrs,
      setTyrs,
      overlayItems,
      setOverlayItems,
      isAdded,
    }
  }>

    <div>
     
     <Router>
     <Header/> 
      <Routes>
        <Route path='/'
                    element={
                        <Home
                        item={tyrs}
                        overlayItems={overlayItems}
                        setOverlayItems={setOverlayItems}
                        />
                    }
                />

        <Route path='/form'
                element={
                        <Form/>
                    }
                />

        <Route path='/cart'
                element={
                        <Basket
                        totalPrice={
                          overlayItems.reduce((element = overlayItems.length, obj)=>
                          element+obj.price, 0 
                          )
                        }
                        overlayProp={overlayItems}
                        deleteItems={deleteItems}
                        />
                    }
                />
        <Route path='/descript'
                    element={
                        <Descript
                        item={tyrs}
                        overlayItems={overlayItems}
                        setOverlayItems={setOverlayItems}
                        />
                    }
                />

      </Routes>
      </Router> 
   
    
      <Footer/>
     </div>

    </AppContext.Provider>
  );
}

export default App;
