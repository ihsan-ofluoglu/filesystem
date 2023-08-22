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
  fileExists(path: string): Promise<boolean>;

  /**
   *
   * @function
   * @param {string} path
   * @param {string} content
   * @param {Config} config
   */
  write(path: string, content: string, config?: Config): Promise<void>;

  /**
   *
   * @function
   * @param {string} path
   */
  read(path: string): Promise<string>;

  /**
   *
   * @function
   * @param {string} path
   */
  delete(path: string): Promise<void>;

  /**
   *
   * @function
   * @param {string} path
   */
  deleteDirectory(path: string, config?: Config): Promise<void>;

  /**
   * @function
   * @param {string} path
   */
  directoryExists(path: string): Promise<boolean>;

  /**
   * @function
   * @param {string} path
   * @param {Config} config
   */
  createDirectory(path: string, config?: Config): Promise<void>;

  /**
   * @function
   * @param {string} path
   */
  fileSize(path: string): Promise<number>;
}
