import styles from './ProjectCard.module.css'
import { Image, Text, Badge, Button, Group, Stack, Menu } from '@mantine/core';
import { IconWorld, IconBrandGithub, IconChevronDown } from '@tabler/icons-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  websiteUrl?: string;
  imagePosition?: 'left' | 'right';
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  githubUrl,
  websiteUrl,
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
          <p>{description}</p>
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
          
          {websiteUrl ? (
            <Menu shadow="md" width="auto" position="bottom-end">
              <Button.Group className={`social-button ${styles.githubButton}`}>
                <Button
                  variant="light"
                  color='black'
                  size="xs"
                  radius="md"
                  component="a"
                  href={websiteUrl}
                  target="_blank"
                  style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                >
                  View Project
                </Button>
                <Menu.Target>
                  <Button
                    variant="light"
                    color='black'
                    size="xs"
                    radius="md"
                    className={styles.dropdownTrigger}
                    style={{ 
                      borderTopLeftRadius: 0, 
                      borderBottomLeftRadius: 0,
                      paddingLeft: '8px',
                      paddingRight: '8px',
                      minWidth: 'auto'
                    }}
                  >
                    <IconChevronDown size={16} />
                  </Button>
                </Menu.Target>
              </Button.Group>

              <Menu.Dropdown className={styles.menuDropdown}>
                <Menu.Item
                  leftSection={<IconWorld size={16} />}
                  component="a"
                  href={websiteUrl}
                  target="_blank"
                  fz="sm"
                >
                  Website
                </Menu.Item>
                <Menu.Item
                  leftSection={<IconBrandGithub size={16} />}
                  component="a"
                  href={githubUrl}
                  target="_blank"
                  fz="sm"
                >
                  GitHub
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
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
              View Project
            </Button>
          )}
        </div>
      </Stack>
    </div>
  );
}