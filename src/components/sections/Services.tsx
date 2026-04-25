import { motion } from 'framer-motion';
import { FileText, Pizza, Map } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Serviços Moto Frete',
      description: 'Entregas rápidas de documentos e pequenos volumes de um ponto a outro da cidade, incluindo serviços bancários, cartórios, despachos e retiradas em aeroportos.',
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      title: 'Delivery Corporativo',
      description: 'Se a sua empresa tem grande volume de encomendas leves, implantamos um serviço de delivery com o melhor custo-benefício (ex: Farmácias, Auto Peças, Restaurantes).',
      icon: Pizza,
      color: 'bg-coopstar-600',
    },
    {
      title: 'Corridas fora da Capital',
      description: 'Levamos ou coletamos a sua encomenda para fora de São Paulo através de nossas rotas expandidas com segurança.',
      icon: Map,
      color: 'bg-indigo-500',
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-coopstar-600 tracking-wide uppercase">O que oferecemos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Nossos Serviços
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Soluções completas de entrega para o dia-a-dia do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group cursor-default"
            >
              <div className="p-8">
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="bg-slate-50 p-4 border-t border-slate-100">
                <a href="#contato" className="text-coopstar-600 font-medium hover:text-coopstar-800 flex items-center transition-colors">
                  Solicitar Orçamento 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
