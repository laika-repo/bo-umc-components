import { newE2EPage } from '@stencil/core/testing';

describe('umc-rich-text-block', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-rich-text-block></umc-rich-text-block>');

    const element = await page.find('umc-rich-text-block');
    expect(element).toHaveClass('hydrated');
  });
});
