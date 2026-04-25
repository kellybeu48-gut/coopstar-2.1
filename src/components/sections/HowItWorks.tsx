import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    { number: '01', title: 'Contato Rápido', description: 'Você aciona nosso time pelo WhatsApp ou telefone.' },
    { number: '02', title: 'Coleta Imediata', description: 'Um motoboy é direcionado ao seu endereço em minutos.' },
    { number: '03', title: 'Entrega Segura', description: 'O material é transportado de forma cuidadosa e ágil.' },
    { number: '04', title: 'Confirmação', description: 'Sua empresa é notificada assim que o destino der o aceite.' },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-coopstar-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="text-center mb-16">
          <h2 className="text-coopstar-300 font-semibold tracking-wide uppercase">Processo Simples</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-white">
            Como Funciona
          </p>
        </div>

        <div className="relative">
          {/* Linha conectora desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-coopstar-800" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative text-center z-10"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-coopstar-800 border-4 border-coopstar-900 flex items-center justify-center text-3xl font-extrabold text-coopstar-400 mb-6 shadow-xl">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-coopstar-200">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
