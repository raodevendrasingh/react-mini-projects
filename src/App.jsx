import { useState } from "react";
import "./App.css";
// import BgChanger from "./components/BgChanger";
// import PasswordGenerator from "./components/PasswordGenerator";
// import CurrencyConverter from "./components/CurrencyConverter";
import Main from "./components/RouterProject/Main/Main";

const App = () => {
	return (
		<>
			{/* <h1 className="text-center text-4xl text-blue-400 py-10">
				React Projects
			</h1>
			<div className=" flex justify-center text-xl text-gray-100">
				<ol className="list-decimal ">
					<li>Background Changer</li>
					<li>Password Generator</li>
					<li>Currency Convertor</li>
				</ol>
			</div> */}

            <Main/>

			{/* <BgChanger /> */}
			{/* <PasswordGenerator /> */}
			{/* <CurrencyConverter /> */}
		</>
	);
};

export default App;
