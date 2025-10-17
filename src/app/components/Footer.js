import { portfolioData } from "@/app/data/portfolioData";

export const Footer = () => (
  <footer className="mt-20 py-8 border-t border-slate-700/50 text-center text-gray-500 text-sm">
    <p>&copy; {new Date().getFullYear()} {portfolioData.name.split(' ')[0]}. Built with Next.js & Tailwind CSS.</p>
  </footer>
);