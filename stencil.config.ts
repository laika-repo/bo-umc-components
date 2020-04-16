import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { markdown } from 'stencil-markdown';

export const config: Config = {
  namespace: 'umc-research',
  plugins: [
    markdown(),
    sass({
      injectGlobalPaths: [
        'src/global/styles/base.scss'
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
      copy: [
        { src: 'assets' }
      ],
      minifyJs: false,
      serviceWorker: null // disable service workers
    }]
};
