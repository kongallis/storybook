/* eslint-disable storybook/hierarchy-separator */
// @TODO: discuss about having dots in a meta title (that is not related to a separator)
import { html } from 'lit';

export default {
  title: 'Misc. / Script Tag',
};

export const inTemplate = () => html`
  <div>JS alert</div>
  <script>
    alert('hello');
  </script>
`;

export const inString = () => '<div>JS alert</div><script>alert("hello")</script>';

export const typeModule = () =>
  '<div>JS alert from module</div><script type="module">alert("hello from module"); export const a = 1;</script>';
