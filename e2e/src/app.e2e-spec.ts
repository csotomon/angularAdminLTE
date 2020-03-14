import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display navigation title', () => {
    page.navigateTo();
    expect(page.getNavTitleText()).toEqual('AdminLTE 3');
  });

  it('should display content title', () => {
    page.navigateTo();
    expect(page.getContentTitleText()).toEqual('Starter Page');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
