import { newE2EPage } from '@stencil/core/testing';

describe('umc-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-header></umc-header>');

    const element = await page.find('umc-header');
    expect(element).toHaveClass('hydrated');
  });
});
