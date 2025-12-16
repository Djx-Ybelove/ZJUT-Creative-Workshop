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

  // Updated Mock Assets with provided images
  const stickers = [
    'https://imghub.djx-ybelove.pp.ua/file/7osECFpH.jpg',
    'https://imghub.djx-ybelove.pp.ua/file/RBi6dQKj.jpg',
    'https://imghub.djx-ybelove.pp.ua/file/TdOyOhIK.jpg',
    'https://imghub.djx-ybelove.pp.ua/file/jdc9txQh.jpg',
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
            <span className="text-sm text-slate-600">预估价格</span>
            <span className="text-xl font-bold text-slate-900">¥ 45.00</span>
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
        <div className="relative w-[500px] h-[600px] bg-white shadow-2xl rounded-2xl flex items-center justify-center overflow-hidden">
           {/* Product Placeholder Image */}
           <div className="absolute inset-0 p-8 flex items-center justify-center bg-gray-50">
             <img 
               src={
                 productType === 'tote' ? 'https://imghub.djx-ybelove.pp.ua/file/1765883702786_image.png' :
                 productType === 'tshirt' ? 'https://imghub.djx-ybelove.pp.ua/file/1765883688215_image.png' :
                 'https://imghub.djx-ybelove.pp.ua/file/1765883703311_image.png'
               } 
               alt="Product Base" 
               className="w-full h-full object-contain opacity-80 pointer-events-none mix-blend-multiply"
             />
           </div>
           
           <div className="absolute top-4 left-0 w-full flex items-center justify-center pointer-events-none z-0">
             <span className="text-slate-400 text-sm font-medium bg-white/50 px-3 py-1 rounded-full backdrop-blur border border-slate-200">
               {productType === 'tote' ? '帆布袋' : productType === 'tshirt' ? '纯棉T恤' : '手账本'}
             </span>
           </div>

           {/* Drop Zone */}
           <div className="absolute inset-[20%] border border-dashed border-slate-400/30 rounded-lg">
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