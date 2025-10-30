import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useSEO } from '@/utils/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { useLocation } from 'react-router-dom';

const references = [
  {
    citation: 'Bowlby, J. (1988). A secure base: Parent-child attachment and healthy human development. Basic Books.',
  },
  {
    citation: 'Department of Education, Employment and Workplace Relations (DEEWR). (2009). Belonging, being and becoming: The Early Years Learning Framework for Australia. Commonwealth of Australia.',
  },
  {
    citation: 'HighScope Educational Research Foundation. (n.d.). Infant-toddler curriculum.',
    url: 'https://highscope.org/what-we-offer/the-highscope-curriculum/infant-toddler-curriculum/',
  },
  {
    citation: 'Piaget, J. (1952). The origins of intelligence in children. International Universities Press.',
  },
  {
    citation: 'Vygotsky, L. S. (1978). Mind in society: The development of higher psychological processes. Harvard University Press.',
  },
  {
    citation: 'Victorian Department of Education. (2022). Victorian Early Years Learning and Development Framework.',
    url: 'https://education.vic.gov.au',
  },
];

const Reference = () => {
  const location = useLocation();
  
  useSEO({
    title: 'References',
    description: 'Academic references and resources for infant and toddler education, including EYLF, VEYLDF, and foundational child development theories.',
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Breadcrumbs pathname={location.pathname} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">References</h1>
          <p className="text-lg text-muted-foreground mb-12">
            The following sources inform the content and approach to infant and toddler education presented on this site.
          </p>

          <div className="space-y-6">
            {references.map((ref, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-surface rounded-lg p-6 border border-border shadow-soft hover:shadow-medium transition-shadow"
              >
                <p className="text-foreground/90 leading-relaxed">
                  {ref.citation}
                </p>
                {ref.url && (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-3 text-primary hover:text-primary-glow transition-colors font-medium"
                  >
                    Visit resource
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-accent/10 border border-accent/20 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Note on Citations</h2>
            <p className="text-foreground/90">
              All references follow standard academic citation formats and represent key theoretical
              foundations and policy frameworks relevant to infant and toddler education in Australia.
              These resources are essential reading for educators working in early childhood settings.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reference;
