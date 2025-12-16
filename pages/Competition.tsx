import React from 'react';
import { Calendar, Award, UserCheck, ThumbsUp } from 'lucide-react';
import { Competition as CompetitionType } from '../types';

const Competition: React.FC = () => {
  const activeCompetition: CompetitionType = {
    id: '1',
    title: '2024 "韵味工大" 文创设计挑战赛',
    deadline: '2024-12-31',
    status: 'active',
    participants: 128,
    image: 'https://imghub.djx-ybelove.pp.ua/file/sqCbJ5LX.jpg', // Updated banner image
  };

  const entries = [
    {
      id: 1,
      image: 'https://imghub.djx-ybelove.pp.ua/file/RBi6dQKj.jpg',
      title: '和山水韵 · 古风折扇',
      author: '艺术学院 · 张同学',
      votes: 452
    },
    {
      id: 2,
      image: 'https://imghub.djx-ybelove.pp.ua/file/7osECFpH.jpg',
      title: '工业之光 · 机械摆件',
      author: '机械学院 · 李同学',
      votes: 395
    },
    {
      id: 3,
      image: 'https://imghub.djx-ybelove.pp.ua/file/TdOyOhIK.jpg',
      title: '知秋 · 银杏金属书签',
      author: '人文学院 · 王同学',
      votes: 410
    },
    {
      id: 4,
      image: 'https://imghub.djx-ybelove.pp.ua/file/jdc9txQh.jpg',
      title: '漫步屏峰 · 丝巾设计',
      author: '设计学院 · 赵同学',
      votes: 288
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Hero Header */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden bg-slate-900">
        <img 
          src={activeCompetition.image} 
          alt="Competition Banner" 
          className="w-full h-full object-cover opacity-80" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold mb-4 border border-green-500/30">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              正在进行中
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{activeCompetition.title}</h1>
            <div className="flex flex-wrap gap-6 text-slate-300 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar size={18} /> 截稿日期: {activeCompetition.deadline}
              </div>
              <div className="flex items-center gap-2">
                <UserCheck size={18} /> 已参赛: {activeCompetition.participants} 人
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content: Info & Rules */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">大赛详情</h2>
              <div className="prose prose-slate text-slate-600">
                <p>
                  本次大赛旨在挖掘展现浙江工业大学校园文化、历史底蕴与创新精神的优秀文创设计作品。
                  参赛作品需以"韵味工大"为主题，载体不限（包括但不限于文具、服饰、生活用品、数字藏品等）。
                </p>
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">奖项设置</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Award className="text-yellow-500 flex-shrink-0" />
                    <span>一等奖 (1名): 奖金 ¥5000 + 荣誉证书 + 作品量产</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="text-slate-400 flex-shrink-0" />
                    <span>二等奖 (3名): 奖金 ¥2000 + 荣誉证书</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="text-orange-500 flex-shrink-0" />
                    <span>三等奖 (5名): 奖金 ¥800 + 荣誉证书</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Voting Section */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <ThumbsUp className="text-zjut-blue" /> 人气投票
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {entries.map((entry) => (
                  <div key={entry.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:border-zjut-blue/30 transition-all group">
                    <div className="h-48 overflow-hidden bg-slate-100 relative">
                      <img 
                        src={entry.image} 
                        alt={entry.title} 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute top-2 right-2 bg-black/50 backdrop-blur text-white text-xs px-2 py-1 rounded">
                         编号 #{100 + entry.id}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-slate-900 text-lg mb-1">{entry.title}</h3>
                      <p className="text-slate-500 text-sm mb-4">{entry.author}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 font-medium">{entry.votes} 票</span>
                        <button className="px-4 py-2 bg-slate-100 text-zjut-blue rounded-lg font-medium hover:bg-zjut-blue hover:text-white transition-colors">
                          投票支持
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl p-6 shadow-lg border border-zjut-blue/10">
              <h3 className="text-xl font-bold text-slate-900 mb-2">我要参赛</h3>
              <p className="text-slate-500 text-sm mb-6">
                请确保您的作品符合原创声明，提交截止日期为 12月31日。
              </p>
              
              <button className="w-full py-3 bg-zjut-blue text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-blue-500/30 shadow-md mb-4">
                上传设计稿
              </button>
              
              <button className="w-full py-3 bg-white text-slate-700 border border-slate-300 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                下载素材包
              </button>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <h4 className="font-bold text-slate-800 mb-3">相关文件</h4>
                <a href="#" className="block text-sm text-blue-600 hover:underline mb-2">参赛承诺书.pdf</a>
                <a href="#" className="block text-sm text-blue-600 hover:underline">大赛详细规则.pdf</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Competition;