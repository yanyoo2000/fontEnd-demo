# 一、WebGL 基础概念

* WebGL仅仅是一个光栅化引擎，它可以根据你的代码绘制出点，线和三角形。
* WebGL在电脑的GPU中运行。因此你需要使用能够在GPU上运行的代码：*program* （着色程序）

### 着色程序的组成

- 顶点着色器
- 片段着色器
- GLSL：GL着色语言

顶点着色器的作用是计算顶点的位置。根据计算出的一系列顶点位置，WebGL可以对点， 线和三角形在内的一些图元进行光栅化处理。

当对这些图元进行光栅化处理时需要使用片段着色器方法。 片段着色器的作用是计算出当前绘制图元中每个像素的颜色值。

### 着色器获取数据的4种方法

* 缓冲和属性（Attributes）
* 全局变量（Uniforms）
* 纹理（Textures）
* 可变量（Varyings）

缓冲是发送到GPU的一些二进制数据序

属性用来指明怎么从缓冲中获取所需数据并将它提供给顶点着色器

全局变量在着色程序运行前赋值，在运行过程中全局有效。

纹理是一个数据序列，可以在着色程序运行中随意读取其中的数据。

可变量是一种顶点着色器给片段着色器传值的方式，依照渲染的图元是点， 线还是三角形，顶点着色器中设置的可变量会在片段着色器运行中获取不同的插值。

### 裁剪空间

- WebGL只关心两件事：裁剪空间中的坐标值和颜色值
- 裁剪空间的坐标范围永远是 -1 到 1