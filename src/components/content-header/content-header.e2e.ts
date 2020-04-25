import { newE2EPage } from '@stencil/core/testing';

describe('umc-content-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-content-header></umc-content-header>');

    const element = await page.find('umc-content-header');
    expect(element).toHaveClass('hydrated');
  });
});
