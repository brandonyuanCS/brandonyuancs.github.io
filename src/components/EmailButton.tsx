import { Button } from '@mantine/core';
import { IconMailFilled } from '@tabler/icons-react'

export default function EmailButton() {
  return (
    <> 
      <Button variant="light" 
              color="rgba(0, 0, 0, 1)" 
              size="xs" 
              radius="md" 
              leftSection={<IconMailFilled size={18}/>}
              component='a'
              href='mailto:brandonyuan05@gmail.com'
              target='_blank'
      > Email </Button>
    </>
  );
}

