import { useState } from "react";

function BgChanger() {
	const [color, setColor] = useState("black");

	return (
		<>
			<div
				className="w-full h-screen duration-200"
				style={{ backgroundColor: color }}
			>
				<div className="fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2">
					<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
						<button onClick={() => setColor("red")} className="outline-0 px-3 py-1 bg-red-500 rounded-full text-white shadow-lg">Red</button>
						<button onClick={() => setColor("blue")} className="outline-0 px-3 py-1 bg-blue-600 rounded-full text-white shadow-lg">Blue</button>
						<button onClick={() => setColor("green")} className="outline-0 px-3 py-1 bg-green-600 rounded-full text-white shadow-lg">Green</button>
						<button onClick={() => setColor("gray")} className="outline-0 px-3 py-1 bg-slate-500 rounded-full text-white shadow-lg">Slate</button>
						<button onClick={() => setColor("teal")} className="outline-0 px-3 py-1 bg-teal-600 rounded-full text-white shadow-lg">Teal</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default BgChanger;
