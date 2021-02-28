import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider} from 'react-query'
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient()
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
     <Router>
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
  </Router>
  </QueryClientProvider>,
  document.getElementById('root')
);

reportWebVitals();
