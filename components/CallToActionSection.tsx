import React, { useState, FormEvent } from 'react';
import { HeartIcon, WhatsAppIcon, FacebookIcon, TwitterIcon } from './icons';

const initialMessages = [
    "Que iniciativa incrível! Ações assim fazem a diferença. 💚",
    "Parabéns, Açaí Arretado! Orgulho de ser cliente de vocês.",
    "Vamos todos ajudar! Cada embalagem conta.",
    "Sustentabilidade e solidariedade de mãos dadas. Lindo de ver! 🌱",
];

const MessageBoard: React.FC = () => {
    const [messages, setMessages] = useState<string[]>(initialMessages);
    const [newMessage, setNewMessage] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (newMessage.trim()) {
            setMessages(prev => [newMessage.trim(), ...prev]);
            setNewMessage('');
        }
    };

    return (
        <div className="mt-16 text-left max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-purple-900 mb-6 text-center">Mural da Comunidade</h3>
             <form onSubmit={handleSubmit} className="mb-6 bg-white/50 p-4 rounded-lg shadow-sm">
                <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Deixe sua mensagem de apoio aqui..."
                    className="w-full h-20 p-3 rounded-md border-2 border-transparent bg-white focus:border-purple-500 focus:ring-purple-500 transition duration-300 text-purple-900 placeholder-purple-800/70"
                    maxLength={150}
                />
                <button type="submit" className="w-full mt-2 bg-purple-800 text-white font-bold py-3 px-6 rounded-md hover:bg-purple-900 transition-all duration-300 shadow-md">
                    Enviar Mensagem
                </button>
            </form>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-80 overflow-y-auto p-4 bg-white/30 rounded-lg">
                {messages.map((msg, index) => (
                    <div 
                        key={index} 
                        className="p-4 rounded-md shadow-sm text-purple-900 bg-white/80 pop-in-anim"
                    >
                        {msg}
                    </div>
                ))}
            </div>
        </div>
    )
}


const CallToActionSection: React.FC = () => {
  const shareUrl = "https://acai-que-floresce.example.com"; // Replace with actual URL
  const shareText = "Estou apoiando o projeto Açaí que Floresce! Uma iniciativa incrível que transforma embalagens em solidariedade. Conheça e apoie você também! 🌱💜";

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(shareText);

  const whatsappLink = `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`;
  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterLink = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;

  return (
    <section id="cta" className="bg-yellow-300 py-24">
      <div className="container mx-auto px-6 text-center">
        <div className="fade-in-up max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Faça Parte Dessa Mudança!</h2>
            <p className="text-purple-800 text-lg mx-auto mb-8">
            “Cada copo que você devolve pode florescer em uma nova vida e alimentar quem precisa.”
            </p>
            <div className="mb-12">
                <a
                    href="#donate"
                    className="inline-flex items-center gap-3 bg-green-500 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-green-600 transition-all duration-300 shadow-lg transform hover:scale-105"
                    aria-label="Faça uma doação para apoiar o projeto"
                >
                    <HeartIcon className="text-2xl" />
                    <span>Doar Agora</span>
                </a>
            </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-center max-w-4xl mx-auto mb-12">
            <div className="bg-white/50 p-6 rounded-lg w-full fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h4 className="font-bold text-purple-800 text-lg">Traga suas embalagens</h4>
                <p className="text-purple-700 text-sm">Lembre-se de trazê-las limpas para facilitar a reciclagem.</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg w-full fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h4 className="font-bold text-purple-800 text-lg">Compre uma muda</h4>
                <p className="text-purple-700 text-sm">Leve mais verde para sua casa e ajude uma causa nobre.</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg w-full fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h4 className="font-bold text-purple-800 text-lg">Divulgue o projeto</h4>
                <p className="text-purple-700 text-sm">Compartilhe essa ideia com seus amigos e familiares.</p>
            </div>
        </div>
        
        <div className="mt-16 fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h4 className="font-bold text-purple-800 text-xl mb-4">Compartilhe essa Causa</h4>
            <div className="flex justify-center items-center gap-4 flex-wrap">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no WhatsApp" className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold py-2 px-5 rounded-full hover:opacity-90 transition-opacity shadow-md">
                    <WhatsAppIcon className="text-xl" />
                    <span>WhatsApp</span>
                </a>
                <a href={facebookLink} target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no Facebook" className="inline-flex items-center gap-3 bg-[#1877F2] text-white font-bold py-2 px-5 rounded-full hover:opacity-90 transition-opacity shadow-md">
                    <FacebookIcon className="text-xl" />
                    <span>Facebook</span>
                </a>
                <a href={twitterLink} target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no Twitter" className="inline-flex items-center gap-3 bg-[#14171A] text-white font-bold py-2 px-5 rounded-full hover:opacity-90 transition-opacity shadow-md">
                    <TwitterIcon className="text-xl" />
                    <span>Twitter</span>
                </a>
            </div>
        </div>

        <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
            <MessageBoard />
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;