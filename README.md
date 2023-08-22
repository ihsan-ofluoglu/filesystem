# Filesystem

[build-badge]: https://img.shields.io/github/actions/workflow/status/ihsan-ofluoglu/filesystem/test.yml?branch=main&style=square
[build]: https://github.com/ihsan-ofluoglu/filesystem/actions/workflows/test.yml

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

### Officially supported adapters

- Local


### Architecture & Design

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
