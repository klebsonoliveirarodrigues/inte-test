// Importamos React e useState para gerenciar o estado do texto
import React, { useState } from "react";

// Função principal da página
const CriadorDeSites = () => {
  // Usamos o useState para armazenar o texto que o usuário digitar
  const [text, setText] = useState("Texto inicial");

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Título da página */}
      <h1 className="text-3xl font-bold mb-4">Criador de Sites</h1>

      {/* Campo de entrada para editar o texto */}
      <input
        type="text"
        value={text} // O valor do campo é controlado pelo estado "text"
        onChange={(e) => setText(e.target.value)} // Atualiza o estado quando o usuário digita
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Digite seu texto aqui..."
      />

      {/* Prévia do texto editado */}
      <div className="p-4 bg-white border border-gray-200 rounded shadow-md">
        <h2 className="text-xl font-semibold">Prévia:</h2>
        <p>{text}</p> {/* Exibe o texto atualizado */}
      </div>
    </div>
  );
};

// Exportamos a página para que o Next.js possa usá-la
export default CriadorDeSites;
