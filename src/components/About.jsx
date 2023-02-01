import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section " id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* Image */}
          <motion.figure
            className="flex-1 bg-about bg-contain bg-no-repeat h-[40rem] mix-blend-lighten bg-top"
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          ></motion.figure>
          {/* Text */}
          <motion.div
            className="flex-1"
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="h2 text-accent ">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Freelance Front-end Developer with over 5 years of
              experience
            </h3>
            <p className="mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt est
              libero, deserunt tempore eum dolor.
            </p>
            {/* Stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[2.5rem] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <h3 className="font-primary text-sm tracking-[0.125rem]">
                  Years of
                  <br />
                  experience
                </h3>
              </div>
              <div>
                <div className="text-[2.5rem] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                </div>
                <h3 className="font-primary text-sm tracking-[0.125rem]">
                  Projects
                  <br />
                  Completed
                </h3>
              </div>
              <div>
                <div className="text-[2.5rem] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                  k+
                </div>
                <h3 className="font-primary text-sm tracking-[0.125rem]">
                  Satisfied
                  <br />
                  Clients
                </h3>
              </div>
            </div>
            <div className="flex gap-x-8 items-center ">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
