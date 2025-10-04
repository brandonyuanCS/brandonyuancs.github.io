import GitHubButton from '../components/buttons/GitHubButton'
import EmailButton from '../components/buttons/EmailButton'
import ResumeButton from '../components/buttons/ResumeButton'
import LinkedInButton from '../components/buttons/LinkedInButton'

import { Group } from '@mantine/core';

function Home() {
  return (
    <>
      <div style={{ width: '35rem' }}>
        <h1>hi, i'm brandon yuan!</h1>
        <p>
          I'm a CS student at <a className='tag-link' href="https://engineering.tamu.edu/cse/index.html" target='_blank'>Texas A&M⤴</a>{' '}
          who is passionate about creating reliable and beautiful software. I specialize in full stack development and dabble in machine learning, 
          cybersecurity, and design. Currently organizing student-led projects in the <a className='tag-link' href="https://www.aggiecodingclub.com/" target='_blank'>Aggie Coding Club⤴</a>{' '}
          and wrapping up my ML research at the <a className='tag-link' href="https://www.arch.tamu.edu/cosc/" target='_blank'>TAMU COSC⤴</a>.
          Previously at <a className='tag-link' href="https://www.digicert.com/" target='_blank'>DigiCert⤴</a> as a Product Intern.

        </p>
        {/* Note: our <a> highlights are rgba 0.06 and 0.10 while Mantine's are 0.10 and 0.12 respectively*/}
        <Group gap="xs" mt='xl'>
          <LinkedInButton/>
          <GitHubButton/>
          <ResumeButton/>
          <EmailButton/>
        </Group>
      </div>
    </>
  );
}

export default Home;