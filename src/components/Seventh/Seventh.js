import React from 'react';
import Image from 'next/image';
import Benik from '../../../public/images/Besnik.png';
import social from '../../../public/images/Social icon.png';
import line from '../../../public/images/Line 14.png';
import styles from './Seventh.module.scss';

function Seventh() {
  return (
    <div className={styles.main}>
      <div className={styles.subMain1}>
        <div className={styles.subMain2}>
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
              alt='img'
              width='83px'
              height='15px'
            />
          </div>
          <div>
            <p>
              SignUp
            </p>
            <p>
              Login
            </p>
            <div>
              <Image 
                src={social}
                alt='img'
                width='88px'
                height='12px'
              />
            </div>
          </div>
        </div>
        <div>
          <p>
            Copyright © 2020.Besnik creative
          </p>
          <div>
            <Image
            src={line}
            alt='img'
            width='635px' 
            />
          </div>
          <p>
            Designed by Besnik
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Seventh;