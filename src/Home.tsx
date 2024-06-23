import { Link } from 'react-router-dom';
const Home = () => (
  <div>
    <h1>Welcome to the Homepage</h1>
    <nav>
      <ul>
        <li><Link to="/auth">Login</Link></li>
        <li><Link to="/todos">Todos</Link></li>
      </ul>
    </nav>
  </div>
);

export default Home;
