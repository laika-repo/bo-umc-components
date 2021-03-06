import { newE2EPage } from '@stencil/core/testing';

describe('umc-teaser-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-teaser-header></umc-teaser-header>');

    const element = await page.find('umc-teaser-header');
    expect(element).toHaveClass('hydrated');
  });
});
