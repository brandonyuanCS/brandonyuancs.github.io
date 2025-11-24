import { Grid } from '@mantine/core';
import styles from './About.module.css';
import ExternalLink from '../../components/ExternalLink';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.header} animate-fade-in-up`}>about me</h1>
      <p className="animate-fade-in-up-delay-1" style={{ marginTop: '0rem' }}>
        📍 Austin, TX <br />
        🎓 CS @ Texas A&M <br />
      </p>
      
      {/* Two text paragraphs side by side */}
      <Grid gutter="xl" className={`${styles.section} animate-fade-in-up-delay-2`}>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <p>
            I'm a 3rd year CS student at TAMU who loves building software that feels 
            reliable, intuitive, and just nice to use. I'm doing my best to become a better 
            developer, one step at a time. 
          </p>
          <p>
            Over this past year, I've spent a ton of time not only studying new technologies,
            but also understanding how to write maintainable software, build systems end-to-end, 
            and deduce what users/customers actually look for. 
          </p>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <p>
            Outside of programming, I can be found at the gym, the basketball court, or my computer
            still (sadly). 
          </p>
          <p>
            I've recently started running, but am quite bad at it. 
          </p>
          <p>
            I like all kinds of music, and I hope to resume playing the trumpet & piano some day. Check
            out my outdated <ExternalLink href='https://www.instagram.com/brandon.trumpet/'>music account</ExternalLink> at
            your own risk. 
          </p>
          <p>
            I also really enjoy cooking the same 10 things over and over.   
          </p>
        </Grid.Col>
      </Grid>

      {/* Three columns with headers and lists */}
      <Grid gutter="xl" className={`${styles.section} animate-fade-in-up-delay-3`}>
        <Grid.Col span={{ base: 12, sm: 4 }}>
          <div className={styles.columnSection}>
            <h3>current goals</h3>
            <div className={styles.divider}></div>
            <p className={styles.list}>
              finish & deploy canvas2calendar <br />
              keep learning AWS & mongoDB <br />
              experiment w/ framer & figma <br />
              go to more hackathons! <br />
              run a 10k
            </p>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 4 }}>
          <div className={styles.columnSection}>
            <h3>to-do hobbies</h3>
            <div className={styles.divider}></div>
            <p className={styles.list}>
              baking <br />
              photography <br />
              boxing <br />
              violin <br />
              art & graphic design
            </p>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 4 }}>
          <div className={styles.columnSection}>
            <h3>my music h.o.f.</h3>
            <div className={styles.divider}></div>
            <p className={styles.list}>
              rachmaninov - piano concerto 2 <br />
              chopin - ballade no. 4 <br />
              grouplove - tongue tied <br />
              niki - dancing with the devil <br />
              kendrick lamar - savior <br />
            </p>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}