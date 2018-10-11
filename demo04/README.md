
# ES6测试

- `.babelrc` 转码配置
- `--compliers` 指定测试脚本的转码器，**V4，即将废弃**，使用 `--require` 代替
  - `mocha --compilers js:babel-core/register` -> `mocha --require babel-core/register`