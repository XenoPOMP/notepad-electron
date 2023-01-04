import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import MainPage from './assets/pages/MainPage/MainPage';
import SettingsMain from './assets/pages/Settings/SettingsMain/SettingsMain';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='*' element={<MainPage />} />

        <Route path='/settings'>
          <Route path='main' element={<SettingsMain />} />
        </Route>
      </Routes>
    </Router>
  );
}
