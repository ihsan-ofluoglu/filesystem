import { vol } from 'memfs';
import { LocalFilesystemAdapter } from './local-filesystem.adapter';

const ROOT = `${__dirname}/test-root`;

jest.mock('fs/promises');

describe('local file system', () => {
  let adapter: LocalFilesystemAdapter;

  beforeAll(() => {
    adapter = new LocalFilesystemAdapter(ROOT);
  });

  beforeEach(async () => {
    vol.reset();

    await createBaseDirectory();
  });

  it('should check file exist given path', async () => {
    await expectFileNotExits('test.txt');
  });

  it('should check if a file exists that not exists given path', async () => {
    await adapter.write('/test.txt', 'contents', { flag: 'wx' });

    await expectFileExits('test.txt');
  });

  it('should writing a file', async () => {
    await adapter.write('file.txt', 'content', { flag: 'wx' });

    await expectFileExits('file.txt');

    const content = await adapter.read('file.txt');
    expect(content).toBe('content');
  });

  it('should delete a file', async () => {
    await adapter.write('file.txt', 'content', { flag: 'wx' });

    await expectFileExits('file.txt');

    await adapter.delete('file.txt');

    await expectFileNotExits('file.txt');
  });

  it('should create a directory', async () => {
    await adapter.createDirectory('extra');

    await adapter.write('extra/test.txt', 'contents');

    await expectFileExits('extra/test.txt');
  });

  it('should directory exist', async () => {
    await adapter.createDirectory('extra');

    const result = await adapter.directoryExists('extra');
    expect(result).toBeTruthy();
  });

  it('should directory not exist', async () => {
    const result = await adapter.directoryExists('extra');
    expect(result).toBeFalsy();
  });

  it('should directory remove', async () => {
    await adapter.createDirectory('extra');

    const exist = await adapter.directoryExists('extra');
    expect(exist).toBeTruthy();

    await adapter.deleteDirectory('extra', { recursive: true });

    const notExist = await adapter.directoryExists('extra');
    expect(notExist).toBeFalsy();
  });

  it('should directory remove with other directories in it', async () => {
    await adapter.createDirectory('a/b/c/d', { recursive: true });

    await adapter.deleteDirectory('a/b', { recursive: true });

    const exist = await adapter.directoryExists('a');
    const notExist = await adapter.directoryExists('a/b');

    expect(exist).toBeTruthy();
    expect(notExist).toBeFalsy();
  });

  it('should getting file size', async () => {
    await adapter.write('file.txt', 'content', { flag: 'wx' });

    const result = await adapter.fileSize('file.txt');
    expect(result).toBe(7);
  });

  async function createBaseDirectory() {
    await adapter.createDirectory(ROOT, { recursive: true });
  }

  async function expectFileExits(path: string) {
    const result = await adapter.fileExists(path);
    expect(result).toBeTruthy();
  }

  async function expectFileNotExits(path: string) {
    const result = await adapter.fileExists(path);
    expect(result).toBeFalsy();
  }
});
