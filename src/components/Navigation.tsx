import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: '首頁' },
    { to: '/about', label: '關於我們' },
    { to: '/for-companies', label: '企業服務' },
    { to: '/for-talents', label: '人才專區' },
    { to: '/insights', label: '職涯洞察' },
    { to: '/contact', label: '聯絡我們' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-white/70 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="w-12 h-12" />
            </div>
            <div>
              <div className="font-bold text-xl">
                <span className="text-[#333333]">HR</span>
                <span className="text-[#F37B22]">Plus</span>
                <span className="text-[#333333]"> Consulting</span>
              </div>
              <div className="text-[#F37B22] text-xs tracking-wider hidden lg:block">YOUR Best HR Business Partner</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${location.pathname === link.to
                  ? 'text-[#F37B22] bg-[#F37B22]/10'
                  : 'text-[#333333] hover:text-[#F37B22] hover:bg-[#FAF9F7]'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#333333] hover:bg-[#FAF9F7] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${location.pathname === link.to
                  ? 'text-[#F37B22] bg-[#F37B22]/10'
                  : 'text-[#333333] hover:text-[#F37B22] hover:bg-[#FAF9F7]'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
