import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Search, Paintbrush, ShoppingBag, Trophy, Users } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '首页', path: '/', icon: <div /> },
    { name: '个性定制', path: '/customize', icon: <Paintbrush size={18} /> },
    { name: '文创商城', path: '/shop', icon: <ShoppingBag size={18} /> },
    { name: '创意社区', path: '/community', icon: <Users size={18} /> },
    { name: '设计大赛', path: '/competition', icon: <Trophy size={18} /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-zjut-blue rounded-lg flex items-center justify-center text-white font-bold">
                Z
              </div>
              <span className="font-bold text-xl text-zjut-blue tracking-tight">ZJUT 文创工坊</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-zjut-blue bg-zjut-light'
                      : 'text-slate-600 hover:text-zjut-blue hover:bg-slate-50'
                  }`}
                >
                  {link.icon && link.name !== '首页' && link.icon}
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="搜索文创..." 
                  className="pl-10 pr-4 py-1.5 rounded-full bg-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-zjut-blue/50 w-40 transition-all focus:w-64"
                />
              </div>
              <button className="p-2 text-slate-600 hover:text-zjut-blue rounded-full hover:bg-slate-100 relative">
                <ShoppingCart size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              <button className="p-2 text-slate-600 hover:text-zjut-blue rounded-full hover:bg-slate-100">
                <User size={20} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-zjut-blue focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-zjut-blue bg-zjut-light'
                      : 'text-slate-600 hover:text-zjut-blue hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {link.icon}
                    {link.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-zjut-blue rounded-lg flex items-center justify-center text-white font-bold">
                Z
              </div>
              <span className="font-bold text-xl text-white">ZJUT 文创工坊</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              汇聚浙工大校园创意，打造专属文化符号。连接设计、生产与生活，让每一个创意都能落地生花。
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link to="/customize" className="hover:text-zjut-blue transition-colors">个性定制</Link></li>
              <li><Link to="/competition" className="hover:text-zjut-blue transition-colors">设计大赛</Link></li>
              <li><Link to="/shop" className="hover:text-zjut-blue transition-colors">文创商城</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>地址：浙江省杭州市西湖区留和路288号</li>
              <li>邮箱：contact@zjut-creative.edu.cn</li>
              <li>电话：0571-88888888</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          © 2024 Zhejiang University of Technology Creative Workshop. All rights reserved.
        </div>
      </footer>
    </div>
  );
};