import { useCallback, useState, useEffect, useRef } from "react";

function PasswordGenerator() {
	const [length, setLength] = useState(10);
	const [numAllow, setNumAllow] = useState(false);
	const [charAllow, setCharAllow] = useState(false);
	const [password, setPassword] = useState("");

	const passwordRef = useRef(null);

	const passwodGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		numAllow ? (str += "0123456789") : "";
		charAllow ? (str += "!@#$%^&*()_-+=<>?{}[]|:;/") : "";

		for (let i = 0; i < length; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(char);
		}
		setPassword(pass);
	}, [length, numAllow, charAllow, setPassword]);

	const copyPasswordToClipbloard = useCallback(() => {
		passwordRef.current?.select();
		window.navigator.clipboard.writeText(password);
	}, [password]);

	useEffect(() => {
		passwodGenerator();
	}, [length, numAllow, charAllow, passwodGenerator]);

	return (
		<>
			<div
				className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')`,
				}}
			>
				<div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-2 bg-slate-800">
					<h1 className="text-xl text-center mb-3 text-green-500">
						Password Generator
					</h1>
					<div className="flex shadow rounded-lg overflow-hidden mb-4">
						<input
							type="text"
							name=""
							id=""
							value={password}
							className="outline-0 w-full py-1 px-3 text-gray-600 "
							readOnly
							ref={passwordRef}
							placeholder="Password"
						/>
						<button
							onClick={copyPasswordToClipbloard}
							className="outline-0 bg-green-700 px-3 text-white hover:bg-green-800 transition "
						>
							copy
						</button>
					</div>
					<div className="flex text-sm justify-center gap-x-8 text-white">
						<div className="flex items-center gap-x-1">
							<input
								type="range"
								id="length"
								min={10}
								max={64}
								value={length}
								className="cursor-pointer bg-blue-500"
								onInput={(e) => {
									setLength(e.target.value);
								}}
							/>
							<label htmlFor="length">Length:{length}</label>
						</div>
						<div className="flex items-center gap-x-1">
							<input
								type="checkbox"
								id="num"
								defaultChecked={numAllow}
								onChange={() => {
									setNumAllow((prev) => !prev);
								}}
							/>
							<label htmlFor="num">Numbers</label>
						</div>
						<div className="flex items-center gap-x-1">
							<input
								type="checkbox"
								id="char"
								defaultChecked={charAllow}
								onChange={() => {
									setCharAllow((prev) => !prev);
								}}
							/>
							<label htmlFor="char">Characters</label>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PasswordGenerator;
