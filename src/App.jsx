import React from 'react';
import Navbar from './pages/Navbar';
import HomePage from './pages/home/Home';
import Footer from './sections/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './footer sections/PrivacyPolicy';
import TermsAndConditions from './footer sections/TermsAndConditions';
import ReturnRefundsPolicy from './footer sections/RefundandReturns';
import FAQ from './footer sections/Faqs';
import About from './pages/About';
import ContactUs from './pages/Contact';
import Membership from './pages/Membership';
import ProductsPage from './pages/Products';
import ServiceProvide from './pages/service/ServiceProvide';
import ComputerSetupPage from './pages/service/ComputerSetupPage';
import PrinterSetupPage from './pages/service/PrinterSetupPage';
import ComputerFormPage from './pages/service/ComputerFormPage';
import PrinterFormPage from './pages/service/PrinterFormPage';
import Disclaimer from './footer sections/Disclaimer';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service" element={<ServiceProvide />} />
          <Route path="/computersetup" element={<ComputerSetupPage />} />
          <Route path="/printersetup" element={<PrinterSetupPage />} />
          <Route path="/Computeradskuform" element={<ComputerFormPage />} />
          <Route path="/printerformPage" element={<PrinterFormPage />} />
          {/* -------------------------------- */}
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/refund&return" element={<ReturnRefundsPolicy />} />
          <Route path="/t&c" element={<TermsAndConditions />} />
          <Route path="/faqs" element={<FAQ />} />
        </Routes>

        {/* 
       
       

        
       */}
        <Footer />
      </Router>
    </>
  );
};

export default App;
