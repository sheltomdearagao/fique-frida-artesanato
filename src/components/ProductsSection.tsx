
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, Heart } from 'lucide-react';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Pochete Floral',
    category: 'pochetes',
    price: 159.90,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=400&h=500&q=80',
    isNew: true,
  },
  {
    id: 2,
    name: 'Shoulder Bag Azteca',
    category: 'shoulder-bags',
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=400&h=500&q=80',
    isNew: true,
  },
  {
    id: 3,
    name: 'Travel Bag',
    category: 'travel-bags',
    price: 259.90,
    image: 'https://images.unsplash.com/photo-1606422558263-751d7675a860?auto=format&fit=crop&w=400&h=500&q=80',
    isNew: false,
  },
  {
    id: 4,
    name: 'Necessaire Frida',
    category: 'outros',
    price: 69.90,
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&w=400&h=500&q=80',
    isNew: false,
  },
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'pochetes', name: 'Pochetes' },
    { id: 'shoulder-bags', name: 'Shoulder Bags' },
    { id: 'travel-bags', name: 'Travel Bags' },
    { id: 'outros', name: 'Outros' },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="section-container relative">
      {/* Decorative background */}
      <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-frida-yellow opacity-10"></div>
      <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-frida-pink opacity-10"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title centered">Nossos Produtos</h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Peças exclusivas confeccionadas artesanalmente com tecidos de alta qualidade e estampas originais.
            Todas feitas por encomenda para garantir exclusividade.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-frida-red text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="group relative">
              <div className="overflow-hidden rounded-xl shadow-md card-hover bg-white">
                <div className="relative aspect-[4/5]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Favorite button */}
                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <Heart size={16} className="text-gray-600 hover:text-frida-red transition-colors" />
                  </button>
                  
                  {/* New badge */}
                  {product.isNew && (
                    <div className="absolute top-3 left-3 bg-frida-red text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <Tag size={12} className="mr-1" />
                      Novo
                    </div>
                  )}
                  
                  {/* Quick view overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to={`/products/${product.id}`} className="bg-white text-frida-red px-4 py-2 rounded-md font-medium transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      Ver Detalhes
                    </Link>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-frida-red font-semibold">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-sm text-gray-500 capitalize">
                      {/* Aqui está o erro: na linha abaixo estava tentando usar 'category' que não existe no escopo */}
                      {/* Precisamos encontrar a categoria correspondente com base no ID do produto */}
                      {categories.find(cat => cat.id === product.category)?.name || product.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products" className="inline-flex items-center gap-2 text-frida-red font-medium hover:gap-3 transition-all">
            Ver Todos os Produtos <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
