import { newE2EPage } from '@stencil/core/testing';

describe('umc-sidebar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-sidebar></umc-sidebar>');

    const element = await page.find('umc-sidebar');
    expect(element).toHaveClass('hydrated');
  });
});
