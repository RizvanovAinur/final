import React, { useState } from 'react'
import { AppContext } from '../../App';

const Item = (props) => {

    const context = React.useContext(AppContext)

    const [added, setAdded ] = useState(context.isAdded);
    // const [fav, setFav ] = useState(false);
    // const onClickFav =()=>{
    //     setFav(!fav);
    //     let id = props.id;
    //     let myId = props.myId;
    //     let title = props.title;
    //     let description = props.description;
    //     let price = props.price;
    //     let img = props.img;
    //     props.favBtn({title, description, price, img,id, myId});
    // }

    const onClickAdd =()=>{
        setAdded(!added);
        let id = props.id;
        let myId = props.myId;
        let title = props.title;
        let description = props.description;
        let price = props.price;
        let img = props.img;
        props.onPlus({title, description, price, img,id, myId});
    }

  return ( 

    <div className='conteiner py-3'>
       
    <main>
        <div className='row row-cols-1 justify-content-evenly 
        row-cols-md-3 row-cols-sm-2 text-center'>
            <div className='col px-3 py-3'>
                <div className='card md-6 rounded'>
                    <div className='card-header py-2 px-3'>

                        <h1>{props.title}</h1>
                        <img className='rounded' src={props.img} width={'85%'}></img>
                        <p>{props.description}</p>
                        <p>от {props.price}р.</p>
                        
                        <button type='button' className='w-100 btn btn-secondary'
                onClick={onClickAdd} > { context.isAdded(props.myId) ?  
                <img width={13}
                 src={context.isAdded(props.myId) ? '/img/icon.png':'' }
                 alt=""/>:'Добавить в корзину' }
               
                </button>
                    </div>

                </div>

            </div>
        </div>
    </main>
</div>
  )
}

export default Item