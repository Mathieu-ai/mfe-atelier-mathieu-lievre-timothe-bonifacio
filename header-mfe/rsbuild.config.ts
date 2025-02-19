import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'header_mfe',
      exposes: {
        './header': './src/header.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3001,
  },
});