import { Ng2ADAuthB2CPage } from './app.po';

describe('ng2-adauth-b2-c App', () => {
  let page: Ng2ADAuthB2CPage;

  beforeEach(() => {
    page = new Ng2ADAuthB2CPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
