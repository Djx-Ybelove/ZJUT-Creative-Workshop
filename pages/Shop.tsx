import React, { useState } from 'react';
import { ShoppingCart, Star, Plus } from 'lucide-react';
import { Product } from '../types';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'stationery', name: '文具办公' },
    { id: 'daily', name: '生活日用' },
    { id: 'apparel', name: '服饰穿搭' },
    { id: 'sports', name: '运动骑行' },
  ];

  // Specific product configuration
  const shopItems = [
    {
      name: '屏峰流影 · 金属挂饰',
      image: 'https://imghub.djx-ybelove.pp.ua/file/1765883688215_image.png',
      category: 'daily',
      price: 25.00,
      sales: 420
    },
    {
      name: '莫干雅韵 · 证件卡套',
      image: 'https://imghub.djx-ybelove.pp.ua/file/1765883703311_image.png',
      category: 'stationery',
      price: 18.00,
      sales: 850
    },
    {
      name: '朝晖印象 · 帆布手袋',
      image: 'https://imghub.djx-ybelove.pp.ua/file/1765883719610_image.png',
      category: 'daily',
      price: 39.00,
      sales: 660
    },
    {
      name: '志愿先锋 · 工大马甲',
      image: 'https://imghub.djx-ybelove.pp.ua/file/iYY96icE.png',
      category: 'apparel',
      price: 68.00,
      sales: 150
    },
    {
      name: '极速风行 · 骑行头盔',
      image: 'https://imghub.djx-ybelove.pp.ua/file/CTTAZauj.png',
      category: 'sports',
      price: 128.00,
      sales: 85
    },
    {
      name: '破风者 · 专业骑行服',
      image: 'https://imghub.djx-ybelove.pp.ua/file/lwOhCTx8.png',
      category: 'sports',
      price: 199.00,
      sales: 92
    },
    {
      name: '求是学术 · 档案文件夹',
      image: 'https://imghub.djx-ybelove.pp.ua/file/aIqZ8GWu.jpg', // Updated image
      category: 'stationery',
      price: 15.00,
      sales: 1200
    },
    {
      name: '工大韵味 · 陶瓷马克杯',
      image: 'https://imghub.djx-ybelove.pp.ua/file/1765883702786_image.png',
      category: 'daily',
      price: 45.00,
      sales: 300
    }
  ];

  const products: Product[] = shopItems.map((item, i) => ({
    id: i.toString(),
    ...item
  }));

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-zjut-light rounded-2xl p-8 mb-10 flex items-center justify-between overflow-hidden relative">
          <div className="z-10 relative">
            <h1 className="text-3xl font-bold text-zjut-blue mb-2">文创商城</h1>
            <p className="text-slate-600">官方正品 · 匠心设计 · 校园情怀</p>
          </div>
          <div className="hidden md:block relative z-10">
            <ShoppingCart size={64} className="text-zjut-blue/20" />
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
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
              <div className="relative aspect-square bg-slate-50 overflow-hidden flex items-center justify-center p-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                />
                <button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-800 hover:text-zjut-blue hover:bg-zjut-light transition-colors transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-300">
                  <Plus size={20} />
                </button>
              </div>
              <div className="p-4">
                <div className="text-xs text-slate-400 mb-1">{categories.find(c => c.id === product.category)?.name}</div>
                <h3 className="font-bold text-slate-900 mb-2 truncate text-sm md:text-base">{product.name}</h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-bold text-zjut-blue">¥ {product.price.toFixed(2)}</span>
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