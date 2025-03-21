
import React from 'react';
import { ClipboardList, Clock, CreditCard, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const OrderInfoSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title centered">Como Funciona o Processo de Encomenda</h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Todas as nossas peças são feitas à mão e por encomenda, garantindo exclusividade e qualidade artesanal em cada detalhe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-frida-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClipboardList className="text-frida-red" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">1. Faça seu Pedido</h3>
            <p className="text-gray-600">
              Escolha o modelo desejado e faça seu pedido. 
              Se necessário, podemos personalizar detalhes específicos.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-frida-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="text-frida-red" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">2. Pagamento Inicial</h3>
            <p className="text-gray-600">
              Após confirmação do pedido, é necessário um sinal de 50% 
              do valor para iniciarmos a produção da sua peça.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-frida-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-frida-red" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">3. Tempo de Produção</h3>
            <p className="text-gray-600">
              O prazo para confecção é de aproximadamente 15 a 20 dias úteis, 
              dependendo da complexidade da peça e da fila de pedidos.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-frida-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="text-frida-red" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">4. Entrega</h3>
            <p className="text-gray-600">
              Após a conclusão, você paga os 50% restantes e enviamos sua peça. 
              O frete é calculado no momento da finalização.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button className="bg-frida-red hover:bg-opacity-90">
              Fazer uma Encomenda
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderInfoSection;
