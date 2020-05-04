import { newE2EPage } from '@stencil/core/testing';

describe('umc-tag-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-tag-list></umc-tag-list>');

    const element = await page.find('umc-tag-list');
    expect(element).toHaveClass('hydrated');
  });
});
