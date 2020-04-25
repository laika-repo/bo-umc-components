import { newE2EPage } from '@stencil/core/testing';

describe('umc-list-item-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-list-item-header></umc-list-item-header>');

    const element = await page.find('umc-list-item-header');
    expect(element).toHaveClass('hydrated');
  });
});
