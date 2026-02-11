import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Education() {
  const educationData = [
    {
      institution: 'University of Mumbai',
      degree: 'Bachelor of Computer Science',
      period: '1992 - 1996',
      grade: 'First Class with Distinction',
      achievements: [
        'Graduated with honors in Computer Science',
        'Specialized in Software Engineering',
        'Led university coding club',
        'Published research paper on web technologies',
      ],
      subjects: ['Computer Science', 'Software Engineering', 'Database Systems', 'Web Technologies'],
    },
    {
      institution: 'Professional Development',
      degree: 'Continuous Learning & Certifications',
      period: '1996 - Present',
      grade: 'Multiple Certifications',
      achievements: [
        'Certified in modern web frameworks and technologies',
        'Regular participant in web development conferences',
        'Completed advanced courses in React, Node.js, and cloud technologies',
        'Active contributor to web development community',
      ],
      subjects: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Cloud Computing', 'DevOps'],
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 mb-4">
          <GraduationCap className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Education</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          My educational background and continuous learning journey in technology and software development.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="max-w-4xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
          <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">{edu.institution}</CardTitle>
                  <p className="text-lg font-medium text-primary">{edu.degree}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Badge variant="secondary" className="w-fit">
                    <Calendar className="h-3 w-3 mr-1" />
                    {edu.period}
                  </Badge>
                  <Badge variant="outline" className="w-fit">
                    {edu.grade}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Achievements */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Key Achievements
                </h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-foreground/80">
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subjects */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Areas of Study</h3>
                <div className="flex flex-wrap gap-2">
                  {edu.subjects.map((subject, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <div className="max-w-4xl mx-auto mt-12">
        <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-2">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-3">Lifelong Learning</h3>
            <p className="text-foreground/80 leading-relaxed">
              Throughout my 30-year career, I have remained committed to continuous learning and professional development. I regularly update my skills with the latest web technologies, frameworks, and best practices to deliver modern, efficient solutions to my clients.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
