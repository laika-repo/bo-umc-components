import { newE2EPage } from '@stencil/core/testing';

describe('umc-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-button></umc-button>');

    const element = await page.find('umc-button');
    expect(element).toHaveClass('hydrated');
  });
});
