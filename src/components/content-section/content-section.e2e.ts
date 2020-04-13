import { newE2EPage } from '@stencil/core/testing';

describe('umc-content-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-content-section></umc-content-section>');

    const element = await page.find('umc-content-section');
    expect(element).toHaveClass('hydrated');
  });
});
