import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from "react";

const Flat = React.lazy(() => import('./components/Explore/Flat'));
const Aboutus = React.lazy(() => import('./components/Intro/Aboutus'))
const Projects = React.lazy(() => import('./components/Explore/Projects'))
const Contactus = React.lazy(() => import('./components/Footer/Contactus'))
const Services = React.lazy(() => import('./components/Collections/services'))
const Header = React.lazy(() => import("./components/Header"))
const Footer = React.lazy(() => import("./components/Footer"))
const Intro = React.lazy(() => import("./components/Intro"))
const Explore = React.lazy(() => import("./components/Explore"))
const Confident = React.lazy(() => import("./components/Confident"))
const Collections = React.lazy(() => import("./components/Collections"))
const Banner = React.lazy(() => import("./components/Banner"))









// import EmailRestAPI from "./components/Banner/EmailRestAPI";

// import { StyleSheetManager } from "styled-components";
// import isPropValid from "@emotion/is-prop-valid";

// <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
//   {/* <App /> */}
// </StyleSheetManager>;








// const App = () => {
// 	return (
// 		<div className="w-full flex flex-col">
// 			<Header />
// 			<Services />
// 			<Collections />
// 			<Confident/>						
// 			<Explore />
// 			<Intro />
// 			<Banner />
// 			<Footer />
// 		</div>
// 	);
// };

// export default App;
const App = () => {
	return (
		
	  <Router>
		<Routes>
		  <Route path="/" element={
			<Suspense fallback={<p>Loading...</p>}>
				<Projects />
			</Suspense>
				} />
		  <Route path="/flat" element={
			<Suspense fallback={<p>Loading...</p>}>
				<Flat />
			</Suspense>
			
			} />

		  {/* <Route path="/services" element={<Services />} /> */}
		  <Route path="/Header" element={
			<Suspense fallback={<p>Loading...</p>}>
				<Header />
			</Suspense>
			} />
		   <Route path="/collections" element={
			<Suspense fallback={<p>Loading...</p>}>
			<Collections />
			</Suspense>
			} />
		   <Route path="/confident" element={
			<Suspense fallback={<p>Loading...</p>}>
			<Confident />
			</Suspense>
			} />
		   <Route path="/explore" element={
			<Suspense fallback={<p>Loading...</p>}>			
			<Explore />
			</Suspense>
			} />
		   <Route path="/intro" element={
			<Suspense fallback={<p>Loading...</p>}>
			<Intro />
			</Suspense>
			} />
		   <Route path="/banner"  element={
			<Suspense fallback={<p>Loading...</p>}>	
			<Banner />
			</Suspense>		
			} />
		   {/* <Route path="/Emailform"  element={<Emailform/>} /> */}
		   {/* <Route path="/EmailRestAPI"  element={<EmailRestAPI/>} /> */}

		   <Route path="/footer" element={<Footer />} />
		   {/* <Route path="/Emailform" element={<Emailform />} /> */}
		   <Route path="/aboutus" element={<Aboutus />} />
		   <Route path="/Services" element={<Services />} />
		   <Route path="/Contactus" element={<Contactus />} />


		</Routes>
	  </Router>
	  
	);
  };
  
  export default App;

