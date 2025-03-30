import { Button } from '@mantine/core';
import { IconBrandLinkedinFilled } from '@tabler/icons-react'

export default function LinkedInButton() {
  return (
    <> 
      <Button variant='filled' 
              color="#0052DE" 
              size="xs" 
              radius="md" 
              leftSection={<IconBrandLinkedinFilled size={20}/>} 
              component='a'
              target='_blank'
              href='https://www.linkedin.com/in/brandonyuann/'
      >LinkedIn</Button>
    </>
  );
}