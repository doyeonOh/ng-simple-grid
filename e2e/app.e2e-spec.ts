import { NgSimpleGridPage } from './app.po';

describe('ng-simple-grid App', () => {
  let page: NgSimpleGridPage;

  beforeEach(() => {
    page = new NgSimpleGridPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
