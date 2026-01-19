import { Target, Eye, Heart, Users } from 'lucide-react';

export default function About() {
  const timeline = [
    { year: '2018', event: '創立於台北', description: '由資深獵才顧問團隊創立' },
    { year: '2019', event: '服務拓展', description: '成功協助超過50家企業找到關鍵人才' },
    { year: '2021', event: '專業深化', description: '建立產業專精團隊，涵蓋科技、金融、製造等領域' },
    { year: '2023', event: '國際布局', description: '拓展亞洲市場，協助跨國企業在地化' },
    { year: '2024', event: '持續創新', description: '整合 AI 技術，提供更精準的人才媒合服務' },
  ];

  const coreValues = [
    {
      icon: Heart,
      title: '專業',
      description: '深耕人才產業，提供最專業的顧問服務',
      color: 'from-[#F37B22] to-[#ff9447]',
    },
    {
      icon: Users,
      title: '信任',
      description: '建立長期信任關係，成為您最可靠的夥伴',
      color: 'from-[#F37B22] to-[#ff9447]',
    },
    {
      icon: Target,
      title: '共榮',
      description: '追求企業、人才、顧問三方共贏',
      color: 'from-[#F37B22] to-[#ff9447]',
    },
    {
      icon: Eye,
      title: '加值',
      description: '不只媒合，更為您創造長期價值',
      color: 'from-[#F37B22] to-[#ff9447]',
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
                關於我們
              </h1>
              <p className="text-lg sm:text-xl text-white/95 leading-relaxed mb-4">
                HRPlus = Human Resource Plus
              </p>
              <p className="text-lg sm:text-xl text-white/95 leading-relaxed">
                我們相信，「人」是企業最核心的力量
              </p>
            </div>
          </div>

          <div className="relative bg-gray-900 hidden lg:block">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-[#F37B22]/30 to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#333333] mb-6">品牌理念</h2>
              <div className="w-20 h-1 bg-[#F37B22] mb-6"></div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                HRPlus Consulting 的存在，是為了讓企業與人才都能
                <span className="text-[#F37B22] font-semibold">「被看見、被理解、被成就」</span>。
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                在快速變遷的商業環境中，人才是企業最重要的資產。我們深信，當對的人遇見對的機會，就能創造無限可能。
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                HRPlus 不只是獵才顧問，更是企業成長的策略夥伴，以及人才職涯發展的引路人。我們用專業與真誠，搭建企業與人才之間的橋樑。
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#F37B22] rounded-3xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F37B22] to-[#ff9447] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4">我們的使命</h3>
              <p className="text-gray-600 leading-relaxed">
                致力於透過專業顧問與精準配對，協助企業打造優秀團隊，幫助人才邁向更理想的職涯舞台。
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F37B22] to-[#ff9447] rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4">我們的願景</h3>
              <p className="text-gray-600 leading-relaxed">
                成為亞洲最值得信賴的人才顧問夥伴。我們相信——當人與組織找到契合，未來就能更有力量。
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F37B22] to-[#ff9447] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4">我們的承諾</h3>
              <p className="text-gray-600 leading-relaxed">
                以專業、誠信、熱忱為核心，為每一位客戶提供最高品質的服務，創造長期價值。
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#333333] mb-4">核心價值</h2>
            <div className="w-20 h-1 bg-[#F37B22] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#333333] mb-4">我們的故事</h2>
            <div className="w-20 h-1 bg-[#F37B22] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              HRPlus 創立於台北，由一群具多年獵才與企業管理經驗的顧問組成。
              <br />
              我們曾走過外商的制度嚴謹，也理解新創的靈活挑戰。
              <br />
              這些經驗，讓我們更懂得「人」的價值與溫度。
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#F37B22] to-[#ff9447]"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left pl-12 md:pl-0`}>
                    <div className="inline-block bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-3xl font-bold text-[#F37B22] mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-[#333333] mb-2">{item.event}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:relative md:left-0 z-10">
                    <div className="w-6 h-6 bg-white border-4 border-[#F37B22] rounded-full"></div>
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#F3EDE8] to-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-3xl shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              我們期待與您攜手同行
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              無論您是尋找人才的企業，或是追求職涯突破的專業人士，
              <br />
              HRPlus 都能為您提供最專業、最貼心的服務。
            </p>
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-[#F37B22] to-[#ff9447] text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all cursor-pointer">
              Adding Value to People and Organizations
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
