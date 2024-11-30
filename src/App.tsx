import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AntdConfigProvider } from './components/theme-provider';
import { AppConfigProvider } from './hooks/app-config/context.tsx';
import { ROUTES } from './routes.tsx';

function App() {
    return (
        <AppConfigProvider>
            <AntdConfigProvider>
                <BrowserRouter>
                    <Routes>
                        {ROUTES.map(route => {
                            return <Route key={route.path} index={route.index} element={route.element} />;
                        })}
                    </Routes>
                </BrowserRouter>
            </AntdConfigProvider>
        </AppConfigProvider>
    );
}

export default App;
