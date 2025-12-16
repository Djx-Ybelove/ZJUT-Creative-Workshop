import React from 'react';
import { Heart, MessageCircle, Share2, Filter } from 'lucide-react';
import { DesignPost } from '../types';

const Community: React.FC = () => {
  // Using the provided images to simulate user posts
  const postImages = [
    'https://imghub.djx-ybelove.pp.ua/file/sqCbJ5LX.jpg',
    'https://imghub.djx-ybelove.pp.ua/file/JDffOyWk.jpg',
    'https://imghub.djx-ybelove.pp.ua/file/7osECFpH.jpg',
    'https://imghub.djx-ybelove.pp.ua/file/RBi6dQKj.jpg',
    'https://imghub.djx-ybelove.pp.ua/file/TdOyOhIK.jpg',
    'https://imghub.djx-ybelove.pp.ua/file/jdc9txQh.jpg',
  ];

  const posts: DesignPost[] = Array.from({ length: 6 }).map((_, i) => ({
    id: i.toString(),
    author: `设计师 ${i + 1}`,
    avatar: `https://i.pravatar.cc/150?u=${i + 10}`,
    title: i % 2 === 0 ? '校园秋日随拍设计' : '复古工大建筑系列',
    description: '设计的灵感来源于漫步校园的午后，光影交错间的灵感迸发...',
    image: postImages[i % postImages.length],
    likes: Math.floor(Math.random() * 500) + 50,
    comments: Math.floor(Math.random() * 50) + 5,
  }));

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">创意广场</h1>
            <p className="text-slate-500 mt-1">发现校友们的奇思妙想，激发你的创作灵感</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-2">
              <Filter size={16} /> 最新发布
            </button>
            <button className="px-4 py-2 bg-zjut-blue text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm">
              发布作品
            </button>
          </div>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 group">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-medium text-sm truncate">{post.description}</span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <img src={post.avatar} alt={post.author} className="w-8 h-8 rounded-full border border-slate-200" />
                  <span className="text-sm font-medium text-slate-700">{post.author}</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-4">{post.title}</h3>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button className="flex items-center gap-1.5 text-slate-500 hover:text-red-500 transition-colors text-sm">
                    <Heart size={18} /> {post.likes}
                  </button>
                  <button className="flex items-center gap-1.5 text-slate-500 hover:text-zjut-blue transition-colors text-sm">
                    <MessageCircle size={18} /> {post.comments}
                  </button>
                  <button className="text-slate-400 hover:text-slate-600">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 border border-slate-300 rounded-lg text-slate-600 font-medium hover:bg-white hover:border-slate-400 transition-all">
            加载更多精彩
          </button>
        </div>

      </div>
    </div>
  );
};

export default Community;