import { motion } from 'framer-motion';
import { ArrowRight, Package, Clock, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative bg-slate-50 overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Blobs/Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-coopstar-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          <motion.div 
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coopstar-100 text-coopstar-700 font-medium text-sm mb-6">
              <span className="w-2 h-2 bg-coopstar-600 rounded-full animate-pulse"></span>
              24 horas de Segunda a Segunda
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:leading-tight">
              Entregas rápidas e <span className="text-coopstar-600">seguras</span> para o seu negócio
            </motion.h1>
            
            <motion.p variants={itemVariants} className="mt-6 text-base text-slate-600 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
              A Coopstar Express é especialista em serviços de Moto Frete. Agilidade, compromisso e mais de nove anos de experiência atuando na capital e Grande São Paulo.
            </motion.p>
            
            <motion.div variants={itemVariants} className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-coopstar-600 hover:bg-coopstar-700 md:text-lg shadow-xl shadow-coopstar-600/30 transition-all hover:-translate-y-1">
                Solicitar Motoboy
                <ArrowRight size={20} />
              </a>
              <a href="#servicos" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 md:text-lg transition-all">
                Ver Serviços
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-16 lg:mt-0 lg:col-span-6 relative"
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Imagem de Representação/Hero */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-coopstar-600/20 to-transparent mix-blend-multiply"></div>
              <img 
                src="/hero_image.png" 
                alt="Motoboy realizando entrega" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Badges */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8 }}
               className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-slate-100"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">+9 Anos</p>
                <p className="text-sm text-slate-500">De experiência</p>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1 }}
               className="absolute top-10 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-slate-100 hidden md:flex"
            >
               <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <Clock size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Plantão 24h</p>
                <p className="text-sm text-slate-500">Com agendamento</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
