import TopPart from "./topPart";
import screen3 from "../../public/Resources/still1.jpg"
import styles from '@/styles/util.module.css'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";


const TmInox = () => {

  const list_skills = [
    {id:1, text:'HTML'},
    {id:2, text:'CSS'},
    {id:3, text:'JavaScript'},
    {id:4, text:'Figma'},
    {id:9, text:'React.js'},
    {id:10, text:'Framer Motion'},
    {id:11, text:'Next.js'},
    {id:13, text:'Firebase'},
    {id:14, text:'Rowy'},
    {id:15, text:'i18n'},
      ]

      const RenderSkills = () => {
        return list_skills.map((skill) => {
          return (
            <li className={styles.skill} key={skill.id}>
              {skill.text}
            </li>
          );
        });
      };



      const list_Roles = [
        {id:1, text:'Project Manager'},
        {id:2, text:'Front-end developer'},
        {id:3, text:'UX designer / Graphic designer'},
        {id:4, text:'QA tester'},
          ]
    
          const RenderRoles = () => {
            return list_Roles.map((skill) => {
              return (
                <li className={styles.roles} key={skill.id}>
                  {skill.text}
                </li>
              );
            });
          };



          const image_list = [
            {id:1, img:'/Resources/tminoxP/tminox6.jpeg'},
            {id:6, img:'/Resources/tminoxP/tminox1.jpg'},
            {id:2, img:'/Resources/tminoxP/tminox2.jpg'},
            {id:3, img:'/Resources/tminoxP/tminox3.jpg'},
            {id:4, img:'/Resources/tminoxP/tminox4.jpg'},
            {id:5, img:'/Resources/tminoxP/tminox5.png'}
              ]

  return ( 
  <>

 <Head>
    <title>Work | TM INOX</title>
    <meta name="description" content="TM inox project showcase" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
 </Head>
  <main className={styles.utilMain} id="top" >
  <TopPart 
  img={screen3}
  link1="https://www.figma.com/file/DK5pusG7Q5DBtw08L4RjKm/TEAM-CRISA-%26-CEREPAHA-team-library?node-id=3009%3A465&t=6wNbU6og47Q2U2F5-1"
  link2="https://github.com/Iurka2/TmInox_showcase"
  link3="https://tminox.com.ro"
   alt="hello" 
   title="TmInox Website Redesign" 
   role={RenderRoles()}
   breif=" This redesign project aims to improve user experience and increase online visibility through SEO optimization, utilizing the latest software, including Next.js, to ensure a seamless and cutting-edge website that meets needs and exceeds expectations."
   text={RenderSkills()}
   
    />
   <div className={styles.gridgallery}>
    {image_list.map((image) => (
            <motion.div  key={image.id}  className={styles.ImgCont} >
             <Image className={styles.Imagess} src={image.img} alt='Showcase image of project' width={800} height={700}   />
           </motion.div>
    ))}
    </div>


    </main>
  </> 
  );
}
 
export default TmInox;