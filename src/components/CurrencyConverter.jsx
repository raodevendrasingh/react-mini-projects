import { useState } from "react";
import CurrencyInput from "./CurrencyInput";
import useCurrencyInfo from "../hooks/UseCurrencyInfo";


function CurrencyConverter() {
	const [amount, setAmount] = useState(0);
	const [from, setFrom] = useState("usd");
	const [to, setTo] = useState("inr");
	const [convertedAmount, setConvertedAmount] = useState(0);

	const currencyInfo = useCurrencyInfo(from);

	const options = Object.keys(currencyInfo);

	const swap = () => {
		setFrom(to);
		setTo(from);
		setConvertedAmount(amount);
		setAmount(convertedAmount);
	};

	const convert = () => {
		setConvertedAmount(amount * currencyInfo[to]);
	};

	return (
		<div
			className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
			style={{
				backgroundImage: `url(
					"https://images.unsplash.com/photo-1644088379091-d574269d422f"
				)`,
			}}
		>
			<div className="w-full   ">
				<div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							convert();
						}}
					>
						<div className="w-full mb-1">
							<CurrencyInput
								label="From"
								amount={amount}
								currencyOptions={options}
								onCurrencyChange={(currency) => setFrom(currency)}
								selectCurrency={from}
								onAmountChange={(amount) => setAmount(amount)}
							/>
						</div>
						<div className="relative w-full h-0.5">
							<button
								type="button"
								className="absolute text-3xl left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
								onClick={swap}
							>
								&#8645;
							</button>
						</div>
						<div className="w-full mt-1 mb-4">
							<CurrencyInput
								label="To"
								amount={convertedAmount}
								currencyOptions={options}
								onCurrencyChange={(currency) => setTo(currency)}
								selectCurrency={to}
								amountDisable
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg hover:bg-slate-900"
						>
							Convert {from.toUpperCase()} &#8594; {to.toUpperCase()}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default CurrencyConverter;