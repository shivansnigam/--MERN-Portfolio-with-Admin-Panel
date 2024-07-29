import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './store/auth.jsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <React.StrictMode>
    <App />
    <ToastContainer
    position="top-center"
    // position="top-right"
    autoClose={2000}
    limit={10}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable={false}
    pauseOnHover
    theme="colored"
    transition: Bounce
    bodyClassName="toastBody"
    />
  </React.StrictMode>,
  </AuthProvider>
)



