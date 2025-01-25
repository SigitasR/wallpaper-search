import * as fs from 'node:fs';
import { envConfig } from './env-config';

export async function cleanupDownloads() {
    await fs.promises.rm(envConfig.downloadsPath, {
        recursive: true,
        force: true,
    });
}

export async function getFileStats(filePath: string) {
    return fs.promises.stat(filePath);
}
