import { Stack, Group} from '@mantine/core';
import ProjectCard from '../../components/cards/ProjectCard';
import styles from './Projects.module.css';

// IMPORTANT
// use this: https://mokkify.com/mockups/laptops/85-m1-macbook-pro-mockup
// get img then zoom to 15% in windows photos editor

function Projects() {
  return(
    <div className={styles.container}>
      <Group className={`${styles.header} animate-fade-in-up`} justify='space-between'>
        <h1 style={{ margin: 0 }}>projects</h1>
        <p>* work in progress</p>
      </Group>

      <Stack gap='4rem' mt='4rem'>
        <div className="animate-fade-in-up-delay-2">
          <ProjectCard 
            title='Canvas2calendar *'
            description='A web extension enabling students to customize their Canvas calendar imports. Beats
                         default ICS parsing by allowing assignment type & class filtering, color-coding, 
                         and integration with Google Tasks. Currently being refactored with plans to roll out
                         to production.'
            image='/canvas2calendar.png'
            tags={['React.js', 'Google APIs', 'Express.js', 'PostgreSQL']}
            githubUrl='https://github.com/brandonyuanCS/canvas2calendar'
            imagePosition='left'
            date='2025'
          />
        </div>
        <div className="animate-fade-in-up-delay-3">
          <ProjectCard
            title='periph4all'
            description="An AI-powered recommendation engine that matches users to gaming mice through conversational
                         preference extraction. Uses semantic embeddings to find the perfect mouse. 
                         Features interactive UMAP and graph visualizations."
            image='/perip4all.png'
            tags={['Next.js', 'FastAPI', 'Groq', 'SentenceTransformers']}
            githubUrl='https://github.com/brandonyuanCS/periph4all'
            websiteUrl='https://periph4all.vercel.app/'
            imagePosition='right'
            date='2025'
          />
        </div>
        <div className="animate-fade-in-up-delay-4">
          <ProjectCard
            title='Spotify VibeMap *'
            description="An app to analyze and visualize users' Spotify listening habits through a 3D interactive
                         graph. By generating vector embeddings of songs & genres, the app surfaces non-obvious 
                         song connections. Navigate through songs, artists, and genres."
            image='/spotify_vibe_map.png'
            tags={['React.js', 'Flask', 'Three.js', 'Spotify API', 'node2vec']}
            githubUrl='https://github.com/aggie-coding-club/Spotify-Playlist-Map'
            imagePosition='left'
            date='2024'
          />
        </div>
        <div className="animate-fade-in-up-delay-5">
          <ProjectCard 
            title='Red Dead Convolution'
            description='Contributed to a convolutional neural network to classify people/objects in the video game
                         Read Dead Redemption 2. Trained models on a custom dataset of in-game screenshots.'
            image='/red_dead_convolution.png'
            tags={['PyTorch', 'TensorFlow', 'OpenCV']}
            githubUrl='https://github.com/brandonyuanCS/red-dead-convolution'
            imagePosition='right'
            date='2023'
          />
        </div>
      </Stack>
    </div>
  );
}

export default Projects