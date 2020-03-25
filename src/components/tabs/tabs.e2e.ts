import { newE2EPage } from '@stencil/core/testing';

describe('umc-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-tabs></umc-tabs>');

    const element = await page.find('umc-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
