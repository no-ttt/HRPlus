import { useState } from 'react';
import { TrendingUp, Users, Lightbulb, BarChart, Clock, ArrowRight } from 'lucide-react';

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const categories = [
    { name: '全部', icon: null },
    { name: '招募趨勢', icon: TrendingUp },
    { name: '職場成長', icon: Lightbulb },
    { name: '領導與管理', icon: Users },
    { name: 'HR 技術與工具', icon: BarChart },
  ];

  const articles = [
    {
      title: '2024 年人才市場趨勢：中高階主管搶手程度創新高',
      excerpt: '根據最新調查顯示，具備數位轉型經驗的中高階主管需求持續上升，企業願意提供更優渥的條件吸引頂尖人才...',
      category: '招募趨勢',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-15',
      readTime: '5 分鐘',
      featured: true,
      consultant: '資深顧問觀點：企業應提早布局人才策略，建立完善的接班人計畫',
    },
    {
      title: '如何在面試中展現領導力：五個關鍵技巧',
      excerpt: '面試中展現領導力不僅是回答問題，更是透過具體案例與思維模式，讓面試官看見您的管理潛力...',
      category: '職場成長',
      image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-12',
      readTime: '7 分鐘',
      featured: false,
      consultant: '資深顧問觀點：領導力的展現在於真實案例與反思能力',
    },
    {
      title: '中階主管的職涯轉型策略：從專業者到管理者',
      excerpt: '從個人貢獻者轉變為管理者是職涯的重要里程碑，需要全新的思維模式與技能組合...',
      category: '職場成長',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-10',
      readTime: '6 分鐘',
      featured: true,
      consultant: '資深顧問觀點：成功的轉型需要心態調整與持續學習',
    },
    {
      title: '打造高效團隊：優秀領導者的五大核心能力',
      excerpt: '研究顯示，高效團隊的背後都有具備特定能力的領導者，這些能力可以透過刻意練習培養...',
      category: '領導與管理',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-08',
      readTime: '8 分鐘',
      featured: false,
      consultant: '資深顧問觀點：領導力的核心在於賦能團隊而非控制',
    },
    {
      title: '薪資談判的藝術：如何為自己爭取合理報酬',
      excerpt: '薪資談判是職涯發展的重要環節，但許多專業人士不知如何有效溝通。本文分享實用策略...',
      category: '職場成長',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-05',
      readTime: '6 分鐘',
      featured: false,
      consultant: '資深顧問觀點：了解市場行情是談判的基礎',
    },
    {
      title: 'AI 時代的人才招募：如何運用科技提升效率',
      excerpt: '人工智慧正在改變招募流程，從履歷篩選到候選人評估，企業需要了解如何善用這些工具...',
      category: 'HR 技術與工具',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-03',
      readTime: '7 分鐘',
      featured: true,
      consultant: '資深顧問觀點：科技是輔助，人性化判斷仍不可或缺',
    },
    {
      title: '遠距工作時代的人才管理挑戰與機會',
      excerpt: '混合辦公模式成為新常態，企業如何在靈活性與效率之間取得平衡？',
      category: '領導與管理',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-01',
      readTime: '5 分鐘',
      featured: false,
      consultant: '資深顧問觀點：建立信任與溝通文化是遠距管理的關鍵',
    },
    {
      title: '企業文化如何影響人才吸引力？',
      excerpt: '在人才競爭激烈的市場中，獨特且正向的企業文化成為吸引優秀人才的關鍵因素...',
      category: '招募趨勢',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-28',
      readTime: '6 分鐘',
      featured: false,
      consultant: '資深顧問觀點：真實的文化比華麗的口號更能吸引人才',
    },
    {
      title: '績效評估的新趨勢：從年度考核到持續回饋',
      excerpt: '傳統的年度績效評估正在被更靈活的持續回饋機制取代，了解如何建立有效的回饋文化...',
      category: 'HR 技術與工具',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-25',
      readTime: '7 分鐘',
      featured: false,
      consultant: '資深顧問觀點：即時回饋比延遲的評估更能促進成長',
    },
  ];

  const filteredArticles =
    selectedCategory === '全部'
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const featuredArticles = filteredArticles.filter((article) => article.featured);
  const regularArticles = filteredArticles.filter((article) => !article.featured);

  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          <div className="relative bg-gradient-to-br from-[#F37B22] via-[#ff8c3a] to-[#F37B22] flex items-center justify-center px-8 sm:px-12 lg:px-16 py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>

            <div className="relative z-10 max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                職涯洞察
              </h1>
              <p className="text-lg sm:text-xl text-white/95 leading-relaxed">
                深入的產業趨勢分析、實用的職涯建議
                <br />
                讓 HRPlus 顧問團隊的專業經驗，成為您成長的養分
              </p>
            </div>
          </div>

          <div className="relative bg-gray-900 hidden lg:block">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-[#F37B22]/30 to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.name
                    ? 'bg-[#F37B22] text-white shadow-lg'
                    : 'bg-[#FAF9F7] text-[#333333] hover:bg-[#F3EDE8]'
                }`}
              >
                {category.icon && <category.icon size={18} />}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {featuredArticles.length > 0 && (
        <section className="py-12 bg-[#FAF9F7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#333333] mb-8 flex items-center">
              <TrendingUp className="text-[#F37B22] mr-3" />
              精選文章
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-1 bg-[#F37B22] text-white text-sm rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{article.readTime}</span>
                        </span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#333333] mb-3 group-hover:text-[#F37B22] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{article.excerpt}</p>
                    <div className="bg-[#F3EDE8] p-4 rounded-xl border-l-4 border-[#F37B22]">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold text-[#F37B22]">資深顧問觀點：</span>{' '}
                        {article.consultant}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center text-[#F37B22] font-semibold group-hover:translate-x-2 transition-transform">
                      <span>閱讀全文</span>
                      <ArrowRight className="ml-2" size={18} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">所有文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-[#F37B22] text-white text-xs rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center space-x-1">
                      <Clock size={12} />
                      <span>{article.readTime}</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#333333] mb-3 group-hover:text-[#F37B22] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{article.date}</span>
                    <div className="flex items-center text-[#F37B22] font-semibold group-hover:translate-x-1 transition-transform">
                      <span>閱讀</span>
                      <ArrowRight className="ml-1" size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-[#F3EDE8] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-[#F37B22]" size={40} />
              </div>
              <p className="text-gray-600 text-lg">此分類目前沒有文章</p>
            </div>
          )}
        </div>
      </section>

      {/* <section className="py-20 bg-gradient-to-br from-[#F3EDE8] to-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-3xl shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              訂閱 HRPlus 職涯電子報
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              定期收到最新的職涯趨勢、人才市場分析與專業建議
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="請輸入您的電子郵件"
                className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#F37B22] focus:outline-none text-lg"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-[#F37B22] to-[#ff9447] text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all hover:scale-105">
                訂閱
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">我們尊重您的隱私，不會將您的資料用於其他用途</p>
          </div>
        </div>
      </section> */}
    </div>
  );
}
