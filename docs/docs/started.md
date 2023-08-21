---
sidebar_position: 1
title: Getting Started
---

# Getting Started

## Installation

Flysystem can be installed using yarn or npm.


##### yarn

```yarn
yarn add filesystem
```

##### npm

```npm
npm install filesystem
```

## General usage

To safely interact with the filesystem, always wrap the adapter in a Filesystem instance. You can read more about why in the information about the architecture.

```
// SETUP
$adapter = new LocalFilesystemAdapter(rootPath);
$filesystem = new Filesystem(adapter);

// USAGE
$filesystem.write(path, contents);
```
