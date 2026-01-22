import { Link } from 'react-router-dom';
import { Search, MessageCircle, Handshake, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentCase, setCurrentCase] = useState(0);

  const successCases = [
    {
      title: '協助新創企業找到營運長',
      description: 'HRPlus 協助一家快速成長的科技新創找到具備國際視野的營運長，該主管到任後3個月內成功完成 A 輪募資，公司估值成長300%。',
      industry: '科技新創',
      position: '營運長 COO',
    },
    {
      title: '傳統產業數位轉型人才配置',
      description: '為老字號製造業導入數位轉型，成功招募數位長與資訊團隊，協助企業在18個月內完成電商平台建置與供應鏈數位化。',
      industry: '製造業',
      position: '數位長 CDO',
    },
    {
      title: '外商公司在地化人才策略',
      description: '協助歐洲精品品牌在台拓展，建立完整行銷與營運團隊，包含行銷總監、通路經理等關鍵職位，成功打開亞洲市場。',
      industry: '零售精品',
      position: '行銷總監',
    },
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % successCases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + successCases.length) % successCases.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % successCases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [successCases.length]);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="relative bg-gradient-to-br from-[#F37B22] via-[#ff8c3a] to-[#F37B22] flex items-center justify-center px-8 sm:px-12 lg:px-16 py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>

            <div className="relative z-10 max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                讓人才與企業
                <br />
                遇見更好的彼此
              </h1>

              <p className="text-lg sm:text-xl text-white/95 leading-relaxed mb-10">
                我們以專業與真誠，為您找到最契合的夥伴
              </p>

              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-white text-[#F37B22] rounded-md font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
              >
                立即聯絡我們
              </Link>
            </div>
          </div>

          <div className="relative bg-gray-900 hidden lg:block">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-[#F37B22]/30 to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">我們的核心價值</h2>
            <div className="w-20 h-1 bg-[#F37B22] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F37B22] to-[#ff9447] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Search className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4">精準尋才</h3>
              <p className="text-gray-600 leading-relaxed">
                憑藉深厚產業經驗與數據洞察，為企業找到最契合的人才。
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F37B22] to-[#ff9447] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4">專業顧問</h3>
              <p className="text-gray-600 leading-relaxed">
                提供一對一職涯與組織顧問建議，讓成長更有方向。
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F37B22] to-[#ff9447] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Handshake className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4">長期夥伴</h3>
              <p className="text-gray-600 leading-relaxed">
                與企業和人才建立長期夥伴關係，不只媒合，更關心您的長期發展與價值共創。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-[#FAF9F7]/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F37B22]/10 to-transparent rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#333333] mb-6 leading-tight">
                    主要專注產業包含
                  </h3>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {['半導體', 'IC設計', '化學/材料', '消費電子', 'IT軟硬體', '電子元件', 'AI', '電動車', '軟體', '硬體', '網路/電信', '離岸風電', '民生消費'].map((industry, index) => (
                        <span
                          key={index}
                          className="inline-block px-4 py-2 bg-gradient-to-r from-[#F37B22]/10 to-[#ff9447]/10 text-[#F37B22] rounded-full text-sm font-medium border border-[#F37B22]/20 hover:border-[#F37B22] hover:shadow-md transition-all duration-200"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F37B22]/10 to-transparent rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#333333] mb-6 leading-tight">
                    擅長中高階職位包括
                  </h3>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {['CEO/CXO', 'RD', '技術服務', '工程', '業務和行銷', '採購', '生產製造', 'QA', '資訊', '人資', '財務會計'].map((position, index) => (
                        <span
                          key={index}
                          className="inline-block px-4 py-2 bg-gradient-to-r from-[#F37B22]/10 to-[#ff9447]/10 text-[#F37B22] rounded-full text-sm font-medium border border-[#F37B22]/20 hover:border-[#F37B22] hover:shadow-md transition-all duration-200"
                        >
                          {position}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mt-4 italic">等主管職位</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">成功案例</h2>
            <div className="w-20 h-1 bg-[#F37B22] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">見證企業與人才的美好相遇</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#FAF9F7] to-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block px-4 py-1 bg-[#F37B22] text-white text-sm rounded-full mb-4">
                    {successCases[currentCase].industry}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#333333] mb-2">
                    {successCases[currentCase].title}
                  </h3>
                  <p className="text-[#F37B22] font-semibold">{successCases[currentCase].position}</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {successCases[currentCase].description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {successCases.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCase(index)}
                      className={`w-2 h-2 rounded-full transition-all ${index === currentCase ? 'bg-[#F37B22] w-8' : 'bg-gray-300'
                        }`}
                    />
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={prevCase}
                    className="w-10 h-10 rounded-full bg-white border-2 border-[#F37B22] text-[#F37B22] flex items-center justify-center hover:bg-[#F37B22] hover:text-white transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextCase}
                    className="w-10 h-10 rounded-full bg-white border-2 border-[#F37B22] text-[#F37B22] flex items-center justify-center hover:bg-[#F37B22] hover:text-white transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#F37B22]/70 to-[#ff9447]/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#F37B22] rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#ff9447] rounded-full blur-3xl opacity-20"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">準備好下一步了嗎？</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            無論您是尋找優秀人才的企業，或是尋求職涯突破的專業人士<br />
            HRPlus 都能為您提供最專業的協助
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-white text-[#F37B22] rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>立即聯絡我們</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/for-companies"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-[#F37B22] transition-all"
            >
              企業服務
            </Link>
            <Link
              to="/for-talents"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-[#F37B22] transition-all"
            >
              人才專區
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
