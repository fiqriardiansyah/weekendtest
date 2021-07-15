import React,{useState} from 'react';
import {motion} from 'framer-motion';

const HelpBox = ({data}) => {

  const [hover,setHover] = useState(false);

    return (
      <motion.div onHoverStart={()=> setHover(true)} onHoverEnd={()=> setHover(false)} className="help-box">
          <motion.img animate={hover ? {scale: 1.1} : {}} transition={{duration: .3}} className="help-box-image" src={data.image} alt="help 1" />
          <motion.div animate={hover ? {height: '100%'} : {}} transition={{duration: .3}} className="help-box-text-and-button">
            <p className="help-box-text">{data.title}</p>
            <motion.button animate={hover ? {scale: 2} : {}} transition={{delay: .3,duration: .3,damping: 20,type: 'spring',stiffness: 700}} className="help-box-button"><i className="fas fa-arrow-right"></i></motion.button>
          </motion.div>
      </motion.div>
    )
}

export default HelpBox;