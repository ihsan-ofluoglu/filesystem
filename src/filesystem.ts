import { FilesystemAdapter } from './filesystem.adapter';

/**
 * Filesystem
 */
export class Filesystem {
  constructor(private adapter: FilesystemAdapter) {}

  fileExists(path: string): boolean {
    return this.adapter.fileExists(path);
  }
}
