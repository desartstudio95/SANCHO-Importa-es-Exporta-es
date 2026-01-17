import React, { useState, useEffect, useRef } from 'react';
import { Calculator, Package, Send, RefreshCw, AlertCircle, Ship, Plane, ChevronDown, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

// LISTA COMPLETA DE EQUIPAMENTOS E CAMIÕES
// Valores FOB estimados (MZN) e Pesos (KG) para simulação
const EQUIPMENT_OPTIONS = [
  { id: 'default', name: 'Selecione o Equipamento ou Camião...', price: 0, weight: 0, category: 'general' },
  
  // --- CONSTRUÇÃO & MINERAÇÃO ---
  { id: 'escavadeira-mini-3t', name: 'Mini Escavadeira (3.5T)', price: 1200000, weight: 3500, category: 'construction' },
  { id: 'escavadeira-21t', name: 'Escavadeira Hidráulica 21T (SANY/CAT)', price: 4200000, weight: 21500, category: 'construction' },
  { id: 'escavadeira-33t', name: 'Escavadeira Hidráulica 33T', price: 6800000, weight: 33000, category: 'construction' },
  { id: 'escavadeira-50t', name: 'Escavadeira Mineração 50T', price: 12500000, weight: 50000, category: 'construction' },
  { id: 'retroescavadeira', name: 'Retroescavadora (Backhoe Loader)', price: 3200000, weight: 8200, category: 'construction' },
  { id: 'pa-carregadeira-3t', name: 'Pá Carregadeira 3T (Caçamba 1.8m³)', price: 2100000, weight: 10500, category: 'construction' },
  { id: 'pa-carregadeira-5t', name: 'Pá Carregadeira 5T (Caçamba 3.0m³)', price: 3400000, weight: 17000, category: 'construction' },
  { id: 'motoniveladora', name: 'Motoniveladora (Motor Grader 140hp)', price: 5500000, weight: 15000, category: 'construction' },
  { id: 'bulldozer-160', name: 'Trator de Esteira (Bulldozer 160hp)', price: 5800000, weight: 17500, category: 'construction' },
  { id: 'bulldozer-320', name: 'Trator de Esteira (Bulldozer 320hp)', price: 11000000, weight: 37000, category: 'construction' },
  { id: 'rolo-compactador-vibratorio', name: 'Rolo Compactador Vibratório 12T', price: 2800000, weight: 12000, category: 'construction' },
  { id: 'rolo-pneus', name: 'Rolo Compactador de Pneus', price: 3100000, weight: 16000, category: 'construction' },
  { id: 'pavimentadora', name: 'Pavimentadora de Asfalto (Paver)', price: 6500000, weight: 14000, category: 'construction' },
  { id: 'betoneira-autocarregavel', name: 'Betoneira Auto-Carregável (3.5m³)', price: 2500000, weight: 7500, category: 'construction' },
  { id: 'bomba-concreto', name: 'Bomba de Concreto (Reboque)', price: 1800000, weight: 4500, category: 'construction' },

  // --- AGRICULTURA ---
  { id: 'trator-25cv', name: 'Trator Agrícola 25cv (4x4)', price: 650000, weight: 1200, category: 'agriculture' },
  { id: 'trator-50cv', name: 'Trator Agrícola 50cv (4x4)', price: 1100000, weight: 2100, category: 'agriculture' },
  { id: 'trator-75cv', name: 'Trator Agrícola 75cv (4x4)', price: 1650000, weight: 3200, category: 'agriculture' },
  { id: 'trator-90cv', name: 'Trator Agrícola 90cv (Cabine)', price: 2200000, weight: 3800, category: 'agriculture' },
  { id: 'trator-140cv', name: 'Trator Agrícola 140cv (Heavy Duty)', price: 3800000, weight: 5500, category: 'agriculture' },
  { id: 'microtrator', name: 'Microtrator / Motocultivador 10hp', price: 120000, weight: 150, category: 'agriculture' },
  { id: 'grade-aradora', name: 'Grade Aradora (Disco)', price: 250000, weight: 600, category: 'agriculture' },
  { id: 'semeadora', name: 'Semeadora/Plantadeira 4 Linhas', price: 450000, weight: 800, category: 'agriculture' },
  { id: 'pulverizador-trator', name: 'Pulverizador Acoplado (600L)', price: 150000, weight: 250, category: 'agriculture' },
  { id: 'ceifeira-arroz', name: 'Ceifeira de Arroz/Trigo (Combine)', price: 1800000, weight: 2800, category: 'agriculture' },
  { id: 'drone-agricola', name: 'Drone Agrícola Pulverizador (30L)', price: 850000, weight: 50, category: 'agriculture' },

  // --- INDUSTRIAL ---
  { id: 'gerador-20kva', name: 'Gerador Diesel 20kVA (Silenciado)', price: 350000, weight: 800, category: 'industrial' },
  { id: 'gerador-50kva', name: 'Gerador Diesel 50kVA (Silenciado)', price: 550000, weight: 1100, category: 'industrial' },
  { id: 'gerador-100kva', name: 'Gerador Diesel 100kVA (Silenciado)', price: 850000, weight: 1600, category: 'industrial' },
  { id: 'gerador-250kva', name: 'Gerador Diesel 250kVA', price: 1500000, weight: 2800, category: 'industrial' },
  { id: 'gerador-500kva', name: 'Gerador Diesel 500kVA', price: 2800000, weight: 4200, category: 'industrial' },
  { id: 'compressor-parafuso', name: 'Compressor Industrial Parafuso 50hp', price: 450000, weight: 600, category: 'industrial' },
  { id: 'maquina-blocos-manual', name: 'Máquina de Blocos (Manual/Vibratória)', price: 180000, weight: 350, category: 'industrial' },
  { id: 'maquina-blocos-hidraulica', name: 'Máquina de Blocos Hidráulica (Automática)', price: 1200000, weight: 3500, category: 'industrial' },
  { id: 'moinho-martelo', name: 'Moinho de Martelo (Milho/Ração)', price: 120000, weight: 180, category: 'industrial' },

  // --- LOGÍSTICA & CAMIÕES (LISTA COMPLETA) ---
  // Caminhões de Carga
  { id: 'camiao-carga-4t', name: 'Camião Carga Ligeira 4 Ton', price: 1200000, weight: 3500, category: 'truck' },
  { id: 'camiao-carga-8t', name: 'Camião Carga Média 8-10 Ton', price: 2100000, weight: 6500, category: 'truck' },
  { id: 'camiao-carga-15t', name: 'Camião Carga Pesada 15 Ton (4x2)', price: 2800000, weight: 8000, category: 'truck' },
  
  // Basculantes
  { id: 'camiao-basculante-6x4', name: 'Camião Basculante 6x4 (10 Rodas)', price: 3600000, weight: 12500, category: 'truck' },
  { id: 'camiao-basculante-8x4', name: 'Camião Basculante 8x4 (12 Rodas)', price: 4500000, weight: 15500, category: 'truck' },
  
  // Cavalos Mecânicos (Cabeças)
  { id: 'cavalo-mecanico-4x2', name: 'Cavalo Mecânico 4x2 (Tractor Head)', price: 2900000, weight: 7500, category: 'truck' },
  { id: 'cavalo-mecanico-6x4', name: 'Cavalo Mecânico 6x4 (Tractor Head)', price: 3500000, weight: 9800, category: 'truck' },
  
  // Especiais
  { id: 'camiao-grua-munk', name: 'Camião com Grua (Munk) 10T', price: 4200000, weight: 13000, category: 'truck' },
  { id: 'camiao-cisterna-agua', name: 'Camião Cisterna Água (20.000L)', price: 3400000, weight: 11000, category: 'truck' },
  { id: 'camiao-cisterna-combustivel', name: 'Camião Cisterna Combustível (25.000L)', price: 3800000, weight: 11500, category: 'truck' },
  { id: 'camiao-betoneira', name: 'Camião Betoneira (Mixer 10m³)', price: 4100000, weight: 14500, category: 'truck' },
  { id: 'camiao-frigorifico', name: 'Camião Frigorífico (Refrigerado 8T)', price: 2600000, weight: 7500, category: 'truck' },
  { id: 'camiao-compactador-lixo', name: 'Camião Compactador de Lixo', price: 3900000, weight: 12000, category: 'truck' },

  // Reboques / Atrelados
  { id: 'atrelado-plataforma', name: 'Atrelado Plataforma (Flatbed 40ft)', price: 950000, weight: 7000, category: 'logistics' },
  { id: 'atrelado-esqueleto', name: 'Atrelado Esqueleto (Contentor)', price: 850000, weight: 6000, category: 'logistics' },
  { id: 'atrelado-lowbed', name: 'Atrelado Lowbed (Prancha Baixa Máquinas)', price: 1600000, weight: 11000, category: 'logistics' },
  { id: 'atrelado-tanque', name: 'Atrelado Tanque Combustível (45.000L)', price: 1900000, weight: 10000, category: 'logistics' },

  // Movimentação de Carga
  { id: 'empilhadeira-2.5t', name: 'Empilhadeira Diesel 2.5T', price: 850000, weight: 3800, category: 'logistics' },
  { id: 'empilhadeira-3.5t', name: 'Empilhadeira Diesel 3.5T', price: 980000, weight: 4500, category: 'logistics' },
  { id: 'empilhadeira-5t', name: 'Empilhadeira Diesel 5T', price: 1400000, weight: 7000, category: 'logistics' },
  { id: 'empilhadeira-10t', name: 'Empilhadeira Diesel 10T', price: 2800000, weight: 12500, category: 'logistics' },
  { id: 'reach-stacker', name: 'Reach Stacker (Porto Contentores)', price: 18000000, weight: 70000, category: 'logistics' },
];

const QuotationSimulator: React.FC = () => {
  const [selectedId, setSelectedId] = useState('default');
  const [freightType, setFreightType] = useState('sea'); // 'sea' or 'air'
  
  const [result, setResult] = useState<null | {
    productName: string;
    fob: number;
    freight: number;
    insurance: number;
    cif: number;
    duties: number; // Direitos Aduaneiros (II)
    ice: number;    // Imposto Consumo Específico
    tsa: number;    // Taxa de Serviços Aduaneiros (Kudumba/Scanner)
    mcnet: number;  // Taxa MCNet + Port Handling
    vat: number;    // IVA (16%)
    totalTaxes: number;
    grandTotal: number;
  }>(null);

  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.remove('opacity-0', 'translate-y-8');
            target.classList.add('animate-fade-in-up');
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Dynamic Calculation Effect
  useEffect(() => {
    if (selectedId === 'default') {
      setResult(null);
      return;
    }

    const item = EQUIPMENT_OPTIONS.find(opt => opt.id === selectedId);
    if (!item) return;

    // 1. Base Values
    const fob = item.price; 
    const weight = item.weight;
    
    // 2. Freight Estimation (Estimativa Realista para Maputo/Beira)
    let freightCost = 0;
    if (freightType === 'sea') {
        // Custo fixo (Docs/THC Origem) + Custo Variável por Tonelada
        // Base: ~60.000 MZN fixos + ~14 MZN por Kg (Média consolidada/RoRo/Bulk)
        // Para itens muito pesados, o custo por kg tende a diminuir ligeiramente na logística real, mas mantemos linear para segurança
        freightCost = 65000 + (weight * 13); 
    } else {
        // Aéreo
        freightCost = 15000 + (weight * 650); 
    }

    // 3. Insurance (Seguro) - 0.75% of FOB
    const insurance = fob * 0.0075; 

    // 4. CIF (Cost, Insurance, Freight)
    const cif = fob + freightCost + insurance;
    
    // 5. Customs Duties (Pauta Aduaneira de Moçambique)
    let dutyRate = 0.20; // Taxa padrão (20%)
    let iceRate = 0; // Imposto Consumo Específico (Geralmente 0 para trabalho, mas existe para veículos de luxo)

    switch(item.category) {
       case 'agriculture': 
           dutyRate = 0.025; // 2.5% (Código K - Incentivo Agrícola)
           break;
       case 'construction': 
           // Maioria das máquinas de terraplanagem (escavadeiras, pás) são 5%
           dutyRate = 0.05;  
           break;
       case 'industrial':
           // Geradores e máquinas industriais variam entre 5% e 7.5%
           dutyRate = 0.075; 
           break;
       case 'truck':
           // Caminhões de carga geralmente pagam 20%
           dutyRate = 0.20;
           break;
       case 'logistics':
           // Empilhadeiras (5-7.5%), Reboques (10-20%)
           // Simplificação para Reboques/Empilhadeiras
           dutyRate = item.id.includes('atrelado') ? 0.20 : 0.05;
           break;
       default:
           dutyRate = 0.20;
    }

    const duties = cif * dutyRate; // Direitos Aduaneiros

    // 6. Specific Taxes & Fees
    const tsa = cif * 0.0085; // 0.85% Kudumba/Scanner
    
    // Despesas Locais (Porto, DU, MCNet, Agenciamento)
    // Ajustado pelo tamanho/peso da carga
    let portExpenses = 25000;
    if (weight > 10000) portExpenses = 45000; // Carga pesada/maquinaria grande
    if (weight > 30000) portExpenses = 75000; // Carga especial

    // 7. ICE Calculation
    const ice = cif * iceRate;

    // 8. IVA (VAT) - 16% sobre (CIF + II + ICE)
    const taxableBasisForVat = cif + duties + ice;
    const vat = taxableBasisForVat * 0.16;

    // 9. Totals
    const totalTaxes = duties + ice + tsa + portExpenses + vat;
    const grandTotal = cif + totalTaxes; // DDP Estimado

    setResult({
      productName: item.name,
      fob,
      freight: freightCost,
      insurance,
      cif,
      duties,
      ice,
      tsa,
      mcnet: portExpenses,
      vat,
      totalTaxes,
      grandTotal
    });

  }, [selectedId, freightType]);

  const sendToWhatsApp = () => {
    // Redireciona diretamente para o WhatsApp sem mensagem pré-preenchida
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <div className="pt-24 pb-16 md:pt-28 md:pb-24 min-h-screen bg-slate-50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8 md:mb-12 opacity-0 translate-y-8 animate-on-scroll">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-sancho-primary rounded-2xl mx-auto flex items-center justify-center mb-4 md:mb-6 shadow-xl border-4 border-sancho-yellow transform hover:rotate-12 transition-transform duration-300">
            <Calculator className="text-white w-8 h-8 md:w-10 md:h-10" />
          </div>
          <h1 className="text-2xl md:text-5xl font-extrabold text-sancho-primary mb-3 md:mb-4">
            Simulador de Importação
          </h1>
          <p className="text-slate-600 text-sm md:text-lg max-w-2xl mx-auto">
            Selecione o equipamento ou camião para ver uma estimativa instantânea de custos e taxas alfandegárias para Moçambique.
          </p>
        </div>

        {/* MAIN CONTAINER */}
        <div className="opacity-0 translate-y-8 animate-on-scroll bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transition-all duration-500">
          
          {/* 1. SELECTION FORM */}
          <div className="p-6 md:p-12 border-b border-slate-100 bg-slate-50/50">
            <div className="grid grid-cols-1 gap-6 md:gap-8">
              
              {/* Equipment Selector */}
              <div>
                <label className="block text-base md:text-lg font-bold text-sancho-primary mb-2 md:mb-3 flex items-center gap-2">
                   <Package size={20} className="text-sancho-accent" />
                   Equipamento
                </label>
                <div className="relative">
                  <select 
                    value={selectedId}
                    onChange={(e) => setSelectedId(e.target.value)}
                    className="w-full pl-4 pr-10 py-4 rounded-xl border border-slate-300 focus:border-sancho-accent focus:ring-4 focus:ring-sancho-accent/10 outline-none transition-all appearance-none bg-white text-slate-700 font-medium text-base shadow-sm hover:border-sancho-accent/50 cursor-pointer"
                  >
                    {EQUIPMENT_OPTIONS.map(opt => (
                      <option key={opt.id} value={opt.id} disabled={opt.id === 'default'}>
                        {opt.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-500">
                    <ChevronDown size={20} />
                  </div>
                </div>
              </div>

              {/* Freight Selector */}
              <div>
                <label className="block text-base md:text-lg font-bold text-sancho-primary mb-2 md:mb-3">Método de Envio</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setFreightType('sea')}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                      freightType === 'sea' 
                        ? 'border-sancho-accent bg-sancho-accent/5 text-sancho-primary shadow-md transform scale-[1.02]' 
                        : 'border-slate-200 text-slate-500 hover:border-sancho-accent/50 hover:bg-white'
                    }`}
                  >
                    <Ship size={32} className={freightType === 'sea' ? 'text-sancho-accent' : 'text-slate-400'} />
                    <span className="font-bold">Marítimo (Navio)</span>
                    <span className="text-xs text-slate-400">Mais Econômico</span>
                  </button>
                  
                  <button
                    onClick={() => setFreightType('air')}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                      freightType === 'air' 
                        ? 'border-sancho-accent bg-sancho-accent/5 text-sancho-primary shadow-md transform scale-[1.02]' 
                        : 'border-slate-200 text-slate-500 hover:border-sancho-accent/50 hover:bg-white'
                    }`}
                  >
                    <Plane size={32} className={freightType === 'air' ? 'text-sancho-accent' : 'text-slate-400'} />
                    <span className="font-bold">Aéreo (Avião)</span>
                    <span className="text-xs text-slate-400">Mais Rápido</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* 2. RESULTS DISPLAY */}
          <div className={`transition-all duration-700 ease-in-out ${result ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            {result && (
              <div ref={resultsRef} className="p-6 md:p-12 bg-white">
                <div className="bg-sancho-primary rounded-2xl p-6 md:p-8 text-white mb-8 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-slate-300 text-sm uppercase tracking-widest font-bold mb-2">Custo Total Estimado (DDP)</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                       <span className="text-4xl md:text-5xl font-extrabold text-sancho-yellow tracking-tight">
                         {result.grandTotal.toLocaleString('pt-MZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                       </span>
                       <span className="text-xl font-bold text-sancho-yellow">MZN</span>
                    </div>
                    <p className="text-blue-200 text-sm md:text-base border-t border-white/10 pt-4 mt-2">
                      *Valor entregue em Maputo/Beira com todos impostos pagos.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Breakdown Header */}
                  <h3 className="text-xl font-bold text-sancho-primary border-b border-slate-100 pb-2">
                    Detalhamento de Custos
                  </h3>

                  {/* FOB & Freight */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm md:text-base">
                        <span className="text-slate-600 flex items-center gap-2"><Package size={16} /> Preço Base (FOB)</span>
                        <span className="font-bold text-slate-800">{result.fob.toLocaleString('pt-MZ')} MZN</span>
                      </div>
                      <div className="flex justify-between items-center text-sm md:text-base">
                        <span className="text-slate-600 flex items-center gap-2"><Ship size={16} /> Frete Internacional</span>
                        <span className="font-bold text-slate-800">{result.freight.toLocaleString('pt-MZ')} MZN</span>
                      </div>
                      <div className="flex justify-between items-center text-sm md:text-base">
                        <span className="text-slate-600 flex items-center gap-2"><AlertCircle size={16} /> Seguro (0.75%)</span>
                        <span className="font-bold text-slate-800">{result.insurance.toLocaleString('pt-MZ')} MZN</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100 mt-2">
                        <span className="font-bold text-sancho-primary">Valor CIF (Base Imponível)</span>
                        <span className="font-bold text-sancho-primary">{result.cif.toLocaleString('pt-MZ')} MZN</span>
                      </div>
                    </div>

                    {/* Taxes */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm md:text-base">
                        <span className="text-slate-600">Direitos Aduaneiros (II)</span>
                        <span className="font-bold text-red-600">+{result.duties.toLocaleString('pt-MZ')} MZN</span>
                      </div>
                      <div className="flex justify-between items-center text-sm md:text-base">
                        <span className="text-slate-600">IVA (16%)</span>
                        <span className="font-bold text-red-600">+{result.vat.toLocaleString('pt-MZ')} MZN</span>
                      </div>
                      <div className="flex justify-between items-center text-sm md:text-base">
                        <span className="text-slate-600">Taxas Portuárias/MCNet</span>
                        <span className="font-bold text-red-600">+{result.mcnet.toLocaleString('pt-MZ')} MZN</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-100 mt-2">
                        <span className="font-bold text-red-700">Total de Impostos</span>
                        <span className="font-bold text-red-700">{result.totalTaxes.toLocaleString('pt-MZ')} MZN</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Disclaimer */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex gap-3 text-sm text-yellow-800 mt-6">
                    <AlertCircle className="shrink-0 mt-0.5" size={20} />
                    <p>
                      <strong>Atenção:</strong> Esta é uma simulação baseada em valores médios de mercado e na pauta aduaneira vigente. O valor final pode sofrer variações cambiais e alterações nas taxas portuárias. Para um valor exato, solicite uma cotação oficial.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                     <button
                        onClick={sendToWhatsApp}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1"
                     >
                        <MessageCircle size={20} /> Solicitar Proforma
                     </button>
                     <button
                        onClick={() => setSelectedId('default')}
                        className="bg-white border-2 border-slate-200 hover:border-sancho-primary text-slate-600 hover:text-sancho-primary font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                     >
                        <RefreshCw size={20} /> Nova Simulação
                     </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationSimulator;