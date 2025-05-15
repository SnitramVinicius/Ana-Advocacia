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
        <a href="#" className="hover:text-[#c5972c] text-sm">
          Sobre
        </a>
        <a href="#" className="hover:text-[#c5972c] text-sm">
          Áreas de atuação
        </a>
        <a href="#" className="hover:text-[#c5972c] text-sm">
          Contato
        </a>
      </div>

      {/* Menu mobile fullscreen */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 text-white z-50 flex flex-col justify-between p-6">
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
            <div className="flex items-center gap-2">
              <Instagram size={16} />
              <span>@Ana.Claudia_Martins</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>anaclaudiamartins@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>(67) 9 9999-9999</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}