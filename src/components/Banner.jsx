import React from 'react';
import Image from '../assets/avatar.svg';
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center gap-x-12">
          {/* Text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            {/* h1 */}
            <motion.h1
              className="text-[3.4375rem] font-bold leading-[0.8] lg:text-[6.875rem]"
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              BEN <span>AIDEN</span>
            </motion.h1>
            {/* Type text animation */}
            <motion.div
              className="mb-6 text-[2.25rem] lg:text-[3.75rem] font-secondary font-semibold uppercase leading-[1]"
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <span className="mr-4 text-white">I am a </span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                  'Youtuber',
                  2000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
                className="text-accent"
              />
            </motion.div>
            {/* Paragraph */}
            <motion.p
              className="mb-8 max-w-lg mx-auto lg:mx-0"
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              eaque, id facilis at veritatis commodi?
            </motion.p>
            {/* Button CTA */}
            <motion.div
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My portfolio
              </a>
            </motion.div>
            {/* Social icons */}
            <motion.div
              className="flex text-[1.25rem] gap-x-6 max-w-max mx-auto lg:mx-0"
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          {/* Picture */}
          <motion.figure
            className="hidden lg:flex flex-1 max-w-[20rem] lg:max-w-[30.125rem]"
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={Image} alt="profile" />
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default Banner;
