const { build } = require('esbuild');

build({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/app.js',
  bundle: true,
  platform: 'node',
  target: 'node20',
  minify: true,
  sourcemap: false,
  external: ['express'],
  plugins: []
}).catch(() => process.exit(1));