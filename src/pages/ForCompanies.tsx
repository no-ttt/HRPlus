import { Link } from 'react-router-dom';
import { Search, TrendingUp, Users, CheckCircle, ArrowRight, MessageSquare, Target, Award } from 'lucide-react';

export default function ForCompanies() {
  const services = [
    {
      icon: Search,
      title: '招募顧問服務',
      subtitle: '中高階職缺獵才',
      description: '針對企業關鍵職位，提供全方位的人才搜尋與評估服務。從職位分析、市場調研到候選人推薦，我們確保每一位推薦人選都符合企業需求。',
      features: ['高階主管搜尋', '專業技術人才', '跨國人才配置', '快速到位服務'],
    },
    {
      icon: TrendingUp,
      title: '人資策略顧問',
      subtitle: '薪酬架構與用人制度',
      description: '協助企業建立完善的人力資源管理系統，包含薪酬福利設計、績效管理制度、組織架構優化等全方位 HR 解決方案。',
      features: ['薪酬架構設計', '績效管理制度', '組織架構優化', '人才發展規劃'],
    },
    {
      icon: Users,
      title: '組織文化與雇主品牌',
      subtitle: '打造卓越團隊文化',
      description: '協助企業塑造獨特的組織文化與雇主品牌，提升企業在人才市場的吸引力，建立長期競爭優勢。',
      features: ['雇主品牌建立', '企業文化塑造', '員工體驗優化', 'EVP 價值主張'],
    },
  ];

  const workflow = [
    {
      number: '01',
      title: '需求了解',
      description: '深入了解企業文化、職位需求與理想人選條件',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: '人才搜尋',
      description: '運用專業網絡與數據庫，精準鎖定目標人才',
      icon: Search,
    },
    {
      number: '03',
      title: '面試推薦',
      description: '嚴格篩選與評估，推薦最適合的候選人',
      icon: Users,
    },
    {
      number: '04',
      title: '雙方協商',
      description: '協助雙方進行條件協商，確保雙贏局面',
      icon: Target,
    },
    {
      number: '05',
      title: '成功入職',
      description: '提供入職輔導與後續追蹤，確保順利到位',
      icon: Award,
    },
  ];

  const testimonials = [
    {
      company: '新創科技公司 A',
      position: '執行長',
      content: 'HRPlus 讓我們在短時間內找到理想的行銷總監，不僅專業能力出色，更重要的是與團隊文化高度契合。',
      name: 'Jennifer Chen',
    },
    {
      company: '傳統製造業 B',
      position: '人資長',
      content: '在數位轉型的關鍵時刻，HRPlus 協助我們找到優秀的數位長，為公司帶來全新視野與動能。',
      name: 'David Lin',
    },
    {
      company: '金融服務集團 C',
      position: '營運總監',
      content: '與 HRPlus 合作超過三年，他們不只是獵才顧問，更是我們長期的策略夥伴。',
      name: 'Sarah Wang',
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
                企業服務
              </h1>
              <p className="text-lg sm:text-xl text-white/95 leading-relaxed mb-8">
                為您的企業找到最契合的人才
                <br />
                建立高效團隊，創造持續價值
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-[#F37B22] rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>立即諮詢</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="relative bg-gray-900 hidden lg:block">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-[#F37B22]/30 to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#333333] mb-4">我們的服務</h2>
            <div className="w-20 h-1 bg-[#F37B22] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              提供全方位人才解決方案，協助企業在競爭激烈的市場中脫穎而出
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-[#F3EDE8] to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#F37B22] to-[#ff9447] rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="text-white" size={32} />
                    </div>
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold text-[#333333] mb-2">{service.title}</h3>
                      <p className="text-[#F37B22] font-semibold text-lg">{service.subtitle}</p>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="text-[#F37B22] flex-shrink-0" size={18} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src={`https://images.pexels.com/photos/${
                        index === 0 ? '3184287' : index === 1 ? '3183150' : '3184418'
                      }/pexels-photo-${
                        index === 0 ? '3184287' : index === 1 ? '3183150' : '3184418'
                      }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#333333] mb-4">服務流程</h2>
            <div className="w-20 h-1 bg-[#F37B22] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">專業、透明、高效的五步驟服務流程</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#F37B22] via-[#ff9447] to-[#F37B22] transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {workflow.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative z-10">
                    <div className="text-center mb-4">
                      <div className="inline-flex w-16 h-16 bg-gradient-to-br from-[#F37B22] to-[#ff9447] rounded-full items-center justify-center mb-3">
                        <step.icon className="text-white" size={28} />
                      </div>
                      <div className="text-4xl font-bold text-[#F37B22] mb-2">{step.number}</div>
                      <h3 className="text-lg font-bold text-[#333333] mb-2">{step.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#333333] mb-4">客戶見證</h2>
            <div className="w-20 h-1 bg-[#F37B22] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">聽聽我們的合作夥伴怎麼說</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F3EDE8] to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl text-[#F37B22] mb-4">"</div>
                <p className="text-gray-700 leading-relaxed mb-6">{testimonial.content}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-[#333333]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-[#F37B22]">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#F37B22]/70 to-[#ff9447]/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">準備打造您的夢幻團隊？</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            讓 HRPlus 成為您的人才策略夥伴
            <br />
            立即聯絡我們，開始您的人才升級之旅
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-[#F37B22] rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <span>立即聯絡我們</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
