import { portfolioIdentity } from '../content/portfolioIdentity';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {portfolioIdentity.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
