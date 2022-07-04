import { Background } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Welcome } from './pages/Welcome/Welcome'
import { Raid } from './pages/Raid'
import { Layout } from './Layout'
import { NoPage } from './pages/404'

function App() {
	return (
		<>
			<Background darken />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Welcome />} />
						<Route path='raid' element={<Raid />} />
						<Route path='*' element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
