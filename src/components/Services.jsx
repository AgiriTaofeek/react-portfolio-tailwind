import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

import { motion } from 'framer-motion';
import { fadeIn } from '../variant';

const services = [
  {
    name: 'UI/UX Design',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores autem dolor hic incidunt nemo id?',
    link: 'Learn more',
  },
  {
    name: 'Development',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores autem dolor hic incidunt nemo id?',
    link: 'Learn more',
  },
  {
    name: 'Digital Marketing',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores autem dolor hic incidunt nemo id?',
    link: 'Learn more',
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text and Image */}
          <motion.div
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat  mix-blend-lighten mb-12 lg:mb-0"
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[28.4375rem] mb-16">
              I'm a Freelance Front-end Developer with over 5 years of
              experience
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            className="flex-1"
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <ul>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <li
                    key={index}
                    className="border-b border-white/20 h-[9.125rem] mb-[2.375rem] flex"
                  >
                    <div className="max-w-[29.75rem]">
                      <h4 className="text-[1.25rem] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[2. 625rem] flex items-center justify-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
