import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getNavTitleText() {
    return element(by.css('app-root app-starter div app-starter-main-side-bar aside a span')).getText() as Promise<string>;
  }

  getContentTitleText() {
    return element(by.css('app-content div div div div h1')).getText() as Promise<string>;
  }

}
