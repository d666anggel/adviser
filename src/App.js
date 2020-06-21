import React, {Suspense} from 'react';
import {
	BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import styles from './App.module.scss';
import Sidebar from './components/sidebar/Sidebar';
import Header from './helpers/header/Header';
import {
	toggleDownloadFocus
} from './AppSlice';
import {useDispatch} from "react-redux";
import {TitleComponent} from "./helpers/title/TitleComponent";
import sidebarRightAbout from "./media/sidebar_right/sidebarRight_about.png";

const Main = React.lazy(() => import('./components/main/Main'));
const About = React.lazy(() => import('./components/about/About'));
const Politic = React.lazy(() => import('./components/politic/Politic'));


function Error() {

	return (<>
		<TitleComponent title="Ошибка!"/>
		<div style={{display: "flex", flexDirection: "row", alignItems: "center", margin: "auto"}}>
			<div style={{height: 300}}>
				<img src={sidebarRightAbout} style={{height: "100%"}} alt="Not Found"/>
			</div>
			<div>
				<h1>
					Такой страницы не существует.
				</h1>
			</div>
		</div>
	</>);
}

function App() {
	const dispatch = useDispatch();

	return (<Router>
		<div id="dark" onClick={() => dispatch(toggleDownloadFocus())}></div>
		<Sidebar toogleDownloadFocus={() => dispatch(toggleDownloadFocus())}/>
		<div className={styles.container}>
			<Header toogleDownloadFocus={() => dispatch(toggleDownloadFocus())}/>
			<Switch>
				<Route path="/about">
					<Suspense fallback={<div className="donut"></div>}>
						<About/>
					</Suspense>
				</Route>
				<Route path="/politic">
					<Suspense fallback={<div className="donut"></div>}>
						<Politic/>
					</Suspense>
				</Route>
				<Route exact path="/">
					<Suspense fallback={<div className="donut"></div>}>
						<Main/>
					</Suspense>
				</Route>
				<Route path="*" component={Error} status={404}/>
			</Switch>
		</div>
	</Router>);
}

export default App;
