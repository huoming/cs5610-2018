import { WebAppMakerAngularFourPage } from './app.po';

describe('web-app-maker-angular-four App', () => {
  let page: WebAppMakerAngularFourPage;

  beforeEach(() => {
    page = new WebAppMakerAngularFourPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
