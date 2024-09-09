import { setConfig } from "@faustwp/core";
import templates from "./src/wp-templates";
import possibleTypes from "./possibleTypes.json";
import { InMemoryCache } from '@apollo/client';

/**
 * @type {import('@faustwp/core').FaustConfig}
 **/
export default setConfig({
  templates,
  experimentalPlugins: [],
  possibleTypes,

  // Apollo Client settings
  apolloClient: {
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache', // Disable caching globally
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
      },
    },
  },
});
