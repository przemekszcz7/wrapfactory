/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Realizacje from './components/Realizacje';
import Opinie from './components/Opinie';
import Kontakt from './components/Kontakt';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased overflow-x-hidden">
      {/* Dynamic Sticky Header Navigation */}
      <Navbar />

      {/* Main Sections flow */}
      <main>
        {/* Hero Landing Area */}
        <Hero />

        {/* Dynamic Bento Offer / Services */}
        <Services />

        {/* Completed Projects Showcase with Zoom Gallery Lightbox */}
        <Realizacje />

        {/* Facebook Review Cards */}
        <Opinie />

        {/* Info & Embedded Location Maps */}
        <Kontakt />
      </main>

      {/* Structured Info Footer */}
      <Footer />
    </div>
  );
}
