type DisplayTextProps = {
	text: string;
};

const DisplayText = ({ text }: DisplayTextProps) => {
	return (
		<div className='container'>
			<div className='second'>
				<p>You typed: {text}</p>
			</div>
		</div>
	);
};

export default DisplayText;
