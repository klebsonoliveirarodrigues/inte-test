// Importamos React e useState para gerenciar estados
import React, { useState } from "react";

// Função principal do Construtor de Sites
const CriadorDeSites = () => {
  // Estado para o texto editável
  const [text, setText] = useState("Clique para editar");
  // Estado para o projeto selecionado (simulando abas)
  const [activeTab, setActiveTab] = useState("Projeto 1");
  // Estado para o objeto selecionado no canvas
  const [selectedObject, setSelectedObject] = useState<string | null>(null);

  // Função para simular a seleção de um objeto no canvas
  const handleObjectSelect = (object: string) => {
    setSelectedObject(object);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* 1. Menu no topo */}
      <div className="bg-gray-800 text-white p-2 flex justify-between items-center">
        <div className="flex space-x-4">
          <button className="hover:bg-gray-600 p-1 rounded">Arquivo</button>
          <button className="hover:bg-gray-600 p-1 rounded">Editar</button>
          <button className="hover:bg-gray-600 p-1 rounded">Exportar</button>
        </div>
        <div>
          <span>Construtor de Sites</span>
        </div>
      </div>

      {/* 2. Toolbar abaixo do menu */}
      <div className="bg-gray-200 p-2 flex space-x-2 border-b">
        <button className="p-2 bg-blue-500 text-white rounded">Texto</button>
        <button className="p-2 bg-blue-500 text-white rounded">Imagem</button>
        <button className="p-2 bg-blue-500 text-white rounded">Forma</button>
      </div>

      {/* Container principal com layout lateral */}
      <div className="flex flex-1 overflow-hidden">
        {/* 3. Painel esquerdo (Assets e File) */}
        <div className="w-64 bg-white border-r p-4 flex flex-col">
          <h2 className="text-lg font-bold mb-2">Assets</h2>
          <ul className="mb-4">
            <li className="p-1 hover:bg-gray-100 cursor-pointer">Imagem 1</li>
            <li className="p-1 hover:bg-gray-100 cursor-pointer">Ícone 1</li>
          </ul>
          <h2 className="text-lg font-bold mb-2">File</h2>
          <ul>
            <li className="p-1 hover:bg-gray-100 cursor-pointer">Página 1</li>
            <li className="p-1 hover:bg-gray-100 cursor-pointer">Página 2</li>
          </ul>
        </div>

        {/* 4. Área central (Abas e Canvas) */}
        <div className="flex-1 flex flex-col">
          {/* Abas dos projetos */}
          <div className="bg-gray-200 p-2 flex space-x-2 border-b">
            <button
              className={`p-2 rounded ${activeTab === "Projeto 1" ? "bg-white" : "bg-gray-300"}`}
              onClick={() => setActiveTab("Projeto 1")}
            >
              Projeto 1
            </button>
            <button
              className={`p-2 rounded ${activeTab === "Projeto 2" ? "bg-white" : "bg-gray-300"}`}
              onClick={() => setActiveTab("Projeto 2")}
            >
              Projeto 2
            </button>
          </div>
          {/* Canvas editável */}
          <div className="flex-1 bg-white p-4">
            <div
              className="w-full h-full border-dashed border-2 border-gray-400 flex items-center justify-center"
              onClick={() => handleObjectSelect("Texto")}
            >
              <span className="text-gray-500">{text}</span>
            </div>
          </div>
        </div>

        {/* 5. Painel direito (Ferramentas do objeto selecionado) */}
        <div className="w-64 bg-white border-l p-4">
          <h2 className="text-lg font-bold mb-2">Propriedades</h2>
          {selectedObject ? (
            <div>
              <p>Objeto selecionado: {selectedObject}</p>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full p-2 border rounded mb-2"
                placeholder="Editar texto"
              />
              <button className="p-2 bg-green-500 text-white rounded w-full">Aplicar</button>
            </div>
          ) : (
            <p className="text-gray-500">Selecione um objeto no canvas</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Exportamos o componente
export default CriadorDeSites;