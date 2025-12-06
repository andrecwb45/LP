export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-onyx via-onyx-light to-onyx backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-3 sm:py-4 flex items-center justify-between">
        <h1 className="font-inter-tight font-black text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold letter-spacing-wide animate-text-shimmer">
          AF Devs
        </h1>
        <button 
          onClick={() => window.open('https://wa.me/5542991288461?text=Olá! Quero elevar minha presença digital com a AF Devs', '_blank')}
          className="bg-gold text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl font-manrope font-semibold text-sm sm:text-base hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 btn-premium"
        >
          Falar Agora
        </button>
      </div>
    </header>
  );
}
