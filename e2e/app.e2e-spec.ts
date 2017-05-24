import { MedtrackerPage } from './app.po';

describe('medtracker App', () => {
  let page: MedtrackerPage;

  beforeEach(() => {
    page = new MedtrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
