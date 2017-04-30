import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';
import App from './components/App';
import './main.scss';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://2017.texascamp.org.develop.us2.compact.amazee.io/graphql',
  }),
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
