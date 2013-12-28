var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = chai.expect;
chai.use(chaiAsPromised);

describe('no protractor at all', function() {
  it('should still do normal tests', function() {
    expect(true).to.eql(true);
  });
});

describe('protractor library', function() {
  it('should expose the correct global variables', function() {
    expect(protractor).not.to.be.undefined;
    expect(browser).not.to.be.undefined;
    expect(by).not.to.be.undefined;
    expect(element).not.to.be.undefined;
    expect($).not.to.be.undefined;
  });

  it('should wrap webdriver', function() {
    browser.get('index.html');
    expect(browser.getTitle()).to.eventually.eql('My AngularJS App');
  });
});
