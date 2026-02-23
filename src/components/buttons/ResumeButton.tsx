import { Button } from '@mantine/core';
import { IconFile } from '@tabler/icons-react'

export default function ResumeButton() {
  return (
    <> 
      <Button variant="light" 
              className="social-button"
              color="rgba(0, 0, 0, 1)" 
              size="xs" 
              radius="md" 
              leftSection={<IconFile size={18}/>}
              component='a'
              target='_blank'
              href='/resume.pdf'
      >Resume </Button>
    </>
  );
}