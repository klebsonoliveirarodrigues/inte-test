import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Template1 from '../components/Template1';
import Template2 from '../components/Template2';

export default function CriadorDeSites() {
  const [selectedTemplate, setSelectedTemplate] = useState<React.ReactNode | null>(null);

  const handleSelectTemplate = (template: React.ReactNode) => {
    setSelectedTemplate(template);
  };

  return (
    <div>
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Criador de Sites</h1>
        <p>Escolha um template para começar:</p>
        <div className="flex space-x-4">
          <button onClick={() => handleSelectTemplate(<Template1 />)} className="bg-blue-500 text-white p-2 rounded">
            Template 1
          </button>
          <button onClick={() => handleSelectTemplate(<Template2 />)} className="bg-green-500 text-white p-2 rounded">
            Template 2
          </button>
        </div>
        <div className="mt-4">
          {selectedTemplate && selectedTemplate}
        </div>
      </div>
      <Footer />
    </div>
  );
}