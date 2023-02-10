import styles from '@/styles/about.module.css'
import { motion } from 'framer-motion';
import Image from 'next/image';
import me from "../../public/Resources/me.png"
import Head from 'next/head';


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
      staggerChildren: 0.35,
      restSpeed: 0.5
    }
  }
}

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

    const list_hobbies = [
      {id:1, text:'Gaming'},
      {id:2, text:'Video editing'},
      {id:3, text:'Game Development'},
      {id:4, text:'Cooking'},
      {id:5, text:'Refurbishing old consoles / tech'},
      {id:6, text:'Solving problems'},
      {id:7, text:'Talking about coding'},
      {id:8, text:'3D modeling / animation'},
      {id:9, text: 'Italian coffee (duh)'},

    
        ]

const About = () => {
  return ( 
  <>


<Head>
    <title>About</title>
    <meta name="description" content="A little bit about me" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
 </Head>

  <main className={styles.main}>
  <h1 className={styles.heading1}>About</h1>



<motion.div className={styles.card} initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4  }}
              variants={fadeEffect} >
       <motion.h1  variants={fadeEffect}  className={styles.card_heder}>I love to code and develop user friendly designs.</motion.h1>
       <motion.div className={styles.images_container}>
       <Image className={styles.images} src={me} alt='Glass of wine/Pahar vin' />
       </motion.div>
      </motion.div>


      <motion.div className={styles.flex_container2} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4  }}
              variants={fadeEffect}>
              <motion.h2  variants={fadeEffect}>I’m a junior developer looking to start my career.</motion.h2>
              <motion.p  variants={fadeEffect}>With a few projects behind my back, I am ready to take on the
next big challenge in the IT industry. I am a bit of a geek, so I keep
up with the latest software and design trends on awwwards,
dribble and medium.<br /> <br /> I have a passion for coding and product development
and I always strife to achieve the best possible results in a
manageable time frame. I am not scared to take on a big task
and can take initiative when needed.<br /> <br /> I am reliable and
responsible with my tasks, and I would love to work in a team to
further develop my social and professional skills. Jeg er også i gang
med at lære dansk
              </motion.p>
            </motion.div>


<motion.div   initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4  }}
              variants={fadeEffect}
              className={styles.flex}>

            <motion.div     variants={fadeEffect} className={styles.card_samll}>
             <h2 className={styles.card_heading_small}>Some of my skills </h2>
         
              <ul className={styles.skill_container}>
               {list_skills.map((skill) =>{
               return(
                <motion.li  initial='initial' whileHover="animate" className={styles.skill} key={skill.id}>
                  {skill.text}
                </motion.li>
               )
            } )}
           </ul>
          </motion.div>

          <motion.div     variants={fadeEffect} className={styles.card_samll2}>
           <h2 className={styles.card_heading_small}>I also enjoy </h2>
           <ul className={styles.skill_container}>
            {list_hobbies.map((hobbie) =>{
               return(
                <motion.li  initial='initial' whileHover="animate" className={styles.skill} key={hobbie.id}>
                  {hobbie.text}
                </motion.li>
               )
            } )}
           </ul>
          </motion.div>
</motion.div>
  </main>
  </> 
  
  );
}
 
export default About;