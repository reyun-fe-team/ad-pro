# 预打包 

> `Create a tarball from a package`

本地打包即将发布的 `npm` 包，然后进行测试：

1. 打包

```sh
npm pack
```

会更加`package.json`生成`ad-pro-0.1.2.tgz`文件

2. 安装

> 安装之前，因为包名冲突，先将本地的`Package.json`进行修改，然后执行如下命令进行安装

```sh
npm install ./ad-pro-0.1.2.tgz
```