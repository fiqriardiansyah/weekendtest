import React,{ useEffect, useState, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { motion } from 'framer-motion';

// asset
import MaskotImg from './assets/image/maskot_desktop.png';
import Maskot2Img from './assets/image/maskot_2_desktop.png';
import Maskot3Img from './assets/image/maskot_3_desktop.png';
import PathImg from './assets/image/path.png';

// component
import Navbar from './components/Navbar';
import HelpBox from './components/HelpBox';
import Testimonial from './components/Testimonial';
import SmoothScroll from './components/SmoothScroll';

// hook
import useWindowSize from './hook/useWindowSize';
import useElementDistanceTop from './hook/useELementDistanceTop';

// dummy
import {dummyTestimonial,dummyHelpAndTips} from './utils/dummy';


const App = ()=> {

  const sizeWindow = useWindowSize();

  const [testimonial,setTestimonial] = useState(dummyTestimonial);
  const [helpAndTips,setHelpAndTips] = useState(dummyHelpAndTips);
  const [settingSlider,setSettingSlider] = useState({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    rows: 1,
  });

  //////////////////// slider
  if(sizeWindow.width <= 600){
    if(settingSlider.slidesToShow !== 1) setSettingSlider({...settingSlider,slidesToShow: 1});
  }else{
    if(settingSlider.slidesToShow !== 2) setSettingSlider({...settingSlider,slidesToShow: 2});
  }


  // //////////////////// consume api
  useEffect(()=>{

    const getTestimonial = async () => {
      axios.get('/testimonial').then(res => {
        if(res.data) setTestimonial(res.data);
      }).catch(e => console.log(e.message));
    }

    const getHelpAndTips = async () => {
      axios.get('/help-tips').then(res => {
        if(res.data) setHelpAndTips(res.data)
      }).catch(e => console.log(e.message));
    }

    getTestimonial();
    getHelpAndTips();

  },[]);



  // ///////// height animate
  const blackSectionRef = useRef();
  const blackSectionAnim = useElementDistanceTop({refElement: blackSectionRef,substraction: false});

  const containerRef = useRef();

  return (
    <>
    <SmoothScroll>
    {/* app */}
      <motion.div animate={{background: 'rgba(249, 131, 171, 0.5)'}} transition={{duration: 2}} initial={{background: '#000000'}} className="app">
        {/* navbar */}
        <Navbar />

          <header className="header">
            <div className="container">
              <motion.h1 
                animate={{y: 0,opacity: 1}} 
                transition={{duration: 1,delay: 1}} 
                initial={{y: -200,opacity: 0}} 
                className="header-title text">
                  WEEKEND FROM HOME
              </motion.h1>
              <motion.p
                animate={{y: 0,opacity: 1}} 
                transition={{duration: 1}} 
                initial={{y: -100,opacity: 0}}  
                className="header-subtitle text mb-0">
                  Stay active with a little workout.
              </motion.p>
              <div className="header-maskot-and-button">
                <motion.img animate={{y: 0,opacity: 1}} transition={{duration: 1,delay: 1}} initial={{y: 100,opacity: 0}} className="header-maskot" src={MaskotImg} alt="maskot" />
                <motion.button 
                  whileHover={{top: '73%'}} 
                  transition={{duration: .3,type: 'spring',stiffness: 700,damping: 20}} 
                  className="header-button">
                  <p className="header-lets text">Let's Go</p>
                </motion.button>
              </div>
            </div>
          </header>
          {/* section */}
          <section  className="section">

            <div ref={containerRef} className="section-container container">
              <img className="section-maskot" src={Maskot2Img} alt="maskot" />
              <p className="section-quote text">
                <span className="section-quote-definition">Deffinition;</span> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.
                <span className="section-quote-sign">-weekend team</span>
              </p>
              <motion.div drag dragConstraints={containerRef} className="section-blue-shape" />

            </div>

            <div ref={blackSectionRef} className="black-section">
              <div className="black-section-testimonial">
                <h2 className="black-section-testimonial-title text">Testimonial</h2>
                <Slider {...settingSlider}>
                  {testimonial.length !== 0 && testimonial.map( (element,i) => {
                    return <motion.div 
                              key={element.id}
                              animate={blackSectionAnim ? {x: 0,opacity: 1} : {}} 
                              transition={{duration: 1 ,type: 'spring',damping: 20,stiffness: 700,delay: (i+1) * .5}} 
                              initial={{x: 100,opacity: 0}} >
                              <Testimonial data={element} />
                            </motion.div>
                  })}
                </Slider>
              </div>
              
              <div className="black-section-pov">
                <h2 className="black-section-pov-title text">POV</h2>
                <p className="black-section-pov-description text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
              
              <div className="black-section-resource">
                <h2 className="black-section-resource-title text">Resource</h2>
                <p className="black-section-resource-description text">These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
              </div>
              
              <div className="black-section-help">
                <img className="black-section-path-image" src={PathImg} alt="" />
                <h2 className="black-section-help-title text">Help & Tips</h2>
                <div className="black-section-help-boxes">
                  {helpAndTips.length !== 0 && helpAndTips.map( element => {
                    return <HelpBox data={element} key={element.id} />
                  })}
                </div>
              </div>
              
              <div className="black-section-set">
                <h2 className="black-section-set-title text">You're all set</h2>
                <p className="black-section-set-description text ">The wise man therefore always holds in these matters to this principle of selection.</p>
                <img className="black-section-maskot" src={Maskot3Img} alt="maskot 3" />
              </div>
            </div>
          
          </section>
          {/* footer */}
          <footer>
            <div className="footer-container container d-flex">
              <a href="/#" className="footer-wknd text">wknd@<span className="footer-wknd-2020">2020</span></a>
              <p className="footer-alpha text">alpha version 0.1</p>
            </div>
          </footer>
      
      </motion.div>
    </SmoothScroll>
    </>
  );
}

export default App;
