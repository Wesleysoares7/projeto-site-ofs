import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Referência para o menu

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Fechar o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-franciscan-brown-dark shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center md:gap-2">
          <img
            className="w-8"
            src={Logo}
            alt="Tau franciscano com um cordão branco com tres nós"
          />
          <h1 className="text-xl font-bold text-franciscan-brown-light">
            OFS - Fraternidade São Sebastião
          </h1>
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-6 text-franciscan-brown-light">
          <a
            href="#home"
            className="hover:text-white transition-all duration-200"
          >
            Home
          </a>
          <a
            href="#about"
            className=" hover:text-white transition-all duration-200"
          >
            Sobre Nós
          </a>
          <a
            href="#events"
            className=" hover:text-white transition-all duration-200"
          >
            Eventos
          </a>
          <a
            href="#formation"
            className="hover:text-white transition-all duration-200"
          >
            Formação
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-all duration-200"
          >
            Contato
          </a>
        </div>

        {/* Menu sanduíche (mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-franciscan-brown-light focus:outline-none"
          >
            {isOpen ? (
              <span className="text-2xl font-bold">✕</span>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown menu para mobile */}
      {isOpen && (
        <div
          ref={menuRef} // Adiciona a referência
          className="absolute top-16 left-0 w-full bg-white shadow-md z-40"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a
                href="#home"
                className="text-gray-800 hover:text-gray-600 text-lg"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-800 hover:text-gray-600 text-lg"
                onClick={closeMenu}
              >
                Sobre Nós
              </a>
            </li>
            <li>
              <a
                href="#events"
                className="text-gray-800 hover:text-gray-600 text-lg"
                onClick={closeMenu}
              >
                Eventos
              </a>
            </li>
            <li>
              <a
                href="#formation"
                className="text-gray-800 hover:text-gray-600 text-lg"
                onClick={closeMenu}
              >
                Formação
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-800 hover:text-gray-600 text-lg"
                onClick={closeMenu}
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
