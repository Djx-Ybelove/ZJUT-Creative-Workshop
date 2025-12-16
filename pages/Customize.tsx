import React, { useState } from 'react';
import { Layout, Type, Image as ImageIcon, Download, ShoppingCart, Sparkles, Loader2, RotateCw, Trash2 } from 'lucide-react';
import { generateCreativeIdea } from '../services/geminiService';

// Types for local state
interface DesignElement {
  id: string;
  type: 'image' | 'text';
  content: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

const Customize: React.FC = () => {
  const [productType, setProductType] = useState<'tshirt' | 'notebook' | 'tote'>('tote');
  const [elements, setElements] = useState<DesignElement[]>([]);
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null);
  
  // AI State
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Prices
  const prices = {
    tote: 29.00,
    tshirt: 59.00,
    notebook: 19.00
  };

  // Updated Sticker Assets
  const stickers = [
    'https://imghub.djx-ybelove.pp.ua/file/RBi6dQKj.jpg',
    'https://imghub.djx-ybelove.pp.ua/file/TdOyOhIK.jpg',
    'https://imghub.djx-ybelove.pp.ua/file/jdc9txQh.jpg',
    'https://imghub.djx-ybelove.pp.ua/file/sqCbJ5LX.jpg',
  ];

  const handleAddSticker = (url: string) => {
    const newEl: DesignElement = {
      id: Date.now().toString(),
      type: 'image',
      content: url,
      x: 50, // Center-ish
      y: 50,
      rotation: 0,
      scale: 1,
    };
    setElements([...elements, newEl]);
  };

  const handleAddText = () => {
    const newEl: DesignElement = {
      id: Date.now().toString(),
      type: 'text',
      content: 'ZJUT DESIGN',
      x: 50,
      y: 50,
      rotation: 0,
      scale: 1,
    };
    setElements([...elements, newEl]);
  };

  const handleAiBrainstorm = async () => {
    if (!aiPrompt.trim()) return;
    setIsAiLoading(true);
    setAiSuggestion('');
    try {
      const idea = await generateCreativeIdea(aiPrompt);
      setAiSuggestion(idea);
    } finally {
      setIsAiLoading(false);
    }
  };

  const updateElement = (id: string, updates: Partial<DesignElement>) => {
    setElements(elements.map(el => el.id === id ? { ...el, ...updates } : el));
  };

  const deleteElement = (id: string) => {
    setElements(elements.filter(el => el.id !== id));
    if (selectedElementId === id) setSelectedElementId(null);
  };

  // SVG Components for Pure Color Physical Objects
  const ToteBagSVG = () => (
    <svg viewBox="0 0 400 500" className="w-full h-full drop-shadow-xl">
      <defs>
        <filter id="fabricTexture" x="0" y="0" width="100%" height="100%">
           <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
           <feColorMatrix type="saturate" values="0" />
           <feBlend in="SourceGraphic" in2="noise" mode="multiply" result="texture" />
        </filter>
        <linearGradient id="bagGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f8f8f8" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0f0f0" />
        </linearGradient>
      </defs>
      {/* Handles */}
      <path d="M120 100 Q 120 20 200 20 Q 280 20 280 100" fill="none" stroke="#e5e5e5" strokeWidth="24" />
      <path d="M120 100 Q 120 20 200 20 Q 280 20 280 100" fill="none" stroke="#d4d4d4" strokeWidth="20" />
      
      {/* Bag Body */}
      <rect x="50" y="100" width="300" height="350" rx="10" ry="10" fill="url(#bagGradient)" />
      {/* Stitching Detail */}
      <rect x="60" y="110" width="280" height="330" rx="5" ry="5" fill="none" stroke="#e5e5e5" strokeWidth="2" strokeDasharray="5,5" />
    </svg>
  );

  const TShirtSVG = () => (
    <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-xl">
      <defs>
        <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f5f5f5" />
        </linearGradient>
      </defs>
      {/* Shirt Shape */}
      <path 
        d="M150 50 C 150 50, 180 80, 250 80 C 320 80, 350 50, 350 50 L 450 120 L 420 160 L 360 130 L 360 450 L 140 450 L 140 130 L 80 160 L 50 120 Z" 
        fill="url(#shirtGradient)" 
        stroke="#e5e5e5" 
        strokeWidth="1"
      />
      {/* Neck Line */}
      <path d="M150 50 C 150 50, 180 80, 250 80 C 320 80, 350 50, 350 50" fill="none" stroke="#e5e5e5" strokeWidth="2" />
    </svg>
  );

  const NotebookSVG = () => (
    <svg viewBox="0 0 400 500" className="w-full h-full drop-shadow-xl">
       <defs>
        <linearGradient id="coverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b4252" />
          <stop offset="10%" stopColor="#434c5e" />
          <stop offset="100%" stopColor="#2e3440" />
        </linearGradient>
      </defs>
      {/* Book Cover */}
      <rect x="60" y="50" width="280" height="400" rx="5" ry="5" fill="url(#coverGradient)" />
      {/* Binding/Spine */}
      <rect x="60" y="50" width="30" height="400" rx="2" ry="2" fill="#2e3440" />
      <line x1="90" y1="50" x2="90" y2="450" stroke="#4c566a" strokeWidth="1" />
      
      {/* Elastic Band */}
      <rect x="280" y="50" width="15" height="400" fill="#2e3440" opacity="0.6" />
      
      {/* Label Area (Optional) */}
      <rect x="140" y="100" width="160" height="60" rx="2" fill="#d8dee9" opacity="0.1" />
    </svg>
  );

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col md:flex-row overflow-hidden bg-slate-100">
      
