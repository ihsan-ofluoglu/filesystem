import * as fs from 'fs';

import { FilesystemAdapter } from '../filesystem.adapter';
import { Config } from '../config';
import { PathManager } from '../path-manager';

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

  fileExists(path: string): boolean {
    const fullPath = this.pathManager.getFullPath(path);

    try {
      fs.accessSync(fullPath, fs.constants.F_OK);

      return true;
    } catch (e) {
      return false;
    }
  }

  copy(_source: string, _destination: string, _config?: Config): void {
    throw new Error('Not Implemented');
  }

  createDirectory(path: string, _config?: Config): void {
    const fullPath = this.pathManager.getFullPath(path);
    return fs.mkdirSync(fullPath);
  }

  delete(path: string): void {
    const fullPath = this.pathManager.getFullPath(path);
    fs.unlinkSync(fullPath);
  }

  deleteDirectory(_path: string): void {
    throw new Error('Not Implemented');
  }

  directoryExists(_path: string): boolean {
    throw new Error('Not Implemented');
  }

  fileSize(_path: string): number {
    throw new Error('Not Implemented');
  }

  move(_source: string, _destination: string, _config?: Config): void {
    throw new Error('Not Implemented');
  }

  read(_path: string): string {
    throw new Error('Not Implemented');
  }

  readStream(_path: string): string {
    throw new Error('Not Implemented');
  }

  write(path: string, content: string, _config?: Config): void {
    const fullPath = this.pathManager.getFullPath(path);

    return fs.writeFileSync(fullPath, content, { flag: 'wx' });
  }

  writeStream(path: string, content: string, _config?: Config): void {
    const fullPath = this.pathManager.getFullPath(path);

    const stream = fs.createWriteStream(fullPath);

    stream.write(content);
    stream.end();
  }
}
