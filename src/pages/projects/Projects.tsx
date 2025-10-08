import { Stack, Group, Text } from '@mantine/core';
import ProjectCard from '../../components/cards/ProjectCard';

// use this: https://mokkify.com/mockups/laptops/85-m1-macbook-pro-mockup
// get img then zoom to 15% in windows photos editor

function Projects() {
  return(
    <>
      <Group justify='space-between' align='flex-start' style={{ padding: '0 1rem' }}>
        <h1 style={{ margin: 0 }}>projects</h1>
        <Stack gap={4} style={{ fontSize: '0.875rem' }}>
          <Text size="sm" >🌱 work in progress</Text>
          <Text size="sm" >🛠️ planned updates</Text>
          <Text size="sm" >🏆 <a className='tag-link' href="https://www.aggiecodingclub.com/" target='_blank'>ACC⤴</a> award winner</Text>
        </Stack>
      </Group>

      <Stack gap='4rem' mt='4rem' >
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
        <ProjectCard 
          title='Red Dead Convolution'
          description='Contributed to a convolutional neural network to classify people/objects in the video game
                       Read Dead Redemption 2. Trained models on a custom dataset of in-game screenshots.'
          image='/red_dead_convolution.png'
          tags={['PyTorch', 'TensorFlow', 'OpenCV']}
          githubUrl='https://github.com/brandonyuanCS/red-dead-convolution'
          imagePosition='left'
        />
      </Stack>
    </>
  );
}

export default Projects