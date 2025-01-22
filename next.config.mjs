import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';
import remarkMath from 'remark-math'; // Plugin pour la gestion des formules mathématiques
import rehypeKatex from 'rehype-katex'; // Plugin pour le rendu de KaTeX

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath], // Ajoute le plugin pour traiter les formules LaTeX
    rehypePlugins: [rehypeKatex], // Ajoute le plugin pour le rendu KaTeX
  },
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'], // Ajout des extensions de page supportées
};

export default withNextIntl(withMDX(nextConfig));
