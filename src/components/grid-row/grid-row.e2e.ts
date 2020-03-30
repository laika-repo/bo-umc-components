import { newE2EPage } from '@stencil/core/testing';

describe('umc-grid-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-grid-row></umc-grid-row>');

    const element = await page.find('umc-grid-row');
    expect(element).toHaveClass('hydrated');
  });
});
