import { TextInput, Textarea, Button, Group, Grid} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const testNotification = () => {
  //   notifications.show({
  //     title: 'Test notification!',
  //     message: 'If you can see this, notifications are working!',
  //     color: 'blue',
  //   });
  // };

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: {
      name: (value: string) => (value.length < 2 ? 'Name must be at least 2 characters' : null),
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: (value: string) => (value.length < 10 ? 'Message must be at least 10 characters' : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xdkwzqgo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        notifications.show({
          title: 'Message sent!',
          message: "Thanks for reaching out. I'll get back to you soon!",
          color: 'green',
          autoClose: 4000,
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'Something went wrong. Please try again or email me directly.',
        color: 'red',
        autoClose: 7000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <h1 style={{ margin: 0 }}>contact</h1>

      <Grid mt="2rem" gutter="xl">
        <Grid.Col span={5}>
          <p style={{ marginTop: 0 }}>
            Have any questions for me? Reach out at{' '}
            <a className='tag-link' href="mailto:brandonyuan05@gmail.com">
              brandonyuan05@gmail.com⤴
            </a>
            {' '}or DM me on{' '}
            <a className='tag-link' href="https://www.linkedin.com/in/brandonyuann/" target='_blank'>
              LinkedIn⤴
            </a>
            . You can also send me a message by filling out the form:
          </p>
        </Grid.Col>

        <Grid.Col span={7}>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Name"
              placeholder="Your name"
              required
              mb="md"
              {...form.getInputProps('name')}
            />

            <TextInput
              label="Email"
              placeholder="your.email@example.com"
              required
              mb="md"
              {...form.getInputProps('email')}
            />

            <Textarea
              label="Message"
              placeholder="Your message..."
              required
              minRows={6}
              mb="lg"
              {...form.getInputProps('message')}
            />

            <Group justify="flex-end">
              <Button
                className='social-button'
                type="submit"
                loading={isSubmitting}
                variant="filled"
                color="black"
                radius="md"
              >
                Send Message
              </Button>
            </Group>
          </form>
        </Grid.Col>
      </Grid>
    </div>
  );
}