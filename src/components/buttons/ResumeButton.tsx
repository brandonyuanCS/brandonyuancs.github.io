import { Button } from '@mantine/core';
import { IconFileCertificate } from '@tabler/icons-react'

export default function ResumeButton() {
  return (
    <> 
      <Button variant="light" 
              className="social-button"
              color="rgba(0, 0, 0, 1)" 
              size="xs" 
              radius="md" 
              leftSection={<IconFileCertificate size={18}/>}
              component='a'
              target='_blank'
              href='/resume.pdf'
      >Resume </Button>
    </>
  );
}