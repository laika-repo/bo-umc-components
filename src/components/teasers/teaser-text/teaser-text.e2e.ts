import { newE2EPage } from '@stencil/core/testing';

describe('umc-teaser-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-teaser-text></umc-teaser-text>');

    const element = await page.find('umc-teaser-text');
    expect(element).toHaveClass('hydrated');
  });
});
