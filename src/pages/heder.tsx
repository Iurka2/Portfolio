import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";



const fadeEffect2 = {
  hidden: {
    y: -10,
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
        
    }

  }
  
}

const Heder = () => {
  return ( 
  <>
  <motion.nav initial='hidden' animate='visible' className="heder">
    <motion.div variants={fadeEffect2}  >
  <Link href='/'>
   <motion.h1 variants={fadeEffect2} className="heder_logo">BII</motion.h1>
  </Link>
    </motion.div>

    <motion.div variants={fadeEffect2} className="heder_small">



    <a target="_blank" rel="noreferrer" href="/Resources/IurieCV.pdf">
        <motion.h1 variants={fadeEffect2} className="heder1 hover-midline-animation ">CV</motion.h1>
       </a>

     <Link href='/work'>
      <motion.h1 variants={fadeEffect2} className="heder1 hover-midline-animation ">Work</motion.h1>
     </Link>

     
     <a target="_blank" rel="noreferrer" href="https://drive.google.com/drive/u/1/folders/1fXf0QfP8Dt8MEDILkuENZyKhv96RyouB">
        <motion.h1 variants={fadeEffect2} className="heder1 hover-midline-animation ">Game development</motion.h1>
     </a>

       <Link href='/about'>
        <motion.h1 variants={fadeEffect2} className="heder1 hover-midline-animation ">About</motion.h1>
       </Link>



         
          <motion.h1 onClick={() => {
                navigator.clipboard.writeText("bogdan.iurie.iacob@gmail.com");
                toast.success("E-mail Copied", {
                style: {
                  background: "#F0EDEE",
                  color: "#191716",
                  fontWeight:500,
                  fontSize: "var(--fontss)",

                },
              });
            }} variants={fadeEffect2} className="heder1 hover-underline-animation ">Get in touch</motion.h1>
         
    </motion.div>
  </motion.nav>
  </> );
}
 
export default Heder;