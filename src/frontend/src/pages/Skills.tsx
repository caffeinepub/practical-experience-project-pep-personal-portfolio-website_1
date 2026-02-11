import { Code, Palette, Database, Wrench, Zap, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: Code,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      skills: [
        { name: 'HTML & CSS', level: 95 },
        { name: 'JavaScript', level: 95 },
        { name: 'React', level: 90 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      category: 'Backend Development',
      icon: Database,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'REST APIs', level: 92 },
        { name: 'MongoDB', level: 85 },
      ],
    },
    {
      category: 'Design & UI/UX',
      icon: Palette,
      color: 'text-chart-1',
      bgColor: 'bg-chart-1/10',
      skills: [
        { name: 'Responsive Design', level: 95 },
        { name: 'Figma', level: 85 },
        { name: 'User Experience', level: 90 },
        { name: 'Accessibility', level: 92 },
      ],
    },
    {
      category: 'Tools & Technologies',
      icon: Wrench,
      color: 'text-chart-2',
      bgColor: 'bg-chart-2/10',
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'VS Code', level: 95 },
        { name: 'npm/yarn', level: 92 },
        { name: 'Chrome DevTools', level: 93 },
      ],
    },
  ];

  const additionalSkills = [
    { name: 'Problem Solving', icon: Zap },
    { name: 'Team Leadership', icon: Globe },
    { name: 'Agile Methodology', icon: Wrench },
    { name: 'Code Review', icon: Code },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 mb-4">
          <Zap className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and expertise developed over 30 years of professional web development.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl ${category.bgColor}`}>
                    <Icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Additional Skills */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Professional Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {additionalSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-md">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Learning Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-2">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-4 text-center">Always Learning</h3>
            <p className="text-center text-foreground/80 mb-4">
              Staying current with emerging technologies and frameworks
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="text-base px-4 py-2">TypeScript</Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">Next.js</Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">GraphQL</Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">Docker</Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">AWS</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
