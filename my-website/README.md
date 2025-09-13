# 智宇云擎文档中心

欢迎来到开发者文档中心！这里有各种资源，包括易懂的文档、实用的示例代码以及简明扼要的教程等。

## 项目简介

本仓库包含了智宇云擎开发者文档中心的源代码，该文档中心使用 [Docusaurus](https://docusaurus.io/) 构建，旨在为开发者提供全面、清晰的开发文档和资源。

## 快速开始

### 环境要求

- Node.js >= 18.0

### 本地开发

1. **克隆仓库**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **安装依赖**

   ```bash
   npm install
   ```

3. **启动开发服务器**

   ```bash
   npm run start
   ```

   此命令会启动一个本地开发服务器，并在浏览器中打开 `http://localhost:3000`。大部分更改都会实时生效，无需重启服务器。

### 构建项目

```bash
npm run build
```

此命令会将静态内容生成到 `build` 目录中，并可以部署到任何静态内容托管服务。

## 目录结构

```
my-website/
├── blog/               # 博客文章
├── docs/               # 文档内容
│   ├── intro.md        # 文档首页
│   └── ...
├── src/
│   ├── components/     # 自定义 React 组件
│   ├── css/            # 自定义样式
│   └── pages/          # 自定义页面
├── static/             # 静态资源
├── docusaurus.config.js # Docusaurus 配置文件
├── package.json        # 项目依赖
└── sidebars.js         # 侧边栏配置
```


## 许可证

本项目采用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。
