export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-coopstar-600 rounded-md flex items-center justify-center shadow-md pb-[1px]">
                <span className="text-white font-bold text-sm">CE</span>
              </div>
              <span className="text-xl font-bold text-white">
                Coopstar<span className="text-coopstar-500">Express</span>
              </span>
            </a>
            <p className="text-slate-400 max-w-sm mb-6">
              Agilidade e confiança em entregas há mais de nove anos. O parceiro logístico que sua empresa precisa em São Paulo.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#quem-somos" className="text-slate-400 hover:text-coopstar-400 transition-colors">Quem Somos</a></li>
              <li><a href="#servicos" className="text-slate-400 hover:text-coopstar-400 transition-colors">Nossos Serviços</a></li>
              <li><a href="#como-funciona" className="text-slate-400 hover:text-coopstar-400 transition-colors">Como Funciona</a></li>
              <li><a href="#contato" className="text-slate-400 hover:text-coopstar-400 transition-colors">Contato Integrado</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Central de Atendimento</h3>
            <ul className="space-y-3 text-slate-400">
              <li>(11) 5052-3563</li>
              <li>(11) 5051-4442</li>
              <li>coopstar_express@hotmail.com</li>
              <li className="pt-2 text-sm text-slate-500">Av. Jurucê, 898 - Moema / SP</li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {currentYear} Coopstar Express. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            Design otimizado e focado em alta velocidade.
          </div>
        </div>

      </div>
    </footer>
  );
}
