
# 基本参数

| 语法。 | 说明。 |
| ----- | ----- |
| `test`                                     | 指定目录/文件 |
| `-h`, `--help`                             | 输出帮助信息 |
| `-V`, `--version`                          | 输出mocha的版本号 |
| `-A`, `--async-only`                       | 强制所有的测试用例必须使用callback或者返回一个promise的格式来确定异步的正确性 |
| `-c`, `--colors`                           | 在报告中显示颜色 |
| `-C`, `--no-colors`                        | 在报告中禁止显示颜色 |
| `-g`, `--growl`                            | 在桌面上显示测试报告的结果 |
| `-O`, `--reporter-options <k=v,k2=v2,...>` | 设置报告的基本选项 |
| `-R`, `--reporter <name>`                  | 指定测试报告的格式 |
| `-S`, `--sort`                             | 对测试文件进行排序 |
| `-b`, `--bail`                             | 在第一个测试没有通过的时候就停止执行后面所有的测试 |
| `-d`, `--debug`                            | 启用node的debugger功能 |
| `-g`, `--grep <pattern>`                   | 用于搜索测试用例的名称，然后只执行匹配的测试用例 |
| `-f`, `--fgrep <string>`                   | 只执行测试用例的名称中含有string的测试用例 |
| `-gc`, `--expose-gc`                       | 展示垃圾回收的log内容 |
| `-i`, `--invert`                           | 只运行不符合条件的测试用例，必须和--grep或--fgrep之一同时运行 |
| `-r`, `--require <name>`                   | `require`指定模块 |
| `-s`, `--slow <ms>`                        | 指定`slow`的时间，单位是`ms`，默认是`75ms` |
| `-t`, `--timeout <ms>`                     | 指定超时时间，单位是`ms`，默认是`200ms` |
| `-u`, `--ui <name>`                        | 指定`user-interface` `(bdd|tdd|exports)`中的一种 |
| `-w`, `--watch`                            | 用来监视指定的测试脚本。只要测试脚本有变化，就会自动运行`Mocha` |
| `--check-leaks`                            | 检测全局变量造成的内存泄漏问题
| `--full-trace`                             | 展示完整的错误栈信息 |
| `--compilers <ext>:<module>,...`           | 使用给定的模块来编译文件 |
| `--debug-brk`                              | 启用`nodejs`的`debug`模式 |
| `--es_staging`                             | 启用全部`staged`特性 |
| `--harmony<_classes,_generators,...>`      | all node --harmony* flags are available |
| `--preserve-symlinks`                      | 告知模块加载器在解析和缓存模块的时候，保留模块本身的软链接信息 |
| `--icu-data-dir`                           | include ICU data |
| `--inline-diffs`                           | 用内联的方式展示actual/expected之间的不同 |
| `--inspect`                                | 激活chrome浏览器的控制台 |
| `--interfaces`                             | 展示所有可用的接口 |
| `--no-deprecation`                         | 不展示`warning`信息 |
| `--no-exit`                                | require a clean shutdown of the event loop: mocha will not call process.exit |
| `--no-timeouts`                            | 禁用超时功能 |
| `--opts <path>`                            | 定义`option`文件路径 |
| `--perf-basic-prof`                        | 启用`linux`的分析功能 |
| `--prof`                                   | 打印出统计分析信息 |
| `--recursive`                              | 包含子目录中的测试用例 |
| `--reporters`                              | 展示所有可以使用的测试报告的名称 |
| `--retries <times>`                        | 设置对于失败的测试用例的尝试的次数 |
| `--throw-deprecation`                      | 无论任何时候使用过时的函数都抛出一个异常 |
| `--trace`                                  | 追踪函数的调用过程 |
| `--trace-deprecation`                      | 展示追踪错误栈 |
| `--use_strict`                             | 强制使用严格模式 |
| `--watch-extensions <ext>,...`             | `--watch`监控的扩展 |
| `--delay`                                  | 异步测试用例的延迟时间 |

# 插件模块

- `mochawesome` 模块，使用 `mocha --reporter mochawesome` 生成测试报告html，报告在  `mochaawesome-reports` 中。