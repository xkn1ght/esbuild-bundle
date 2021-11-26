const { build } = require('esbuild');

build({
    bundle: true,
    entryPoints: ['index.js'],
    outdir: 'lib',
    target: 'node14.17.4',
    treeShaking: true,
    platform: 'node',
    format: 'cjs',
  });