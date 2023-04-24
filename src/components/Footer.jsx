import React from 'react'

const Footer = () => {
  return (
    <div className='bg-secondary position-fixed bottom-0 py-2' align='center' style={{height: '60px', width: '100%', borderTop: 'solid black 1px'}}>
      <div class="container text-center">
      <div class="row align-items-center">
      <div class="col">
      <footer className=''>
        <div className='row'>
          Released by Rizvanov A.A.  
        </div>
          <div className='row'>
        email: rizvanov_ainur@Mail.ru 
        </div>
      </footer>
      </div>
      <div class="col">
        Магазин создан при поддержке
      </div>
      <div class="col">
        <b>Бери и заказывай!</b>
      </div>
      </div>
      </div>
  </div>
  )
}

export default Footer