      {/* Left Sidebar: Tools */}
      <div className="w-full md:w-80 bg-white border-r border-slate-200 flex flex-col h-full z-10 shadow-sm">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Layout size={20} className="text-zjut-blue" />
            定制工具箱
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          
          {/* AI Section */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-xl border border-indigo-100">
            <div className="flex items-center gap-2 mb-3 text-indigo-700 font-semibold text-sm">
              <Sparkles size={16} />
              AI 创意助手
            </div>
            <textarea
              className="w-full text-xs p-3 rounded-md border-indigo-100 focus:ring-2 focus:ring-indigo-300 outline-none resize-none bg-white/80"
              rows={3}
              placeholder="描述你想设计的主题 (例如: 10周年校庆复古风)..."
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
            />
            <button
              onClick={handleAiBrainstorm}
              disabled={isAiLoading || !aiPrompt}
              className="mt-3 w-full py-2 bg-indigo-600 text-white rounded-md text-xs font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isAiLoading ? <Loader2 size={14} className="animate-spin" /> : '生成创意灵感'}
            </button>
            {aiSuggestion && (
              <div className="mt-3 p-3 bg-white rounded-md border border-indigo-100 text-xs text-slate-600 italic">
                "{aiSuggestion}"
              </div>
            )}
          </div>

          {/* Product Selection */}
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">选择载体</h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'tote', label: '帆布袋' },
                { id: 'tshirt', label: 'T恤' },
                { id: 'notebook', label: '笔记本' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setProductType(item.id as any)}
                  className={`p-2 rounded-lg text-xs font-medium border transition-all ${
                    productType === item.id 
                      ? 'border-zjut-blue bg-blue-50 text-zjut-blue' 
                      : 'border-slate-200 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Assets */}
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <ImageIcon size={14} /> 素材库
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {stickers.map((url, idx) => (
                <button 
                  key={idx} 
                  onClick={() => handleAddSticker(url)}
                  className="aspect-square rounded-md overflow-hidden border border-slate-200 hover:border-zjut-blue hover:shadow-sm transition-all bg-slate-50"
                >
                  <img src={url} alt="sticker" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Text Tool */}
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Type size={14} /> 文字
            </h3>
            <button 
              onClick={handleAddText}
              className="w-full py-2 border-2 border-dashed border-slate-300 rounded-lg text-slate-500 hover:text-zjut-blue hover:border-zjut-blue hover:bg-blue-50 transition-all text-sm font-medium"
            >
              + 添加文字
            </button>
          </div>
        </div>
        
        {/* Total Price Area */}
        <div className="p-6 border-t border-slate-200 bg-slate-50">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-slate-600">预估价格 ({productType === 'tote' ? '帆布袋' : productType === 'tshirt' ? 'T恤' : '笔记本'})</span>
            <span className="text-xl font-bold text-slate-900">¥ {prices[productType].toFixed(2)}</span>
          </div>
          <button className="w-full py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
            <ShoppingCart size={18} />
            提交订单
          </button>
        </div>
      </div>

      {/* Main Area: Canvas */}
      <div className="flex-1 bg-slate-200 flex items-center justify-center relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        {/* The Product Canvas */}
        <div className="relative w-[500px] h-[600px] bg-transparent flex items-center justify-center select-none">
           {/* Product SVG Base */}
           <div className="absolute inset-0 p-4 flex items-center justify-center pointer-events-none">
             {productType === 'tote' && <ToteBagSVG />}
             {productType === 'tshirt' && <TShirtSVG />}
             {productType === 'notebook' && <NotebookSVG />}
           </div>
           
           <div className="absolute top-0 left-0 w-full flex items-center justify-center pointer-events-none z-0">
             <span className="text-slate-500 text-xs font-medium bg-white/80 px-2 py-0.5 rounded-full backdrop-blur border border-slate-200 shadow-sm mt-2">
               {productType === 'tote' ? '基础款帆布袋' : productType === 'tshirt' ? '纯棉T恤' : '精装手账本'}
             </span>
           </div>

           {/* Drop Zone */}
           <div className="absolute inset-[25%] border-2 border-dashed border-slate-300/50 rounded-lg hover:border-zjut-blue/30 transition-colors">
              {elements.map((el) => (
                <div
                  key={el.id}
                  onClick={(e) => { e.stopPropagation(); setSelectedElementId(el.id); }}
                  className={`absolute cursor-move transition-transform hover:z-50 ${selectedElementId === el.id ? 'ring-2 ring-zjut-blue z-50' : 'z-10'}`}
                  style={{
                    left: `${el.x}%`,
                    top: `${el.y}%`,
                    transform: `translate(-50%, -50%) rotate(${el.rotation}deg) scale(${el.scale})`,
                  }}
                >
                  {el.type === 'image' ? (
                    <img src={el.content} alt="element" className="w-24 h-24 object-contain" />
                  ) : (
                    <span className="text-2xl font-bold font-sans text-slate-800 whitespace-nowrap select-none">{el.content}</span>
                  )}
                  
                  {/* Simple Controls for Selected Element */}
                  {selectedElementId === el.id && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white rounded-md flex gap-1 p-1 shadow-lg">
                      <button onClick={(e) => { e.stopPropagation(); updateElement(el.id, { rotation: el.rotation + 45 }); }} className="p-1 hover:bg-slate-700 rounded">
                        <RotateCw size={14} />
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); deleteElement(el.id); }} className="p-1 hover:bg-red-600 rounded text-red-300 hover:text-white">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
           </div>
        </div>

        {/* Floating Actions */}
        <div className="absolute top-6 right-6 flex gap-2">
          <button className="p-3 bg-white rounded-full shadow-lg text-slate-600 hover:text-zjut-blue hover:scale-110 transition-all">
            <Download size={20} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Customize;