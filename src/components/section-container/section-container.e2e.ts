import { newE2EPage } from '@stencil/core/testing';

describe('umc-section-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-section-container></umc-section-container>');

    const element = await page.find('umc-section-container');
    expect(element).toHaveClass('hydrated');
  });
});
