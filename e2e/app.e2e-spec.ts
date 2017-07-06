import { ShippingcalculatorPage } from './app.po';

describe('shippingcalculator App', () => {
  let page: ShippingcalculatorPage;

  beforeEach(() => {
    page = new ShippingcalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
