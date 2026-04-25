import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Informações de Contato */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Entre em contato</h2>
            <p className="text-lg text-slate-600 mb-10">
              Faça já seu cadastro ou solicite um representante. Estamos sempre prontos para lhe atender e fechar a melhor parceria para o seu negócio!
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-coopstar-100 text-coopstar-600">
                    <Phone size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Telefones</h3>
                  <p className="mt-1 text-slate-600 font-medium text-lg">(11) 5052-3563</p>
                  <p className="text-slate-600 font-medium text-lg">(11) 5051-4442</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-coopstar-100 text-coopstar-600">
                    <Mail size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Email</h3>
                  <p className="mt-1 text-slate-600">coopstar_express@hotmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-coopstar-100 text-coopstar-600">
                    <MapPin size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Endereço</h3>
                  <p className="mt-1 text-slate-600">Av. Jurucê, 898 - Moema</p>
                  <p className="text-slate-600">São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-coopstar-100 text-coopstar-600">
                    <Clock size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Horário</h3>
                  <p className="mt-1 text-slate-600">Plantão 24h (Todos os dias)</p>
                  <p className="text-slate-600 text-sm">*Atendimento corporativo mediante agendamento.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="https://wa.me/551150523563" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 md:text-lg shadow-xl shadow-green-600/30 transition-all hover:-translate-y-1 w-full sm:w-auto"
              >
                Chamar no WhatsApp
              </a>
            </div>

          </motion.div>

          {/* Mapa / Imagem visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl relative h-[500px] border border-slate-200"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.046908320496!2d-46.6664917!3d-23.6026521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a0a3821a719%3A0xe542fff8e6bfedfa!2sAv.%20Juruc%C3%AA%2C%20898%20-%20Indian%C3%B3polis%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004080-012!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa localização Coopstar Express Moema"
              className="absolute inset-0"
            ></iframe>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
