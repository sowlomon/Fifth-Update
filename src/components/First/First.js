import React from 'react';
import Image from 'next/image';
import Benik from '../../../public/images/Besnik.png';
import navLogo from '../../../public/images/Group 1000000710.png';
import header from '../../../public/images/header.png';
import arrow from '../../../public/images/Vector.png';
import fire from '../../../public/images/fire.png';
import logo from '../../../public/images/image8.png'
import styles from './First.module.scss';

function First() {

  return (
    <div className={styles.main}>
      <div className={styles.mainNav}>
        <input type='checkbox' className={styles.toggler} />
        <div className={styles.hanBurger}><div></div></div>
        <div className={styles.subNav}>
          <div>
            <div>
              <div>
                <ul>
                  <li>ABOUT</li>
                  <li>HOW IT WORKS</li>
                  <li>CONTACT</li>
                </ul>
              </div>
              <div>
                <Image
                  src={Benik}
                  alt="image"
                  height="15px"
                  width="83px"
                />
              </div>
              <div>
                <Image
                  src={navLogo}
                  alt="image"
                  height="50px"
                  width="50px"
                />
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className={styles.main2}>
        <div className={styles.div1}>
          <div>
            <h2>Banking <span className={styles.more}>more</span> smart</h2>
          </div>
          <div>
            <p>
              meet the only spend management platform
              and corporate card.
            </p>
          </div>
          <div>
            <span>
              <Image
                src={arrow}
                alt="image"
                height="7px"
                width="15px"
              />
            </span>
            <span>
              Get your card
            </span>
          </div>
        </div>
        <div className={styles.main3}>
          <Image 
            src={header}
            alt="image"
            height="500px"
            width="724px"
          />
        </div>
      </div>
      <div className={styles.main4}>
        <div>
          <div>
            <span> 
              <span>Hot</span>
              <span>
                <Image 
                  src={fire}
                  alt="image"
                  height="32px"
                  width="32px"
                />
              </span>
            </span>
            <span className={styles.dealText}>deals for you</span>
          </div>
          <p>
            Online shopping for retails
            sales direct customers.
          </p>
        </div>
        <div>
          <div>
            <Image 
              src={logo}
              alt="image"
              height="35px"
              width="32px"
            />
          </div>
          <p className={styles.pText}>
            1.5% cashback
          </p>
          <p>
            Online shopping for retails
            sales direct customers.
          </p>
        </div>
        <div>
          <div>
            <Image 
              src={logo}
              alt="image"
              height="35px"
              width="32px"
            />
          </div>
          <p className={styles.pText}>
            30-day terms
          </p>
          <p>
            Online shopping for retails
            sales direct customers.
          </p>
        </div>
        <div>
          <div>
            <Image 
              src={logo}
              alt="image"
              height="35px"
              width="32px"
            />
          </div>
          <p className={styles.pText}>
            Save Money
          </p>
          <p>
            Online shopping for retails
            sales direct customers.
          </p>
        </div>
      </div>

    </div>
  )
}

export default First;