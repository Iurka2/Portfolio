import styles from '@/styles/util.module.css'
import Image, { StaticImageData } from 'next/image';
import { ParallaxBanner, ParallaxBannerLayer,Parallax } from 'react-scroll-parallax';
import {  motion } from 'framer-motion';
import React, { useRef } from "react";



const fadeEffect = {
  hidden: {
    opacity:0,
    y: 50,
   
  },

  visible: {
    opacity:1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 20,
      staggerChildren: 0.35,
    }

  }
  
}

type Top = {
  img: StaticImageData;
  alt: string;
  title: string;
  role:React.ReactNode;
  breif:string;
  text:React.ReactNode;
};


  const TopPart= ({img,alt, title,role,breif,text}: Top) => {

    const buttonRef = useRef(null);

    function scrollDown(percentage:number) {
      const height = window.innerHeight;
      const scrollDistance = percentage * height;
      window.scrollBy(0, scrollDistance);
    }


    return ( 

  <>
  <motion.div  className={styles.topAllContainer}>
  <ParallaxBanner  className={styles.topContainer} >
    <ParallaxBannerLayer speed={-20}  >
      <Image 
      src={img} 
      alt={alt} 
      priority
      placeholder='blur'
      className={styles.images}
      
      />
    </ParallaxBannerLayer>
  </ParallaxBanner>

{/* //================================= title====================// */}
<motion.div variants={fadeEffect} 
            initial="hidden"
            animate="visible"   
            className={styles.topTextContainer}  >
    <motion.div variants={fadeEffect}  className={styles.title}  >
              <motion.h1 >
                {title}
              </motion.h1>
      </motion.div>

{/* //================================= Brief====================// */}
      <motion.div  variants={fadeEffect}     
                   className={styles.myrole}  >
              <motion.h2
                className={styles.topText}>
               Brief
              </motion.h2>
              <motion.p className={styles.brief}>{breif}</motion.p>
      </motion.div>

      <motion.div className={styles.flexbox}>
{/* //=================================My role====================// */}
      <motion.div variants={fadeEffect}  
                  className={styles.myrole}  >
              <motion.h2 
                
                className={styles.topText}>
                My role
              </motion.h2>
              <motion.ul className={styles.skill_container2}>{role}</motion.ul>
        
      </motion.div>

      {/* //=================================Tehnologies====================// */}
      <motion.div variants={fadeEffect}    
                  className={styles.services}  >
              <motion.h2 
                className={styles.topText}>
                Done with
              </motion.h2>
              <ul className={styles.skill_container}>
             {text}
           </ul>
      </motion.div>
      </motion.div>
  </motion.div>
  <div className={styles.icon}  ref={buttonRef} onClick={() => scrollDown(1)}>
  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
  </div>


  </motion.div>
    


{/* //================================================Mobile=====================// */}
<motion.div  className={styles.topAllContainerMobile}>
  <ParallaxBanner  className={styles.topContainer} >
    <ParallaxBannerLayer speed={-20}  >
      <Image 
 
      src={img} 
      alt={alt} 
      priority
      placeholder='blur'
      className={styles.images}
      
      />
    </ParallaxBannerLayer>
  </ParallaxBanner>

{/* //================================= title====================// */}
<motion.div variants={fadeEffect} 
            initial="hidden"
            animate="visible"   
            className={styles.topTextContainer}>

<motion.div variants={fadeEffect}  className={styles.title}>
  <motion.h1 >
    {title}
  </motion.h1>
</motion.div>
  </motion.div>
  <div className={styles.icon}  ref={buttonRef} onClick={() => scrollDown(1)}>
  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
  </div>


  </motion.div>


  {/* //================================= bottom part====================// */}

  <motion.div variants={fadeEffect} 
            initial="hidden"
            animate="visible"   
            className={styles.boottomTextContainer}>

{/* //================================= Brief====================// */}
  <motion.div  variants={fadeEffect}     
            >
              <motion.h2
                className={styles.topText2}>
               Brief
              </motion.h2>
              <motion.p className={styles.brief}>{breif}</motion.p>
      </motion.div>

      <motion.div className={styles.flexbox}>
{/* //=================================My role====================// */}
      <motion.div variants={fadeEffect}  
                  className={styles.myrole}  >
              <motion.h2 
                className={styles.topText}>
                My role
              </motion.h2>
              <motion.ul className={styles.skill_container2}>{role}</motion.ul>
      </motion.div>

      {/* //=================================Tehnologies====================// */}
      <motion.div variants={fadeEffect}    
                  className={styles.services}  >
              <motion.h2 
                className={styles.topText}>
                Done with
              </motion.h2>
              <ul className={styles.skill_container}>
             {text}
           </ul>
      </motion.div>
     </motion.div>
    </motion.div>

  </>


   );
}
 
export default TopPart;


