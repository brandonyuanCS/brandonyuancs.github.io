import { Group, Card, Image, Text, Badge, Button, Box} from '@mantine/core';

export default function SvmCard() {
  return (
    <>
      <Card shadow="xl" padding="lg" radius="lg" h="100%">
        <Card.Section>
        <Image
          src="svm.png"
          alt="Spotify VibeMap Image"
          height={160}
        />
        </Card.Section>

        <Box style={{ flex: 1 }}>
          <Group gap={4} mt='xs' mb='xs' wrap="wrap">
            <Badge color="indigo.8" variant="light" size="xs" radius="lg" fw={700}>React.js</Badge>
            <Badge color="green.8" variant="light" size="xs" radius="lg" fw={700}>Spotify API</Badge>
            <Badge color="blue.8" variant="light" size="xs" radius="lg" fw={700}>PostgreSQL</Badge>
          </Group>

          <Text fw={700} size='lg'>Spotify VibeMap 🌱</Text>

          <Text size="sm" c="dimmed" mt='xs'>
            An app that vectorizes song data to provide users with unique insights 
            into their music tastes. Uniquely visualizes listening patterns in a graph-like interface.
          </Text>
        </Box>

        <Button variant='default' color="white" fullWidth mt="md" radius="lg" component="a" href="https://github.com/aggie-coding-club/Spotify-Playlist-Map" target="_blank">
          View Github
        </Button>
      </Card>
    </>
  );
}