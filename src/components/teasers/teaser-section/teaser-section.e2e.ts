import { newE2EPage } from '@stencil/core/testing';

describe('umc-teaser-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-teaser-section></umc-teaser-section>');

    const element = await page.find('umc-teaser-section');
    expect(element).toHaveClass('hydrated');
  });
});
