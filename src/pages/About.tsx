import { Grid } from '@mantine/core';

export default function About() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <h1 style={{ margin: 0, marginBottom: 0 }}>about me</h1>

      <p>
        {/* <s style={{ color: 'gray' }}><i>Irvine, CA</i></s> */}
        📍 Austin, TX <br />
        🎓 CS @ Texas A&M <br />
        👟 (wannabe) runner & pianist <br />
        🎵 always listening to something
      </p>
      
      <Grid gutter="xl" mt="2rem" align="center">
        <Grid.Col span={7}>
          <h2>education & work</h2>
          <p>
            I'm currently a 3rd year CS student at TAMU, focusing on becoming a better 
            developer, step-by-step. I try to learn something new everyday, and frequently 
            work on personal projects. My current goals mainly revolve around improving the 
            quality of code I write (focusing on reliable & scalable software).
          </p>
        </Grid.Col>
        <Grid.Col span={5}>
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

      <Grid gutter="xl" mt='2rem' align="center">
        <Grid.Col span={5}>
          <div className="about-card">
            <h3>side quests</h3>
            <p>
              🏃‍➡️ run a 10k <br />
              📸 get back into photography <br />
              🍜 learn to make noodles from scratch
            </p>
          </div>
        </Grid.Col>
        <Grid.Col span={7}>
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