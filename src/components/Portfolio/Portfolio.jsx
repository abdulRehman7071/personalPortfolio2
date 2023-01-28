import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>Perfect solution for Frontend Needs</p>
          </div>
          <a href="https://github.com/abdulRehman7071" target='_blank'>
            <span className="secondaryText">Explore More Works</span></a>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
          <a href="https://movie-hub-abdulrehman421.vercel.app/" target='_blank'>
            <motion.img variants={fadeIn("up", "tween", .5, .6)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src="./showCase1.png" alt="project" />
          </a>

          <a href="https://abdul-netflix-clone.netlify.app/" target='_blank'>
            <motion.img variants={fadeIn("up", "tween", .9, .6)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src="./showCase3.png" alt="project" />
          </a>

          <a href="https://cryptoverse-react-abdul.netlify.app/" target='_blank'>
            <motion.img variants={fadeIn("up", "tween", .9, .6)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src="./showCase4.png" alt="project" />
          </a>

          <a href="https://linkedin-react-abdul.netlify.app/" target='_blank'>
            <motion.img variants={fadeIn("up", "tween", .9, .6)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src="./showCase6.png" alt="project" />
          </a>


          <a href="https://gym-react-abdul.netlify.app/" target='_blank'>
            <motion.img variants={fadeIn("up", "tween", .9, .6)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src="./showCase5.png" alt="project" />
          </a>


          <a href="https://ecommerce-react-abdul.netlify.app/" target='_blank'>
            <motion.img variants={fadeIn("up", "tween", .7, .6)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src="./showCase2.png" alt="project" />
          </a>

        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
