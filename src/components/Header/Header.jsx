import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>Abdul Rehman</div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li onClick={() => setMenuOpened((prev) => !prev)}><a href="#">Home</a></li>
          <li onClick={() => setMenuOpened((prev) => !prev)}><a href="#experties">About Me</a></li>
          <li onClick={() => setMenuOpened((prev) => !prev)}><a href="#portfolio">Portfolio</a></li>
          <li onClick={() => setMenuOpened((prev) => !prev)}><a href="#skills">Skills</a></li>
          <li onClick={() => setMenuOpened((prev) => !prev)}><a href="#work">Experience</a></li>
          <li onClick={() => setMenuOpened((prev) => !prev)} className={`flexCenter ${css.phone}`}>
            <a href="tel:8369017007">
              <p>8369017007</p> </a>
            <a href="tel:8369017007">
              <BiPhoneCall size={"40px"} />
            </a>
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          {
            menuOpened ? <RxCrossCircled size={30} /> : <BiMenuAltRight size={30} />
          }

        </div>
      </div>
    </motion.div>
  );
};

export default Header;
