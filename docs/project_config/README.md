<img :src="$withBase('/logo.png')" alt="logo">

# 因项目使用package-lock.json锁定版本号因此需要固定node、npm版本号

# 解释说明

如果你的NPM升级到v5.x.x版本, 你就会发现一个新的文件会自动创建, Package-lock.json

假设我们创建了一个新项目，它将使用express。 在运行npm init之后，在撰写本项目时，最新的express版本是4.15.4。 (默认情况下，npm 将安装最新版本)

因此在package.json中,"express":"^ 4.15.4"被添加作为依赖项。 假设明天，express的维护者会发布一个 bug 修复，所以最新版本变成了4.15.5。 然后，如果有人想要为我的项目做贡献，他们会克隆它，然后运行 npm install, 因为4.15.5是一个更高版本的主要版本，这是为他们安装的。 我们都有express依赖，但我们有两个不同的版本。 理论上，它们应该还是兼容的，但是也许这个 bug 会影响我们正在使用的功能，而我们的应用程序在使用Express版本4.15.4与4.15.5进行比较时会产生不同的结果.

而package-lock.json的作用就是用来保证我们的应用程序依赖之间的关系是一致的, 兼容的.

[官方链接](https://docs.npmjs.com/files/package-lock.json)

