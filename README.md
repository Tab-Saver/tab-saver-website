
  # Website for Tab Saver

  This is a code bundle for Website for Tab Saver. The original project is available at https://www.figma.com/design/w7N127DhaJzz5uG8l2FBoF/Website-for-Tab-Saver.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Building for production

  Run `npm run build` to create a production build. The output will be in the `build/` directory.

  ## Deployment

  This project is configured for deployment on Vercel.

  ### Deploying to Vercel

  1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
  2. Import your repository in [Vercel](https://vercel.com)
  3. Vercel will automatically detect the Vite configuration and use the settings from `vercel.json`
  4. Your site will be deployed automatically on every push to your main branch

  The `vercel.json` file is already configured with:
  - Build command: `npm run build`
  - Output directory: `build`
  - Rewrites for React Router client-side routing
  - Cache headers for static assets
  