// Importamos as bibliotecas que vamos usar
import React, { useState } from "react"; // React para criar a interface e useState para gerenciar estados
import ReactCrop, { Crop } from "react-image-crop"; // ReactCrop para recortar imagens
import "react-image-crop/dist/ReactCrop.css"; // Estilos padrão do ReactCrop
import { useDropzone, Accept } from "react-dropzone"; // Ferramenta para upload de imagens

// Função principal da página Criador de Sites
const CriadorDeSites = () => {
  // Estado para guardar o texto que o usuário digitar
  const [text, setText] = useState("Texto inicial"); // Começa com "Texto inicial"

  // Estado para guardar a imagem carregada pelo usuário
  const [image, setImage] = useState<string | null>(null); // Começa sem imagem (null)

  // Estado para guardar as configurações de recorte da imagem
  const [crop, setCrop] = useState<Crop>({
    unit: "%",
    width: 50,
    height: 50,
    x: 0,
    y: 0,
  }); // Configuração inicial do recorte

  // Função que lida com o upload de imagens
  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]; // Pega o primeiro arquivo (imagem) que o usuário escolheu
    if (file) {
      // Verifica se existe um arquivo
      const reader = new FileReader(); // Cria um leitor para processar o arquivo
      reader.onload = () => setImage(reader.result as string); // Quando terminar de ler, atualiza o estado com a imagem
      reader.readAsDataURL(file); // Converte o arquivo para uma URL (base64) que pode ser exibida
    }
  };

  // Configuração do Dropzone para o upload de imagens
  const { getRootProps, getInputProps } = useDropzone({
    onDrop, // Liga a função onDrop ao evento de upload
    accept: { "image/*": [] } as Accept, // Aceita apenas imagens (ex.: .jpg, .png)
    multiple: false, // Permite apenas uma imagem por vez
  });

  // Função para salvar os dados no backend
  const saveSite = async () => {
    try {
      // Tenta enviar os dados ao backend
      const response = await fetch("http://127.0.0.1:8001/save-site", {
        method: "POST", // Usa o método POST para enviar dados
        headers: { "Content-Type": "application/json" }, // Define que os dados são em formato JSON
        body: JSON.stringify({ title: "Meu Site", content: "Texto aqui" }), // Converte os dados para uma string JSON
      });
      const result = await response.json(); // Pega a resposta do backend
      console.log(result); // Mostra a resposta no console (ex.: "Site saved successfully")
    } catch (error) {
      // Se der erro, mostra no console
      console.error("Erro ao salvar:", error);
    }
  };

  // Aqui começa a parte visual da página (o que o usuário vê)
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {" "}
      {/* Container principal com padding e fundo cinza */}
      {/* Título da página */}
      <h1 className="text-3xl font-bold mb-4">Criador de Sites</h1>
      {/* Campo onde o usuário digita o texto */}
      <input
        type="text" // Tipo de input é texto
        value={text} // O valor é controlado pelo estado "text"
        onChange={(e) => setText(e.target.value)} // Atualiza o estado "text" quando o usuário digita
        className="w-full p-2 border border-gray-300 rounded mb-4" // Estilos com Tailwind CSS
        placeholder="Digite seu texto aqui..." // Texto que aparece quando o campo está vazio
      />
      {/* Área que mostra a prévia do texto digitado */}
      <div className="p-4 bg-white border border-gray-200 rounded shadow-md mb-4">
        <h2 className="text-xl font-semibold">Prévia:</h2>
        <p>{text}</p> {/* Exibe o texto atualizado */}
      </div>
      {/* Botão para salvar os dados no backend */}
      <button
        onClick={saveSite} // Chama a função saveSite quando clicado
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4" // Estilos com Tailwind CSS
      >
        Salvar Alterações
      </button>
      {/* Área para fazer upload de imagens */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Upload de Imagem</h2>
        <div
          {...getRootProps()} // Adiciona as propriedades do Dropzone (arrastar e soltar)
          className="border-2 border-dashed border-gray-400 p-4 text-center cursor-pointer hover:bg-gray-50" // Estilos
        >
          <input {...getInputProps()} />{" "}
          {/* Input oculto para selecionar arquivos */}
          <p>Arraste e solte uma imagem aqui ou clique para selecionar</p>
        </div>
      </div>
      {/* Mostra a imagem carregada com a opção de recorte */}
      {image && ( // Só aparece se houver uma imagem (image não é null)
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Imagem Carregada</h2>
          <ReactCrop crop={crop} onChange={(newCrop) => setCrop(newCrop)}>
            {" "}
            {/* Componente de recorte */}
            <img src={image} alt="Preview" className="max-w-full h-auto" />{" "}
            {/* Exibe a imagem */}
          </ReactCrop>
        </div>
      )}
    </div>
  );
};

// Exportamos a página para que o Next.js possa usá-la
export default CriadorDeSites;
