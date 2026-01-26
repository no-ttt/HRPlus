import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-12 h-12">
                  <circle cx="30" cy="30" r="12" fill="#F37B22" />
                  <path d="M 30 45 L 20 55 L 20 80 L 25 80 L 25 65 L 35 65 L 35 80 L 40 80 L 40 55 Z" fill="#F37B22" />
                  <rect x="60" y="35" width="8" height="30" rx="1" fill="#F37B22" />
                  <rect x="49" y="46" width="30" height="8" rx="1" fill="#F37B22" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-xl">HRPlus Consulting</div>
                <div className="text-[#F37B22] text-xs tracking-wider">YOUR Best HR Business Partner</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              HRPlus 致力於透過專業顧問與精準配對，<br />
              協助企業打造優秀團隊，幫助人才邁向更理想的職涯舞台。
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F37B22] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F37B22] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F37B22] transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#F37B22] transition-colors text-sm">
                  關於我們
                </Link>
              </li>
              <li>
                <Link to="/for-companies" className="text-gray-400 hover:text-[#F37B22] transition-colors text-sm">
                  企業服務
                </Link>
              </li>
              <li>
                <Link to="/for-talents" className="text-gray-400 hover:text-[#F37B22] transition-colors text-sm">
                  人才專區
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-gray-400 hover:text-[#F37B22] transition-colors text-sm">
                  職涯洞察
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">聯絡資訊</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-[#F37B22] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">台北市南京東路二段150號11樓</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone size={18} className="text-[#F37B22] flex-shrink-0" />
                <span className="text-gray-400">(886) 2 6605-7875</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail size={18} className="text-[#F37B22] flex-shrink-0" />
                <span className="text-gray-400">service@hrplusconsultants.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 HRPlus Consulting. All rights reserved. | YOUR Best HR Business Partner.
          </p>
        </div>
      </div>
    </footer>
  );
}
