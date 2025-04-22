import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

// Dados de contato (poderiam vir de um arquivo de config ou CMS futuramente)
const CONTACTS = {
  github: "https://github.com/erisdll",
  linkedin: "https://linkedin.com/in/erika-mello",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-muted-foreground hover:text-white hover:scale-105 transition-transform duration-200">
          © {year} Erika Mello. All rights reserved.
        </p>
        <address className="not-italic">
          <div className="flex items-center gap-4">
            <Link
              href={CONTACTS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Erika Mello"
            >
              <Button variant="ghost" size="icon" className="hover:text-white hover:scale-105 transition-transform duration-200">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>

            <Link
              href={CONTACTS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Erika Mello"
            >
              <Button variant="ghost" size="icon" className="hover:text-white hover:scale-105 transition-transform duration-200">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </address>
      </div>
    </footer>
  );
}
