import { newE2EPage } from '@stencil/core/testing';

describe('umc-research-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-research-list></umc-research-list>');

    const element = await page.find('umc-research-list');
    expect(element).toHaveClass('hydrated');
  });
});
