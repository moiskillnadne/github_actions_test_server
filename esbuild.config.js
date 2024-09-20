const { build } = require('esbuild');

build({
  entryPoints: ['src/index.ts'], // Путь к вашей главной точке входа
  outfile: 'dist/app.js',        // Путь для выходного файла
  bundle: true,
  platform: 'node',
  target: 'node20',              // Версия Node.js, которую вы используете
  minify: true,                 // Установите в true для минимизации
  sourcemap: false,              // Установите в true, если нужны sourcemaps
  external: [],                  // Оставьте пустым, чтобы включить все зависимости в бандл
  plugins: [
    {
      name: 'ignore-pnp',
      setup(build) {
        build.onResolve({ filter: /.*/ }, args => {
          if (args.kind === 'import-statement' || args.kind === 'require-call') {
            return { path: args.path, external: false };
          }
        });
      },
    },
  ]
}).catch(() => process.exit(1));