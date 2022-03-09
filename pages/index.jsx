import { useState, useEffect } from 'react';
const Index = () => {
	const numbers = '0123456789'.split('');
	const symbols = "!£$%^&*()_+-=[]{};':@,.<>/?|`¬".split('');
	const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	const [password, setPassword] = useState();

	const [length, setLength] = useState(12);
	const [hasNumbers, setHasNumbers] = useState(true);
	const [hasSymbols, setHasSymbols] = useState(true);
	const [hasLowercase, setHasLowercase] = useState(true);
	const [hasUppercase, setHasUppercase] = useState(true);

	const generatePassword = (
		length,
		hasNumbers,
		hasSymbols,
		hasLowercase,
		hasUppercase
	) => {
		const availableCharacters = [
			...(hasSymbols ? symbols : []),
			...(hasNumbers ? numbers : []),
			...(hasUppercase ? uppercaseLetters : []),
			...(hasLowercase ? lowercaseLetters : []),
		];
		let updatedPass = '';

		if (availableCharacters.length === 0) return '';

		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(
				Math.random() * availableCharacters.length
			);
			updatedPass += availableCharacters[randomIndex];
		}
		return setPassword(updatedPass);
	};

	useEffect(() => {
		return generatePassword(
			length,
			hasNumbers,
			hasSymbols,
			hasLowercase,
			hasUppercase
		);
	}, [length, hasNumbers, hasSymbols, hasLowercase, hasUppercase]);

	return (
		<>
			<h1>Password Generator</h1>
			<form>
				<input type='text' disabled className='password' value={password} />

				<div className='section'>
					<h3>length:</h3>
					<input
						type='number'
						name='length'
						className='length'
						onChange={(e) => setLength(e.target.value)}
					/>
				</div>
				<div className='section'>
					<h3>Symbols:</h3>
					<input
						className='checkbox'
						type='checkbox'
						name='hasSymbols'
						onChange={(e) => setHasSymbols(e.target.checked)}
						checked={hasSymbols}
					/>
				</div>
				<div className='section'>
					<h3>Numbers:</h3>
					<input
						className='checkbox'
						type='checkbox'
						name='hasNumbers'
						onChange={(e) => setHasNumbers(e.target.checked)}
						checked={hasNumbers}
					/>
				</div>
				<div className='section'>
					<h3>Uppercase:</h3>
					<input
						className='checkbox'
						type='checkbox'
						name='hasUppercase'
						onChange={(e) => setHasUppercase(e.target.checked)}
						checked={hasUppercase}
					/>
				</div>

				<div className='section'>
					<h3>Lowercase:</h3>
					<input
						className='checkbox'
						type='checkbox'
						name='hasLowercase'
						value='lowercase'
						onChange={(e) => setHasLowercase(e.target.checked)}
						checked={hasLowercase}
					/>
				</div>
			</form>
		</>
	);
};

export default Index;
