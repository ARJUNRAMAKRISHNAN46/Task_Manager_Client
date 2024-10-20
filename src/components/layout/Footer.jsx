import React from "react";
import { Github, Twitter, Mail } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`shadow-md transition-all duration-200 ${
      theme === 'light'
        ? 'bg-white border-t border-gray-200'
        : 'bg-gray-900 border-t border-gray-700'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className={`${
              theme === 'light'
                ? 'text-gray-600 hover:text-gray-900'
                : 'text-gray-300 hover:text-white'
            } transition-colors duration-200`}>
              © 2024 TaskMaster. All rights reserved.
            </span>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className={`transition-all duration-200 ${
                theme === 'light'
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              } rounded-full p-2`}
              aria-label="GitHub"
            >
              <Github className={`h-5 w-5 ${
                theme === 'light'
                  ? 'hover:scale-110'
                  : 'hover:scale-110'
              } transition-transform duration-200`} />
            </a>
            <a
              href="#"
              className={`transition-all duration-200 ${
                theme === 'light'
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              } rounded-full p-2`}
              aria-label="Twitter"
            >
              <Twitter className={`h-5 w-5 ${
                theme === 'light'
                  ? 'hover:scale-110'
                  : 'hover:scale-110'
              } transition-transform duration-200`} />
            </a>
            <a
              href="#"
              className={`transition-all duration-200 ${
                theme === 'light'
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              } rounded-full p-2`}
              aria-label="Email"
            >
              <Mail className={`h-5 w-5 ${
                theme === 'light'
                  ? 'hover:scale-110'
                  : 'hover:scale-110'
              } transition-transform duration-200`} />
            </a>
          </div>
        </div>
        
        {/* Additional Footer Content */}
        <div className={`mt-8 pt-8 ${
          theme === 'light'
            ? 'border-t border-gray-200'
            : 'border-t border-gray-700'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className={`text-sm font-semibold ${
                theme === 'light'
                  ? 'text-gray-900'
                  : 'text-white'
              } mb-4`}>
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className={`text-sm ${
                    theme === 'light'
                      ? 'text-gray-600 hover:text-gray-900'
                      : 'text-gray-300 hover:text-white'
                  } transition-colors duration-200`}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className={`text-sm ${
                    theme === 'light'
                      ? 'text-gray-600 hover:text-gray-900'
                      : 'text-gray-300 hover:text-white'
                  } transition-colors duration-200`}>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className={`text-sm ${
                    theme === 'light'
                      ? 'text-gray-600 hover:text-gray-900'
                      : 'text-gray-300 hover:text-white'
                  } transition-colors duration-200`}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className={`text-sm font-semibold ${
                theme === 'light'
                  ? 'text-gray-900'
                  : 'text-white'
              } mb-4`}>
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className={`text-sm ${
                    theme === 'light'
                      ? 'text-gray-600 hover:text-gray-900'
                      : 'text-gray-300 hover:text-white'
                  } transition-colors duration-200`}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className={`text-sm ${
                    theme === 'light'
                      ? 'text-gray-600 hover:text-gray-900'
                      : 'text-gray-300 hover:text-white'
                  } transition-colors duration-200`}>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className={`text-sm ${
                    theme === 'light'
                      ? 'text-gray-600 hover:text-gray-900'
                      : 'text-gray-300 hover:text-white'
                  } transition-colors duration-200`}>
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className={`text-sm font-semibold ${
                theme === 'light'
                  ? 'text-gray-900'
                  : 'text-white'
              } mb-4`}>
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className={`text-sm ${
                    theme === 'light'
                      ? 'text-gray-600 hover:text-gray-900'
                      : 'text-gray-300 hover:text-white'
                  } transition-colors duration-200`}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className={`text-sm ${
                    theme === 'light'
                      ? 'text-gray-600 hover:text-gray-900'
                      : 'text-gray-300 hover:text-white'
                  } transition-colors duration-200`}>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className={`text-sm ${
                    theme === 'light'
                      ? 'text-gray-600 hover:text-gray-900'
                      : 'text-gray-300 hover:text-white'
                  } transition-colors duration-200`}>
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;