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
          who loves building cool things. Primarily experienced in full stack development and infrastructure.
          Interested in security, ML, and design.
        </p>
        <p className="animate-fade-in-up-delay-2">
          Last summer, I worked at <ExternalLink href="https://www.digicert.com/">DigiCert</ExternalLink> building image signing pipelines. 
          Currently, I'm building <ExternalLink href="https://github.com/brandonyuanCS/canvas2calendar">class2calendar</ExternalLink> and organizing student-led 
          projects in the <ExternalLink href="https://www.aggiecodingclub.com/">Aggie Coding Club</ExternalLink>.
          {/* This summer, I'll be joining <ExternalLink href="https://www.sailpoint.com/">SailPoint</ExternalLink> on the DevOps and cloud infra team. */}
        </p>
        <Group gap="xs" mt='1.4rem' className="animate-fade-in-up-delay-3">
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