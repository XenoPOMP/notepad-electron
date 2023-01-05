import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import MainPage from './assets/pages/MainPage/MainPage';
import SettingsMain from './assets/pages/Settings/SettingsMain/SettingsMain';
import ThemeSettings from './assets/pages/Settings/ThemeSettings/ThemeSettings';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='*' element={<MainPage />} />

        <Route path='/settings'>
          <Route path='main' element={<SettingsMain />} />
          <Route path='theme' element={<ThemeSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}
