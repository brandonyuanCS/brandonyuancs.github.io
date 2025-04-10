import './Home.css'

import { useState } from 'react'

import GitHubButton from './components/GitHubButton'
import EmailButton from './components/EmailButton'
import ResumeButton from './components/ResumeButton'
import LinkedInButton from './components/LinkedInButton'

import NwcCard from './components/NwcCard'
import RdcCard from './components/RdcCard'
import SvmCard from './components/SvmCard'

import { Group, Container, Grid, Text, Paper, List, Button } from '@mantine/core';

function Home() {
  const [expandSkills, setExpandSkills] = useState(false);
  const toggleExpandSkills = () => setExpandSkills(expandSkills => !expandSkills)

  return (
    <>
      {/* Header + Picture maybe*/}
      <Container size="60rem" mt='10rem'>
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'flex-start', 
            justifyContent: 'space-between'
          }}
        >
          <div style={{ width: '35rem' }}>
            <h1 style={{ marginTop: 0, marginBottom: 0}}>hi, i'm brandon yuan!</h1>

            <p>
              I'm a CS student @
              <a className='link' href="https://engineering.tamu.edu/cse/index.html" target='_blank'>Texas A&M</a>
              &nbsp;with a passion for full stack development, design, and data analysis. 
              Aspiring software engineer - and lover of basketball, classical piano, cooking, and cats.
              This summer, I'll be working @
              <a className='link' href="https://www.digicert.com/" target='_blank'>DigiCert</a>
              &nbsp;as a Product Innovation Intern.
            </p>

            <Group gap="xs" >
              <LinkedInButton/>
              <GitHubButton/>
              <ResumeButton/>
              <EmailButton/>
            </Group>
            
          </div>

          {/* <div style={{ width: '16rem', display: 'flex', justifyContent: 'center' }}>
            <img src="pfp.jpg" alt="My picture" style={{ width: '100%', height: '100%', borderRadius: '5%' }} />
          </div> */}
        </div>
      </Container>

      {/* Currently + Future */}
      <Container size="60rem" mt='5rem'>
          <h2>Currently, I'm a...</h2>
          <Grid grow gutter="lg" mb='5rem'>
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
      <Container size="60rem" mt='15rem'>
        <Group justify='space-between'>
          <h2>Skills</h2>
          <Button onClick={toggleExpandSkills} radius='lg' variant='default' color='black'>
            {expandSkills ? 'Collapse' : 'Show All'}
          </Button>
        </Group>

        {expandSkills ? (
          <>
            <Paper bg='rgb(245, 245, 247)' p='lg' radius="lg"  mb={20}>
              <Text fw={600} size="lg">Frontend</Text>
              <List>
                <List.Item>React.js</List.Item>
                <List.Item>HTML & CSS</List.Item>
                <List.Item>TypeScript</List.Item>
                <List.Item>Three.js</List.Item>
              </List>
            </Paper>
          
            <Paper bg='rgb(245, 245, 247)' p='lg' radius="lg"  mb={20}>
              <Text fw={600} size="lg">Backend</Text>
              <List>
                <List.Item>Node.js</List.Item>
                <List.Item>Flask</List.Item>
                <List.Item>PostgreSQL</List.Item>
                <List.Item>SQLite</List.Item>
              </List>
            </Paper>
          
            <Paper bg='rgb(245, 245, 247)' p='lg' radius="lg"  mb={20}>
              <Text fw={600} size="lg">Data Science</Text>
              <List>
                <List.Item>PyTorch</List.Item>
                <List.Item>TensorFlow</List.Item>
                <List.Item>Sci-kit</List.Item>
                <List.Item>CNNs</List.Item>
                <List.Item>Pandas</List.Item>
                <List.Item>Matplotlib</List.Item>
              </List>
            </Paper>
          
            <Paper bg='rgb(245, 245, 247)' p='lg' radius="lg"  mb={20}>
              <Text fw={600} size="lg">Other Languages</Text>
              <List>
                <List.Item>Python</List.Item>
                <List.Item>C++</List.Item>
                <List.Item>Java</List.Item>
                <List.Item>C#</List.Item>
              </List>
            </Paper>
          
            <Paper bg='rgb(245, 245, 247)' p='lg' radius="lg"  mb={20}>
              <Text fw={600} size="lg">Other Tools</Text>
              <List>
                <List.Item>Git</List.Item>
                <List.Item>Agile</List.Item>
                <List.Item>Docker</List.Item>
              </List>
            </Paper>
          </>
        ) : (
          <>
            <Paper bg='rgb(245, 245, 247)' p='lg' radius="lg"  mb={20}>
              <Text>
                I enjoy building interactive and data-driven applications using tools like <b>React</b>, <b>Flask</b>
                , <b>PyTorch</b>, and <b>PostgreSQL</b>. My skills span full-stack development, backend APIs, machine 
                learning models, 3D visualization, and project management. I'm always trying to grow - here's some of the stuff 
                I'm currently learning: 
              </Text>

              <List mt='1rem'>
                <List.Item><b>Three.js</b></List.Item>
                <List.Item><b>PostgreSQL</b></List.Item>
                <List.Item><b>Express.js</b></List.Item>
                <List.Item><b>Docker</b></List.Item>
              </List>
            </Paper>
          </>
        )}
      </Container>

      {/* Footer */}
      <Container size='60rem' mt='15rem' style={{ justifyContent: 'center', display: 'flex'}}>
        <Text size='sm' mb='xl' mt='xl' c='#444444'>made by brandon @ 3:00 AM </Text>
      </Container>
    </>
  );
}

export default Home;