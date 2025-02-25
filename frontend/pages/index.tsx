import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Inte!</h1>
      <p className="mb-4">Aqui você pode criar e gerenciar seus sites de forma fácil e rápida.</p>
      <Link href="/criador-de-sites" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Acessar Criador de Sites
      </Link>
    </div>
  );
};

export default Home;