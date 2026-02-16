import { useEffect, useState } from "react";
type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};
type DataListProps = {
	searchText: string;
};

const DataList = ({ searchText }: DataListProps) => {
	const [data, setData] = useState<Post[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Failed to load data");
				}
				return response.json();
			})
			.then((data: Post[]) => {
				setData(data.slice(0, 5));
				setLoading(false);
			})
			.catch((err: Error) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	const filteredData = data.filter((post) =>
		post.title.toLowerCase().includes(searchText.toLowerCase()),
	);

	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>{error}</p>}

			{!loading && !error && (
				<ul>
					{filteredData.map((post) => (
						<li key={post.id}>
							<h3>{post.title}</h3>
							<p>{post.body}</p>
							<small>User: {post.userId}</small>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default DataList;
