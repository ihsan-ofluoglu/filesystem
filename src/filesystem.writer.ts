import { Config } from './config';

export interface FilesystemWriter {
  write(path: string, content: string, config: Config): Promise<void>;

  /**
   * @function
   * @param {string} path
   * @param {Config} config
   */
  createDirectory(path: string, config?: Config): Promise<void>;

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
}
