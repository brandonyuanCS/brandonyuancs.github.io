import { Grid } from '@mantine/core';
import styles from './About.module.css';
import ExternalLink from '../../components/ExternalLink';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.header} animate-fade-in-up`}>about me</h1>
      <p className="animate-fade-in-up-delay-1" style={{ marginTop: '0.5rem' }}>
        📍 Austin, TX <br />
        🎓 CS @ Texas A&M <br />
      </p>

      {/* Two text paragraphs side by side */}
      <Grid gutter={75} className={`${styles.section} animate-fade-in-up-delay-2`}>
        <Grid.Col span={{ base: 12, sm: 7 }}>
          <p style={{ marginTop: 0 }}>
            I'm a 3rd year CS student at TAMU who is determined to get really, really good at building software.
            Much of my time is spent on personal projects. This past year, I've really dedicated a lot of time
            towards studying design patterns & building systems that are reliable, scalable, and intuitive.
          </p>
          <p>
            Outside of programming, I'll be at the gym, playing sports, playing video games, or running (although I am quite bad at it).
            I also enjoy cooking the same 10 things over and over.
          </p>
          <p>
            I'm planning on picking up the trumpet & piano again soon. Check
            out my outdated <ExternalLink href='https://www.instagram.com/brandon.trumpet/'>music account</ExternalLink> at
            your own risk.
          </p>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 5 }}>
          <div className={styles.columnSection}>
            <h3 style={{ color: '#222222' }}>current goals</h3>
            <div className={styles.divider}></div>
            <p className={styles.list}>
              begin canvas2calendar beta testing <br />
              go to more hackathons <br />
              revive some old projects & ideas <br />
              study AWS, MongoDB, Redis <br />
              experiment with framer & figma <br />
              study system & software design <br />
              run a 10k <br />
              get better at baking <br />
            </p>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}