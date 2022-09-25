# admin vite template

参考初始化工具[ms-start](https://git.garena.com/shopee/merchant/infra/ms-start)

```bash
mkdir your-project-name
cd your-project-name
npx ms-start admin-vite-template

# or

npx ms-start admin-vite-template your-project-name
```
```

### 开发

```shell
yarn

npm run start

# http://localhost:3000/
```

### 构建

```shell
# live
npm run build

# uat
npm run build:uat

# test
npm run build:test
```

### git commit

[@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#rules)
