import { Background } from './components'
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'
import { Welcome } from './pages/Welcome/Welcome'
import { Assignments } from './pages/Raid/Assignments'
import { Layout } from './Layout'
import { NoPage } from './pages/404'

function App() {
	return (
		<>
			<Background darken />
			<HashRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Welcome />} />
						<Route path='raid/assignments' element={<Assignments />} />
						<Route path='*' element={<NoPage />} />
					</Route>
				</Routes>
			</HashRouter>
		</>
	)
}

export default App
