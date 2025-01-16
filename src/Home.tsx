import './Home.css'

import GitHubButton from './components/GitHubButton'
import EmailButton from './components/EmailButton'
import ResumeButton from './components/ResumeButton'
import LinkedInButton from './components/LinkedInButton'

import NwcCard from './components/NwcCard'
import RdcCard from './components/RdcCard'
import SvmCard from './components/SvmCard'

import { Group, Container, Grid, Text, Paper } from '@mantine/core';

function Home() {
  return (
    <>
      {/* Header + Picture*/}
      <Container size="60rem" style={{ marginTop: '10rem' }}>
        
        
        
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'flex-start', 
            justifyContent: 'space-between'
          }}
        >
          <div style={{ width: '35rem' }}>
            <h1 style={{ marginTop: 0, marginBottom: 0 }}>hi, i'm brandon yuan!</h1>

            <ul className="custom-list">
              <li data-emoji="🏫">I'm a CS student @ Texas A&M</li>
              <li data-emoji="🤖">Interested in fullstack development, project management, & data science.</li>
              <li data-emoji="💻">Lover of programming & passionate about learning</li>
              <li data-emoji="💼">And looking for a 2025 summer internship!</li>
            </ul>



            <h2 style={{ marginTop: "2.7rem" }}>
              <Group gap="xs" style={{ marginTop: "-1.5rem" }}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/brandonyuann/">
                  <LinkedInButton />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/brandonyuanCS">
                  <GitHubButton />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="/resume.pdf">
                  <ResumeButton />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:brandonyuan05@gmail.com">
                  <EmailButton />
                </a>
              </Group>
            </h2>
          </div>

          <div style={{ width: '16rem', display: 'flex', justifyContent: 'center' }}>
            <img src="pfp.jpg" alt="My picture" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
          </div>
        </div>
      </Container>

      {/* Current Position */}
      <Container size="60rem" style={{ marginTop: '5rem' }}>
          <h2>I'm currently working as a...</h2>
          <Grid grow gutter="lg">
            <Grid.Col span={6}>
              <Paper radius="lg" bg='rgb(245, 245, 247)' p="lg">
                <Text fw={700} size='lg'>Research Assistant</Text>
                <Text>Training machine learning models to predict workforce absenteeism in construction</Text>
              </Paper>
            </Grid.Col>

            <Grid.Col span={6}>
              <Paper radius="lg" bg='rgb(245, 245, 247)' p="lg">
                <Text fw={700} size='lg'>Project Manager</Text>
                <Text>Developing <i>Spotify VibeMap</i> and coordinating a team of 15 students</Text>
              </Paper>
            </Grid.Col>
          </Grid>
      </Container>


      {/* Projects Section */}
      <div style={{ marginTop: '10rem', backgroundColor: 'rgb(245, 245, 247)', paddingTop: '1rem', paddingBottom: '2rem'}}>
        <Container size='60rem'>

          <h2>Projects</h2>

          <Grid grow gutter="md">

            <Grid.Col span={4}>
              <NwcCard/>
            </Grid.Col>
              
            <Grid.Col span={4}>
              <SvmCard/>
            </Grid.Col>

            <Grid.Col span={4}>
              <RdcCard/>
            </Grid.Col>

          </Grid>

          <Text mt='3rem' ta='center' fw={600}>🌱 indicates work in progress</Text>

        </Container>

      </div>


      {/* Skills Section */}
      <Container size='60rem' style={{marginTop: '15rem'}}>
        <h2>Skills</h2>
        
        <Grid grow h={200}>
          <Grid.Col span={4}>
            <Text fw={600}>Frontend</Text>
            <ul>
              <li>React.js</li>
              <li>HTML & CSS</li>
              <li>TypeScript</li>
            </ul>
          </Grid.Col>

          <Grid.Col span={4}>
            <Text fw={600}>Backend</Text>
            <ul>
              <li>Node.js</li>
              <li>Flask</li>
              <li>PostgreSQL</li>
              <li>SQLite</li>
            </ul>
          </Grid.Col>

          <Grid.Col span={4}>
            <Text fw={600}>DevOps</Text>
            <ul>
              <li>Docker</li>
              <li>AWS Lambda</li>
            </ul>
          </Grid.Col>
        </Grid>

        <Grid grow h={200}>
          <Grid.Col span={4}>
            <Text fw={600}>Data Science</Text>
            <ul>
              <li>PyTorch</li>
              <li>TensorFlow</li>
              <li>Sci-kit</li>
              <li>Convolutional Neural Networks</li>
              <li>Pandas</li>
              <li>Matplotlib</li>
            </ul>
          </Grid.Col>

          <Grid.Col span={4}>
            <Text fw={600}>Other Languages</Text>
            <ul>
              <li>Python</li>
              <li>C++</li>
              <li>Java</li>
              <li>C#</li>
            </ul>
          </Grid.Col>

          <Grid.Col span={4}>
            <Text fw={600}>Other Tools</Text>
            <ul>
              <li>Git</li>
              <li>Data Visualization</li>
              <li>Data Structures</li>
              <li>Project Management</li>
            </ul>
          </Grid.Col>
        </Grid>

      </Container>
    </>
  );
}

export default Home;