// Componente de ícone Music (substituindo lucide-react)
const Music = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
  </svg>
);

// Componente de ícone ChevronRight (substituindo lucide-react)
const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// Componente principal
const EscalaMiInterativa = () => {
  // Estado para controlar qual escala está sendo exibida
  const [escalaAtiva, setEscalaAtiva] = React.useState('maior');
  const [mostrarIntervalos, setMostrarIntervalos] = React.useState(true);
  const [mostrarArpejo, setMostrarArpejo] = React.useState(false);

  // Definição das escalas (2 oitavas)
  const escalas = {
    maior: {
      nome: 'MI Maior',
      notas: ['MI', 'F#', 'G#', 'LA', 'SI', 'C#', 'D#', 'MI', 'F#', 'G#', 'LA', 'SI', 'C#', 'D#', 'MI'],
      intervalos: ['T', 'T', 'S', 'T', 'T', 'T', 'S', 'T', 'T', 'S', 'T', 'T', 'T', 'S'],
      formula: 'T - T - S - T - T - T - S',
      acidentes: '4 sustenidos (F#, C#, G#, D#)',
      cor: 'bg-blue-500',
      arpejo: ['MI', 'G#', 'SI', 'MI', 'G#', 'SI', 'MI', 'G#', 'SI', 'MI']
    },
    menorNatural: {
      nome: 'MI Menor Natural',
      notas: ['MI', 'F#', 'SOL', 'LA', 'SI', 'DÓ', 'RÉ', 'MI', 'F#', 'SOL', 'LA', 'SI', 'DÓ', 'RÉ', 'MI'],
      intervalos: ['T', 'S', 'T', 'T', 'S', 'T', 'T', 'T', 'S', 'T', 'T', 'S', 'T', 'T'],
      formula: 'T - S - T - T - S - T - T',
      acidentes: '1 sustenido (F#)',
      cor: 'bg-green-500',
      arpejo: ['MI', 'SOL', 'SI', 'MI', 'SOL', 'SI', 'MI', 'SOL', 'SI', 'MI']
    },
    menorHarmonica: {
      nome: 'MI Menor Harmônica',
      notas: ['MI', 'F#', 'SOL', 'LA', 'SI', 'DÓ', 'D#', 'MI', 'F#', 'SOL', 'LA', 'SI', 'DÓ', 'D#', 'MI'],
      intervalos: ['T', 'S', 'T', 'T', 'S', 'T+S', 'S', 'T', 'S', 'T', 'T', 'S', 'T+S', 'S'],
      formula: 'T - S - T - T - S - T+S - S',
      acidentes: '2 sustenidos (F#, D#)',
      cor: 'bg-purple-500',
      arpejo: ['MI', 'SOL', 'SI', 'MI', 'SOL', 'SI', 'MI', 'SOL', 'SI', 'MI']
    },
    menorMelodica: {
      nome: 'MI Menor Melódica (Ascendente)',
      notas: ['MI', 'F#', 'SOL', 'LA', 'SI', 'C#', 'D#', 'MI', 'F#', 'SOL', 'LA', 'SI', 'C#', 'D#', 'MI'],
      intervalos: ['T', 'S', 'T', 'T', 'T', 'T', 'S', 'T', 'S', 'T', 'T', 'T', 'T', 'S'],
      formula: 'T - S - T - T - T - T - S',
      acidentes: '3 sustenidos (F#, C#, D#)',
      cor: 'bg-orange-500',
      arpejo: ['MI', 'SOL', 'SI', 'MI', 'SOL', 'SI', 'MI', 'SOL', 'SI', 'MI']
    }
  };

  // Escala atual selecionada
  const escala = escalas[escalaAtiva];

  // Função para verificar se a nota é alterada (sustenido/bemol)
  const isAlterada = (nota) => {
    return nota.includes('#') || nota.includes('b');
  };

  // Função para obter cor da nota
  const getNotaCor = (nota, index) => {
    if (index === 0 || index === 7 || index === 14) return 'bg-red-100 border-red-400 text-red-800'; // Tônicas
    if (isAlterada(nota)) return 'bg-yellow-50 border-yellow-400';
    return 'bg-white border-gray-300';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Music className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">Escalas de MI</h1>
          </div>
          <p className="text-gray-600">Estudo interativo - 2 Oitavas</p>
        </div>

        {/* Seletor de Escalas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {Object.entries(escalas).map(([key, esc]) => (
            <button
              key={key}
              onClick={() => setEscalaAtiva(key)}
              className={`p-4 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                escalaAtiva === key
                  ? `${esc.cor} text-white shadow-lg`
                  : 'bg-white text-gray-700 border-2 border-gray-200'
              }`}
            >
              {esc.nome}
            </button>
          ))}
        </div>

        {/* Card da Escala Selecionada */}
        <div className="bg-white rounded-xl shadow-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{escala.nome}</h2>
            <span className={`${escala.cor} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
              {escala.acidentes}
            </span>
          </div>

          {/* Fórmula da Escala */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Fórmula de intervalos:</p>
            <p className="text-lg font-mono font-bold text-gray-800">{escala.formula}</p>
            <p className="text-xs text-gray-500 mt-2">T = Tom | S = Semitom | T+S = Tom e meio</p>
          </div>

          {/* Controles */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setMostrarIntervalos(!mostrarIntervalos)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                mostrarIntervalos
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {mostrarIntervalos ? 'Ocultar' : 'Mostrar'} Intervalos
            </button>
            <button
              onClick={() => setMostrarArpejo(!mostrarArpejo)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                mostrarArpejo
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {mostrarArpejo ? 'Escala' : 'Arpejo'}
            </button>
          </div>

          {/* Display das Notas ou Arpejo */}
          <div className="space-y-4">
            {!mostrarArpejo ? (
              <>
                {/* Primeira Oitava */}
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">1ª Oitava:</p>
                  <div className="flex flex-wrap gap-2">
                    {escala.notas.slice(0, 8).map((nota, idx) => (
                      <div key={`nota-1-${idx}`} className="flex flex-col items-center">
                        <div
                          className={`w-16 h-16 flex items-center justify-center rounded-lg border-2 font-bold text-lg ${getNotaCor(
                            nota,
                            idx
                          )}`}
                        >
                          {nota}
                        </div>
                        {mostrarIntervalos && idx < 7 && (
                          <div className="mt-1">
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <span className="text-xs font-semibold text-gray-600">
                              {escala.intervalos[idx]}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Segunda Oitava */}
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">2ª Oitava:</p>
                  <div className="flex flex-wrap gap-2">
                    {escala.notas.slice(7, 15).map((nota, idx) => (
                      <div key={`nota-2-${idx}`} className="flex flex-col items-center">
                        <div
                          className={`w-16 h-16 flex items-center justify-center rounded-lg border-2 font-bold text-lg ${getNotaCor(
                            nota,
                            idx + 7
                          )}`}
                        >
                          {nota}
                        </div>
                        {mostrarIntervalos && idx < 7 && (
                          <div className="mt-1">
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <span className="text-xs font-semibold text-gray-600">
                              {escala.intervalos[idx + 7]}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-2">
                  Arpejo (Tônica - 3ª - 5ª):
                </p>
                <div className="flex flex-wrap gap-2">
                  {escala.arpejo.map((nota, idx) => (
                    <div
                      key={`arpejo-${idx}`}
                      className="w-16 h-16 flex items-center justify-center rounded-lg border-2 font-bold text-lg bg-green-100 border-green-400 text-green-800"
                    >
                      {nota}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Legenda */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm font-semibold text-gray-700 mb-2">Legenda:</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-100 border-2 border-red-400 rounded"></div>
                <span>Tônica (MI)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-50 border-2 border-yellow-400 rounded"></div>
                <span>Nota alterada (#)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded"></div>
                <span>Nota natural</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dicas de Estudo */}
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">💡 Dicas de Estudo</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">1.</span>
              <span>Cante cada escala em voz alta para internalizar os intervalos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">2.</span>
              <span>Compare as diferenças entre MI Maior e as escalas menores</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">3.</span>
              <span>Pratique os arpejos para memorizar as tríades principais</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">4.</span>
              <span>Observe que as TÔNICAS (MI) aparecem no início, meio e fim</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Renderizar o componente no DOM
ReactDOM.render(<EscalaMiInterativa />, document.getElementById('root'));
