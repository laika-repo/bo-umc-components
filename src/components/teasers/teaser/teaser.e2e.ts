import { newE2EPage } from '@stencil/core/testing';

describe('umc-teaser', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-teaser></umc-teaser>');

    const element = await page.find('umc-teaser');
    expect(element).toHaveClass('hydrated');
  });
});
