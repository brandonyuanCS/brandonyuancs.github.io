import { Group, Card, Image, Text, Badge, Button, Box} from '@mantine/core';

export default function RdcCard() {
  return (
    <>
      <Card shadow="xl" padding="lg" radius="lg" h="100%">
        <Card.Section>
        <Image
          src="rdc.jpg"
          alt="Read Dead Convolution Image"
          height={160}
        />
        </Card.Section>

        <Box style={{ flex: 1 }}>
          <Group gap={4} mt='xs' mb='xs' wrap="wrap">
            <Badge color="red.8" variant="light" size="xs" radius="lg" fw={700}>PyTorch</Badge>
            <Badge color="orange.8" variant="light" size="xs" radius="lg" fw={700}>Tensorflow</Badge>
            <Badge color="green.8" variant="light" size="xs" radius="lg" fw={700}>OpenCV</Badge>
          </Group>

          <Text fw={700}  size='lg'>Read Dead Convolution</Text>

          <Text size="sm" mt='xs'>
            Developed a convolutional neural network to detect wildlife/players in the video game <i>Read 
            Dead Redemption 2</i>. Trained the model with custom in-game screenshots.
          </Text>
        </Box>

        <Button variant='default' color="white" fullWidth mt="md" radius="lg" component="a" href="https://github.com/brandonyuanCS/red-dead-convolution" target="_blank">
          View Github
        </Button>
      </Card>
    </>
  );
}