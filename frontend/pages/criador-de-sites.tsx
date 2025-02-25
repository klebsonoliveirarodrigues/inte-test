// Importamos React e useState para gerenciar o estado do texto
import React, { useState } from "react";

import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
//importei o tipo Accept da biblioteca react-dropzone.
import { useDropzone, Accept } from "react-dropzone";

// Função principal da página
const CriadorDeSites = () => {
  // Usamos o useState para armazenar o texto que o usuário digitar
  const [text, setText] = useState("Texto inicial");

  const [image, setImage] = useState<string | null>(null);
  const [crop, setCrop] = useState<Crop>({ unit: "%", width: 50, height: 50, x: 0, y: 0 });

  // Função para lidar com o upload de imagens
  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Configuração do Dropzone para upload
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] } as Accept,
    multiple: false,
  });

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

      {/* Área de Upload de Imagem */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Upload de Imagem</h2>
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-400 p-4 text-center cursor-pointer hover:bg-gray-50"
        >
          <input {...getInputProps()} />
          <p>Arraste e solte uma imagem aqui ou clique para selecionar</p>
        </div>
      </div>

      {/* Exibição da Imagem Carregada */}
      {image && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Imagem Carregada</h2>
          <ReactCrop crop={crop} onChange={(newCrop) => setCrop(newCrop)}>
            <img src={image} alt="Preview" className="max-w-full h-auto" />
          </ReactCrop>
        </div>
      )}
    </div>
  );
};

// Exportamos a página para que o Next.js possa usá-la
export default CriadorDeSites;
