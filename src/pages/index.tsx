import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import screen from "../../public/Resources/screen3.png"
import {  motion  } from 'framer-motion';
import Link from 'next/link'
import toast from "react-hot-toast";




const fadeEffect = {
  hidden: {
    y: 30,
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
   damping: 60,
   type: "spring",
   stiffness: 280, 
   mass:1,
    }
  }
}


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



export default function Home() {
  
  const list_skills = [
{id:1, text:'HTML'},
{id:2, text:'CSS'},
{id:3, text:'JavaScript'},
{id:4, text:'Figma'},
{id:5, text:'XD'},
{id:6, text:'Premier Pro'},
{id:7, text:'Photoshop'},
{id:8, text:'Three.js'},
{id:9, text:'React.js'},
{id:10, text:'Framer Motion'},
{id:11, text:'Next.js'},
{id:12, text:'GSAP'},
{id:13, text:'Firebase'},
{id:14, text:'Blender'},
{id:15, text:'i18n'},
  ]
  
  
  return (
    <>
      <Head>
        <title>BII</title>
        <meta name="description" content="Iurie personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <motion.div variants={fadeEffect} initial='hidden' animate='visible' className={styles.top_text}>
        <motion.h1 variants={fadeEffect}>Bogdan Iurie-Iacob</motion.h1>
        <motion.h2 variants={fadeEffect}>Web Developer | Designer</motion.h2>
        </motion.div>

        <motion.div variants={fadeEffect} initial='hidden' animate='visible'  className={styles.flex_container}>
        <Link href="/tminox"  className={styles.card1}>
          <motion.div  initial='initial' whileHover="animate"   className={styles.card1}>
            <motion.h2  variants={onHoverServ} className={styles.card_heading}>Recent Work</motion.h2>
            <video width="100%" className={styles.image1Container} height="100%" loop autoPlay muted src='Resources/vidos.mp4'></video>
          </motion.div>
          </Link>

          <Link href="/about"  className={styles.card2}>
            <motion.div  initial='initial' whileHover="animate"  className={styles.card2} >
              <motion.div variants={onHoverServ2}  className={styles.small_flex}>
                 <motion.div  className={styles.small_flex2}>   
                  <motion.h2  className={styles.card_heading2}>Hello, I'm Iurie </motion.h2>
                  <motion.span className={styles.wave}  >👋</motion.span>
                  </motion.div>
                  <motion.p   className={styles.card_p}>Web Developer & Designer</motion.p>
            
              </motion.div>
              <div className={styles.small_flex2}>
              <motion.h2 variants={onHoverServ}   className={styles.card_heading3}>Learn more about me </motion.h2>
              <motion.span className={styles.wave} variants={onHoverServ} >✌️</motion.span>
              </div>
            </motion.div>
          </Link>
        </motion.div>

    

<motion.div  
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4  }}
  variants={fadeEffect} 
  className={styles.flex_container3}>
        <motion.div variants={fadeEffect} className={styles.flex_container2}>
          <motion.div variants={fadeEffect} className={styles.card_samll}>
           <h2 className={styles.card_heading_small}>Some of my skills </h2>
            <ul className={styles.skill_container}>
             {list_skills.map((skill) =>{
               return(
                <motion.li className={styles.skill} key={skill.id}>
                  {skill.text}
                </motion.li>
               )
            } )}
           </ul>
          </motion.div>

      <Link href="/work"  className={styles.card_samll_work}>
          <motion.div variants={fadeEffect} initial='initial' whileHover="animate"  className={styles.card_samll_work}>

          <div className={styles.small_flex}>
              <motion.span className={styles.brief} variants={onHoverServ2} >💼</motion.span>                
          </div>

          <div className={styles.small_flex2}>
            <motion.h2 variants={onHoverServ}   className={styles.card_heading_work}>See all my work</motion.h2>
                 
          </div>

          </motion.div>
      </Link>
      </motion.div>
        
  <motion.div 
    className={styles.card_big}
    variants={fadeEffect} 
    initial='initial' 
    whileHover="animate"  
    onClick={() => {
      navigator.clipboard.writeText("bogdan.iurie.iacob@gmail.com");
      toast.success("E-mail Copied", {
        style: {
        background: "#191716",
        color: "#fff",
        fontSize: "var(--fontss)",
    
      },})}}>
        <div className={styles.small_flex}>
                <motion.h2 variants={onHoverServ2}  className={styles.card_heading_contact}>bogdan.iurie.iacob@gmail.com</motion.h2>
        </div>
                <div className={styles.small_flex}>
                <motion.h2 variants={onHoverServ}   className={styles.card_heading_work2}>Leave a message📫</motion.h2>
                </div>
            </motion.div>
  </motion.div>
  
      </main>
    </>
  )
}