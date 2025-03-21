
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Grid, List, Filter, SlidersHorizontal, ChevronDown, Search } from 'lucide-react';

// Sample product data - would be fetched from an API in a real application
const allProducts = [
  {
    id: 1,
    name: 'Bolsa Floral',
    category: 'bolsas',
    price: 159.90,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=400&h=500&q=80',
    isNew: true,
    description: 'Bolsa artesanal com estampa floral inspirada nas obras de Frida Kahlo.'
  },
  {
    id: 2,
    name: 'Mochila Azteca',
    category: 'mochilas',
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=400&h=500&q=80',
    isNew: true,
    description: 'Mochila com padrões geométricos inspirados na arte azteca mexicana.'
  },
  {
    id: 3,
    name: 'Carteira Boho',
    category: 'carteiras',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1606422558263-751d7675a860?auto=format&fit=crop&w=400&h=500&q=80',
    isNew: false,
    description: 'Carteira em estilo boho com detalhes bordados à mão.'
  },
  {
    id: 4,
    name: 'Necessaire Frida',
    category: 'acessorios',
    price: 69.90,
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&w=400&h=500&q=80',
    isNew: false,
    description: 'Necessaire com estampa exclusiva de Frida Kahlo.'
  },
  {
    id: 5,
    name: 'Bolsa Tecido Mexicano',
    category: 'bolsas',
    price: 169.90,
    image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=400&h=500&q=80',
    isNew: false,
    description: 'Bolsa feita com tecido inspirado nas tradições mexicanas.'
  },
  {
    id: 6,
    name: 'Porta Moedas',
    category: 'carteiras',
    price: 49.90,
    image: 'https://images.unsplash.com/photo-1593656742942-a8c43c2e28e2?auto=format&fit=crop&w=400&h=500&q=80',
    isNew: true,
    description: 'Pequeno porta moedas com design exclusivo.'
  },
  {
    id: 7,
    name: 'Mochila Jeans',
    category: 'mochilas',
    price: 199.90,
    image: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=400&h=500&q=80',
    isNew: false,
    description: 'Mochila com aplicações de jeans reciclado e bordados artesanais.'
  },
  {
    id: 8,
    name: 'Chaveiro Frida',
    category: 'acessorios',
    price: 29.90,
    image: 'https://images.unsplash.com/photo-1611010344444-5f9e4d86a6e1?auto=format&fit=crop&w=400&h=500&q=80',
    isNew: true,
    description: 'Chaveiro artesanal com pingente de Frida Kahlo.'
  },
];

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category');
  
  const [products, setProducts] = useState(allProducts);
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'all');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 250 });
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'bolsas', name: 'Bolsas' },
    { id: 'mochilas', name: 'Mochilas' },
    { id: 'carteiras', name: 'Carteiras' },
    { id: 'acessorios', name: 'Acessórios' },
  ];
  
  // Filter products when category or other filters change
  useEffect(() => {
    let filtered = allProducts;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }
    
    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setProducts(filtered);
  }, [activeCategory, priceRange, searchTerm]);
  
  // Scroll to top on page load or category change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeCategory]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-8 bg-gradient-to-r from-frida-soft-pink via-white to-frida-soft-yellow">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center">Nossos Produtos</h1>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Descubra nossa coleção de bolsas, mochilas e acessórios exclusivos confeccionados artesanalmente.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Search and filter bar */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-auto flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-frida-red focus:border-transparent transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="hidden md:flex items-center space-x-2">
                <button
                  className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                  onClick={() => setViewMode('grid')}
                  aria-label="View as grid"
                >
                  <Grid size={18} />
                </button>
                <button
                  className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                  onClick={() => setViewMode('list')}
                  aria-label="View as list"
                >
                  <List size={18} />
                </button>
              </div>
              
              <button
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors w-full md:w-auto justify-center"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} />
                <span>Filtros</span>
                <ChevronDown size={16} className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
          
          {/* Expanded filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3 flex items-center">
                    <SlidersHorizontal size={16} className="mr-2" />
                    Categorias
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                          activeCategory === category.id
                            ? 'bg-frida-red text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Faixa de Preço</h3>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="250"
                      step="10"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                      className="w-full"
                    />
                    <span className="whitespace-nowrap">
                      Até R$ {priceRange.max.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Product categories pills - visible on mobile and tablet */}
        <div className="flex overflow-x-auto pb-4 md:hidden gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-frida-red text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Products display */}
        {products.length > 0 ? (
          <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-6'}`}>
            {products.map(product => (
              <div 
                key={product.id} 
                className={`group ${viewMode === 'grid' ? 'block' : 'flex items-center bg-white rounded-xl shadow-md overflow-hidden'}`}
              >
                {viewMode === 'grid' ? (
                  <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div className="relative aspect-[4/5]">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {product.isNew && (
                        <div className="absolute top-3 left-3 bg-frida-red text-white text-xs px-2 py-1 rounded-full">
                          Novo
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-frida-red font-semibold">
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </span>
                        <span className="text-sm text-gray-500 capitalize">{product.category}</span>
                      </div>
                      <button className="w-full mt-4 bg-white border border-frida-red text-frida-red hover:bg-frida-red hover:text-white transition-colors py-2 rounded-md text-sm font-medium">
                        Ver Detalhes
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-1/3 relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover object-center"
                        loading="lazy"
                      />
                      {product.isNew && (
                        <div className="absolute top-3 left-3 bg-frida-red text-white text-xs px-2 py-1 rounded-full">
                          Novo
                        </div>
                      )}
                    </div>
                    <div className="w-2/3 p-6">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                          <span className="text-sm text-gray-500 capitalize">{product.category}</span>
                        </div>
                        <span className="text-frida-red font-semibold">
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                      <p className="text-gray-600 my-2">{product.description}</p>
                      <button className="mt-4 bg-white border border-frida-red text-frida-red hover:bg-frida-red hover:text-white transition-colors px-4 py-2 rounded-md text-sm font-medium">
                        Ver Detalhes
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">😕</div>
            <h3 className="text-xl font-medium mb-2">Nenhum produto encontrado</h3>
            <p className="text-gray-600">
              Tente ajustar seus filtros ou buscar por outro termo.
            </p>
            <button 
              onClick={() => {
                setActiveCategory('all');
                setPriceRange({ min: 0, max: 250 });
                setSearchTerm('');
              }}
              className="mt-4 inline-flex items-center text-frida-red hover:underline"
            >
              Limpar todos os filtros
            </button>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
