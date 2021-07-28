# git常用命令

记录git的一些常见操作命令

### 配置命令

- 列出当前配置

  ``` bash
  git config --list
  ```

- 列出`Repository`配置

  ```bash
  git config --local --list
  ```

- 列出全局配置

  ```bash
  git config --global --list
  ```

- 列出系统配置

  ```bash
  git config --system --list
  ```

- 配置用户名

  ```bash
  git config --global user.name "your name"
  ```

- 配置用户邮箱

  ```bash
  git config --global user.email "youremail@github.com"
  ```

### 分支管理

- 查看本地分支

  ```bash
  git branch
  ```

- 查看远程分支

  ```bash
  git branch -r
  ```

- 查看本地和远程分支

  ```bash
  git branch -a
  ```

- 从当前分支切换到其它分支

  ```bash
  git checkout <branch-name>
  ```

- 创建并切换到新分支

  ```bash
  git checkout -b <branch-name>
  ```

- 删除分支

  ```bash
  git branch -d <branch-name>
  ```

- 当前分支与指定分支合并

  ```bash
  git merge <branch-name>
  ```

- 查看哪些分支已经/没有合并到当前分支

  ```bash
  git branch --merged
  git branch --no-merged
  ```

- 查看各个分支最后一个提交对应的信息

  ```bash
  git branch -v
  ```

- 删除远程分支

  ```bash
  git push origin -d <branch-name>
  ```

- 重命名分支

  ```bash
  git branch -m <oldbranch-name> <newbranch-name>
  ```

- 拉取远程分支并创建本地分支

  ```bash
  git checkout -b 本地分支名 origin/远程分支名
  or
  git fetch origin <branch-name>:<local-branch-name>
  ```

### fetch指令

将远程仓库的内容更新到本地

```bash
git fetch origin <branch-name>:<local-branch-name>
```

- 一般而言，这个origin是远程主机名，一般默认就是origin。
- `branch-name` 你要拉取的分支
- `local-branch-name` 通常而言，就是你本地新建一个新分支，将origin下的某个分支代码下载到本地分支。



- 将某个远程主机的更新，全部取回本地

  ```bash
  git fetch <远程主机名>
  ```

- 取回特定分支

  ```bash
  git fetch <远程主机名> <分支名>
  ```

