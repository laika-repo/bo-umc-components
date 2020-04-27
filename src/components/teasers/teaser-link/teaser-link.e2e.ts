import { newE2EPage } from '@stencil/core/testing';

describe('umc-teaser-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-teaser-link></umc-teaser-link>');

    const element = await page.find('umc-teaser-link');
    expect(element).toHaveClass('hydrated');
  });
});
