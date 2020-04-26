import { newE2EPage } from '@stencil/core/testing';

describe('umc-search-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-search-input></umc-search-input>');

    const element = await page.find('umc-search-input');
    expect(element).toHaveClass('hydrated');
  });
});
