import { newE2EPage } from '@stencil/core/testing';

describe('umc-teaser-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-teaser-image></umc-teaser-image>');

    const element = await page.find('umc-teaser-image');
    expect(element).toHaveClass('hydrated');
  });
});
