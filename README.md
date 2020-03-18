[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/FE-Kits/3d-model-viewer">
    <img src="https://s2.ax1x.com/2020/03/10/8iEuqO.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">@m-fe/model-viewer</h3>

  <p align="center">
    STL 3D 预览
    <br />
    <a href="https://github.com/FE-Kits/3d-model-viewer"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/FE-Kits/3d-model-viewer">View Demo</a>
    ·
    <a href="https://github.com/FE-Kits/3d-model-viewer/issues">Report Bug</a>
    ·
    <a href="https://github.com/FE-Kits/3d-model-viewer/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

# Introduction

整合了 `google-model-viewer` 等一系列 3D 模型预览工具，便捷地进行模型预览、生成截图、计算拓扑信息。

> 模板来自于 [m-fe-libs](https://github.com/wx-chevalier/m-fe-libs)。

# Getting Started

To get a local copy up and running follow these simple steps.

## Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

```sh
npm install npm@latest -g
```

## Installation

1. Add the `<model-viewer>`

```web
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.js"></script>
<script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>
```

2. Install NPM packages

```sh
npm install @m-fe/stl-viewer
# or
yarn add @m-fe/stl-viewer
```

<!-- USAGE EXAMPLES -->

## Usage

```ts
import * as React from 'react';

import { GoogleModelViewer } from '@m-fe/react-model-viewer';

export default function Simple() {
  return (
    <div>
      <GoogleModelViewer
        key="1"
        type="gltf"
        src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.glb?1542147958948"
      />
      <GoogleModelViewer
        key="2"
        type="stl"
        src="https://ufc-assets.oss-cn-shanghai.aliyuncs.com/test/pr2_head_pan.stl"
        onTopology={m => {
          console.log(m);
        }}
      />
    </div>
  );
}
```

# About

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/FE-Kits/3d-model-viewer/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Awesome-Lists](https://github.com/wx-chevalier/Awesome-Lists): 📚 Guide to Galaxy, curated, worthy and up-to-date links/reading list for ITCS-Coding/Algorithm/SoftwareArchitecture/AI. 💫 ITCS-编程/算法/软件架构/人工智能等领域的文章/书籍/资料/项目链接精选。

- [Awesome-CS-Books](https://github.com/wx-chevalier/Awesome-CS-Books): :books: Awesome CS Books/Series(.pdf by git lfs) Warehouse for Geeks, ProgrammingLanguage, SoftwareEngineering, Web, AI, ServerSideApplication, Infrastructure, FE etc. :dizzy: 优秀计算机科学与技术领域相关的书籍归档。

- [UZIP.js](https://github.com/photopea/UZIP.js): Simple ZIPping library for Javascript.

## Copyright & More | 延伸阅读

笔者所有文章遵循[知识共享 署名 - 非商业性使用 - 禁止演绎 4.0 国际许可协议](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh)，欢迎转载，尊重版权。您还可以前往 [NGTE Books](https://ng-tech.icu/books/) 主页浏览包含知识体系、编程语言、软件工程、模式与架构、Web 与大前端、服务端开发实践与工程架构、分布式基础架构、人工智能与深度学习、产品运营与创业等多类目的书籍列表：

[![NGTE Books](https://s2.ax1x.com/2020/01/18/19uXtI.png)](https://ng-tech.icu/books/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/FE-Kits/3d-model-viewer.svg?style=flat-square
[contributors-url]: https://github.com/FE-Kits/3d-model-viewer/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/FE-Kits/3d-model-viewer.svg?style=flat-square
[forks-url]: https://github.com/FE-Kits/3d-model-viewer/network/members
[stars-shield]: https://img.shields.io/github/stars/FE-Kits/3d-model-viewer.svg?style=flat-square
[stars-url]: https://github.com/FE-Kits/3d-model-viewer/stargazers
[issues-shield]: https://img.shields.io/github/issues/FE-Kits/3d-model-viewer.svg?style=flat-square
[issues-url]: https://github.com/FE-Kits/3d-model-viewer/issues
[license-shield]: https://img.shields.io/github/license/FE-Kits/3d-model-viewer.svg?style=flat-square
[license-url]: https://github.com/FE-Kits/3d-model-viewer/blob/master/LICENSE.txt