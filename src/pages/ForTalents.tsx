import { Link } from 'react-router-dom';
import { Compass, FileText, Briefcase, TrendingUp, ArrowRight, MapPin, DollarSign, Clock } from 'lucide-react';

export default function ForTalents() {
  const services = [
    {
      icon: Compass,
      title: '職涯諮詢',
      description: '一對一專業顧問諮詢，協助您釐清職涯方向，找到最適合的發展路徑。我們深入了解您的優勢與目標，提供客製化建議。',
      features: ['職涯規劃建議', '產業趨勢分析', '薪資行情諮詢', '轉職評估'],
    },
    {
      icon: FileText,
      title: '履歷健檢與面試準備',
      description: '專業履歷優化服務與面試技巧指導，讓您在求職過程中脫穎而出。從履歷撰寫到面試演練，全方位提升您的競爭力。',
      features: ['履歷撰寫優化', '面試技巧指導', '模擬面試演練', '個人品牌建立'],
    },
    {
      icon: Briefcase,
      title: '專業職缺媒合',
      description: '根據您的專業背景與職涯目標，精準推薦適合的工作機會。我們與眾多優質企業合作，為您開啟更多可能。',
      features: ['中高階職位', '隱藏版職缺', '跨產業機會', '國際職缺'],
    },
  ];

  const featuredJobs = [
    {
      title: '資深產品經理',
      company: '知名電商平台',
      location: '台北市',
      salary: '120-180萬',
      type: '全職',
      tags: ['產品管理', 'Agile', 'UX'],
    },
    {
      title: '行銷總監',
      company: '新創科技公司',
      location: '台北市',
      salary: '150-220萬',
      type: '全職',
      tags: ['數位行銷', '品牌策略', 'Growth Hacking'],
    },
    {
      title: '財務長 CFO',
      company: '上市製造業',
      location: '新竹市',
      salary: '面議',
      type: '全職',
      tags: ['財務規劃', 'IPO', '投資者關係'],
    },
    {
      title: '技術長 CTO',
      company: '金融科技新創',
      location: '台北市',
      salary: '200-300萬',
      type: '全職',
      tags: ['技術架構', 'AI/ML', '團隊領導'],
    },
    {
      title: '人資長 CHRO',
      company: '跨國企業台灣分公司',
      location: '台北市',
      salary: '180-250萬',
      type: '全職',
      tags: ['組織發展', '人才策略', '變革管理'],
    },
    {
      title: '營運總監',
      company: '連鎖餐飲集團',
      location: '台北市',
      salary: '140-200萬',
      type: '全職',
      tags: ['營運管理', '流程優化', '多店管理'],
    },
  ];

  const careerTips = [
    {
      title: '如何在面試中脫穎而出？',
      category: '面試技巧',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: '中高階主管的職涯轉型策略',
      category: '職涯規劃',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: '2024 年薪資趨勢報告',
      category: '市場趨勢',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          <div className="relative bg-gradient-to-br from-[#F37B22] via-[#ff8c3a] to-[#F37B22] flex items-center justify-center px-8 sm:px-12 lg:px-16 py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>

            <div className="relative z-10 max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                人才專區
              </h1>
              <p className="text-lg sm:text-xl text-white/95 leading-relaxed mb-8">
                每一次轉職，都是人生的新篇章
                <br />
                HRPlus 顧問團隊，陪你找到更適合的舞台
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-[#F37B22] rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>與顧問聯繫</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="relative bg-gray-900 hidden lg:block">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-[#F37B22]/30 to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#333333] mb-4">我們為您提供</h2>
            <div className="w-20 h-1 bg-[#F37B22] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              全方位職涯發展支援，助您邁向理想的職業生涯
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#FAF9F7] to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#F37B22] to-[#ff9447] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#333333] mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#F37B22] rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[#333333] mb-4">精選職缺</h2>
              <div className="w-20 h-1 bg-[#F37B22]"></div>
            </div>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center space-x-2 text-[#F37B22] hover:text-[#ff9447] font-semibold transition-colors"
            >
              <span>查看更多職缺</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#333333] flex-1">{job.title}</h3>
                  <span className="px-3 py-1 bg-[#F37B22] text-white text-xs rounded-full whitespace-nowrap ml-2">
                    {job.type}
                  </span>
                </div>
                <p className="text-gray-600 font-medium mb-4">{job.company}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={16} className="text-[#F37B22]" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <DollarSign size={16} className="text-[#F37B22]" />
                    <span>{job.salary}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#F3EDE8] text-[#333333] text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 text-[#F37B22] hover:text-[#ff9447] font-semibold transition-colors"
            >
              <span>查看更多職缺</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[#333333] mb-4">職涯資源</h2>
              <div className="w-20 h-1 bg-[#F37B22] mb-2"></div>
              <p className="text-gray-600">實用的職涯發展建議與市場洞察</p>
            </div>
            <Link
              to="/insights"
              className="hidden md:inline-flex items-center space-x-2 text-[#F37B22] hover:text-[#ff9447] font-semibold transition-colors"
            >
              <span>閱讀更多文章</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerTips.map((tip, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-[#F37B22] text-white text-xs rounded-full">
                      {tip.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{tip.date}</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#333333] group-hover:text-[#F37B22] transition-colors">
                    {tip.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link
              to="/insights"
              className="inline-flex items-center space-x-2 text-[#F37B22] hover:text-[#ff9447] font-semibold transition-colors"
            >
              <span>閱讀更多文章</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#F37B22]/70 to-[#ff9447]/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">準備開啟職涯新篇章？</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            讓專業顧問協助您找到理想的工作機會
            <br />
            立即與我們聯繫，開始您的職涯躍升之旅
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-[#F37B22] rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>預約職涯諮詢</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/insights"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-[#F37B22] transition-all"
            >
              <TrendingUp size={20} />
              <span>探索職涯洞察</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
