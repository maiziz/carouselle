import React from 'react';
import { Carousel } from './components/Carousel/Carousel';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            ProductName
          </h1>
        </div>
      </header>
      
      <main>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Carousel />
        </div>
      </main>
    </div>
  );
}

export default App;