import Link from 'next/link';

export default function Home() {
  // Lista de templates
  const templates = [
    { id: 1, name: 'Template 1', description: 'Um template moderno e minimalista.' },
    { id: 2, name: 'Template 2', description: 'Um template focado em blogs e conteúdos.' },
    { id: 3, name: 'Template 3', description: 'Um template para lojas online.' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Link para voltar ao painel */}
      <Link href="/painel" className="self-start mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
        Voltar
      </Link>

      {/* Título */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Escolha um template para o seu site</h1>

      {/* Lista de templates */}
      <ul className="space-y-4 w-full max-w-md">
        {templates.map((template) => (
          <li
            key={template.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900">{template.name}</h2>
            <p className="text-sm text-gray-600 mt-2">{template.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}