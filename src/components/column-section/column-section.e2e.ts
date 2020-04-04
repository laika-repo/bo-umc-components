import { newE2EPage } from '@stencil/core/testing';

describe('umc-column-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-column-section></umc-column-section>');

    const element = await page.find('umc-column-section');
    expect(element).toHaveClass('hydrated');
  });
});
