import React from 'react'
import {motion} from 'framer-motion'

const descript = () => {
  return (
    <div align='center'>
     <motion.h1
     initial={{
      x:-1000,
      opacity: 0
     }}
     animate={{
      x:0,
      opacity:1
     }}
     transition={{
      delay:1,
      duration:2,
      type:'tween'
     }}>
     Раздел описания задействован для работы анимации
      
      </motion.h1>
    <br/>
     <motion.img
     src="/img/111.jpg"
     style={{height:'300px', marginBottom: '20px'
     }}
     whileHover={{
      scale: 1.2
     }}>
     </motion.img>
     <br/>
     <motion.img
     src="/img/222.jpg"
     style={{height:'300px'
     }}
     initial={{
      scale: 0.3,
      opacity: 0.2
     }}
     animate={{
      scale: 1,
      opacity: 1
     }}
     transition={{
      duration: 2
     }}
     whileHover={{
      opacity: 0.5
     }}>
     </motion.img>
    </div>
  )
}

export default descript