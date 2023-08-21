import { FilesystemAdapter } from './filesystem.adapter';
import { FilesystemOperator } from './filesystem.operator';
import { Config } from './config';

/**
 * Filesystem
 */
export class Filesystem implements FilesystemOperator {
  constructor(private adapter: FilesystemAdapter) {}

  fileExists(path: string): boolean {
    return this.adapter.fileExists(path);
  }

  write(path: string, content: string, config: Config): void {
    return this.adapter.write(path, content, config);
  }

  writeStream(path: string, content: string, config: Config): void {
    return this.adapter.writeStream(path, content, config);
  }
}
