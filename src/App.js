import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Blog from './pages/Blog';

import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import ProductList from './components/Products/ProductList';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/custom.css';
 

function App() {
  return (
    <Router>

      <AuthProvider>
        <CartProvider>
          <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-grow-1 container my-4">
              <Routes>
                <Route path="/" element={<Navigate to="/blog" replace />} />
                <Route path="/blog" element={<Blog />} />
  
                <Route path="/" element={<ProductList />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
