//
//
import { defineConfig, defaultPlugins } from '@hey-api/openapi-ts';

export default defineConfig({
  input: '__openapi__/openapi.yml',
  output: 'src/client',
  plugins: [
    ...defaultPlugins,
    {name: '@hey-api/client-fetch', throwOnError: true},
    'zod',
    {
      name: '@hey-api/sdk',
      validator: true,
    },
  ],
});
