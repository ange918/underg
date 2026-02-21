import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-primary rounded-lg flex items-center justify-center text-white font-urbain text-2xl"><img src="under.PNG" alt="logo" /></div>
          <span className="font-urbain text-2xl tracking-tight">UNDERGROUND <span className="italic text-red-accent">BOUGE</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-red-accent transition-colors">Accueil</a>
          <a href="#about" className="hover:text-red-accent transition-colors">À propos</a>
          <a href="#services" className="hover:text-red-accent transition-colors">Services</a>
          <a href="#openshow" className="hover:text-red-accent transition-colors">Open Show</a>
          <a href="#contact" className="hover:text-red-accent transition-colors">Contact</a>
        </nav>

        <a href="#join" className="hidden sm:flex md:hidden btn-primary py-2 text-sm "><img src="/list.svg" alt="Menu" /></a>
        <a href="#join" className="hidden md:flex btn-primary py-2 text-sm ">Rejoindre le mouvement</a>
      </header>

      <main>
        {/* 2. HERO SECTION */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gray-dark">

          <Image 
              src="/bgunder.PNG "
              alt="Live concert atmosphere"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-primary/30 to-gray-dark/80"></div>
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="font-urbain text-6xl md:text-8xl text-white mb-6 animate-fade-in">
              RÉVÉLER LES TALENTS <br/>
              <span className="text-red-accent">URBAINS DU BÉNIN</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto">
              Underground Bouge accompagne, promeut et propulse la nouvelle génération d'artistes urbains ainsi que les radios partenaires. La promotion des marques et partenaires est de mise par le "PULL STRATEGY" 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#artist" className="btn-primary text-lg">Devenir artiste</a>
              <a href="#partner" className="btn-secondary text-lg">Devenir partenaire</a>
            </div>
          </div>
          
          {/* Fines lignes graphiques */}
          <div className="absolute top-1/4 left-10 w-32 h-[1px] bg-red-accent/50 rotate-45 hidden lg:block"></div>
          <div className="absolute bottom-1/4 right-10 w-48 h-[1px] bg-red-accent/50 -rotate-45 hidden lg:block"></div>
        </section>

        {/* 3. SECTION ABOUT */}
        <section id="about" className="section-padding bg-white">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-urbain text-4xl md:text-5xl mb-8">
                UN MOUVEMENT. <br/>
                <span className="text-blue-primary">UNE VISION.</span> <br/>
                <span className="text-red-accent">UNE GÉNÉRATION.</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Créé en 2017, Underground Bouge est né de la volonté de donner une voix à ceux qui n'en ont pas. 
                  Nous ne sommes pas qu'une plateforme de promotion, nous sommes un catalyseur de talents.
                </p>
                <p>
                  Notre mission est de structurer l'écosystème de la musique urbaine au Bénin en offrant des opportunités 
                  réelles de scène, de formation et de mise en relation.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12"> 
                {[
                  { label: "Open Shows", value: "07" },
                  { label: "Participants", value: "150+" },
                  { label: "Artistes / Édition", value: "10" },
                  { label: "Depuis", value: "2017" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="font-urbain text-4xl text-red-accent">{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/under.PNG"
                alt="Open Show event"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 4. SECTION SERVICES */}
        <section id="services" className="section-padding bg-gray-50">
          <div className="text-center mb-16">
            <h2 className="font-urbain text-4xl md:text-5xl mb-4">CE QUE NOUS OFFRONS</h2>
            <div className="w-20 h-1 bg-red-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
             
              <div className="card group cursor-pointer">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors bg-blue-primary/10 text-blue-primary' : 'bg-red-accent/10 text-red-accent'} group-hover:bg-red-accent group-hover:text-white`}>
                  {/* Icon placeholder */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Communication Digitale</h3>
                <p className="text-gray-500">Notre initiative s’étant donné le challenge de rallier tous les passionnés via le net, notre mix communicationnel est plus basé sur les différents réseaux sociaux que sont Facebook et WhatsApp. Un réseau de partage et d’identification très actif qui a été initié et mis en place pour assurer le relai sur la toile.</p>
              </div>
               <div className="card group cursor-pointer">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors bg-blue-primary/10 text-blue-primary' : 'bg-red-accent/10 text-red-accent'} group-hover:bg-red-accent group-hover:text-white`}>
                  {/* Icon placeholder */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Communication Radio</h3>
                <p className="text-gray-500">En collaboration avec plusieurs radios du Bénin, les chansons des artistes promus sont diffusées durant toute la période. Entre autres partenaires media, nous pouvons citer les émissions telles que : Hip-Hop Horizon de la radio Carrefour dans le centre du pays, Rap Sentence de Radio Bénin Culture dans l’Ouémé et Top Star Urban Show de la radio Gerddès Fm toujours dans l’Ouémé. De nombreux autres radios et émissions sont actuellement en pourparlers avec les gestionnaires du projet afin de se hisser au rang des partenaires. </p>
              </div>
              <div className="card group cursor-pointer">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors bg-blue-primary/10 text-blue-primary' : 'bg-red-accent/10 text-red-accent'} group-hover:bg-red-accent group-hover:text-white`}>
                  {/* Icon placeholder */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Communication Visuelle</h3>
                <p className="text-gray-500">une chaîne YouTube est dédiée spécialement pour le partage des différents spots publicitaires du projet, le visuel de nos différents spectacles, des freestyles party…</p>
              </div>
            
            
          </div>
        </section>

        {/* 5. SECTION OPEN SHOW */}
        <section id="openshow" className="section-padding bg-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-red-accent font-bold tracking-[0.2em] mb-4 block">L'ÉVÉNEMENT PHARE</span>
            <h2 className="font-urbain text-5xl md:text-7xl mb-8">OPEN SHOW</h2>
            <p className="text-xl text-gray-600 mb-12">
              Une scène ouverte aux pépites. Performances live, sessions freestyle, battles et rencontres avec des artistes confirmés. C'est ici que l'histoire s'écrit.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {['Performances Live', 'Freestyles', 'Battles', 'Récompenses'].map((item, i) => (
                <div key={i} className="py-4 border border-gray-100 rounded-lg font-semibold">
                  {item}
                </div>
              ))}
            </div>
            
            <a href="#dates" className="btn-primary">Voir les prochaines dates</a>
          </div>
        </section>

        {/* 6. SECTION TÉMOIGNAGES */}
        <section className="section-padding bg-blue-primary text-white">
          <div className="text-center mb-16">
            <h2 className="font-urbain text-4xl md:text-5xl mb-4 text-white">ILS ONT BOUGÉ AVEC NOUS</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
              <div className="bg-white p-8 rounded-2xl text-gray-dark relative">
                <div className="text-red-accent text-5xl font-serif absolute top-4 left-4 opacity-20">“</div>
                <p className="relative z-10 mb-6 italic">
                  "Underground Bouge a été le premier média à soutenir mes initiatives depuis plus de 4 ans."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden relative">
                    <Image src={`/Yoan.jpeg`} alt="Yoan" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-bold">Yoan Melson DANSOU</div>
                    <div className="text-sm text-gray-500">CEO/FuturCraft Institut</div>
                  </div>
                </div>
              </div>
               <div className="bg-white p-8 rounded-2xl text-gray-dark relative">
                <div className="text-red-accent text-5xl font-serif absolute top-4 left-4 opacity-20">“</div>
                <p className="relative z-10 mb-6 italic">
                  "Underground Bouge a été un canal actif pour nous. Je vous invite humblement à vous abonner"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden relative">
                    <Image src={`/FatB.jpeg`} alt="Fat" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-bold">Fat B</div>
                    <div className="text-sm text-gray-500">Artiste/Rapeur</div>
                  </div>
                </div>
              </div>
             <div className="bg-white p-8 rounded-2xl text-gray-dark relative">
                <div className="text-red-accent text-5xl font-serif absolute top-4 left-4 opacity-20">“</div>
                <p className="relative z-10 mb-6 italic">
                  "Underground Bouge, l'une des meilleures pages culturelles que je suivais a été désactivée.Je vous recommande de vous abonné."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden relative">
                    <Image src={`/Miagones.jpeg`} alt="Miagones" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-bold">Miagones</div>
                    <div className="text-sm text-gray-500">Créateur Digital</div>
                  </div>
                </div>
              </div>
            
          </div>
        </section>

        {/* 7. CALL TO ACTION */}
        <section id="join" className="section-padding bg-red-accent text-white text-center">
          <h2 className="font-urbain text-5xl md:text-7xl mb-8">PRÊT À FAIRE <br className="md:hidden"/> BOUGER TA CARRIÈRE ?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <a href="#artist" className="bg-white text-red-accent px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl">Je suis artiste</a>
            <a href="#partner" className="bg-blue-primary text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-blue-primary/90 transition-colors shadow-xl border border-white/20">Je suis partenaire</a>
          </div>
        </section>

        {/* 8. SECTION CONTACT */}
        <section id="contact" className="section-padding bg-white">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="font-urbain text-4xl mb-8">ENTRONS EN CONTACT</h2>
              <form className="space-y-6">
                <input type="text" placeholder="Nom complet" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-red-accent transition-colors" />
                <input type="email" placeholder="Email" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-red-accent transition-colors" />
                <input type="tel" placeholder="Téléphone" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-red-accent transition-colors" />
                <textarea placeholder="Message" rows={4} className="w-full p-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-red-accent transition-colors"></textarea>
                <button type="submit" className="btn-primary w-full">Envoyer le message</button>
              </form>
            </div>
            
            <div className="bg-blue-primary text-white p-12 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-8">Informations</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"><img src="envelope.svg" alt="Mail" /></span>
                    <span>undergroundbouge@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"><img src="/telephone.svg" alt="Call" /></span>
                    <span>+229 01 67 27 52 68</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/undergroundbougelevrai" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-accent transition-colors"><img src="facebook.svg" alt="Facebook" /></a>
                  <a href="https://www.tiktok.com/@underground_bouge?_r=1&_t=ZS-946m2AOZ8sv" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-accent transition-colors"><img src="tiktok.svg" alt="Tiktok" /></a>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 9. FOOTER */}
      <footer className="bg-gray-dark text-white/60 py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="font-urbain text-2xl text-white mb-2 tracking-tight">UNDERGROUND <span className="italic text-red-accent">BOUGE</span></div>
            <p className="text-sm max-w-xs">Promotion de la culture urbaine béninoise depuis 2017.</p>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-white">
            <a href="#" className="hover:text-red-accent transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-red-accent transition-colors">Confidentialité</a>
          </div>
          
          <div className="text-sm">
            © {new Date().getFullYear()} Underground Bouge. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}