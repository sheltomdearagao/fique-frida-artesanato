
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/lovable-uploads/824c25d5-0b7c-470e-9dc1-216f207b345b.png" 
                alt="Fique Frida Logo" 
                className="h-16"
              />
            </Link>
            <p className="text-gray-600 mb-4">
              Arte e artesanato inspirados em Frida Kahlo, produtos únicos com estampas originais.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/fiquefrida"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-frida-red hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/fiquefrida"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-frida-red hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="mailto:contato@fiquefrida.com.br"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-frida-red hover:text-white transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-frida-red transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-frida-red transition-colors">Produtos</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-frida-red transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-frida-red transition-colors">Contato</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=bolsas" className="text-gray-600 hover:text-frida-red transition-colors">Bolsas</Link>
              </li>
              <li>
                <Link to="/products?category=mochilas" className="text-gray-600 hover:text-frida-red transition-colors">Mochilas</Link>
              </li>
              <li>
                <Link to="/products?category=carteiras" className="text-gray-600 hover:text-frida-red transition-colors">Carteiras</Link>
              </li>
              <li>
                <Link to="/products?category=acessorios" className="text-gray-600 hover:text-frida-red transition-colors">Acessórios</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                Salvador, Bahia - Brasil
              </li>
              <li className="text-gray-600">
                contato@fiquefrida.com.br
              </li>
              <li className="text-gray-600">
                (71) 99999-9999
              </li>
              <li className="text-gray-600">
                Segunda a Sexta: 9h às 18h
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Fique Frida. Todos os direitos reservados.
          </p>
          <div className="flex items-center">
            <span className="text-gray-500 text-sm flex items-center">
              Feito com <Heart size={14} className="mx-1 text-frida-red" /> em Salvador, Bahia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
