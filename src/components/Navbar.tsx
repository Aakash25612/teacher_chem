import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [neetMenuOpen, setNeetMenuOpen] = useState(false);
  const [jeeMenuOpen, setJeeMenuOpen] = useState(false);
  const [mobileNeetOpen, setMobileNeetOpen] = useState(false);
  const [mobileJeeOpen, setMobileJeeOpen] = useState(false);
  
  const location = useLocation();
  const neetRef = useRef<HTMLDivElement>(null);
  const jeeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
    setMobileNeetOpen(false);
    setMobileJeeOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (neetRef.current && !neetRef.current.contains(event.target as Node)) {
        setNeetMenuOpen(false);
      }
      if (jeeRef.current && !jeeRef.current.contains(event.target as Node)) {
        setJeeMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { text: 'Home', path: '/' },
    { 
      text: 'NEET', 
      dropdown: true, 
      items: [
        { text: 'Repeater Batch', path: '/neet/repeater' },
        { text: 'Class 11 Chemistry', path: '/neet/11th' },
        { text: 'Class 12 Chemistry', path: '/neet/12th' },
        { text: 'Crash Course', path: '/neet/crash-course' }
      ]
    },
    { 
      text: 'JEE', 
      dropdown: true, 
      items: [
        { text: 'Repeater Batch', path: '/jee/repeater' },
        { text: 'Class 11 Chemistry', path: '/jee/11th' },
        { text: 'Class 12 Chemistry', path: '/jee/12th' }
      ]
    },
    { text: 'Physical Chemistry', path: '/chemistry/physical' },
    { text: 'Organic Chemistry', path: '/chemistry/organic' },
    { text: 'Inorganic Chemistry', path: '/chemistry/inorganic' },
    { text: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Decipher Academy</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                item.dropdown ? (
                  <div key={index} ref={item.text === 'NEET' ? neetRef : jeeRef} className="relative">
                    <button 
                      className="px-3 py-2 text-gray-600 hover:text-blue-600 flex items-center"
                      onClick={() => {
                        if (item.text === 'NEET') {
                          setNeetMenuOpen(!neetMenuOpen);
                          setJeeMenuOpen(false);
                        } else if (item.text === 'JEE') {
                          setJeeMenuOpen(!jeeMenuOpen);
                          setNeetMenuOpen(false);
                        }
                      }}
                    >
                      {item.text}
                      <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                        (item.text === 'NEET' && neetMenuOpen) || (item.text === 'JEE' && jeeMenuOpen) ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {((item.text === 'NEET' && neetMenuOpen) || 
                      (item.text === 'JEE' && jeeMenuOpen)) && (
                      <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 animate-fadeIn">
                        {item.items?.map((subItem, subIndex) => (
                          <Link 
                            key={subIndex}
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                            onClick={() => {
                              setNeetMenuOpen(false);
                              setJeeMenuOpen(false);
                            }}
                          >
                            {subItem.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    to={item.path}
                    className="px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.text}
                  </Link>
                )
              ))}
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-40 md:hidden bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
            {/* Mobile menu content */}
            <div 
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl z-50 animate-slideIn"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <BookOpen className="h-8 w-8 text-blue-600" />
                  <span className="ml-2 text-xl font-bold text-gray-800">Decipher Academy</span>
                </Link>
                <button 
                  className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="px-2 py-3 space-y-1 overflow-y-auto max-h-[calc(100vh-4rem)]">
                <Link 
                  to="/"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                
                {/* NEET Mobile Dropdown */}
                <div className="relative">
                  <button
                    className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    onClick={() => {
                      setMobileNeetOpen(!mobileNeetOpen);
                      setMobileJeeOpen(false);
                    }}
                  >
                    <span>NEET</span>
                    <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${mobileNeetOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileNeetOpen && (
                    <div className="pl-4 space-y-1 animate-slideDown">
                      {navItems[1].items?.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* JEE Mobile Dropdown */}
                <div className="relative">
                  <button
                    className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    onClick={() => {
                      setMobileJeeOpen(!mobileJeeOpen);
                      setMobileNeetOpen(false);
                    }}
                  >
                    <span>JEE</span>
                    <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${mobileJeeOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileJeeOpen && (
                    <div className="pl-4 space-y-1 animate-slideDown">
                      {navItems[2].items?.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Chemistry Links */}
                {navItems.slice(3, -1).map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.text}
                  </Link>
                ))}

                {/* Contact Link */}
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16" />
    </>
  );
}