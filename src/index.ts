import * as fs from 'fs';
import { readAllFromPath } from "./read-word-file";
import * as path from 'path';
import chalk from 'chalk';

async function run() {

    const folderPath = path.join(__dirname, '..', 'docs');
    const data = await readAllFromPath(folderPath);

    const outputPath = path.join(__dirname, '..', 'output.json');
    fs.writeFileSync(outputPath, JSON.stringify(data), 'utf-8');

    console.log(chalk.green("Finished reading files"));
}

run();