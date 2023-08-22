export interface FilesystemReader {
  /**
   *
   * @function
   * @param {string} path
   */
  read(path: string): Promise<string>;

  /**
   *
   * Tests a user's permissions for the file specified by path.
   *
   * @function
   * @param {string} path
   */
  fileExists(path: string): Promise<boolean>;

  /**
   * @function
   * @param {string} path
   */
  fileSize(path: string): Promise<number>;

  /**
   * @function
   * @param {string} path
   */
  directoryExists(path: string): Promise<boolean>;
}
