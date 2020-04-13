import { newE2EPage } from '@stencil/core/testing';

describe('umc-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-section></umc-section>');

    const element = await page.find('umc-section');
    expect(element).toHaveClass('hydrated');
  });
});
