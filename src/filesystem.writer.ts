import { Config } from './config';

export interface FilesystemWriter {
  write(path: string, content: string, config: Config): void;

  writeStream(path: string, content: string, config: Config): void;
}
