import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'umc-research',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/styles/variables.scss',
        'src/global/styles/mixins.scss'
      ]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }]
};
