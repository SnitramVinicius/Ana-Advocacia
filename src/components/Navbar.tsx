"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mail, Instagram, Phone } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
  if (menuOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return () => {
    document.body.classList.remove("overflow-hidden");
  };
}, [menuOpen]);

  return (
    <header className="bg-[#592526] text-white shadow-md max-w-2xl mx-auto rounded-b-2xl font-open z-10 relative">
      {/* Botão do menu hambúrguer (mobile) */}
      <div className="md:hidden absolute right-4 top-4 z-20">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu de navegação no desktop */}
      <div className="hidden md:flex justify-center space-x-20 py-4">
        <a href="#sobre" className="hover:text-[#c5972c] text-md">
          Sobre
        </a>
        <a href="#areas" className="hover:text-[#c5972c] text-md">
          Áreas de atuação
        </a>
        <a href="#atendimento" className="hover:text-[#c5972c] text-md">
          Atendimento
        </a>
        <a href="#contato" className="hover:text-[#c5972c] text-md">
          Contato
        </a>
      </div>

      {/* Menu mobile fullscreen */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-md text-white z-50 flex flex-col justify-between p-6">
          {/* Botão fechar (redundante, já tem no canto superior) */}
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* Itens de navegação */}
  <nav className="flex flex-col items-start text-left space-y-6 mt-1">
  <a href="#" className="hover:text-[#c5972c] text-lg">
    Sobre
  </a>
  <a href="#" className="hover:text-[#c5972c] text-lg">
    Áreas de Atuação
  </a>
  <a href="#" className="hover:text-[#c5972c] text-lg">
    Contato
  </a>
</nav>

          {/* Contatos e redes sociais */}
          <div className="mt-10 text-sm space-y-3">
            <p className="font-semibold text-[#c5972c]">Outras formas de contato</p>
            <a
    href="https://www.instagram.com/anaclaudiamartins.adv"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:underline"
  >
              <Instagram size={16} />
              <span>@Ana.Claudia_Martins</span>
            </a>
 <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=anaclaudiamartins@gmail.com&su=Solicitação%20de%20Atendimento%20Jurídico"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 hover:underline"
>
  <Mail size={16} />
  <span>anaclaudiamartins@gmail.com</span>
</a>
              <a
    href="https://wa.me/5567999999999"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:underline"
  >
    <Phone size={16} />
    <span>(67) 99194-4153 
</span>
  </a>
          </div>
        </div>
      )}
    </header>
  );
}