import { FilesystemAdapter } from './filesystem.adapter';
import { FilesystemOperator } from './filesystem.operator';
import { Config } from './config';

/**
 * Filesystem
 */
export class Filesystem implements FilesystemOperator {
  constructor(private adapter: FilesystemAdapter) {}

  async fileExists(path: string): Promise<boolean> {
    return this.adapter.fileExists(path);
  }

  async write(path: string, content: string, config: Config): Promise<void> {
    return this.adapter.write(path, content, config);
  }

  async read(path: string): Promise<string> {
    return this.adapter.read(path);
  }

  async delete(path: string): Promise<void> {
    return this.adapter.delete(path);
  }

  async deleteDirectory(path: string, config?: Config): Promise<void> {
    return this.adapter.deleteDirectory(path, config);
  }

  async directoryExists(path: string): Promise<boolean> {
    return this.adapter.directoryExists(path);
  }

  async createDirectory(path: string, config?: Config): Promise<void> {
    return this.adapter.createDirectory(path, config);
  }

  async fileSize(path: string): Promise<number> {
    return this.adapter.fileSize(path);
  }
}
