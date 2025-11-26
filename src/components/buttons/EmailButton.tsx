import { useState, useEffect } from 'react';
import { Button } from '@mantine/core';
import { IconMailFilled } from '@tabler/icons-react'

export default function EmailButton() {
  const [copied, setCopied] = useState(false);
  const email = 'brandonyuan05@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <> 
      <Button variant="light" 
              className="social-button"
              color="rgba(0, 0, 0, 1)" 
              size="xs" 
              radius="md" 
              leftSection={copied ? null : <IconMailFilled size={18}/>}
              onClick={handleCopy}
              style={{ width: '85px' }}
      > <span key={copied ? 'copied' : 'email'} className="email-button-text">{copied ? 'Copied!' : 'Email'}</span> </Button>
    </>
  );
}

