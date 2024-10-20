import React from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className={`${
      theme === 'light' 
        ? 'bg-white text-gray-800 border-b border-gray-200' 
        : 'bg-gray-900 text-white border-b border-gray-700'
    } shadow-md transition-all duration-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className={`text-xl font-bold ${
              theme === 'light' 
                ? 'text-gray-800' 
                : 'text-white'
            }`}>
              TaskMaster
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`px-3 py-2 rounded-md ${
              theme === 'light'
                ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                : 'text-gray-200 hover:bg-gray-700 hover:text-white'
            } transition-colors duration-200`}>
              Dashboard
            </button>
            <button className={`px-3 py-2 rounded-md ${
              theme === 'light'
                ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                : 'text-gray-200 hover:bg-gray-700 hover:text-white'
            } transition-colors duration-200`}>
              Tasks
            </button>
            <button className={`px-3 py-2 rounded-md ${
              theme === 'light'
                ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                : 'text-gray-200 hover:bg-gray-700 hover:text-white'
            } transition-colors duration-200`}>
              Projects
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === 'light'
                  ? 'hover:bg-gray-100 text-gray-700 hover:text-gray-900'
                  : 'hover:bg-gray-700 text-gray-200 hover:text-white'
              } transition-colors duration-200`}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${
                theme === 'light'
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  : 'text-gray-200 hover:bg-gray-700 hover:text-white'
              } transition-colors duration-200`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 ${
              theme === 'light'
                ? 'bg-white'
                : 'bg-gray-900'
            }`}>
              <button className={`block w-full px-3 py-2 rounded-md text-left ${
                theme === 'light'
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  : 'text-gray-200 hover:bg-gray-700 hover:text-white'
              } transition-colors duration-200`}>
                Dashboard
              </button>
              <button className={`block w-full px-3 py-2 rounded-md text-left ${
                theme === 'light'
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  : 'text-gray-200 hover:bg-gray-700 hover:text-white'
              } transition-colors duration-200`}>
                Tasks
              </button>
              <button className={`block w-full px-3 py-2 rounded-md text-left ${
                theme === 'light'
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  : 'text-gray-200 hover:bg-gray-700 hover:text-white'
              } transition-colors duration-200`}>
                Projects
              </button>
              <button
                onClick={toggleTheme}
                className={`flex items-center w-full px-3 py-2 rounded-md ${
                  theme === 'light'
                    ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    : 'text-gray-200 hover:bg-gray-700 hover:text-white'
                } transition-colors duration-200`}
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-5 w-5 mr-2" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 mr-2" />
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;