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
  link1:any
  link2:any
  link3:any
};


  const TopPart= ({img,alt, title,role,breif,text,link1,link2,link3}: Top) => {

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
              <motion.h1 style={{marginBottom:'0'}} >
                {title}
              </motion.h1>
      </motion.div>


{/* //================================Links==========================// */}

<motion.div variants={fadeEffect}  className={styles.icons}  >
{link1 && (
<a href={link1} target="_blank" rel="noreferrer">
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</a>
)}
<a href={link2} target="_blank" rel="noreferrer">
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
</a>

<a href={link3} target="_blank" rel="noreferrer">
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
 </a>

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


