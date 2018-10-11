var expect = require('chai').expect;

describe("Hook示例", function(){
  var foo = false;
  //* 同步，() 后再 it
  beforeEach(function(done){
    setTimeout(function(){
      foo = true;
      done();
    }, 5000);
  });

  it("全局变量异步修改应该成功", function(){
    expect(foo).to.be.equal(true);
  });
});
