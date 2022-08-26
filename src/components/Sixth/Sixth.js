import React from 'react';
import Image from 'next/image';
import play from '../../../public/images/play text.png';
import card from '../../../public/images/Group 1000000714.png';
import rectangle from '../../../public/images/Rectangle 3782.png';
import styles from './Sixth.module.scss';

function Sixth() {
  return (
    <div className={styles.main}>
      <div className={styles.subMain}>
        <div>
          <div>
            <div>
              <p>
                Subscribe
                to get updated
                news
              </p>
              <div>
                <Image
                  src={rectangle}
                  alt='img' 
                  width='8px'
                  height='133px'
                />
              </div>
            </div>
            <div>
              <Image
                src={play}
                alt='img' 
                width='96px'
                height='96px'
              />
            </div>
          </div>
        </div>
        <div>
          <h3>
            Subscribe our newsletter
          </h3>
          <button type='submit'>
            Subscribe
          </button>
        </div>
        <div>
          <Image 
            src={card}
            alt='img' 
            width='691px'
            height='734px'
          />
        </div>
      </div>
    </div>
  )
}

export default Sixth;