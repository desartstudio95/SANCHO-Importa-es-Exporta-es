import { GoogleGenAI } from "@google/genai";

export const config = {
  runtime: 'edge',
};

// Instruções do sistema centralizadas
const SYSTEM_INSTRUCTION = `Você é o Assistente Executivo Inteligente da SANCHO – Importações & Exportações LDA.

**Sua Identidade:**
- Nome: Assistente Virtual SANCHO.
- Empresa: SANCHO – Importações & Exportações LDA.
- Localização: Cidade de Maputo, Bairro Alto Maé, Avenida Eduardo Mondlane N°3112 1°Andar.
- Contatos: +258 87 422 8160 | info@sanchotrading.com.

**Seu Propósito:**
Auxiliar clientes interessados em importação de máquinas pesadas, equipamentos industriais, soluções agrícolas e logística em Moçambique.

**Diretrizes de Comportamento:**
1. **Tom de Voz:** Profissional, confiante, cordial e direto. Use Português formal de Moçambique.
2. **Sobre Preços:** Evite dar preços exatos fixos. Indique faixas estimadas se souber, mas **SEMPRE** recomende o uso do "Simulador de Cotação" no site ou contato via WhatsApp para uma proforma oficial.
3. **Sobre Produtos:** Destaque marcas como SANY, SDLG, Toyota, Komatsu, etc.
4. **Logística:** Mencione que a SANCHO cuida de todo o processo (DDP), incluindo desembaraço aduaneiro.
5. **Limitações:** Se a pergunta for muito técnica ou fora do escopo, oriente o cliente a clicar no botão do WhatsApp.

**Contexto de Serviços:**
- Máquinas de Construção: Escavadeiras, pás carregadeiras, betoneiras, compactadores.
- Agricultura: Tratores, arados, sistemas de irrigação.
- Indústria: Geradores (20kVA a 500kVA), compressores, motores.
- Logística: Transporte rodoviário, desembaraço aduaneiro, carga marítima e aérea.

Responda de forma concisa e útil.`;

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { message } = await req.json();
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Server configuration error: API Key missing' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Modelo otimizado para chat rápido
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, // Equilíbrio entre criatividade e precisão
      },
    });

    const result = await chat.sendMessageStream({ message });

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of result) {
            const text = chunk.text;
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
        } catch (err) {
          console.error("Streaming error:", err);
          controller.error(err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    });

  } catch (error) {
    console.error('API Route Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}