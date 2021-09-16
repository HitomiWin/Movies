import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GenresContextProvider from './contexts/GenresContext';
import ModalContextProvider from './contexts/ModalContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false, // Do not refetch when you go to another page 
      staleTime: 1000 * 60 * 5 ,//5 mins //Global stateTime
      casheTime: 1000 * 60* 30, //30 min
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ModalContextProvider>
          <GenresContextProvider>
            <App />
            <ReactQueryDevtools  initialIsOpen={false}/>
          </GenresContextProvider>
        </ModalContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


