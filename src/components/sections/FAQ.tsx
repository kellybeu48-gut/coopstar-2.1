import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Vocês atendem finais de semana e feriados?',
      answer: 'Sim, a Coopstar Express possui plantão 24 horas de segunda a segunda-feira, mediante agendamento com hora marcada corporativa.',
    },
    {
      question: 'Qual é a região de cobertura de vocês?',
      answer: 'Atendemos em toda a São Paulo (Capital) e Grande São Paulo de forma expressa, e possuímos rotas exclusivas para regiões de fora da Capital (sob consulta).',
    },
    {
      question: 'Existe serviço de entregador fixo (mensalista)?',
      answer: 'Sim! Além das corridas avulsas, montamos parcerias e planos para empresas que necessitam de equipe dedicada no local (Delivery/Farmácias/Restaurantes).',
    },
    {
      question: 'Como faço para solicitar a tabela de preços?',
      answer: 'Basta entrar em contato pelo nosso telefone ou WhatsApp. Nossa equipe te enviará nossa tabela e avaliará a melhor solução para sua necessidade.',
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Dúvidas Frequentes</h2>
          <p className="mt-4 text-xl text-slate-500">Tudo o que você precisa saber sobre as nossas entregas.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-coopstar-500"
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                aria-expanded={index === openIndex}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown 
                  className={`text-slate-400 transition-transform duration-300 ${index === openIndex ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              
              <AnimatePresence>
                {index === openIndex && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-4 text-slate-600 border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
