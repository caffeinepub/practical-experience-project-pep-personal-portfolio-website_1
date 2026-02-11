import { User, Briefcase, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { portfolioIdentity } from '../content/portfolioIdentity';

export default function HomeAbout() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
              <img
                src="/assets/generated/profile-avatar.dim_512x512.png"
                alt="Profile"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-background shadow-xl"
              />
            </div>
          </div>

          {/* Intro Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Hello, I'm {portfolioIdentity.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              {portfolioIdentity.role} with {portfolioIdentity.experience} of Experience
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              {portfolioIdentity.bio}
            </p>
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
        {/* Short Bio */}
        <Card className="border-2 hover:border-primary/50 transition-colors">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">About Me</h2>
                <p className="text-foreground/80 leading-relaxed">
                  With three decades of experience in web development, I have witnessed and adapted to the evolution of the web from its early days to modern frameworks. My expertise spans across multiple technologies, and I take pride in delivering high-quality, maintainable code that stands the test of time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scope of Work */}
        <Card className="border-2 hover:border-primary/50 transition-colors">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <Briefcase className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">What I Do</h2>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Full Stack Web Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Responsive Design & UI/UX</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Custom Web Applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>API Integration & Development</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto text-center">
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-foreground/80 mb-6">
            I'm available for freelance projects and consulting. Whether you need a new website, want to improve an existing one, or have a unique project in mind, I'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
