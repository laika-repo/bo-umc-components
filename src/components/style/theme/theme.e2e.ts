import { newE2EPage } from '@stencil/core/testing';

describe('umc-theme', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-theme></umc-theme>');

    const element = await page.find('umc-theme');
    expect(element).toHaveClass('hydrated');
  });
});
