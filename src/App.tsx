import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './Auth';
import Home from './Home';
import TodoList from './TodoList';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/todos" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
