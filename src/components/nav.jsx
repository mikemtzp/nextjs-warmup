/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';
// This is a javascript pragma thta tells babel that we want to compile JSX code
// with the one of Theme Ui 'sx' not React 'jsx'

const Nav = () => (
  <header
    sx={{
      height: '60px',
      width: '100vw',
      bg: 'primary',
      borderBottom: '1px solid',
      borderColor: 'primary',
    }}
  >
    <nav
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        variant: 'containers.page',
        height: '100%',
      }}
    >
      <Link href='/' sx={{ fontWeight: 'bold', fontSize: 4, cursor: 'pointer' }}>
        Note App
      </Link>

      <Link href='/notes' sx={{ color: 'text', fontSize: 3, cursor: 'pointer' }}>
        notes
      </Link>
    </nav>
  </header>
);

export default Nav;
