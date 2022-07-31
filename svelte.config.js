/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-node';

const config = {
  kit: {
    adapter: adapter(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE'],
    },
  },
};

export default config;
