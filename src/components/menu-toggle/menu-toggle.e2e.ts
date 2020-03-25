import { newE2EPage } from '@stencil/core/testing';

describe('amc-menu-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amc-menu-toggle></amc-menu-toggle>');

    const element = await page.find('amc-menu-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
