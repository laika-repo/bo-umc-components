import { newE2EPage } from '@stencil/core/testing';

describe('umc-list-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-list-header></umc-list-header>');

    const element = await page.find('umc-list-header');
    expect(element).toHaveClass('hydrated');
  });
});
