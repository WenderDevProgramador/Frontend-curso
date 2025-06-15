import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from './App';
import Sales from './Sales';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/admin" />} />
                <Route path="/admin" element={<App />} />
                <Route path="/vendedor" element={<Sales />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
