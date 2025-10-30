import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

const curriculumItems = [
  { label: 'Teaching Infant and Toddler Education', path: '/curriculum/teaching-infant-and-toddler-education' },
  { label: 'Infant and Toddler Play Environments', path: '/curriculum/infant-and-toddler-play-environments' },
  { label: 'Promoting Infant and Toddler Development, Learning, and Wellbeing', path: '/curriculum/promoting-infant-and-toddler-development-learning-and-wellbeing' },
  { label: 'Supporting Cognitive Development', path: '/curriculum/supporting-cognitive-development' },
  { label: 'Fostering Social Development', path: '/curriculum/fostering-social-development' },
  { label: 'Fostering Emotional Development', path: '/curriculum/fostering-emotional-development' },
  { label: 'Facilitating Language and Literacy Development', path: '/curriculum/facilitating-language-and-literacy-development' },
  { label: 'Perceptual Development and the Five Senses', path: '/curriculum/perceptual-development-and-the-five-senses' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isActive = (path: string) => location.pathname === path;
  const isCurriculumActive = location.pathname.startsWith('/curriculum');

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">IT</span>
            </div>
            <span className="font-heading font-bold text-lg hidden sm:inline">
              Infant & Toddler Education
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button 
                variant={isActive('/') ? 'secondary' : 'ghost'}
                className="font-medium"
              >
                Home
              </Button>
            </Link>

            {/* Curriculum Dropdown */}
            <div className="relative">
              <Button
                variant={isCurriculumActive ? 'secondary' : 'ghost'}
                className="font-medium flex items-center"
                onMouseEnter={() => setIsCurriculumOpen(true)}
                onMouseLeave={() => setIsCurriculumOpen(false)}
              >
                Curriculum
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              
              <AnimatePresence>
                {isCurriculumOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-80 bg-popover border border-border rounded-lg shadow-medium overflow-hidden z-50"
                    onMouseEnter={() => setIsCurriculumOpen(true)}
                    onMouseLeave={() => setIsCurriculumOpen(false)}
                  >
                    {curriculumItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-3 hover:bg-muted transition-colors text-sm"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/reference">
              <Button 
                variant={isActive('/reference') ? 'secondary' : 'ghost'}
                className="font-medium"
              >
                Reference
              </Button>
            </Link>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button 
                    variant={isActive('/') ? 'secondary' : 'ghost'}
                    className="w-full justify-start"
                  >
                    Home
                  </Button>
                </Link>

                <div className="space-y-1">
                  <div className="font-medium px-4 py-2 text-muted-foreground text-sm">
                    Curriculum
                  </div>
                  {curriculumItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button
                        variant={isActive(item.path) ? 'secondary' : 'ghost'}
                        className="w-full justify-start text-sm pl-8"
                      >
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </div>

                <Link to="/reference" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button 
                    variant={isActive('/reference') ? 'secondary' : 'ghost'}
                    className="w-full justify-start"
                  >
                    Reference
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
