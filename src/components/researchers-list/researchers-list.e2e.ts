import { newE2EPage } from '@stencil/core/testing';

describe('umc-researchers-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-researchers-list></umc-researchers-list>');

    const element = await page.find('umc-researchers-list');
    expect(element).toHaveClass('hydrated');
  });
});
