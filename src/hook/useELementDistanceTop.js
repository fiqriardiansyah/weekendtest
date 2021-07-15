import {useEffect,useState} from 'react';

export default function useElementDistanceTop({refElement,substraction}) {
  
    const getScrollTop =()=> window.scrollY;

    const [animate,setAnimate] = useState(false);
  
    useEffect(() => {
      function handleResize() {
          let scrollTop = getScrollTop();
          if(refElement.current){
            scrollTop >= refElement.current.offsetTop -  (substraction !== false ? (window.innerHeight / substraction) : 0) && !animate && setAnimate(true);
          }
      }
  
      window.addEventListener("scroll", handleResize);
      return () => window.removeEventListener("scroll", handleResize);
    }, []);
  
    return animate;
}
  