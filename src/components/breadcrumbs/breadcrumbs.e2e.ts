import { newE2EPage } from '@stencil/core/testing';

describe('umc-breadcrumbs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<umc-breadcrumbs></umc-breadcrumbs>');

    const element = await page.find('umc-breadcrumbs');
    expect(element).toHaveClass('hydrated');
  });
});
