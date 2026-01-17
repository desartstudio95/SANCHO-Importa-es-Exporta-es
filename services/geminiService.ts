// Este serviço agora atua como uma ponte para o endpoint seguro /api/chat
// Isso remove a necessidade da biblioteca @google/genai no lado do cliente (browser)

export const initializeChat = async () => {
  // A inicialização é tratada pelo servidor a cada requisição (stateless).
  // Mantemos a função para não quebrar referências existentes, retornando true.
  return true;
};

export const sendMessageToGeminiStream = async function* (message: string) {
  try {
    // Conecta ao endpoint Serverless (api/chat.ts)
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      console.error("Erro no servidor de chat:", response.status);
      yield "Desculpe, estou com dificuldades de conexão no momento. Por favor, utilize o botão do WhatsApp para falar com um atendente humano.";
      return;
    }

    if (!response.body) {
      yield "Erro: Sem resposta do servidor.";
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      const chunk = decoder.decode(value, { stream: true });
      if (chunk) {
        yield chunk;
      }
    }
  } catch (error) {
    console.error("Erro no serviço de Chat:", error);
    yield "Erro de conexão. Verifique sua internet ou tente novamente mais tarde.";
  }
};