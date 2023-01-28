import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>


      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:khan.abdul.7071@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Andheri (E), Mumbai, Maharashtra </p>
          </div>
          <ul className={css.menu}>
            <li>
              <a href="https://www.linkedin.com/in/khanabdulrehman/">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/abdulRehman7071">
                Github
              </a>
            </li>
            <li>
              <a href="tel:8369017007">
                8369017007
              </a>
            </li>
            <li>
              <a href="">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
