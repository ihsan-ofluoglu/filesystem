# Filesystem

### About Filesystem

Flysystem is a file storage library for javascript. It provides one interface to interact with many types of filesystems. When you use Filesystem, you're not only protected from vendor lock-in, you'll also have a consistent experience for which ever storage is right for you.

### Getting Started


#### Installation

Filesystem can be installed using npm or yarn.

##### yarn

```yarn
yarn add filesystem
```

##### npm

```npm
npm install filesystem
```

#### General usage

To safely interact with the filesystem, always wrap the adapter in a Filesystem instance. You can read more about why in the information about the architecture.

```
// SETUP
adapter = new LocalFilesystemAdapter(rootPath);
filesystem = new Filesystem(adapter);

// USAGE
filesystem.write(path, contents);
```

[Architecture](Architecture): Filesystem's internal architecture

[Filesystem API](Filesystem API): How to interact with your filesystem instance

### Officially supported adapters

- Local


### Architecture & Design

#### It's all about adapting

Filesystem uses the adapter pattern. This pattern is especially useful for mediating API incompatibilities, so it’s a perfect fit for the use-case.

The FilesystemOperator interface represents the outside boundary. It defines how you should interact with Filesystem. This layer provides common functionality that the underlying filesystem adapters rely on.

The Filesystem (the main filesystem operator implementation) uses adapters to do the real work. Every adapter is an implementation of the FilesystemAdapter interface. Each of the adapters conform to the same contract and behavior specifications (enforced by tests).

#### Consuming Filesystem

The FilesystemOperator interface represents the most complete interface to integrate with. You can distinguish between reads and writes by hinting on the underlying interfaces:

- Reading: FilesystemReader
- Writing: FilesystemWriter

For any of the three interfaces, the composition will look like this:

```
|--- Your Code -----------------------------|
|                                           |
|-> |--- Filesystem --------------------|   |
|   |                                   |   |
|   |-> |--- Filesystem Adapter ----|   |   |
|   |   |                           |   |   |
|   |   |---------------------------|   |   |
|   |                                   |   |
|   |-----------------------------------|   |
|                                           |
|-------------------------------------------|
```

### Filesystem API

The Filesystem API is the most important interface Filesystem describes when you want to use Filesystem in your application.

#### Writing files

Writing files can be done in two ways. You can use the contents of a file as a string to write a file. In cases where you’re writing large files, using a resource to write a file is better. A resource allows the contents of the file to be “streamed” to the new location, which has a very low memory footprint.

When writing files, the directory you’re writing to will be created automatically if and when that is required in the filesystem you’re writing to. If your filesystem does not require directories to exist (like AWS S3), the directory is not created. This is a performance consideration. Of course, you can always create the directory yourself by using the createDirectory operation.

#### FilesystemWriter::write

```
filesystem.write(path, contents, config);
```

#### FilesystemWriter::writeStream

```
filesystem.writeStream(path, stream, config);
```

#### FilesystemReader::read

```
response = filesystem.read(path);
```

#### FilesystemReader::readStream

```
response = filesystem.readStream(path);
```
