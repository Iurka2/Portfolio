import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/work.module.css'
import {  motion  } from 'framer-motion';
import Link from 'next/link'
import screen from "../../public/Resources/logoog1.svg"
import arrow from "../../public/Resources/arrow.svg"
import screen3 from "../../public/Resources/screen3.png"
import toast from "react-hot-toast";



const onHoverSize = {
  initial: {y:0},
  animate: {y:20, originX:0.4,
    transition: {
  type:'spring',
  damping: 10,
  stiffness: 100,
    }}
  }

const fadeEffect = {
  hidden: {
    y: 20,
    opacity:0,

  },

  visible: {
    y: 0,
    opacity:1,
    transition:{
      damping: 50,
      type: "spring",
      stiffness: 200, 
      staggerChildren: 0.35,
      restSpeed: 0.5
    }
  }
}


const onHoverServ = {
  initial: {
    opacity:0,
    y:-10,
   originX:0,
  },

  animate: {
    opacity:1,
    y:0,
    transition: {
      type:'tween',
      ease:'easeOut',
      duration:0.2,
    }
  }
}

const onHoverServ2 = {
  initial: {
    opacity:1,
    y:0,
  },

  animate: {
    opacity:0,
    y:-10,
   originX:0,
    transition: {
duration:0.1,
    }
  }
}



const Wrok = () => {
  return ( 
    <>


<Head>
    <title>Work</title>
    <meta name="description" content="Showcase of projects" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
 </Head>
    <motion.main    className={styles.main}>


    <motion.h1 variants={fadeEffect}  className={styles.heading1}>Work</motion.h1>

<motion.div variants={fadeEffect}    initial='hidden' animate='visible'  className={styles.flex_container}>

    <Link href="/tminox" >
        <motion.div initial='initial' animate='animate'   className={styles.card1}>
          <motion.video whileHover={{scale:1.1}} transition={{type:'tween',ease:"easeOut",duration:0.5}} width="100%" className={styles.image1Container} height="100%" loop autoPlay muted src='Resources/vidos2.mp4'></motion.video>
        </motion.div>
    </Link>

       <Link href="/yourmobila"  >
          <motion.div initial='initial' animate='animate'    className={styles.card2}>
            <motion.div whileHover={{scale:1.1}} transition={{type:'tween',ease:"easeOut", duration:0.5}} className={styles.image2Container}>
            <Image priority src={screen} alt="Project"/>
            </motion.div>
          </motion.div>
        </Link>

</motion.div>



    <motion.div variants={fadeEffect}  initial='hidden' animate='visible'   className={styles.flex_container}>
    <Link href="/ecult" >
          <motion.div initial='initial' animate='animate'   variants={fadeEffect}  className={styles.card3}>
            <motion.video whileHover={{scale:1.3}} transition={{type:'tween',ease:"easeOut"}} width="100%" className={styles.image3Container} height="100%" loop autoPlay muted src='Resources/vidos.mp4'></motion.video>
          </motion.div>
          </Link>

       

<motion.div variants={fadeEffect} className={styles.card4}>
        <motion.div 
          initial='initial'
          whileHover="animate"
          className={styles.card4}
              onClick={() => {
                navigator.clipboard.writeText("bogdan.iurie.iacob@gmail.com");
                toast.success("E-mail Copied", {
                style: {
                  background: "#191716",
                  color: "#fff",
                  fontSize: "var(--fontss)",
                } });}} >
          <div className={styles.icon}>
            <motion.svg variants={onHoverServ2}  xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></motion.svg>
          </div>
             <div className={styles.next_proj}>
               <motion.p  variants={onHoverServ} >Your next project ?</motion.p>
             </div>
          </motion.div>
        </motion.div >
</motion.div>




    </motion.main>
    </>
   );
}
 
export default Wrok;