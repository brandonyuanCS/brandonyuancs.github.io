import { Button } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react'

function GitHubButton() {
  return (
    <> 
      <Button variant="filled" 
              color="#000000" 
              size="xs" 
              radius="md" 
              leftSection={<div style={{ 
                                      backgroundColor: 'white', 
                                      borderRadius: '50%', 
                                      padding: '1px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      position: 'relative',
                                    }}>
                                      <IconBrandGithub size={18} 
                                                       color="black" 
                                                       stroke={1.5} 
                                                       style={{ position: 'relative', top: '2px'}}/>
                            </div>}
              component='a'
              target='_blank'
              href='https://github.com/brandonyuanCS'
      > GitHub </Button>
  </>
  );
}

export default GitHubButton