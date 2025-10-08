import { Stack, Group, Text } from '@mantine/core';
import ProjectCard from '../../components/cards/ProjectCard';
import styles from './Projects.module.css';

function Projects() {
  return(
    <>
      <Group className={ styles.header } justify='space-between' align='flex-start'>
        <h1 style={{ margin: 0 }}>projects</h1>
        <Stack gap={4} className={styles.legend} style={{ fontSize: '0.875rem' }}>
          <Text size="sm" fw='500'>🌱 work in progress</Text>
          <Text size="sm" fw='500'>🛠️ planned updates</Text>
          <Text size="sm" fw='500'>🏆 <a className='tag-link' href="https://www.aggiecodingclub.com/" target='_blank'>ACC⤴</a> award winner</Text>
        </Stack>
      </Group>

      <Stack gap='4rem' mt='4rem' className={styles.projectsContainer}>
        <div className={styles.projectCard}>
          <ProjectCard 
            title='Canvas2calendar 🏆 🌱'
            description='A web extension enabling students to customize their Canvas calendar imports. Beats
                         default ICS parsing by allowing assignment type & class filtering, color-coding, 
                         and integration with Google Tasks. Currently being refactored with plans to roll out
                         to production.'
            image='/notes_with_canvas.png'
            tags={['React.js', 'Google Cloud APIs', 'Express.js', 'PostgreSQL']}
            githubUrl='https://github.com/brandonyuanCS/canvas2calendar'
            imagePosition='left'
          />
        </div>
        <div className={styles.projectCard}>
          <ProjectCard
            title='Spotify VibeMap 🛠️'
            description="An app to analyze and visualize users' Spotify listening habits through a 3D interactive
                         graph. By generating vector embeddings of songs & genres, the app surfaces non-obvious 
                         song connections. Navigate through songs, artists, and genres."
            image='/spotify_vibe_map.png'
            tags={['React.js', 'Flask', 'Three.js', 'Spotify API', 'node2vec']}
            githubUrl='https://github.com/aggie-coding-club/Spotify-Playlist-Map'
            imagePosition='right'
          />
        </div>
        <div className={styles.projectCard}>
          <ProjectCard 
            title='Red Dead Convolution'
            description='Contributed to a convolutional neural network to classify people/objects in the video game
                         Read Dead Redemption 2. Trained models on a custom dataset of in-game screenshots.'
            image='/red_dead_convolution.png'
            tags={['PyTorch', 'TensorFlow', 'OpenCV']}
            githubUrl='https://github.com/brandonyuanCS/red-dead-convolution'
            imagePosition='left'
          />
        </div>
      </Stack>
    </>
  );
}

export default Projects