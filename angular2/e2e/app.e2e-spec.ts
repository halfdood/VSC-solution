import { Vsc2Page } from './app.po';

describe('vsc2 App', function() {
  let page: Vsc2Page;

  beforeEach(() => {
    page = new Vsc2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
