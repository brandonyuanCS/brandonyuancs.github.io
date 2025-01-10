import './Home.css'

import GitHubButton from './components/GitHubButton'
import EmailButton from './components/EmailButton'
import ResumeButton from './components/ResumeButton'
import LinkedInButton from './components/LinkedInButton'

import NwcCard from './components/NwcCard'
import RdcCard from './components/RdcCard'
import SvmCard from './components/SvmCard'

import { Group, Container, Grid, Text } from '@mantine/core';

function Home() {
  return (
    <>
      <Container size="60rem" style={{ marginTop: '15rem' }}>
        
        
        {/* Header and Picture Section */}
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
        

      {/* Projects Section */}
    <div style={{ marginTop: '15rem', backgroundColor: 'rgb(245, 245, 247)', paddingTop: '1rem', paddingBottom: '2rem'}}>
      <Container size='60rem'>

        <h2>Projects</h2>

        <Grid grow>

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
    </Container>
  </>
  );
}

export default Home;