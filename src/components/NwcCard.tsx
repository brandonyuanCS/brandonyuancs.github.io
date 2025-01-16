import { Group, Card, Image, Text, Badge, Button, Box } from '@mantine/core';

export default function NwcCard() {
  return (
    <>
      <Card 
        shadow="xl" 
        padding="lg" 
        radius="lg" 
        h="100%" 
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Card.Section>
          <Image
            src="nwc.png"
            alt="Notes with Canvas Image"
            height={160}
          />
        </Card.Section>

        <Box style={{ flex: 1 }}>
          <Group gap={4} mt='xs' mb='xs' wrap="wrap">
            <Badge color="indigo.8" variant="light" size="xs" radius="lg" fw={700}>React.JS</Badge>
            <Badge color="gray.8" variant="light" size="xs" radius="lg" fw={700}>Flask</Badge>
            <Badge color="red.8" variant="light" size="xs" radius="lg" fw={700}>Canvas API</Badge>
            <Badge color="orange.8" variant="light" size="xs" radius="lg" fw={700}>Firebase</Badge>
          </Group>

          <Text fw={700} size='lg'>Notes with Canvas</Text>

          <Text size="sm" c="dimmed" mt='xs'>
            A task management web application, featuring a calendar, taskboard, and notes section. Includes integration
            with Canvas to import events from courses. 
          </Text>
        </Box>

        <Button variant='default' color="white" fullWidth mt="md" radius="lg" component="a" href="https://github.com/aggie-coding-club/notes-with-canvas" target="_blank">
          View Github
        </Button>
      </Card>
    </>
  );
}