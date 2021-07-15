import React from 'react';
import {motion} from 'framer-motion';

const Testimonial = ({data}) => {

    return (
      <motion.div whileHover={{scale: .9}} transition={{duration: .5,type: 'spring',damping: 20,stiffness: 700}} className="testimonial">
        <p className="testimonial-title text">{data.by}</p>
        <p className="testimonial-description text">{data.testimony}</p>
      </motion.div>
    )
}

export default Testimonial;