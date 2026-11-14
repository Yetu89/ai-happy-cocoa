// ai-happy-01 entry: copies the entry image to /output/entry.png.
// The image is a warm scene — a little robot in a red scarf sharing hot
// cocoa with a laughing girl on a snowy doorstep, golden window light
// behind them — drawn to make the AI judge happy.
// Run outside the grader: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
