import { newE2EPage } from '@stencil/core/testing';

describe('umc-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-logo></umc-logo>');

    const element = await page.find('umc-logo');
    expect(element).toHaveClass('hydrated');
  });
});
