import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const portfolioDirectory = resolve(scriptDirectory, '..');
const source = resolve(
  portfolioDirectory,
  '../resume-latex/output/Manendra_Pal_Singh_Resume.pdf',
);
const destination = resolve(portfolioDirectory, 'public/resume.pdf');

if (!existsSync(source)) {
  throw new Error(
    'Resume PDF is missing. Build it from resume-latex before building the portfolio.',
  );
}

mkdirSync(dirname(destination), { recursive: true });
copyFileSync(source, destination);

const size = statSync(destination).size;
if (size === 0) {
  throw new Error('Resume synchronization produced an empty PDF.');
}

console.log(`Synced latest resume (${size} bytes) to portfolio/public/resume.pdf`);
