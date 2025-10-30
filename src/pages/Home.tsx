import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, Sparkles, Users, Brain, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useSEO } from '@/utils/seo';
import BlobDecoration from '@/components/layout/BlobDecoration';

const Home = () => {
  useSEO({
    title: 'Home',
    description: 'Teaching infants and toddlers (birth to three years) is a vital part of early childhood education in Australia.',
  });

  const themes = [
    {
      icon: Heart,
      title: 'Strong Sense of Identity',
      description: 'Building secure relationships and self-confidence through responsive caregiving',
      color: 'primary' as const,
    },
    {
      icon: Users,
      title: 'Connected to Their World',
      description: 'Fostering belonging and meaningful connections with family and community',
      color: 'accent' as const,
    },
    {
      icon: Sparkles,
      title: 'Strong Sense of Wellbeing',
      description: 'Supporting physical, emotional, and social health through safe environments',
      color: 'secondary' as const,
    },
    {
      icon: Brain,
      title: 'Confident Learners',
      description: 'Encouraging curiosity, exploration, and active engagement through play',
      color: 'primary' as const,
    },
    {
      icon: BookOpen,
      title: 'Effective Communicators',
      description: 'Developing language, literacy, and expression through everyday interactions',
      color: 'accent' as const,
    },
    {
      icon: Leaf,
      title: 'Holistic Development',
      description: 'Nurturing all areas of growth guided by EYLF and VEYLDF frameworks',
      color: 'secondary' as const,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32">
        <BlobDecoration className="top-0 right-0 -translate-y-1/4 translate-x-1/4" color="primary" size="lg" />
        <BlobDecoration className="bottom-0 left-0 translate-y-1/4 -translate-x-1/4" color="accent" size="lg" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Introduction to Teaching in Infant and Toddler Education
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Teaching infants and toddlers (birth to three years) is a vital part of early childhood
              education in Australia. During these first years, children experience rapid growth in their
              physical, emotional, social, and cognitive development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/curriculum/teaching-infant-and-toddler-education">
                <Button size="lg" className="w-full sm:w-auto font-semibold">
                  Explore Curriculum
                </Button>
              </Link>
              <Link to="/reference">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold">
                  Read References
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-foreground/90 leading-relaxed">
              Educators play a key role in creating safe, secure, and engaging environments where children 
              can build strong relationships, explore through play, and develop a sense of belonging (DEEWR, 2009).
            </p>

            <p className="text-foreground/90 leading-relaxed">
              High-quality infant and toddler education is guided by responsive caregiving, where
              educators recognise and respond to each child's individual needs, cues, and interests.
              Through warm and consistent relationships, children develop trust, curiosity, and
              confidence to learn (Bowlby, 1988).
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-8 border border-border shadow-soft">
            <h2 className="text-3xl font-bold mb-4">Australian Curriculum Frameworks</h2>
            <p className="text-muted-foreground mb-6">
              In Australia, educators follow two key frameworks that shape infant and toddler learning:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  The Early Years Learning Framework (EYLF) – "Belonging, Being and Becoming"
                </h3>
                <p className="text-foreground/90 mb-3">
                  The EYLF focuses on five key learning outcomes:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-foreground/90">
                  <li>Children have a strong sense of identity.</li>
                  <li>Children are connected with and contribute to their world.</li>
                  <li>Children have a strong sense of wellbeing.</li>
                  <li>Children are confident and involved learners.</li>
                  <li>Children are effective communicators.</li>
                </ol>
                <p className="text-foreground/90 mt-3">
                  The EYLF emphasises that learning happens through relationships, play, and everyday
                  routines. Educators use intentional teaching to support children's development across
                  all areas of the curriculum (DEEWR, 2009).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-accent">
                  The Victorian Early Years Learning and Development Framework (VEYLDF)
                </h3>
                <p className="text-foreground/90">
                  The VEYLDF builds on the EYLF and applies from birth to eight years. It
                  highlights eight practice principles, including partnerships with families, high
                  expectations for every child, and reflective practice. These principles guide
                  educators in supporting children's learning and wellbeing within a culturally
                  inclusive approach (Victorian Department of Education, 2022).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface rounded-2xl p-8 border border-border shadow-soft">
            <h2 className="text-3xl font-bold mb-4">Theories and Approaches That Guide Practice</h2>
            <p className="text-muted-foreground mb-6">
              Australian early childhood education is based on well-known child development theories
              and evidence-based approaches:
            </p>

            <ul className="space-y-3 text-foreground/90">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Attachment Theory (John Bowlby)</strong> – Secure relationships help children feel safe and ready to explore.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span><strong>Sociocultural Theory (Lev Vygotsky)</strong> – Learning happens through social interaction and shared experiences.</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span><strong>Cognitive Development Theory (Jean Piaget)</strong> – Infants and toddlers learn through sensory exploration and active play.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Bronfenbrenner's Ecological Systems Theory</strong> – A child's learning is shaped by family, community, and cultural contexts.</span>
              </li>
            </ul>

            <p className="text-foreground/90 mt-6">
              Modern educational approaches such as Reggio Emilia, Montessori, and the
              HighScope Infant-Toddler Curriculum also influence Australian practice. These
              approaches promote play-based, child-led, and relationship-focused learning,
              which aligns with the EYLF's vision of children as capable, confident, and active learners.
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-8 border border-border shadow-soft">
            <h2 className="text-3xl font-bold mb-4">The Educator's Role</h2>
            <p className="text-foreground/90 leading-relaxed">
              Educators in infant and toddler settings are both caregivers and teachers. Their role is
              to build trusting relationships, observe and understand each child's needs, and create
              learning environments that support every child's wellbeing and development.
            </p>
            <p className="text-foreground/90 leading-relaxed mt-4">
              Through everyday routines like feeding, playing, talking, and singing educators nurture
              children's sense of belonging, being, and becoming (DEEWR, 2009). They also work in
              partnership with families to ensure that care and learning are consistent and meaningful.
            </p>
          </div>
        </motion.div>
      </section>

      {/* EYLF Outcomes Cards */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              EYLF Learning Outcomes in Practice
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Explore the key themes that guide high-quality infant and toddler education in Australia
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {themes.map((theme, index) => {
                const Icon = theme.icon;
                return (
                  <motion.div
                    key={theme.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Card className="p-6 h-full hover:shadow-medium transition-shadow duration-300 border-2 hover:border-primary/50">
                      <div className={`w-12 h-12 rounded-xl bg-${theme.color}/10 flex items-center justify-center mb-4`}>
                        <Icon className={`h-6 w-6 text-${theme.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{theme.title}</h3>
                      <p className="text-muted-foreground">{theme.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
