import React, { useEffect } from 'react';
import { EMAIL, COMPANY_NAME } from '../constants';
import { Shield, Lock, FileText, UserCheck } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 mb-8 animate-fade-in-up">
          <div className="w-16 h-16 bg-sancho-primary rounded-2xl flex items-center justify-center mb-6">
            <Shield size={32} className="text-sancho-yellow" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-sancho-primary mb-4">
            Política de Privacidade
          </h1>
          <p className="text-slate-500 text-lg">
            Última atualização: {new Date().toLocaleDateString('pt-MZ')}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100 space-y-10 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          
          <section>
            <h2 className="text-2xl font-bold text-sancho-primary mb-4 flex items-center gap-2">
              <FileText size={24} className="text-sancho-accent" /> 1. Introdução
            </h2>
            <div className="prose prose-slate text-slate-600 leading-relaxed">
              <p>
                A <strong>{COMPANY_NAME}</strong> respeita a sua privacidade e está empenhada em proteger os seus dados pessoais. Esta Política de Privacidade explica como recolhemos, utilizamos, divulgamos e protegemos as suas informações quando visita o nosso website e utiliza os nossos serviços de importação e exportação.
              </p>
              <p className="mt-2">
                Ao utilizar o nosso site, concorda com a recolha e uso de informações de acordo com esta política.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-sancho-primary mb-4 flex items-center gap-2">
              <UserCheck size={24} className="text-sancho-accent" /> 2. Dados que Recolhemos
            </h2>
            <div className="prose prose-slate text-slate-600 leading-relaxed">
              <p>Podemos recolher os seguintes tipos de informações:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Informações Pessoais:</strong> Nome, endereço de e-mail, número de telefone e endereço físico, fornecidos voluntariamente através dos nossos formulários de contacto ou pedidos de cotação.</li>
                <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas e tempo de permanência no site (através de cookies).</li>
                <li><strong>Dados da Transação:</strong> Detalhes sobre os produtos ou serviços que adquiriu ou demonstrou interesse.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-sancho-primary mb-4 flex items-center gap-2">
              <Lock size={24} className="text-sancho-accent" /> 3. Uso das Informações
            </h2>
            <div className="prose prose-slate text-slate-600 leading-relaxed">
              <p>Utilizamos os seus dados para:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Processar pedidos de cotação e encomendas.</li>
                <li>Gerir a logística e entrega de equipamentos.</li>
                <li>Responder a questões e fornecer suporte ao cliente.</li>
                <li>Melhorar o nosso website e serviços.</li>
                <li>Cumprir obrigações legais e regulamentares em Moçambique.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-sancho-primary mb-4">4. Partilha de Dados</h2>
            <div className="prose prose-slate text-slate-600 leading-relaxed">
              <p>
                Não vendemos os seus dados pessoais a terceiros. Podemos partilhar informações com:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Parceiros Logísticos:</strong> Transportadoras e despachantes aduaneiros necessários para a entrega da sua mercadoria.</li>
                <li><strong>Autoridades Legais:</strong> Quando exigido por lei ou para proteger os nossos direitos legais.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-sancho-primary mb-4">5. Segurança dos Dados</h2>
            <p className="text-slate-600 leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger os seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, lembre-se que nenhum método de transmissão pela Internet é 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-sancho-primary mb-4">6. Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Utilizamos cookies para melhorar a experiência do utilizador. Pode configurar o seu navegador para recusar cookies, mas isso pode limitar algumas funcionalidades do site.
            </p>
          </section>

          <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h2 className="text-xl font-bold text-sancho-primary mb-3">Contacto</h2>
            <p className="text-slate-600 mb-4">
              Se tiver dúvidas sobre esta Política de Privacidade, entre em contacto connosco:
            </p>
            <ul className="space-y-2 text-slate-700 font-medium">
              <li>E-mail: <a href={`mailto:${EMAIL}`} className="text-sancho-accent hover:underline">{EMAIL}</a></li>
              <li>Endereço: Cidade de Maputo, Bairro Alto Maé, Av. Eduardo Mondlane N°3112 1°Andar</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;