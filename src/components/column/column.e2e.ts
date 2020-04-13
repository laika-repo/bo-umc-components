import { newE2EPage } from '@stencil/core/testing';

describe('umc-column', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-column></umc-column>');

    const element = await page.find('umc-column');
    expect(element).toHaveClass('hydrated');
  });
});
