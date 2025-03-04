import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-franciscan-brown-dark text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
        <p className="text-sm mt-2">
          Desenvolvido por{" "}
          <a
            href="https://www.wssweb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            WSSWeb
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
