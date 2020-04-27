import { newE2EPage } from '@stencil/core/testing';

describe('umc-hero-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-hero-image></umc-hero-image>');

    const element = await page.find('umc-hero-image');
    expect(element).toHaveClass('hydrated');
  });
});
