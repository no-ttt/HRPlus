import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    inquiry: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScgsPlBUU6xmhLBT9HvGjXQE7izM6j1Ouqo8iGTO6vfd-MdcQ/formResponse';
  const ENTRY_IDS = {
    name: 'entry.1932043174',
    company: 'entry.1890161487',
    phone: 'entry.1161768948',
    email: 'entry.804330278',
    inquiry: 'entry.564152929',
    message: 'entry.755125217',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.append(ENTRY_IDS.name, formData.name);
    params.append(ENTRY_IDS.company, formData.company);
    params.append(ENTRY_IDS.phone, formData.phone);
    params.append(ENTRY_IDS.email, formData.email);
    params.append(ENTRY_IDS.inquiry, formData.inquiry);
    params.append(ENTRY_IDS.message, formData.message);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: params,
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          inquiry: '',
          message: '',
        });
      }, 5000);
    } catch (error) {
      console.error('Submission error:', error);
      alert('發送失敗，請稍後再試或直接聯繫我們。');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          <div className="relative bg-gradient-to-br from-[#F37B22] via-[#ff8c3a] to-[#F37B22] flex items-center justify-center px-8 sm:px-12 lg:px-16 py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>

            <div className="relative z-10 max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                聯絡我們
              </h1>
              <p className="text-lg sm:text-xl text-white/95 leading-relaxed">
                有任何合作或招募需求，歡迎與我們聯繫
              </p>
            </div>
          </div>

          <div className="relative bg-gray-900 hidden lg:block">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-[#F37B22]/30 to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#333333] mb-4">開始對話</h2>
              <div className="w-20 h-1 bg-[#F37B22] mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                無論您是企業尋找人才，或是專業人士尋求職涯發展機會，
                我們的專業顧問團隊都準備好協助您。
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-[#FAF9F7] rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F37B22] to-[#ff9447] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333333] mb-1">辦公地址</h3>
                    <p className="text-gray-600">台北市南京東路二段150號11樓</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-[#FAF9F7] rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F37B22] to-[#ff9447] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333333] mb-1">聯絡電話</h3>
                    <p className="text-gray-600">(886) 2 6605-7875</p>
                    <p className="text-sm text-gray-500 mt-1">週一至週五 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-[#FAF9F7] rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F37B22] to-[#ff9447] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333333] mb-1">電子郵件</h3>
                    <p className="text-gray-600">service@hrplusconsultants.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-[#F3EDE8] to-white rounded-2xl border-l-4 border-[#F37B22]">
                <h3 className="font-bold text-[#333333] mb-2">營業時間</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>週一至週五：09:00 - 18:00</p>
                  <p>週六、週日：休息</p>
                  <p className="text-[#F37B22] mt-2">預約諮詢請提前來電或填寫表單</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#FAF9F7] to-white p-8 rounded-3xl shadow-xl">
                <h2 className="text-2xl font-bold text-[#333333] mb-6">填寫諮詢表單</h2>

                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="w-20 h-20 bg-[#F37B22] rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-white" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#333333] mb-3">送出成功！</h3>
                    <p className="text-gray-600 leading-relaxed">
                      感謝您的來信，我們已收到您的訊息
                      <br />
                      專業顧問將在 24 小時內與您聯繫
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#333333] mb-2">
                        您的大名 <span className="text-[#F37B22]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="如何稱呼您"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F37B22] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-[#333333] mb-2">
                        公司名稱
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="您的公司或組織"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F37B22] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-[#333333] mb-2">
                          聯絡電話 <span className="text-[#F37B22]">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="09XX-XXX-XXX"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F37B22] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-[#333333] mb-2">
                          電子郵件 <span className="text-[#F37B22]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F37B22] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiry" className="block text-sm font-semibold text-[#333333] mb-2">
                        諮詢類型 <span className="text-[#F37B22]">*</span>
                      </label>
                      <select
                        id="inquiry"
                        name="inquiry"
                        required
                        value={formData.inquiry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F37B22] focus:outline-none transition-colors bg-white"
                      >
                        <option value="">請選擇</option>
                        <option value="企業招募服務">企業招募服務</option>
                        <option value="人資策略顧問">人資策略顧問</option>
                        <option value="個人職涯諮詢">個人職涯諮詢</option>
                        <option value="履歷健檢與面試準備">履歷健檢與面試準備</option>
                        <option value="其他需求">其他需求</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#333333] mb-2">
                        需求描述 <span className="text-[#F37B22]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="請描述您的需求，我們將提供最適合的服務方案"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F37B22] focus:outline-none transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-[#F37B22] to-[#ff9447] text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center space-x-2"
                    >
                      <Send size={20} />
                      <span>送出諮詢</span>
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      送出表單即表示您同意我們的隱私權政策
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
