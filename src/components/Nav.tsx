import { Outlet, Link, useLocation } from 'react-router-dom';
import { Container, Group, Text } from '@mantine/core';

// Logo component
function NavLogo() {
  const location = useLocation();
  const isHome = location.pathname !== '/';

  return (
    <Link 
      to="/" 
      className="nav-logo"
      style={{ 
        fontSize: '1.25rem', 
        fontWeight: 700,
        width: '40px',
        height: '40px',
        borderRadius: '12px',
        backgroundColor: isHome ? 'rgb(0, 0, 0, 0.08)': 'rgb(0, 0, 0, 0.12)',
        // color: isHome ? '#fff' : '#000',
        // border: isHome ? 'none' : '2px solid #000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s ease'
      }}
    >
      by
    </Link>
  );
}

// Bolded link component
interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

function NavLink({ to, children }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to}
      style={{ 
        fontWeight: isActive ? 900 : 500
      }}
    >
      {children}
    </Link>
  );
}

// Actual Nav.tsx component
function Nav() {
  return (
    <Container size="55rem" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      <div style={{ flexShrink: 0, marginBottom: '5rem', padding: '0 1rem'}}>
        <Group justify="space-between" mt="2rem">
          <NavLogo />
          <Group gap="lg">
            <NavLink to="/projects">projects</NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/contact">contact</NavLink>
          </Group>
        </Group>
      </div>
      
      <div style={{ flex: 1 }}>
        <Outlet /> 
      </div>
      
      <div style={{ flexShrink: 0, padding: '0 1rem' }}>
        <div style={{ justifyContent: 'center', display: 'flex', marginTop: '5rem' }}>
          <Text size='xs' mb='md' c='#444444'>made by brandon @ 3:00 AM </Text>
        </div>
      </div>
    </Container>
  );
}

export default Nav