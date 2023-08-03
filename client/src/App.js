import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/home.css"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login.js";
import SignUp from "./components/pages/SignUp.js";
import Header from "./components/Header";
import Profile from "./components/pages/Profile";
import Drawer from "./components/Drawer";

const httpLink = createHttpLink({
  // uri: "http://localhost:3001/graphql",
    uri: "/graphql",

});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="custom-wrapper">
        <div className="header-container">
            <Header/>
          </div>
          
          <div className="app-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile/>} />
            </Routes>
          </div>
          <footer>
          </footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
