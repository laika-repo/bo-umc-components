import { newE2EPage } from '@stencil/core/testing';

describe('umc-header-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-header-section></umc-header-section>');

    const element = await page.find('umc-header-section');
    expect(element).toHaveClass('hydrated');
  });
});
