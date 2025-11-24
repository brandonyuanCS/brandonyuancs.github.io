import GitHubButton from '../../components/buttons/GitHubButton'
import EmailButton from '../../components/buttons/EmailButton'
import ResumeButton from '../../components/buttons/ResumeButton'
import LinkedInButton from '../../components/buttons/LinkedInButton'
import ExternalLink from '../../components/ExternalLink'
import styles from './Home.module.css';

import { Group } from '@mantine/core';

function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={`${styles.heading} animate-fade-in-up`}>hi, i'm <span className={styles.name}>brandon yuan</span>!</h1>
        <p className="animate-fade-in-up-delay-1">
          I'm a CS student at <ExternalLink href="https://engineering.tamu.edu/cse/index.html">Texas A&M</ExternalLink>{' '}
          who is passionate about creating robust and beautiful software. I specialize in full stack development and have experience in ML, 
          cybersecurity, and design. Currently organizing student-led projects in the <ExternalLink href="https://www.aggiecodingclub.com/">Aggie Coding Club</ExternalLink>{' '}
          and wrapping up my ML research at the <ExternalLink href="https://www.arch.tamu.edu/cosc/">TAMU COSC</ExternalLink>.
          Previously at <ExternalLink href="https://www.digicert.com/">DigiCert</ExternalLink> as a Product Intern.
        </p>
        
        <Group gap="xs" mt='xl' className="animate-fade-in-up-delay-2">
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