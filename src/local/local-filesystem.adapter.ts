import fs from 'fs/promises';

import { FilesystemAdapter } from '../filesystem.adapter';
import { Config } from '../config';
import { PathManager } from '../path-manager';
import { FileNotFoundException } from '../errors/filenotfound.exception';

/**
 * @class LocalFilesystemAdapter
 * @implements FilesystemAdapter
 */
export class LocalFilesystemAdapter implements FilesystemAdapter {
  /**
   *
   * @private
   */
  private pathManager: PathManager;

  constructor(root = '/') {
    this.pathManager = new PathManager(root);
  }

  async fileExists(path: string): Promise<boolean> {
    const fullPath = this.pathManager.getFullPath(path);

    try {
      await fs.access(fullPath, fs.constants.F_OK);

      return true;
    } catch (e) {
      return false;
    }
  }

  async createDirectory(path: string, config?: Config): Promise<void> {
    const fullPath = this.pathManager.getFullPath(path);
    return fs.mkdir(fullPath, config);
  }

  async delete(path: string): Promise<void> {
    const fullPath = this.pathManager.getFullPath(path);

    const exists = await this.fileExists(path);
    if (!exists) throw new FileNotFoundException();

    return fs.unlink(fullPath);
  }

  async deleteDirectory(path: string, config?: Config): Promise<void> {
    const fullPath = this.pathManager.getFullPath(path);

    const exists = await this.fileExists(path);
    if (!exists) throw new FileNotFoundException();

    return fs.rm(fullPath, config);
  }

  async directoryExists(path: string): Promise<boolean> {
    return this.fileExists(path);
  }

  async fileSize(path: string): Promise<number> {
    const fullPath = this.pathManager.getFullPath(path);

    const exists = await this.fileExists(path);
    if (!exists) throw new FileNotFoundException();

    const stats = await fs.stat(fullPath);
    return stats.size;
  }

  async read(path: string): Promise<string> {
    const fullPath = this.pathManager.getFullPath(path);

    const exists = await this.fileExists(path);
    if (!exists) throw new FileNotFoundException();

    return fs.readFile(fullPath, 'utf-8');
  }

  async write(path: string, content: string, config?: Config): Promise<void> {
    const fullPath = this.pathManager.getFullPath(path);

    return fs.writeFile(fullPath, content, config);
  }
}
