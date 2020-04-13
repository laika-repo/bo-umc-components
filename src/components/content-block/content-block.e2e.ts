import { newE2EPage } from '@stencil/core/testing';

describe('umc-content-block', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-content-block></umc-content-block>');

    const element = await page.find('umc-content-block');
    expect(element).toHaveClass('hydrated');
  });
});
