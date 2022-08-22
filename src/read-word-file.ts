import WordExtractor from "word-extractor";
import * as fs from 'fs';
import chalk from 'chalk';

export interface Data {
    text: string
}

export async function readWordFile(filePath: string): Promise<Data> {
    const extractor = new WordExtractor();
    const extracted = await extractor.extract(filePath);

    return {
        text: extracted.getBody()
    }
}

export async function readAllFromPath(folderPath: string): Promise<Data[]> {
    const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.doc'));
    const results: Data[] = [];

    console.log(chalk.green(`Reading: ${files.length} documents from ${folderPath}`));

    for (let i = 0; i < files.length; i++) {
        console.log(`${i}: ${files[i]}`);

        const filePath = `${folderPath}/${files[i]}`;
        const data = await readWordFile(filePath);
        results.push(data);
    }

    return results;
}