import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import CustomCursor from './components/animations/CustomCursor';
import Preloader from './components/animations/Preloader';
import Home from './pages/Home';
import './styles/globals.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      {isLoading && <Preloader onLoadingComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <>
          <CustomCursor />
          <Layout>
            <Home />
          </Layout>
        </>
      )}
    </Router>
  );
}

export default App;