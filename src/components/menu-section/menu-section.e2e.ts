import { newE2EPage } from '@stencil/core/testing';

describe('umc-menu-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-menu-section></umc-menu-section>');

    const element = await page.find('umc-menu-section');
    expect(element).toHaveClass('hydrated');
  });
});
