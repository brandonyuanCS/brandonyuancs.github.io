import { Grid } from '@mantine/core';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>about me</h1>

      <p className={styles.intro}>
        {/* <s style={{ color: 'gray' }}><i>Irvine, CA</i></s> */}
        📍 Austin, TX <br />
        🎓 CS @ Texas A&M <br />
      </p>
      
      <Grid gutter="xl" className={styles.section} align="center">
        <Grid.Col span={{ base: 12, sm: 7 }}>
          <h2>education & work</h2>
          <p>
            I'm currently a 3rd year CS student at TAMU, focusing on becoming a better 
            developer, step-by-step. I try to learn something new everyday, and frequently 
            work on personal projects. My current goals mainly revolve around improving the 
            quality of code I write (focusing on reliable & scalable software).
          </p>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 5 }}>
          <div className="about-card">
            <h3>current goals</h3>
            <p>
              📅 finish & deploy Canvas2calendar <br />
              🔍 train malware classifier for class <br />
              🧑‍💻 get AWS & MongoDB certifications <br />
              🔥 explore summer 2026 opportunities <br />
            </p>
          </div>
        </Grid.Col>
      </Grid>

      <Grid gutter="xl" className={styles.section} align="center">
        <Grid.Col span={{ base: 12, sm: 5 }} order={{ base: 2, sm: 1 }}>
          <div className="about-card">
            <h3>side quests</h3>
            <p>
              🏃‍➡️ run a 10k <br />
              📸 get back into photography <br />
              🍜 learn to make noodles from scratch
            </p>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 7 }} order={{ base: 1, sm: 2 }}>
          <h2>outside the IDE</h2>
          <p>
            Outside of programming, I spend my free time at the gym, on the basketball
            court, or gaming. At this moment, I'm probably listening to either hip-hop
            or classical piano. Also, I really enjoy cooking the same 10 things over
            and over. 
          </p>
        </Grid.Col>
      </Grid>
    </div>
  );
}