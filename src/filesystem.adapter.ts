import { Config } from './config';

/**
 * @interface FilesystemAdapter
 */
export interface FilesystemAdapter {
  /**
   *
   * Tests a user's permissions for the file specified by path.
   *
   * @function
   * @param {string} path
   */
  fileExists(path: string): boolean;

  /**
   * @function
   * @param {string} path
   */
  directoryExists(path: string): boolean;

  /**
   *
   * @function
   * @param {string} path
   * @param {string} content
   * @param {Config} config
   */
  write(path: string, content: string, config?: Config): void;

  /**
   *
   * @function
   * @param {string} path
   * @param {string} content
   * @param {Config} config
   */
  writeStream(path: string, content: string, config?: Config): void;

  /**
   *
   * @function
   * @param {string} path
   */
  read(path: string): string;

  /**
   *
   * @function
   * @param {string} path
   */
  readStream(path: string): string;

  /**
   *
   * @function
   * @param {string} path
   */
  delete(path: string): void;

  /**
   *
   * @function
   * @param {string} path
   */
  deleteDirectory(path: string): void;

  /**
   * @function
   * @param {string} path
   * @param {Config} config
   */
  createDirectory(path: string, config?: Config): void;

  /**
   * @function
   * @param {string} path
   */
  fileSize(path: string): number;

  /**
   *
   * @function
   * @param {string} source
   * @param {string} destination
   * @param {Config} config
   */
  move(source: string, destination: string, config?: Config): void;

  /**
   *
   * @function
   * @param {string} source
   * @param {string} destination
   * @param {Config} config
   */
  copy(source: string, destination: string, config?: Config): void;
}
