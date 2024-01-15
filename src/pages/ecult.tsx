import TopPart from "./topPart";
import screen3 from "../../public/Resources/still2.jpg"
import styles from '@/styles/util.module.css'
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";




const Ecult = () => {

  const list_skills = [
    {id:1, text:'HTML'},
    {id:2, text:'CSS'},
    {id:3, text:'JavaScript'},
    {id:4, text:'Figma'},
    {id:9, text:'React.js'},
    {id:10, text:'Bledner'},
    {id:11, text:'Three.js'},
    
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
        {id:3, text:'UX designer / Web designer'},
        
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
            {id:9, img:'/Resources/ecult/ecult9.jpg'},
            {id:11, img:'/Resources/ecult/ecult12.jpg'},
            {id:12, img:'/Resources/ecult/ecult13.jpg'},
            {id:13, img:'/Resources/ecult/ecult14.jpg'},
            {id:14, img:'/Resources/ecult/ecult15.jpg'},
            {id:1, img:'/Resources/ecult/ecult1.jpg'},
            {id:2, img:'/Resources/ecult/ecult2.jpg'},
            {id:3, img:'/Resources/ecult/ecult3.jpg'},
            {id:4, img:'/Resources/ecult/ecult4.jpg'},
            {id:5, img:'/Resources/ecult/ecult5.jpg'},
            {id:6, img:'/Resources/ecult/ecult6.jpg'},
            {id:7, img:'/Resources/ecult/ecult7.jpg'},
            {id:8, img:'/Resources/ecult/ecult8.jpg'},
            {id:10, img:'/Resources/ecult/ecult11.jpg'},


              ]

  return ( 
  <>

<Head>
    <title>Work | E-Cult</title>
    <meta name="description" content="E-cult website showcase" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
 </Head>

  <main>
  <TopPart img={screen3}
    link1={null}
    link2="https://github.com/Iurka2/Reprem"
    link3="https://e-cult.com"
   alt="furniture project" 
   title="E-cult Concept Webiste"
   breif="A mobile ad website that uses 3D models built with Three.js to showcase products or services in a dynamic and immersive way. With interactive 3D models, the ad can demonstrate the features and benefits of the products or services in a way that traditional 2D ads cannot. Whether promoting a new product, a limited time offer, or a special sale, this mobile ad website will captivate and engage users in a unique and memorable way. "
   role={RenderRoles()}
   text={RenderSkills()}
   
    />
   <div className={styles.gridgallery}>
    {image_list.map((image) => (
            <motion.div  key={image.id}  className={styles.ImgCont} >
             <Image className={styles.Imagess} src={image.img} alt='Showcase image of project' width={1000} height={700}   />
           </motion.div>
    ))}
    </div>
    <div style={{display:'flex', justifyContent:'center',alignItems:'center',paddingBottom:'24px'}}>
      <a href="#top">
      <button className={styles.button_style}><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#F0EDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg></button>
      </a>
    </div>
    </main>
  </> 
  );
}
 
export default Ecult;