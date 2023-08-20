import { join } from 'path';

const DIRECTORY_SEPARATOR = '/';

export class PathManager {
  private readonly root: string = '';

  constructor(root: string, separator = DIRECTORY_SEPARATOR) {
    this.root = root;

    if (this.root !== '' || this.root === separator) {
      this.root += separator;
    }
  }

  getFullPath(path: string): string {
    return join(this.root, path);
  }
}
