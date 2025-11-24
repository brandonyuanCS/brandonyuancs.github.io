import { TextInput, Textarea, Button, Group, Grid} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import ExternalLink from '../../components/ExternalLink';
import styles from './Contact.module.css';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <div style={{ overflow: 'hidden', padding: '0 1rem' }}>
      <h1 className="animate-fade-in-up" style={{ margin: 0 }}>contact</h1>

      <Grid mt="2rem" gutter="xl" className="animate-fade-in-up-delay-1">
        <Grid.Col span={{ base: 12, sm: 5 }}>
          <p style={{ marginTop: 0 }}>
            Have any questions for me? Reach out at{' '}
            <ExternalLink href="mailto:brandonyuan05@gmail.com" target="_self">
              brandonyuan05@gmail.com
            </ExternalLink>
            {' '}or DM me on{' '}
            <ExternalLink href="https://www.linkedin.com/in/brandonyuann/">
              LinkedIn
            </ExternalLink>
            . You can also send me a message by filling out the form:
          </p>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 7 }}>
          <form onSubmit={form.onSubmit(handleSubmit)} className={styles.contactForm}>
            <TextInput
              label="Name"
              placeholder="Your name"
              required
              variant='filled'
              mb="md"
              {...form.getInputProps('name')}
            />

            <div className="animate-fade-in-up-delay-2">
              <TextInput
                label="Email"
                placeholder="your.email@example.com"
                required
                variant='filled'
                mb="md"
                {...form.getInputProps('email')}
              />
            </div>

            <div className="animate-fade-in-up-delay-3">
              <Textarea
                label="Message"
                placeholder="Your message..."
                required
                variant='filled'
                minRows={6}
                mb="lg"
                {...form.getInputProps('message')}
              />
            </div>

            <Group justify="flex-end" className="animate-fade-in-up-delay-4">
              <Button
                className='contact-submit-button'
                type="submit"
                loading={isSubmitting}
                variant="filled"
                color="black"
                radius="md"
                size="xs"
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