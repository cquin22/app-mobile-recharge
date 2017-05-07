import { Web.Mobile.RechargesPage } from './app.po';

describe('web.mobile.recharges App', () => {
  let page: Web.Mobile.RechargesPage;

  beforeEach(() => {
    page = new Web.Mobile.RechargesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
