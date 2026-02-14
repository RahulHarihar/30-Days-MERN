type TextInputProps = {
	text: string;
	setText: React.Dispatch<React.SetStateAction<string>>;
};

const TextInput = ({ text, setText }: TextInputProps) => {
	return (
		<div className='container'>
			<div className='first'>
				<label htmlFor='text-input'>Enter Text: </label>
				<input
					type='text-input'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default TextInput;
