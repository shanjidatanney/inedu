import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('en-AU', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Site Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-3">
              Infant & Toddler Education
            </h3>
            <p className="text-sm text-muted-foreground">
              High-quality infant and toddler education guided by EYLF and VEYLDF frameworks in Australia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/curriculum/teaching-infant-and-toddler-education" className="text-muted-foreground hover:text-primary transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link to="/reference" className="text-muted-foreground hover:text-primary transition-colors">
                  Reference
                </Link>
              </li>
            </ul>
          </div>

          {/* Meta Info */}
          <div>
            <h4 className="font-heading font-semibold mb-3">Information</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>© {currentYear} Infant & Toddler Education</li>
              <li>Last updated: {lastUpdated}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>Built with care for early childhood educators in Australia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
