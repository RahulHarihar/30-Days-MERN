interface CardProps {
	title: string;
	description: string;
}

const Card = ({ title, description }: CardProps) => {
	return (
		<div className='card'>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
};

export default Card;
