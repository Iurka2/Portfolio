import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/work.module.css'
import {  motion  } from 'framer-motion';
import Link from 'next/link'
import screen from "../../public/Resources/screen1.png"
import screen2 from "../../public/Resources/screen2.png"
import screen3 from "../../public/Resources/screen3.png"
import toast from "react-hot-toast";



const onHoverSize = {
  initial: {
   y:0
  },

  animate: {
    y:20,

    originX:0.4,
    transition: {
  type:'tween',
  ease:'easeOut',
  duration:0.2,
    }
  }
}

const fadeEffect = {
  hidden: {
    y: 50,
    opacity:0,

  },

  visible: {
    y: 0,
    opacity:1,
    transition:{
      damping: 50,
      type: "spring",
      stiffness: 200, 
      staggerChildren: 1.35,
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
    <main className={styles.main}>


    <motion.h1 variants={fadeEffect} initial='hidden' animate='visible' className={styles.heading1}>Work</motion.h1>

    <motion.div  initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4  }}
              variants={fadeEffect}className={styles.flex_container}>
    <Link href="/tminox"  className={styles.card1}>
          <motion.div  initial='initial' whileHover="animate"   className={styles.card1}>
            <motion.h2 variants={onHoverServ}  className={styles.card_heading}> TM INOX | Web App</motion.h2>
            <motion.div variants={onHoverSize} className={styles.image1Container}>
            <Image className={styles.image1} priority src={screen3} alt="Project"/>
            </motion.div>
          </motion.div>
          </Link>

          <Link href="/yourmobila"  className={styles.card3}>
          <motion.div  initial='initial' whileHover="animate"   className={styles.card1}>
            <motion.h2 variants={onHoverServ} className={styles.card_heading}>YourMobila | Website</motion.h2>
            <motion.div variants={onHoverSize} className={styles.image2Container}>
            <Image className={styles.image2} priority src={screen} alt="Project"/>
            </motion.div>
          </motion.div>
          </Link>

    </motion.div>



    <motion.div variants={fadeEffect} initial='hidden' animate='visible'  className={styles.flex_container}>
    <Link href="/ecult"  className={styles.card1}>
          <motion.div  initial='initial' whileHover="animate"   className={styles.card1}>
            <motion.h2  variants={onHoverServ}  className={styles.card_heading}>E-cult | Website</motion.h2>
            <motion.div variants={onHoverSize} className={styles.image3Container}>
            <Image className={styles.image3} priority src={screen2} alt="Project"/>
            </motion.div>
          </motion.div>
          </Link>

       

          <div  className={styles.card1}>
          <motion.div onClick={() => {
                navigator.clipboard.writeText("bogdan.iurie.iacob@gmail.com");
                toast.success("E-mail Copied", {
                style: {
                  background: "#191716",
                  color: "#fff",
                  fontSize: "var(--fontss)",

                },
              });
            }}  initial='initial' whileHover="animate" className={styles.card_plus}>
            <div className={styles.icon}>
              <motion.svg variants={onHoverServ2}  xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></motion.svg>
            </div>
             <div className={styles.next_proj}>
               <motion.p  variants={onHoverServ} >Your next Project ?</motion.p>
             </div>
          </motion.div>
          </div >
    </motion.div>




    </main>
    </>
   );
}
 
export default Wrok;