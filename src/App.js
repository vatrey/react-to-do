import './App.css';
import TaskContainer from './components/TaskContainer';
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/> 
        <Route path="/to-do" element={<TaskContainer/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
