// my-component.stories.js
import readme from './readme.md';

export default {
  title: 'Section',
  parameters: {
    markdown: readme,
  },
};

export const Default = () => `
    <umc-section>THIS IS A SECTION</<umc-section>
`;