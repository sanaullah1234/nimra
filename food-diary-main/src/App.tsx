import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import Cardnav from './components/Cardnav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

// Lazy load components
const Header = React.lazy(() => import('./components/Search'));
const RecipeCard = React.lazy(() => import('./components/RecipeCard'));
const RecipeDetail = React.lazy(() => import('./components/RecipeDetail'));

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        {/* Lazy loaded Header */}
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>
        
        <HeroSection />
        <Cardnav />

        {/* Define Routes for RecipeCard and RecipeDetail */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Home page - RecipeCard listing */}
            <Route path="/" element={<RecipeCard />} />

            {/* Recipe detail page */}
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