- 将某个分支的内容取回到本地的某个分支

  ```bash
  git fetch origin :<local-branch-name>
  ```

  [git pull 和 git fetch的区别？](https://www.zhihu.com/question/38305012)

### git撤销

- 撤销工作区修改

  ```bash
  git checkout--
  ```

- 暂存区文件撤销(不覆盖工作区)

  ```bash
  git reset HEAD
  ```

- 版本回退

  git reset --(soft|mixed|hard) <HEAD~(num)> |

  | 指令    | 作用范围                                 |
  | ------- | ---------------------------------------- |
  | --hard  | 回退全部，包括HEAD，index，working，tree |
  | --mixed | 回退部分，包括HEAD，index                |
  | --soft  | 只回退HEAD                               |

### 状态查询

- 查看状态

  ```bash
  git status
  ```

- 查看历史操作记录

  ```bash
  git reflog
  ```

- 查看日志

  ```bash
  git log
  ```

### 文档查询

- 展示Git命令大纲

  ```bash
  git help (--help)
  ```

- 展示Git命令大纲全部列表

  ```bash
  git help -a
  ```

- 展示具体命令说明手册

  ```bash
  git help
  ```

### 文件暂存

- 添加改动到stash

  ```bash
  git stash sava -a "message"
  ```

- 删除暂存

  ```bash
  git stash drop stash@{ID}
  ```

- 查看stash列表

  ```bash
  git stash list
  ```

- 删除全部缓存

  ```bash
  git stash clear
  ```

- 恢复改动

  ```bash
  git stash pop stash@{ID}
  ```

### 差异比较

- 比较工作区与缓存区

  ```bash
  git diff
  ```

- 比较缓存区与本地库最近一次commit内容

  ```bash
  git diff --cached
  ```

- 比较工作区与本地最近一次commit内容

  ```bash
  git diff HEAD
  ```

- 比较两个commit之间的差异

  ```bash
  git diff
  ```

### 基本操作

- 创建本地仓库

  ```bash
  git init
  ```

- 链接本地仓库与远程仓库

  ```bash
  git remote add origin
  origin默认是远端仓库别名url 可以使用https或者ssh的方式
  ```

- 检查配置信息

  ```bash
  git config --list
  ```

- Git user name and email

  ```bash
  git config --global user.name "yourname"
  git config --global user.email "youremail"
  ```

- 生成SSH秘钥

  ```bash
  ssh-keygen -t rsa -C "youremail"
  cd ~/.ssh 里面有一个文件名为id_rsa.pub, 把里面的内容复制到git库的我的SSHKEYS中
  ```

- 查看远端仓库信息

  ```bash
  git remote -v
  ```

- 远端仓库重新命名

  ```bash
  git remote rename old new
  ```

- 提交到缓存区

  ```bash
  git add . 全部文件
  git add 指定文件
  ```

- 提交到本地仓库

  ```bash
  git commit -m "message"
  ```

- 提交到远程仓库

  ```bash
  git push <远程主机名> <本地分支名>:<远程分支名>
  ```

### git 进阶之rebase

[Git commits历史是如何做到如此清爽的？](https://www.zhihu.com/question/61283395)

#### Rebase场景一：如何合并多次提交记录

1. 合并最近的n次提交记录

   ```bash
   git rebase -i HEAD~n
   ```

2. 进入vi编辑模式

   pick：保留该commit（缩写:p）

   reword：保留该commit，但我需要修改该commit的注释（缩写:r）

   edit：保留该commit, 但我要停下来修改该提交(不仅仅修改注释)（缩写:e）

   squash：将该commit和前一个commit合并（缩写:s）

   fixup：将该commit和前一个commit合并，但我不要保留该提交的注释信息（缩写:f）

   exec：执行shell命令（缩写:x）

   drop：我要丢弃该commit（缩写:d）

3. 如果保存的时候，出错

   ```js
   error: cannot 'squash' without a previous commit
   ```

   **注意不要合并先前提交的东西，也就是已经提交远程分支的纪录。**

4. 如果你异常退出了 `vi` 窗口

   ```bash
   git rebase --edit-todo
   ```

   这时候会一直处在这个编辑的模式里，我们可以回去继续编辑，修改完保存一下

   ```bash
   git rebase --continue
   ```

5. 查看结果

   ```bash
   git log
   ```

#### Rebase场景二：分支合并

1. 我们先从 `master` 分支切出一个 `dev` 分支，进行开发：

   ```bash
   git checkout -b feature
   ```

2. 这时候，你的同事完成了一次 `hotfix`，并合并入了 `master` 分支，此时 `master` 已经领先于你的 `feature` 分支了

3. 恰巧，我们想要同步 `master` 分支的改动，首先想到了 `merge`

4. 让我们来试试 `git rebase`而不是使用merge

   ```bash
   git rebase master
   ```

   首先，`git` 会把 `feature` 分支里面的每个 `commit` 取消掉；
   其次，把上面的操作临时保存成 `patch` 文件，存在 `.git/rebase` 目录下；
   然后，把 `feature` 分支更新到最新的 `master` 分支；
   最后，把上面保存的 `patch` 文件应用到 `feature` 分支上；

   从 `commit` 记录我们可以看出来，`feature` 分支是基于 `hotfix` 合并后的 `master` ，自然而然的成为了最领先的分支，而且没有 `merge` 的 `commit` 记录，是不是感觉很舒服了。

5. 在 `rebase` 的过程中，也许会出现冲突 `conflict`。在这种情况，`git` 会停止 `rebase` 并会让你去解决冲突。在解决完冲突后，用 `git add` 命令去更新这些内容

   ```bash
   git rebase --continue
   ```

   这样 `git` 会继续应用余下的 `patch` 补丁文件。

6. 在任何时候，我们都可以用 `--abort` 参数来终止 `rebase` 的行动，并且分支会回到 `rebase` 开始前的状态。

   ```bash
   git rebase —abort
   ```

### 参考

[https://juejin.im/post/6869519303864123399](https://juejin.im/post/6869519303864123399)

[http://jartto.wang/2018/12/11/git-rebase/](http://jartto.wang/2018/12/11/git-rebase/)

[https://git-scm.com/book/zh/v2/](https://git-scm.com/book/zh/v2/)


## 规范的Git提交说明

- 提供更多的历史信息，方便快速浏览
- 可以过滤某些`commit`，便于筛选代码`review`
- 可以追踪`commit`生成更新日志
- 可以关联**issues**

### 配置

```bash
npm install @commitlint/cli @commitlint/config-conventional conventional-changelog conventional-changelog-cli cz-conventional-changelog husky -D
```

创建**commitlint.config.js**

```js
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

修改**package.json**

```json
"scripts": {
    "version": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md"
},
"config": {
    "commitizen": {
        "path": "./node_modules/cz-conventional-changelog"
    }
},
"husky": {
    "hooks": {
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
}
```

### 提交说明

- git cz
- Select the type of change that you're committing
  - feat:     A new feature
  - fix:      A bug fix
  - docs:     Documentation only changes
  - style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  - refactor: A code change that neither fixes a bug nor adds a feature
  - perf:     A code change that improves performance
  - test:     Adding missing tests or correcting existing tests
- What is the scope of this change (e.g. component or file name): (press enter to skip)   填写所修改的组件、文件名。**可跳过**
- Write a short, imperative tense description of the change 进行一个简短的描述  max 94
- Provide a longer description of the change 进行一个详细的描述**可跳过**
- Are there any breaking changes? 是否发生重大改变 **可跳过**
  - A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself：重大改变的描述

- git pull
- git push

### `Git`提交说明结构

`Git`**提交说明**可分为三个部分：`Header`、`Body`和`Footer`。

```javascript
<Header> <Body> <Footer>
```

### `Header`

`Header`部分包括三个字段`type`（必需）、`scope`（可选）和`subject`（必需）。

```javascript
<type>(<scope>): <subject>ja
```

> Vue源码的**提交说明**省略了`scope`。

#### `type`

`type`用于说明 `commit` 的提交性质。

| 值       | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| feat     | 新增一个功能                                                 |
| fix      | 修复一个bug                                                  |
| docs     | 文档变更                                                     |
| style    | 代码格式（不影响功能，例如空格、分号等格式修正）             |
| refactor | 代码重构                                                     |
| perf     | 改善性能                                                     |
| test     | 测试                                                         |
| build    | 变更项目构建或外部依赖（例如scopes：`webpack`、`gulp`、`npm`等）   |
| ci       | 更改持续集成软件的配置文件和`package`中的`scripts`命令，例如scopes：Travis、Circle等 |
| chore    | 变更构建流程活辅助工具                                       |
| revert   | 代码回退                                                     |

#### `scope`

`scope`说明`commit`影响的范围。`scope`依据项目而定，例如在业务项目中可以依据菜单或者功能模块划分，如果是组件库开发，则可以依据组件划分。

> 提示：`scope`可以省略。

#### `subject`

`subject`是`commit`的简短描述。

### `Body`

`commit`的详细描述，说明代码提交的详细说明。

### `Footer`

如果代码的提交是**不兼容变更**或**关闭缺陷**，则`Footer`必需，否则可以省略。

#### 不兼容变更

当前代码与上一个版本不兼容，则`Footer`以**BREAKING CHANGE**开头，后面是对变动的描述、以及变动的理由和迁移方法。

#### 关闭缺陷

如果当前提交是针对特定的issue，那么可以在`Footer`部分填写需要关闭的单个 issue 或一系列issues。

### Commitizen

[commitizen/cz-cli](https://github.com/commitizen/cz-cli)是一个可以实现规范的**提交说明**的工具：

**When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time. No more waiting until later for a git commit hook to run and reject your commit (though that can still be helpful). No more digging through CONTRIBUTING.md to find what the preferred format is. Get instant feedback on your commit message formatting and be prompted for required fields.**

提供选择的提交信息类别，快速生成**提交说明**。安装cz工具:

```bash
npm install -g commitizen
```

### Commitizen适配器

#### cz-conventional-changelog

如果需要在项目中使用**commitizen**生成符合AngularJS规范的**提交说明**，初始化**cz-conventional-changelog**适配器：

```bash
commitizen init cz-conventional-changelog --save --save-exact
```

初始化命令主要进行了3件事情

1. 在项目中安装**cz-conventional-changelog** 适配器依赖
2. 将适配器依赖保存到`package.json`的`devDependencies`字段信息
3. 在`package.json`中新增`config.commitizen`字段信息，主要用于配置cz工具的适配器路径：

```json
"devDependencies": {
 "cz-conventional-changelog": "^2.1.0"
},
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}
```

### Commitizen日志

如果使用了[cz](https://github.com/commitizen/cz-cli)工具集，配套[conventional-changelog](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog)可以快速生成开发日志：

```bash
npm install conventional-changelog conventional-changelog-cli -D
```

在`pacage.json`中加入生成日志命令：

```json
"version": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md"
```

You could follow the following workflow

- Make changes
- Commit those changes
- Pull all the tags
- Run the npm version [patch|minor|major] command
- Push

执行`npm run version`后可查看生产的日志[CHANGELOG.md](https://github.com/ziyi2/cz-example/blob/master/CHANGELOG.md)。

> 注意要使用正确的`Header`的`type`，否则生成的日志会不准确，这里只是一个示例，生成的日志不是很严格。

### 参考

[Cz工具集使用介绍 - 规范Git提交说明](https://juejin.im/post/6844903831893966856)


## 提交信息的撰写

提交commit时，必须给出完整扼要的提交信息，下面是一个范本

```
Present-tense summary under 50 characters

* More information about commit (under 72 characters).
* More information about commit (under 72 characters).

http://project.management-system.com/ticket/123
```

**第一行是不超过50个字的提要，然后空一行，罗列出改动原因、主要变动、以及需要注意的问题。最后，提供对应的网址（比如Bug ticket）。**

## 与主干同步

分支的开发过程中，要经常与主干保持同步

```bash
$ git fetch origin
$ git rebase origin/master
```

## 合并commit

分支开发完成后，很可能有一堆`commit`，但是合并到主干的时候，往往希望只有一个（或最多两三个）`commit`，这样不仅清晰，也容易管理。

那么，怎样才能将多个`commit`合并呢？这就要用到 `git rebase` 命令。

后续详细请[参见](http://www.ruanyifeng.com/blog/2015/08/git-use-process.html)