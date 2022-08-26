import React from 'react';
import Image from 'next/image';
import card from '../../../public/images/card.png';
import group1 from '../../../public/images/Group 4159.png';
import group2 from '../../../public/images/Group 4186.png';
import details from '../../../public/images/Group 1000000672.png';
import styles from './Third.module.scss';

function Third() {
  return (
    <div className={styles.main}>
      <div className={styles.subMain}>
        <div>
          <h1>1000+ Customers</h1>
          <p>
            Analyze any Business or Creator account—including
            your competitors—to find the imagery, visuals, and captions 
            that drive audience engagement. Get social calendars
            planned faster and spend less time testing content strategies.
          </p>
        </div>
        <div>
          <Image 
            src={details}
            alt='img'
            width= '1090px'
            height= '209px'
          />
        </div>
        <div>
          <div>
            <Image
              src={card}
              alt='img'
              width='675'
              height='507'
            />
          </div>
          <div>
            <h2>
              Handoff your work smarter now
            </h2>
            <p>
              Create documentation for the 
              collaborators (i.e. designers or devs) 
              directly in your design file.
            </p>
            <div>
              <div>
                <Image 
                  src={group1}
                  alt='img'
                  width='60'
                  height='58'
                />
              </div>
              <div>
                <h3>
                  Strategic
                </h3>
                <p>
                  Suggests that the component spacing
                  between cards and elements.
                </p>
              </div>
            </div>
            <div>
              <div>
                <Image 
                  src={group2}
                  alt='img'
                  width='60'
                  height='58'
                />
              </div>
              <div>
                <h3>
                  Work Schedule
                </h3>
                <p>
                  work schedule is the time an 
                  employee is expected to be on the job
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Third