import { Images, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export default function Gallery() {
  const galleryItems = [
    {
      src: '/assets/generated/gallery-1.dim_1200x800.png',
      title: 'Workspace Setup',
      description: 'My development environment where I create web solutions',
    },
    {
      src: '/assets/generated/gallery-2.dim_1200x800.png',
      title: 'Professional Journey',
      description: 'Highlights from 30 years of web development experience',
    },
    {
      src: '/assets/generated/gallery-3.dim_1200x800.png',
      title: 'Tech Stack',
      description: 'Modern tools and technologies I work with',
    },
    {
      src: '/assets/generated/gallery-4.dim_1200x800.png',
      title: 'Collaboration',
      description: 'Working with clients to bring their visions to life',
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 mb-4">
          <Images className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A visual showcase of my work environment, professional journey, and the tools that help me deliver exceptional web solutions.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
        {galleryItems.map((item, index) => (
          <Card
            key={index}
            className="group border-2 hover:border-primary/50 transition-all hover:shadow-xl overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <AspectRatio ratio={3 / 2}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex items-center gap-2 text-white">
                    <ExternalLink className="h-5 w-5" />
                    <span className="font-medium">View Details</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <div className="max-w-4xl mx-auto mt-12">
        <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-2">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-3">Want to See More?</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Check out my GitHub profile for code samples and projects, or reach out to discuss how I can help with your web development needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                View GitHub
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
