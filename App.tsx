
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Sparkles, 
  Clock, 
  Wallet, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Layout,
  Palette,
  Lightbulb,
  Smartphone,
  X,
  AlertTriangle
} from 'lucide-react';

// --- Types ---
interface FAQItem {
  question: string;
  answer: string;
}

const carouselImages = [
  "https://i.ibb.co/tpLygTmH/decorar-casa-2.avif",
  "https://i.ibb.co/SDs4mnkn/decorar-casa-5.webp",
  "https://i.ibb.co/PZ5z4RZh/casa-arrumada-4.jpg",
  "https://i.ibb.co/5dr8r3y/casa-arrumada-1.webp",
  "https://i.ibb.co/n8rs3qL5/casa-arrumada-2.webp"
];

// --- Components ---

const Navbar = () => (
  <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center items-center h-12">
        <div className="flex items-center gap-2">
          <Sparkles className="text-indigo-600 w-5 h-5" />
          <span className="text-lg font-extrabold tracking-tight text-indigo-900">DecoraIA</span>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-12 pb-16 px-4 md:pt-20 md:pb-24 overflow-hidden">
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
        Realize a casa dos seus sonhos <span className="text-indigo-600 italic">sem gastar fortunas</span> com arquitetos
      </h1>
      <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
        Já imaginou ter uma sala ou quarto dignos de revista? Nossa Inteligência Artificial desenha seu espaço ideal em segundos, adaptado ao seu estilo e bolso.
      </p>
    </div>

    <div className="relative w-full">
      <div className="animate-carousel">
        {[...carouselImages, ...carouselImages].map((src, index) => (
          <div key={index} className="flex-shrink-0 px-3">
            <div className="bg-white p-3 rounded-2xl shadow-xl border border-slate-100 w-[280px] md:w-[480px] transition-transform hover:scale-[1.02] duration-300">
              <div className="overflow-hidden rounded-xl h-[200px] md:h-[320px] bg-slate-50">
                <img 
                  src={src} 
                  alt={`Design ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none hidden md:block"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none hidden md:block"></div>
    </div>
  </section>
);

const Problem = () => (
  <section className="py-16 bg-white px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-12">
        Cansado de ver sua casa sem graça ou bagunçada?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <XCircle className="text-red-500 w-8 h-8" />,
            title: "Arquitetos caríssimos",
            desc: "Os projetos profissionais costumam custar milhares de reais e demoram semanas."
          },
          {
            icon: <XCircle className="text-red-500 w-8 h-8" />,
            title: "Medo de errar feio",
            desc: "Você não quer gastar dinheiro com móveis que depois não combinam ou não cabem no espaço."
          },
          {
            icon: <XCircle className="text-red-500 w-8 h-8" />,
            title: "Não sabe por onde começar",
            desc: "Você vê mil ideias no Pinterest, mas não sabe como aplicar na sua própria realidade."
          }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl">
            {item.icon}
            <h3 className="text-xl font-bold mt-4 mb-2">{item.title}</h3>
            <p className="text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-16 px-4 bg-indigo-900 text-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Renove seu lar em 3 passos</h2>
      <div className="grid md:grid-cols-3 gap-12 relative">
        {[
          {
            step: "01",
            title: "Descreva seu espaço",
            desc: "Conte-nos o que deseja alcançar ou suba uma foto do seu ambiente atual."
          },
          {
            step: "02",
            title: "A IA faz a mágica",
            desc: "Nossa ferramenta analisa seu espaço e cria propostas visuais incríveis em segundos."
          },
          {
            step: "03",
            title: "Decore com confiança",
            desc: "Receba seu plano de disposição e lista de inspirações para começar hoje mesmo."
          }
        ].map((item, idx) => (
          <div key={idx} className="relative flex flex-col items-center text-center">
            <span className="text-5xl font-black text-white/20 mb-4">{item.step}</span>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-indigo-100">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-20 px-4 bg-slate-50">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">O que você vai receber</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          {
            icon: <Palette className="text-indigo-600 w-6 h-6" />,
            title: "Guia de Cores e Estilos",
            desc: "Receba paletas completas e combinações profissionais que transformam qualquer ambiente em segundos."
          },
          {
            icon: <Layout className="text-indigo-600 w-6 h-6" />,
            title: "Layout Inteligente de Móveis",
            desc: "Saiba exatamente onde posicionar cada peça para ganhar o máximo de espaço e circulação."
          },
          {
            icon: <Smartphone className="text-indigo-600 w-6 h-6" />,
            title: "Acesso Premium à IA",
            desc: "Use nossa tecnologia de ponta para testar infinitas decorações para todos os cômodos da sua casa."
          },
          {
            icon: <Lightbulb className="text-indigo-600 w-6 h-6" />,
            title: "Roteiro de Decoração Prática",
            desc: "Um plano de ação com sugestões reais e aplicáveis que você consegue executar sem complicação."
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
            <div className="bg-indigo-50 p-3 rounded-lg shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Bonuses = () => (
  <section className="py-16 px-4 bg-white border-y border-slate-100">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
          Presentes por tempo limitado
        </span>
        <h2 className="text-3xl font-bold">Bônos de Ação Rápida</h2>
      </div>
      <div className="space-y-4">
        {[
          { 
            title: "Bônus 1: Guia Mestra das Cores", 
            val: "R$ 67", 
            desc: "Aprenda a combinar tons como um profissional. Dê aquela vibração de hotel ao seu quarto principal." 
          },
          { 
            title: "Bônus 2: Checklist de Compras Inteligentes", 
            val: "R$ 47", 
            desc: "Economize dinheiro comprando apenas o que realmente precisa. Chega de gastos inúteis." 
          },
          { 
            title: "Bônus 3: Manual 'Evite os erros típicos'", 
            val: "R$ 97", 
            desc: "Descubra o que 'apaga' seu lar e como corrigir isso em apenas um final de semana." 
          }
        ].map((item, idx) => (
          <div key={idx} className="flex justify-between items-start gap-4 p-5 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50">
            <div className="flex-1">
              <h3 className="font-bold text-indigo-900 text-lg">{item.title}</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
            </div>
            <div className="text-right shrink-0">
              <span className="block text-xs text-slate-400 font-medium mb-1 italic">VALORIZADO EM:</span>
              <span className="font-bold text-red-500 line-through text-base italic">{item.val}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = ({ onBasicClick }: { onBasicClick: () => void }) => {
  const handleRedirectToCheckout = (planType: 'basic' | 'premium') => {
    // Link do Plano Premium enviado pelo usuário
    const baseUrl = planType === 'premium' 
      ? "https://pay.cakto.com.br/gxjftgh_778081" 
      : "https://pay.cakto.com.br/yesmq26_778155";
      
    const currentParams = window.location.search;
    let finalUrl = baseUrl;
    if (currentParams) {
      const cleanParams = currentParams.startsWith('?') ? currentParams.substring(1) : currentParams;
      finalUrl += (finalUrl.includes('?') ? '&' : '?') + cleanParams;
    }
    window.location.href = finalUrl;
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Escolha seu plano de transformação</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* Plano Premium */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-indigo-600 relative transform md:scale-105 z-10">
            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">
              MAIS ESCOLHIDO
            </div>
            <div className="bg-indigo-600 p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-2 uppercase">Plano PREMIUM</h3>
              <div className="flex justify-center items-center gap-3">
                <span className="text-xl font-bold text-red-300 line-through opacity-80">R$ 147</span>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-extrabold">R$ 26,90</span>
                </div>
              </div>
              <p className="mt-2 text-indigo-100 text-sm">Acesso total + Todos os bônus + Suporte VIP</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
                  <span className="text-slate-700 font-bold">Uso ilimitado da plataforma</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
                  <span className="text-slate-700 font-medium">Sugestões visuais em segundos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
                  <span className="text-slate-700 font-medium">Imagens em alta resolução</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-indigo-600 w-5 h-5 shrink-0" />
                  <span className="text-indigo-900 font-bold">Guia Mestra das Cores</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-indigo-600 w-5 h-5 shrink-0" />
                  <span className="text-indigo-900 font-bold">Checklist de Compras Inteligentes</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-indigo-600 w-5 h-5 shrink-0" />
                  <span className="text-indigo-900 font-bold">Manual 'Evite os erros típicos'</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-indigo-600 w-5 h-5 shrink-0" />
                  <span className="text-indigo-900 font-bold">Suporte prioritário via WhatsApp</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
                  <span className="text-slate-700 font-medium">Garantia de satisfação de 7 dias</span>
                </li>
              </ul>
              <button 
                onClick={() => handleRedirectToCheckout('premium')}
                className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group text-center cursor-pointer shadow-lg shadow-indigo-100"
              >
                QUERO COMEÇAR AGORA!
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-[10px] text-slate-400 mt-4 uppercase font-bold tracking-tighter">
                Acesso vitalício · Compra 100% segura
              </p>
            </div>
          </div>

          {/* Plano Básico */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200 mt-4 md:mt-0">
            <div className="bg-slate-100 p-8 text-center text-slate-800">
              <h3 className="text-xl font-bold mb-2 text-slate-600 uppercase">Plano BÁSICO</h3>
              <div className="flex justify-center items-center gap-3">
                <span className="text-lg font-bold text-red-500 line-through opacity-80">R$ 67</span>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-slate-800">R$ 12,90</span>
                </div>
              </div>
              <p className="mt-2 text-slate-500 text-sm">Acesso à plataforma + Sem os bônus exclusivos</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
                  <span className="text-slate-700 font-medium">Uso ilimitado da plataforma</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
                  <span className="text-slate-700 font-medium">Sugestões visuais em segundos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
                  <span className="text-slate-700 font-medium">Imagens em alta resolução</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
                  <span className="text-slate-700 font-medium">Suporte via WhatsApp</span>
                </li>
                <li className="flex items-center gap-3 opacity-30">
                  <X className="text-red-400 w-5 h-5 shrink-0" />
                  <span className="text-slate-400 line-through font-medium">Bônus Exclusivos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
                  <span className="text-slate-700 font-medium">Garantia de satisfação de 7 dias</span>
                </li>
              </ul>
              <button 
                onClick={onBasicClick}
                className="w-full bg-slate-800 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-900 transition-all flex items-center justify-center gap-2 group text-center cursor-pointer"
              >
                QUERO COMEÇAR AGORA!
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Guarantee = () => (
  <section className="py-12 px-4 bg-white text-center">
    <div className="max-w-2xl mx-auto flex flex-col items-center">
      <ShieldCheck className="text-indigo-600 w-16 h-16 mb-4" />
      <h2 className="text-2xl font-bold mb-3">Sua satisfação ou seu dinheiro de volta</h2>
      <p className="text-slate-600">
        Teste o <strong>DecoraIA</strong> por 7 dias. Se você não se sentir inspirado ou sentir que não é para você, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
      </p>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-20 px-4 bg-indigo-50 border-t border-indigo-100">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Não deixe seu lar para depois
      </h2>
      <p className="text-lg text-slate-600 mb-10">
        Esta oferta especial com bônus inclusos está prestes a encerrar. Junte-se a milhares de brasileiros que já estão transformando suas casas hoje.
      </p>
      <button 
        onClick={() => {
          const pricingSection = document.getElementById('pricing');
          if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
        className="inline-block bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all mb-4 cursor-pointer"
      >
        QUERO COMEÇAR AGORA!
      </button>
      <div className="flex items-center justify-center gap-4 text-sm text-slate-500 font-medium">
        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Vagas limitadas</span>
        <span className="flex items-center gap-1"><Wallet className="w-4 h-4" /> Pagamento único</span>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Preciso entender de arquitetura ou design?",
      answer: "De jeito nenhum! O app foi pensado para qualquer pessoa. Basta descrever como quer seu espaço ou subir uma foto e a IA faz o resto."
    },
    {
      question: "Posso subir fotos reais da minha casa?",
      answer: "Sim! Você pode tirar fotos da sua sala, quarto ou cozinha e a IA dará ideias baseadas no que você já tem."
    },
    {
      question: "É um pagamento único ou assinatura mensal?",
      answer: "É um pagamento único. Não existem cobranças surpresas nem mensalidades."
    },
    {
      question: "Como recebo meu acesso?",
      answer: "Assim que completar o pagamento, você receberá um e-mail imediato da Hotmart com os dados para acessar sua conta."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Dúvidas comuns</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
              <button 
                type="button"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                {faq.question}
                {openIdx === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {openIdx === idx && (
                <div className="p-5 text-slate-600 bg-slate-50 border-t border-slate-200 animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-4 bg-slate-900 text-slate-400 text-center text-sm border-t border-slate-800">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Sparkles className="text-indigo-400 w-5 h-5" />
        <span className="text-lg font-bold text-white tracking-tight">DecoraIA</span>
      </div>
      <p className="mb-0">
        © {new Date().getFullYear()} DecoraIA. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

const MediumCTA = () => (
  <div className="flex justify-center py-8">
    <button 
      onClick={() => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }}
      className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-lg hover:shadow-indigo-200 transition-all flex items-center gap-2 group cursor-pointer"
    >
      QUERO COMEÇAR AGORA!
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
);

// --- Refined Popup Component ---
const SecretOfferPopup = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  const handleClaimOffer = () => {
    // Link da Oferta Exclusiva (Upsell)
    const baseUrl = "https://pay.cakto.com.br/fqfo8ed_778171";
    const currentParams = window.location.search;
    let finalUrl = baseUrl;
    if (currentParams) {
      const cleanParams = currentParams.startsWith('?') ? currentParams.substring(1) : currentParams;
      finalUrl += (finalUrl.includes('?') ? '&' : '?') + cleanParams;
    }
    window.location.href = finalUrl;
  };

  const handleBasicRedirect = () => {
    // Link do Plano Básico (Downsell)
    const baseUrl = "https://pay.cakto.com.br/yesmq26_778155";
    const currentParams = window.location.search;
    let finalUrl = baseUrl;
    if (currentParams) {
      const cleanParams = currentParams.startsWith('?') ? currentParams.substring(1) : currentParams;
      finalUrl += (finalUrl.includes('?') ? '&' : '?') + cleanParams;
    }
    window.location.href = finalUrl;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-white w-full max-w-sm rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-indigo-600 p-6 text-white text-center">
          <div className="flex justify-center mb-3">
            <div className="bg-white/10 p-2.5 rounded-xl border border-white/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-lg font-black uppercase tracking-tight leading-tight">
            OFERTA EXCLUSIVA <br />DESBLOQUEADA!
          </h2>
        </div>

        <div className="p-6 text-center">
          <p className="text-slate-600 text-sm font-medium mb-5 leading-relaxed">
            Aproveite o <span className="text-indigo-600 font-bold">Plano Premium</span> com todos os bônus por um valor simbólico único.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 mb-6">
            <div className="flex items-center justify-center gap-2 text-slate-400 line-through text-sm font-bold opacity-60">
              DE R$ 147
            </div>
            <div className="flex items-center justify-center gap-1">
              <span className="text-indigo-900 font-black text-4xl">R$ 19,90</span>
            </div>
            <div className="text-[10px] text-indigo-600 font-bold mt-2 uppercase flex items-center justify-center gap-1.5 bg-white/50 py-1 rounded-full border border-indigo-100/50">
              <Clock className="w-3 h-3" /> Expira em instantes
            </div>
          </div>

          <div className="space-y-2.5 mb-8 text-left max-w-[220px] mx-auto">
            <div className="flex items-center gap-2 text-slate-700 text-xs font-bold">
              <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0" />
              Tudo do Plano Premium
            </div>
            <div className="flex items-center gap-2 text-slate-700 text-xs font-bold">
              <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0" />
              Os 3 bônus profissionais
            </div>
            <div className="flex items-center gap-2 text-slate-700 text-xs font-bold">
              <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0" />
              Suporte VIP WhatsApp
            </div>
          </div>

          <button 
            onClick={handleClaimOffer}
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-base hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
          >
            RESGATAR AGORA
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button 
            onClick={handleBasicRedirect}
            className="mt-4 text-slate-400 text-xs font-medium hover:text-slate-600 underline cursor-pointer"
          >
            Não, obrigado. Prefiro o Plano Básico.
          </button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      
      <MediumCTA />
      <Benefits />
      
      <MediumCTA />
      <Bonuses />
      
      <Pricing onBasicClick={() => setIsPopupOpen(true)} />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />

      {/* Popup Refinado */}
      <SecretOfferPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
