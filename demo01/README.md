
# 类目

- `.test.js` (表示测试)
- `.spec.js` (表示规格)

# 通配符

- 指定多个文件

```bash
$ mocha spec/{my,awesome}.js
$ mocha test/unit/*.js
```

- 指定目录下所有文件，Node

```bash
$ mocha 'test/**/*.@(js|jsx)'
```

上面代码指定运行`test`目录下面任何子目录中、文件后缀名为`js`或`jsx`的测试脚本。注意，Node的通配符要放在单引号之中，否则星号（`*`）会先被`Shell`解释。

上面这行Node通配符，如果改用`Shell`通配符，要写成下面这样。

```bash
$ mocha test/{,**/}*.{js,jsx}
```

# `expect` 断言库

```js
// 相等或不相等
expect(4 + 5).to.be.equal(9);
expect(4 + 5).to.be.not.equal(10);
expect(foo).to.be.deep.equal({ bar: 'baz' });

// 布尔值为true
expect('everthing').to.be.ok;
expect(false).to.not.be.ok;

// typeof
expect('test').to.be.a('string');
expect({ foo: 'bar' }).to.be.an('object');
expect(foo).to.be.an.instanceof(Foo);

// include
expect([1,2,3]).to.include(2);
expect('foobar').to.contain('foo');
expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

// empty
expect([]).to.be.empty;
expect('').to.be.empty;
expect({}).to.be.empty;

// match
expect('foobar').to.match(/^foo/);
```