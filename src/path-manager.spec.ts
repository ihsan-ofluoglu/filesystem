import { PathManager } from './path-manager';

describe('pathManager', () => {
  const baseDirectory = '/path/to/base/';
  const filePath = 'example.txt';

  it('should return the correct full file path with a trailing slash in base', () => {
    const pathManager = new PathManager(baseDirectory);
    const fullPath = pathManager.getFullPath(filePath);

    expect(fullPath).toBe('/path/to/base/example.txt');
  });

  it('should return the correct full file path without a trailing slash in base', () => {
    const pathManager = new PathManager(baseDirectory.slice(0, -1));
    const fullPath = pathManager.getFullPath(filePath);

    expect(fullPath).toBe('/path/to/base/example.txt');
  });

  it('should return the correct full file path when filePath starts with a slash', () => {
    const pathManager = new PathManager(baseDirectory.slice(0, -1));
    const fullPath = pathManager.getFullPath(`/${filePath}`);

    expect(fullPath).toBe('/path/to/base/example.txt');
  });
});
