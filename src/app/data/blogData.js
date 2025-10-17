export const blogData = [
  {
    id: 1,
    slug: "why-i-chose-nextjs-for-my-portfolio",
    title: "Why I Chose Next.js for My Portfolio",
    excerpt: "Diving deep into the reasons behind selecting Next.js, from its performance benefits and SEO capabilities to the unparalleled developer experience.",
    date: "2025-07-15",
    tags: ["Next.js", "React", "Web Dev"],
    content: `
      <p>When I decided to rebuild my portfolio, the choice of framework was critical. I needed something fast, SEO-friendly, and a pleasure to work with. After considering several options, I landed on Next.js, and I haven't looked back.</p>
      <h3 class="text-2xl font-bold text-white mt-6 mb-3">Performance Out of the Box</h3>
      <p>Next.js offers features like Automatic Code Splitting, Server-Side Rendering (SSR), and Static Site Generation (SSG) that make web applications incredibly fast. For a portfolio, where first impressions matter, a snappy loading time is non-negotiable.</p>
      <h3 class="text-2xl font-bold text-white mt-6 mb-3">Developer Experience</h3>
      <p>The file-based routing system is intuitive, and features like Fast Refresh make the development feedback loop incredibly quick. It allows me to focus on building features rather than wrestling with configuration.</p>
    `
  },
  {
    id: 2,
    slug: "getting-started-with-web3-development",
    title: "A Full-stack Developer's Guide to Web3",
    excerpt: "Transitioning from Web2 to Web3 can be daunting. Here's a practical roadmap covering essential tools like Ethers.js, Hardhat, and thirdweb.",
    date: "2025-10-12",
    tags: ["Web3", "Solidity", "Ethers.js"],
    content: `
      <p>The world of Web3 is exciting but can feel like a completely new paradigm for developers coming from a traditional full-stack background. Here’s a breakdown of the core concepts and tools you'll need to get started.</p>
      <h3 class="text-2xl font-bold text-white mt-6 mb-3">Core Concepts</h3>
      <ul class="list-disc list-inside space-y-2 pl-4">
        <li><strong>Blockchain:</strong> A decentralized, immutable ledger.</li>
        <li><strong>Smart Contracts:</strong> Self-executing contracts with the terms of the agreement directly written into code.</li>
        <li><strong>dApps:</strong> Decentralized applications whose backend code runs on a decentralized peer-to-peer network.</li>
      </ul>
      <h3 class="text-2xl font-bold text-white mt-6 mb-3">Essential Tooling</h3>
      <p>Your new toolkit will likely include <strong>Solidity</strong> for writing smart contracts, <strong>Hardhat</strong> or <strong>Truffle</strong> for your development environment, and <strong>Ethers.js</strong> or <strong>Web3.js</strong> for interacting with your contracts from the frontend.</p>
    `
  },
  {
    id: 3,
    slug: "mastering-tailwind-css-animations",
    title: "Mastering Tailwind CSS for Modern UI/UX",
    excerpt: "Explore how Tailwind CSS streamlines responsive design and how to leverage its utility-first approach to build beautiful, custom user interfaces without leaving your HTML.",
    date: "2024-07-05",
    tags: ["Tailwind CSS", "UI/UX", "Frontend"],
    content: `
      <p>Tailwind CSS has revolutionized the way I approach styling. By providing low-level utility classes, it allows for rapid prototyping and building completely custom designs without writing a single line of custom CSS.</p>
      <h3 class="text-2xl font-bold text-white mt-6 mb-3">The Utility-First Mindset</h3>
      <p>Instead of writing CSS classes like <code>.card</code> or <code>.button</code>, you compose styles directly in your HTML. This might seem strange at first, but it prevents CSS bloat and makes components more self-contained and easier to maintain.</p>
      <pre class="bg-slate-800 rounded-lg p-4 my-4 overflow-x-auto"><code class="text-sm text-cyan-300">&lt;button class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"&gt;Click me&lt;/button&gt;</code></pre>
      <p>This approach keeps your styling consistent and your development process fast.</p>
    `
  },
  // Add more blog posts here
];