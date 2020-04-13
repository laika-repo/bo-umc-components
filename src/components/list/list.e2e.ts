import { newE2EPage } from '@stencil/core/testing';

describe('umc-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-list></umc-list>');

    const element = await page.find('umc-list');
    expect(element).toHaveClass('hydrated');
  });
});
