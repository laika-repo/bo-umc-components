import { newE2EPage } from '@stencil/core/testing';

describe('umc-link-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-link-list></umc-link-list>');

    const element = await page.find('umc-link-list');
    expect(element).toHaveClass('hydrated');
  });
});
