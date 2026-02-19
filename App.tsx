
import React, { useState } from 'react';
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
  Smartphone
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

// --- Helpers ---

const handleScrollToPricing = () => {
  const pricingSection = document.getElementById('pricing');
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const handleRedirectToCheckout = () => {
  const baseUrl = "https://pay.hotmart.com/I104520274R?off=o5jzsn0i&checkoutMode=10";
  const currentParams = window.location.search;
  
  let finalUrl = baseUrl;
  if (currentParams) {
    const cleanParams = currentParams.startsWith('?') ? currentParams.substring(1) : currentParams;
    finalUrl += `&${cleanParams}`;
  }
  
  window.location.href = finalUrl;
};

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
        Haz realidad la casa de tus sueños <span className="text-indigo-600 italic">sin pagar fortunas</span> a diseñadores
      </h1>
      <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
        ¿Te imaginas tener una sala o recámara de revista? Nuestra Inteligencia Artificial diseña tu espacio ideal en segundos, adaptado a tu estilo y presupuesto.
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
                  alt={`Diseño ${index + 1}`} 
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
        ¿Cansado de que tu casa no se vea como quieres?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <XCircle className="text-red-500 w-8 h-8" />,
            title: "Diseñadores carísimos",
            desc: "Las cotizaciones de los profesionales suelen estar por las nubes y fuera de alcance."
          },
          {
            icon: <XCircle className="text-red-500 w-8 h-8" />,
            title: "Miedo a 'regarla'",
            desc: "No quieres gastar tu dinero en muebles que luego no caben o se ven mal juntos."
          },
          {
            icon: <XCircle className="text-red-500 w-8 h-8" />,
            title: "No saber por dónde empezar",
            desc: "Ves mil ideas en redes pero no sabes cómo aterrizarlas en tu propio espacio."
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
      <h2 className="text-3xl font-bold text-center mb-12">Renueva tu hogar en 3 pasos</h2>
      <div className="grid md:grid-cols-3 gap-12 relative">
        {[
          {
            step: "01",
            title: "Describe tu espacio",
            desc: "Cuéntanos qué quieres lograr o sube una foto de tu cuarto actual."
          },
          {
            step: "02",
            title: "La IA hace la magia",
            desc: "Nuestra herramienta analiza tu espacio y crea propuestas visuales increíbles."
          },
          {
            step: "03",
            title: "Decora con confianza",
            desc: "Recibe tu plan de acomodo y lista de elementos para empezar hoy mismo."
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
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Lo que vas a lograr</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          {
            icon: <Palette className="text-indigo-600 w-6 h-6" />,
            title: "Combinaciones perfectas",
            desc: "Paletas de colores y estilos que fluyen de forma natural."
          },
          {
            icon: <Layout className="text-indigo-600 w-6 h-6" />,
            title: "Aprovecha cada rincón",
            desc: "Optimiza tus metros cuadrados, ya sea en una casa grande o un depa pequeño."
          },
          {
            icon: <Smartphone className="text-indigo-600 w-6 h-6" />,
            title: "Acceso total e inmediato",
            desc: "Usa la plataforma las veces que quieras para todos los cuartos de tu casa."
          },
          {
            icon: <Lightbulb className="text-indigo-600 w-6 h-6" />,
            title: "Ideas que sí funcionan",
            desc: "Sugerencias reales y prácticas que puedes ejecutar sin complicaciones."
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
          Regalos por tiempo limitado
        </span>
        <h2 className="text-3xl font-bold">Bonos de Acción Rápida</h2>
      </div>
      <div className="space-y-4">
        {[
          { 
            title: "Bono 1: Guía Maestra de Colores", 
            val: "$12 USD", 
            desc: "Aprende a combinar tonos como un profesional. Dale esa vibra de hotel a tu recámara principal." 
          },
          { 
            title: "Bono 2: Checklist de Compras Inteligentes", 
            val: "$15 USD", 
            desc: "Ahorra dinero comprando solo lo que realmente necesitas. No más gastos inesperarios." 
          },
          { 
            title: "Bono 3: Manual 'Evita los errores típicos'", 
            val: "$19 USD", 
            desc: "Descubre qué es lo que apaga tu hogar y cómo corregirlo en un fin de semana." 
          }
        ].map((item, idx) => (
          <div key={idx} className="flex justify-between items-start gap-4 p-5 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50">
            <div className="flex-1">
              <h3 className="font-bold text-indigo-900 text-lg">{item.title}</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
            </div>
            <div className="text-right shrink-0">
              <span className="block text-xs text-slate-400 font-medium mb-1 italic">VALORADO EN:</span>
              <span className="font-bold text-red-500 line-through text-base italic">{item.val}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-20 px-4 bg-slate-50">
    <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
      <div className="bg-indigo-600 p-8 text-center text-white">
        <h3 className="text-xl font-semibold opacity-90 mb-2">Acceso de por vida</h3>
        <div className="flex justify-center items-center gap-3">
          <span className="text-2xl font-bold text-red-400 line-through opacity-80">$69</span>
          <div className="flex items-end gap-1">
            <span className="text-5xl font-extrabold">$5</span>
            <span className="text-xl mb-1 opacity-75">USD</span>
          </div>
        </div>
        <p className="mt-2 text-indigo-100 text-sm">Pago único. Sin mensualidades.</p>
      </div>
      <div className="p-8">
        <ul className="space-y-4 mb-8">
          {[
            "Uso ilimitado de la plataforma",
            "Sugerencias visuales en segundos",
            "Imágenes en alta resolución",
            "Acceso a los 3 bonos exclusivos",
            "Soporte prioritario por WhatsApp",
            "Garantía de satisfacción de 7 días",
            "Acceso inmediato tras tu pago"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
        <a 
          href="#checkout"
          onClick={(e) => { e.preventDefault(); handleRedirectToCheckout(); }}
          className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group text-center cursor-pointer"
        >
          ¡SÍ, QUIERO MI CASA NUEVA AHORA!
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
        <p className="text-center text-xs text-slate-400 mt-4 italic">
          Compra 100% segura y encriptada.
        </p>
      </div>
    </div>
  </section>
);

const Guarantee = () => (
  <section className="py-12 px-4 bg-white text-center">
    <div className="max-w-2xl mx-auto flex flex-col items-center">
      <ShieldCheck className="text-indigo-600 w-16 h-16 mb-4" />
      <h2 className="text-2xl font-bold mb-3">Tu satisfacción es nuestra ley</h2>
      <p className="text-slate-600">
        Prueba <strong>DecoraIA</strong> por 7 días. Si no te sientes inspirado o sientes que no es para ti, te devolvemos tu dinero de inmediato. Sin preguntas ni vueltas.
      </p>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-20 px-4 bg-indigo-50 border-t border-indigo-100">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        No dejes tu hogar para después
      </h2>
      <p className="text-lg text-slate-600 mb-10">
        Esta oferta especial con bonos incluidos está por terminar. Únete a los miles de latinos que ya están transformarndo sus casas hoy.
      </p>
      <a 
        href="#pricing"
        onClick={(e) => { e.preventDefault(); handleScrollToPricing(); }}
        className="inline-block bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all mb-4 cursor-pointer"
      >
        Empezar mi transformación hoy
      </a>
      <div className="flex items-center justify-center gap-4 text-sm text-slate-500 font-medium">
        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Cupos limitados</span>
        <span className="flex items-center gap-1"><Wallet className="w-4 h-4" /> Un solo pago</span>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "¿Necesito saber de arquitectura o diseño?",
      answer: "Para nada. La app está pensada para cualquier persona. Solo escribe cómo quieres que se sienta tu espacio y listo."
    },
    {
      question: "¿Puedo subir fotos reales de mi casa?",
      answer: "¡Claro! Puedes subir fotos de tu sala, comedor o recámara y la IA te dará ideas basadas en lo que ya tienes."
    },
    {
      question: "¿Es un pago único o mensual?",
      answer: "Es un pago único de solo $5 USD. No hay cargos sorpresa ni suscripciones mensuales."
    },
    {
      question: "¿Cómo recibo mi acesso?",
      answer: "Al completar tu pago, Hotmart te enviará un correo de inmediato con los pasos para entrar a tu cuenta."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Dudas comunes</h2>
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
        © {new Date().getFullYear()} DecoraIA. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

const MediumCTA = () => (
  <div className="flex justify-center py-8">
    <a 
      href="#pricing"
      onClick={(e) => { e.preventDefault(); handleScrollToPricing(); }}
      className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-lg hover:shadow-indigo-200 transition-all flex items-center gap-2 group cursor-pointer"
    >
      ¡QUIERO EL DESCUENTO AHORA!
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </a>
  </div>
);

export default function App() {
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
      
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
