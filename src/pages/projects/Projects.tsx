import { Stack, Group } from '@mantine/core';
import ProjectCard from '../../components/cards/ProjectCard';
import styles from './Projects.module.css';

// IMPORTANT
// use this: https://mokkify.com/mockups/laptops/85-m1-macbook-pro-mockup
// get img then zoom to 15% in windows photos editor

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  websiteUrl?: string;
  date: string;
  isWip?: boolean;
}

const projects: Project[] = [
  {
    title: 'Canvas2calendar',
    description: 'A web extension enabling students to customize their Canvas calendar imports. Beats default ICS parsing by allowing assignment type & class filtering, color-coding, and integration with Google Tasks. Currently being refactored with plans to roll out to production.',
    image: '/canvas2calendar.png',
    tags: ['React.js', 'Google APIs', 'Express.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/brandonyuanCS/canvas2calendar',
    date: '2025',
    isWip: true
  },
  {
    title: 'periph4all',
    description: "An AI-powered recommendation engine that matches users to gaming mice through conversational preference extraction. Uses semantic embeddings to find the perfect mouse. Features interactive UMAP and graph visualizations.",
    image: '/perip4all.png',
    tags: ['Next.js', 'FastAPI', 'Groq', 'SentenceTransformers'],
    githubUrl: 'https://github.com/brandonyuanCS/periph4all',
    websiteUrl: 'https://periph4all.vercel.app/',
    date: '2025'
  },
  {
    title: 'Malware Classification Model',
    description: 'A LightGBM model trained to classify Windows PE files as benign or malicious. Trained on EMBER 2024 features. Features a Flask-based interface with real time & memory constraints. Also available on Docker Hub.',
    image: '/malware_model.png',
    tags: ['Python', 'Flask', 'LightGBM', 'Docker'],
    githubUrl: 'https://github.com/brandonyuantamu/csce-439-code',
    websiteUrl: 'https://hub.docker.com/repository/docker/brandonyuan/malware-classifier/general',
    date: '2025',
  },
  {
    title: 'Spotify VibeMap',
    description: "An app to analyze and visualize users' Spotify listening habits through a 3D interactive graph. By generating vector embeddings of songs & genres, the app surfaces non-obvious song connections. Navigate through songs, artists, and genres.",
    image: '/spotify_vibe_map.png',
    tags: ['React.js', 'Flask', 'Three.js', 'Spotify API', 'node2vec'],
    githubUrl: 'https://github.com/aggie-coding-club/Spotify-Playlist-Map',
    date: '2024'
  },
  {
    title: 'Red Dead Convolution',
    description: 'Contributed to a convolutional neural network to classify people/objects in the video game Read Dead Redemption 2. Trained models on a custom dataset of in-game screenshots.',
    image: '/red_dead_convolution.png',
    tags: ['PyTorch', 'TensorFlow', 'OpenCV'],
    githubUrl: 'https://github.com/brandonyuanCS/red-dead-convolution',
    date: '2023'
  }
];

function Projects() {
  return (
    <div className={styles.container}>
      <Group className={`${styles.header} animate-fade-in-up`} justify='space-between'>
        <h1 style={{ margin: 0 }}>projects</h1>
      </Group>

      <Stack gap='4rem' mt='4rem'>
        {projects.map((project, index) => (
          <div key={project.title} className={`animate-fade-in-up-delay-${index + 2}`}>
            <ProjectCard
              {...project}
              imagePosition={index % 2 === 0 ? 'left' : 'right'}
            />
          </div>
        ))}
      </Stack>
    </div>
  );
}

export default Projects;