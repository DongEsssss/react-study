import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from '../main'
import Home from '../home/index'
import UseState from '../usestate';


const AuthorizingRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="/" element={<Main />}>
                    <Route path="usestate" element={<UseState />} />
                </Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default AuthorizingRouter