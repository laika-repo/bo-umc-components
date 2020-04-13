import { newE2EPage } from '@stencil/core/testing';

describe('umc-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-list-item></umc-list-item>');

    const element = await page.find('umc-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
