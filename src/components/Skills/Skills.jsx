import React, { useEffect } from 'react'
import { useRef } from 'react';
import { skillsCollection } from '../../utils/data';
import css from "./Skills.module.scss";
import { motion, useAnimation } from 'framer-motion';
import { staggerChildren, staggerContainer, textVariant } from '../../utils/motion';
import { useInView } from 'framer-motion';

const Skills = () => {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,

            }
        }
    }
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };



    return (
        <motion.section
            id='skills'
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={` flexCenter paddings ${css.wrapper}`}


        >
            <motion.div variants={textVariant(.4)} className={css.container}>
                <div className={` flexCenter ${css.skillsTitle}`}>
                    <span className="primaryText topPaddings">Skills</span>
                    <span className="marginTop">Technology Stack</span>
                </div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    // whileInView="show"
                    className={`${css.skillsCollection}`}>
                    {
                        skillsCollection.map((skill, i) => (
                            // <a href={skill.url} target='_blank'>
                            <motion.div
                                // whileInView={ }
                                viewport={{ once: false, amount: 0.1 }}
                                key={i}
                                className={css.icons}
                                variants={item}
                            >
                                <skill.tech size={45} color={skill.color} />
                                <div className={css.iconsNumber} >
                                    {skill.proficient}%
                                </div>
                            </motion.div>

                            // </a>
                        ))
                    }
                </motion.div>
            </motion.div>

        </motion.section>
    )
}

export default Skills
