import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUserStore from './store/userStore';
import AppRoutes from './routes/AppRoutes';
import DashboardLayout from './layout/DashboardLayout';

function App() {
  const { theme } = useUserStore();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <DashboardLayout>
        <AppRoutes />
        <ToastContainer position="top-right" autoClose={3000} />
      </DashboardLayout>
    </Router>
  );
}

export default App;