```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 安装 prisma 数据库

    pnpm install prisma

## 初始化并指定数据库

    pnpm prisma init --datasource-provider sqlite

## nextjs 组件的概念

    客户端组件:
    1.可以使用 useState 处理数据（修改数据）
    2.不能定义服务器操作
    <!-- 3.可以给dom绑定事件 -->

    服务器组件：
     1.不能在客户端使用；
     2.不能使用 useState 处理数据（修改数据）
     3.不能给dom绑定事件

## 安装 react 代码编辑器

    npm install @monaco-editor/react

## 路由缓存机制

    静态路由
    问题： 静态路由被缓存，数据发生变化时不回更新 ？
    3种方式:
        1.export const dynamic = 'force-dynamic'  将静态路由改为动态路由
        2.export const revalidate = 60 根据时间去刷新缓存
        3.revalidatePath(`/`) 按需清除特定路径的 缓存数据

    动态路由
    问题：动态路由何如变成静态路由？
      generateStaticParams() 与 动态路由段 结合使用，以 静态生成 构建时路由
