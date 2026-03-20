import Explore from ".";
import Banner from "../Banner";
import Collections from "../Collections";
import Confident from "../Confident";
import Footer from "../Footer";
import Header from "../Header";
import Intro from "../Intro";
// import Services from "../Services";
// import Emailform from "../Banner";



const Projects = () => {
	return (
		<div className="w-full flex flex-col">
			<Header />
			{/* <Services /> */}
			<Collections />
			<Confident/>						
			<Explore />
			<Intro />
			<Banner />
			<Footer />
		</div>
	);
};

export default Projects;