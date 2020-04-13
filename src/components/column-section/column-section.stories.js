// my-component.stories.js
import readme from './readme.md';

export default {
  title: 'ColumnSection',
  parameters: {
    markdown: readme,
  },
};

export const Default = () => `
<umc-section>
    <umc-column-section>
        <umc-column class='cols--3'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </umc-column>
        <umc-column>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </umc-column>
      <umc-column>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </umc-column>
   
    </<umc-column-section>
    </umc-section>
`;

