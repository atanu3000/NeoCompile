import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Page from './Pages/Page';
import CodeEditorDashboard from './Pages/CodeEditorDashboard';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='' element={<Page />} />
                    <Route path='code-editor' element={<CodeEditorDashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;