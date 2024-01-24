import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Todo from './pages/Todo.jsx';
import Audio from './pages/Audio.jsx';
import Calendar from './pages/Comment.jsx';
import Location from './pages/Location.jsx';
import MindGames from './pages/MindGames.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/location" element={<Location />} />
          <Route path="/mindgames" element={<MindGames />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;