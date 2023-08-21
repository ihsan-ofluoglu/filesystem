import { FilesystemReader } from './filesystem.reader';
import { FilesystemWriter } from './filesystem.writer';

export interface FilesystemOperator extends FilesystemReader, FilesystemWriter {}
