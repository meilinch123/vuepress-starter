# 如何安装多个node版本

node提供了一个nvm，可以同时安装多个node版本

# window下使用nvm

[下载链接](https://github.com/coreybutler/nvm-windows/releases)

程序安装过程中，在 `Set Node.js Symlink` 这一步目录设置，是待会 nvm use 存放你的 nodejs 程序的目录

```js
nvm v # 查看版本
nvm install latest # 下载最新版本的node
nvm install 12.1.0 # 下载12.1.0版本的node
nvm install 12.1.0 32 # 默认64位 32位需指定
nvm uninstall 12.1.0 # 卸载对应的版本
```

下载完成后，会在\nvm文件下多一个v12.1.0的文件夹

```js
nvm use 12.1.0 # 引入使用
```

```js
nvm ls # 查看已安装的node版本
  * 12.1.0 (Currently using 64-bit executable)
```

# Mac下使用nvm
```js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
```
或
```js
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
```
执行完后重启终端
```js
nvm install 12.13.0 # 安装指定版本
```
```js
nvm use 12.13.0 # 使用指定版本
```
[文档链接](https://github.com/nvm-sh/nvm)