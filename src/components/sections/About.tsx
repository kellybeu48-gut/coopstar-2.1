import { motion } from 'framer-motion';
import { Target, MapPin, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      name: 'Especialistas no que fazemos',
      description: 'Atuamos fortemente e exclusivamente no mercado de entregas garantindo processos redondos.',
      icon: Target,
    },
    {
      name: 'Abrangência Estratégica',
      description: 'Sediados em Moema, com cobertura rápida em toda São Paulo (Capital) e Grande SP.',
      icon: MapPin,
    },
    {
      name: 'Agilidade Notável',
      description: 'Desempenhamos a importante função de agilizar a rotina da sua empresa sem gargalos.',
      icon: Zap,
    },
  ];

  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-coopstar-600 font-semibold tracking-wide uppercase">Quem Somos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Uma empresa dedicada ao sucesso das suas entregas
          </p>
          <p className="mt-4 max-w-3xl text-xl text-slate-500 lg:mx-auto">
            A Coopstar Express é uma empresa especializada no serviço de entregas e coletas e já atuamos há mais de 
            nove anos no mercado com excelência.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-coopstar-600 text-white shadow-xl">
                    <feature.icon size={24} />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-bold text-slate-900">{feature.name}</h3>
                  <p className="mt-4 text-base text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
