
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './Auth';
import NavBar from './components/NavBar';
import Home from './Home';
import TodoList from './TodoList';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/todos" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
