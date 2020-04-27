import { newE2EPage } from '@stencil/core/testing';

describe('umc-hero-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-hero-section></umc-hero-section>');

    const element = await page.find('umc-hero-section');
    expect(element).toHaveClass('hydrated');
  });
});
