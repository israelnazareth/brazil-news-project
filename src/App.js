import { useState } from 'react';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import MyContext from './context/MyContext';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  const [articles, setArticles] = useState([])

  const context = { articles, setArticles }

  return (
    <MyContext.Provider value={context}>
      <div className="App">
        <Header />
        <MainPage />
        <Footer />
      </div>
    </MyContext.Provider>
  );
}
