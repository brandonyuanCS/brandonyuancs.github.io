import styles from './ProjectCard.module.css'
import { Image, Text, Badge, Button, Group, Stack } from '@mantine/core';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  imagePosition?: 'left' | 'right';
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  githubUrl,
  imagePosition = 'left' 
}: ProjectCardProps) {
  return (
    <div 
      className={styles.card}
      style={{ flexDirection: imagePosition === 'left' ? 'row' : 'row-reverse' }}
    >
      <div className={styles.imageSection}>
        <Image
          src={image}
          alt={`${title} preview`}
          height="100%"
          fit="cover"
          radius="md"
        />
      </div>

      <Stack 
        justify="space-between" 
        className={`${styles.content} ${imagePosition === 'left' ? styles.contentLeft : styles.contentRight}`}
      >
        <div>
          <Text fw={700} size="xl" mb="xs">{title}</Text>
          <Text size="md" fw={500}>{description}</Text>
        </div>

        <div className={styles.bottomSection}>
          <Group gap="xs" className={styles.tagsGroup}>
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                tt='none'
                variant="outline" 
                color="black" 
                size="lg" 
                radius="sm"
              >
                {tag}
              </Badge>
            ))}
          </Group>
          
          <Button 
            variant="light"
            color='black'
            className={`social-button ${styles.githubButton}`}
            size="xs" 
            radius="md"
            component="a"
            href={githubUrl}
            target="_blank"
          >
            View on GitHub
          </Button>
        </div>
      </Stack>
    </div>
  );
}