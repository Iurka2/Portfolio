import TopPart from "./topPart";
import screen3 from "../../public/Resources/26.jpg"
import styles from '@/styles/util.module.css'
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";




const YourMobila = () => {

  const list_skills = [
    {id:1, text:'HTML'},
    {id:2, text:'CSS'},
    {id:3, text:'JavaScript'},
    {id:4, text:'Figma'},
    {id:9, text:'React.js'},
    {id:10, text:'Framer Motion'},
    {id:11, text:'Next.js'},
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
            {id:1, img:'/Resources/yourmobila/your1.png'},
            {id:2, img:'/Resources/yourmobila/your2.png'},
            {id:3, img:'/Resources/yourmobila/your3.png'},
            {id:4, img:'/Resources/yourmobila/your4.png'},
            {id:5, img:'/Resources/yourmobila/your5.png'}

              ]

  return ( 
  <>

<Head>
    <title>Work | YourMobila</title>
    <meta name="description" content="YourMobila website showcase" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
 </Head>
  <main>
  <TopPart img={screen3}
    link1="https://www.figma.com/file/DK5pusG7Q5DBtw08L4RjKm/TEAM-CRISA-%26-CEREPAHA-team-library?node-id=3009%3A466&t=6wNbU6og47Q2U2F5-1"
    link2="https://github.com/Iurka2/YourMoblia-showcase"
    link3="https://yourmobila.com"
   alt="furniture project" 
   title="YourMobila Website"
   breif="Designed and developed a visually appealing website for a custom furniture company. The website showcases their unique furniture pieces through high-quality images, providing potential clients with a comprehensive understanding of their products and services. Implemented seamless navigation to allow for an enjoyable browsing experience. The website has effectively elevated the company's online presence and strengthened their reputation. "
   role={RenderRoles()}
   text={RenderSkills()}
   
    />
   <div className={styles.gridgallery}>
    {image_list.map((image) => (
            <motion.div  key={image.id}  className={styles.ImgCont} >
             <Image className={styles.Imagess} src={image.img} alt='Showcase image of project' width={1000} height={700}  />
           </motion.div>
    ))}
    </div>
 
    </main>
  </> 
  );
}
 
export default YourMobila;