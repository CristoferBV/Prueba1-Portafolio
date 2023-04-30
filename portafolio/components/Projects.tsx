import React from "react";
import { motion } from "framer-motion";
//import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import One from "../public/img/1.png";
import Two from "../public/img/2.png";
import Three from "../public/img/3.png";
import Four from "../public/img/4.png";

const Work = () => {
  const [x, setX] = useState(0);

  const handleSlide = (direction: string) => {
    if (window.matchMedia("(max-width: 700px)").matches) {
      if (direction === "left") {
        setX(prevX => prevX - 285.066666);
      } else {
        setX(prevX => prevX + 285.066666);
      }
    } else {
      if (direction === "left") {
        setX(prevX => prevX - 570.133333);
      } else {
        setX(prevX => prevX + 570.133333);
      }
    }
  };

  useEffect(() => {
    if (window.matchMedia("(max-width: 700px)").matches) {
      if (x > 570.133333) {
        setX(570.133333);
      }
      if (x < -570.133333) {
        setX(-570.133333);
      }
    } else {
      if (x > 1140.26667) {
        setX(1140.26667);
      }
      if (x < -1140.26667) {
        setX(-1140.26667);
      }
    }
  }, [x]);

  return (
    <>
      <div className={styles.desktop}>
        <section className={styles.work}>
          <h2>My Projects</h2>
          <motion.div
            animate={{ x }}
            drag="x"
            dragConstraints={{ left: -855.2, right: 855.2 }}
          >
            <figure>
              <Image src={One} alt="" placeholder="blur" />
            </figure>
            <figure>
              <Image src={Two} alt="" placeholder="blur" />
            </figure>
            <figure>
              <Image src={Three} alt="" placeholder="blur" />
            </figure>
            <figure>
              <Image src={Four} alt="" placeholder="blur" />
            </figure>
          </motion.div>
          <div>
            <button type="button" onClick={() => handleSlide("right")}>
              <svg
                width={15}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0 0 8l8 8 1.687-1.687-5.121-5.12h10.241V6.807H4.566l5.12-5.12L8 0Z"
                  fill="#fff"
                />
              </svg>
            </button>
            <button type="button" onClick={() => handleSlide("left")}>
              <svg
                width={15}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m6.807 16 8-8-8-8-1.686 1.687 5.12 5.12H0v2.386h10.241l-5.12 5.12L6.807 16Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;

