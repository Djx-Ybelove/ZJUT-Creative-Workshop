import React, { useState } from 'react';
import { ShoppingCart, Star, Plus } from 'lucide-react';
import { Product } from '../types';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'stationery', name: '文具办公' },
    { id: 'apparel', name: '服饰穿搭' },
    { id: 'accessories', name: '生活饰品' },
    { id: 'digital', name: '数码周边' },
  ];

  const products: Product[] = Array.from({ length: 8 }).map((_, i) => ({
    id: i.toString(),
    name: i % 2 === 0 ? '校徽刺绣棒球帽' : '工大风景明信片套装',
    category: i % 2 === 0 ? 'apparel' : 'stationery',
    price: 29 + i * 10,
    sales: 100 + i * 20,
    image: `https://picsum.photos/400/400?random=${i + 500}`,
  }));

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-zjut-light rounded-2xl p-8 mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-zjut-blue mb-2">文创商城</h1>
            <p className="text-slate-600">官方正品 · 匠心设计 · 校园情怀</p>
          </div>
          <div className="hidden md:block">
            <ShoppingCart size={64} className="text-zjut-blue/20" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-zjut-blue text-white shadow-md shadow-blue-200'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group border border-slate-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-square bg-slate-100 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-800 hover:text-zjut-blue hover:bg-zjut-light transition-colors transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-300">
                  <Plus size={20} />
                </button>
              </div>
              <div className="p-4">
                <div className="text-xs text-slate-400 mb-1">{categories.find(c => c.id === product.category)?.name || '周边'}</div>
                <h3 className="font-bold text-slate-900 mb-2 truncate">{product.name}</h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-bold text-zjut-blue">¥ {product.price}</span>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Star size={12} className="text-yellow-400 fill-current" />
                    <span>4.9</span>
                    <span>({product.sales})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Shop;