import { newE2EPage } from '@stencil/core/testing';

describe('umc-grid-block', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-grid-block></umc-grid-block>');

    const element = await page.find('umc-grid-block');
    expect(element).toHaveClass('hydrated');
  });
});
