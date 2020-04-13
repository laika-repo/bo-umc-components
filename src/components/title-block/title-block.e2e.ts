import { newE2EPage } from '@stencil/core/testing';

describe('umc-title-block', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-title-block></umc-title-block>');

    const element = await page.find('umc-title-block');
    expect(element).toHaveClass('hydrated');
  });
});
