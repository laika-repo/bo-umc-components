import { newE2EPage } from '@stencil/core/testing';

describe('amc-grid-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amc-grid-section></amc-grid-section>');

    const element = await page.find('amc-grid-section');
    expect(element).toHaveClass('hydrated');
  });
});
