import { IconArrowUpRight } from '@tabler/icons-react';
import styles from './ExternalLink.module.css';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}

export default function ExternalLink({ 
  href, 
  children, 
  className = '', 
  target = '_blank' 
}: ExternalLinkProps) {
  return (
    <a 
      href={href} 
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`tag-link ${styles.externalLink} ${className}`}
    >
      {children}
      <IconArrowUpRight className={styles.icon} />
    </a>
  );
}

