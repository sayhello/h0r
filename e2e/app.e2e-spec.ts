import { H0rPage } from './app.po';

describe('h0r App', () => {
  let page: H0rPage;

  beforeEach(() => {
    page = new H0rPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
