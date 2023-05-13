import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Backend/firebaseConfig';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    return isAuthenticated ? children : null;
}

export default ProtectedRoute;
