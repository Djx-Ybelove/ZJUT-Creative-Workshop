import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PenTool, ShoppingBag, Lightbulb, Star, Trophy } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Banner - Using a gradient background to represent creativity */}
      <section className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1920/1080?grayscale')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="md:w-2/3">
            <span className="inline-block py-1 px-3 rounded-full bg-zjut-accent/20 text-zjut-accent text-sm font-semibold mb-6 border border-zjut-accent/50">
              2024 秋季新品发布
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              设计属于你的 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">浙工大独家记忆</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              从屏峰的向日葵到朝晖的钟楼，我们将校园风景融入生活。使用我们的在线设计工具，定制独一无二的文创产品。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/customize" className="px-8 py-4 bg-zjut-blue hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2">
                <PenTool size={20} />
                开始定制
              </Link>
              <Link to="/shop" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                <ShoppingBag size={20} />
                浏览商城
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">核心服务</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">为师生校友提供全方位的文创体验，从创意萌发到实物落地。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <PenTool className="w-8 h-8 text-zjut-blue" />,
                title: '个性化定制',
                desc: '拖拽式在线设计工具，海量校园IP素材，实时预览效果，一件起订。',
                link: '/customize'
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-zjut-accent" />,
                title: '创意孵化',
                desc: '提交你的设计灵感，由工坊协助优化并投入生产，共享销售收益。',
                link: '/community'
              },
              {
                icon: <ShoppingBag className="w-8 h-8 text-teal-600" />,
                title: '柔性生产',
                desc: '依托校友企业供应链，支持小批量、多品类的快速生产与配送。',
                link: '/shop'
              }
            ].map((service, idx) => (
              <Link to={service.link} key={idx} className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-zjut-blue/20 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <div className="flex items-center text-zjut-blue font-medium">
                  了解更多 <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">精品文创</h2>
              <p className="text-slate-600">本月最受欢迎的校园设计好物</p>
            </div>
            <Link to="/shop" className="text-zjut-blue font-medium hover:underline flex items-center">
              查看全部 <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative aspect-square overflow-hidden bg-slate-200">
                  <img src={`https://picsum.photos/400/400?random=${i}`} alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded">
                    热销
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">屏峰印象帆布袋</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-zjut-blue font-bold">¥ 39.00</span>
                    <span className="text-xs text-slate-500">200+ 人付款</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-zjut-blue/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="p-8 md:p-16 md:w-1/2 flex flex-col justify-center z-10">
              <div className="flex items-center gap-2 text-zjut-accent mb-4">
                <Trophy size={20} />
                <span className="font-bold uppercase tracking-wide">设计大赛进行中</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                2024 "韵味工大" <br/>
                文创设计挑战赛
              </h2>
              <p className="text-slate-400 mb-8 text-lg">
                最高奖金 ¥5000，优秀作品将投入量产。让你的设计成为工大的新名片。
              </p>
              <div className="flex gap-4">
                <Link to="/competition" className="px-6 py-3 bg-zjut-blue hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors">
                  立即参赛
                </Link>
                <Link to="/competition" className="px-6 py-3 border border-slate-600 hover:bg-slate-800 text-white rounded-lg font-semibold transition-colors">
                  查看规则
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto relative">
               <img src="https://picsum.photos/800/600?random=10" alt="Competition" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-slate-900"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;