import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, Library } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useSEO } from '@/utils/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BlobDecoration from '@/components/layout/BlobDecoration';
import { useLocation } from 'react-router-dom';

interface CurriculumTemplateProps {
  title: string;
  intro: string;
}

const CurriculumTemplate = ({ title, intro }: CurriculumTemplateProps) => {
  const location = useLocation();
  
  useSEO({
    title,
    description: intro,
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <Breadcrumbs pathname={location.pathname} />
        
        <div className="relative">
          <BlobDecoration className="top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-30" color="primary" size="md" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              {intro}
            </p>

            {/* Key Ideas Section */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Key Ideas</h2>
              </div>
              
              <Card className="p-8 bg-surface border-2">
                <p className="text-muted-foreground mb-4">
                  Content for this section will be added soon. Key concepts and theoretical foundations 
                  related to {title.toLowerCase()} will be outlined here.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="italic">Coming soon...</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* Practical Examples Section */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mr-3">
                  <BookOpen className="h-5 w-5 text-accent" />
                </div>
                <h2 className="text-3xl font-bold">Practical Examples</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 bg-surface border-2">
                  <h3 className="text-xl font-semibold mb-3">Example 1</h3>
                  <p className="text-muted-foreground italic">
                    Real-world classroom scenarios and teaching strategies will be featured here.
                  </p>
                </Card>

                <Card className="p-6 bg-surface border-2">
                  <h3 className="text-xl font-semibold mb-3">Example 2</h3>
                  <p className="text-muted-foreground italic">
                    Additional practical applications and case studies will be shared here.
                  </p>
                </Card>

                <Card className="p-6 bg-surface border-2">
                  <h3 className="text-xl font-semibold mb-3">Example 3</h3>
                  <p className="text-muted-foreground italic">
                    Further examples demonstrating best practices in early childhood education.
                  </p>
                </Card>
              </div>
            </section>

            {/* Further Reading Section */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mr-3">
                  <Library className="h-5 w-5 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold">Further Reading</h2>
              </div>

              <Card className="p-8 bg-surface border-2">
                <p className="text-muted-foreground mb-4">
                  Additional resources, academic papers, and recommended readings will be listed here to support 
                  deeper understanding of {title.toLowerCase()}.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="italic">Resources to be added...</li>
                </ul>
              </Card>
            </section>

            {/* Placeholder Notice */}
            <div className="mt-12 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> This page is currently under development. Content will be added progressively 
                to provide comprehensive coverage of {title.toLowerCase()} in the context of Australian early 
                childhood education frameworks.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumTemplate;
