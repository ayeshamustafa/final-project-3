import Link from 'next/link';

const Header = ({ user, onLogout }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href={`/user/${user.id}`}>My Lists</Link>
              </li>
              <li>
                <button onClick={onLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
