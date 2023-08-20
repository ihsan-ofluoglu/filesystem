import { LocalFilesystemAdapter } from './local-filesystem.adapter';

const ROOT = `${__dirname}/test-root`;

describe('local file system', () => {
  let adapter: LocalFilesystemAdapter;

  beforeAll(() => {
    adapter = new LocalFilesystemAdapter(ROOT);
  });

  beforeEach(() => {
    const result = adapter.fileExists('test.txt');
    if (result) adapter.delete('test.txt');
  });

  it('should check file exist given path', () => {
    const result = adapter.fileExists('test.txt');

    expect(result).toBeFalsy();
  });

  it('should check if a file exists that not exists given path', () => {
    adapter.write('/test.txt', 'contents');

    const result = adapter.fileExists('test.txt');
    expect(result).toBeTruthy();
  });

  it('should create a directory', () => {
    adapter.createDirectory('extra');

    adapter.write('extra/test.txt', 'contents');
    const result = adapter.fileExists('extra/test.txt');
    expect(result).toBeTruthy();
  });
});
