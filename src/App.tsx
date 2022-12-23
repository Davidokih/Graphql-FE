import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import InputComp from './component/InputComp';
import ViewComp from './component/ViewComp';


function App() {

  const client = new ApolloClient({
    uri: "http://localhost:1111/api",
    cache: new InMemoryCache(),
  });
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <InputComp />
        <ViewComp />
      </ApolloProvider>
    </div>
  );
}

export default App;
