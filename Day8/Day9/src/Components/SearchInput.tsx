type SearchInputProps = {
	searchText: string;
	setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = ({ searchText, setSearchText }: SearchInputProps) => {
	return (
		<input
			type='text'
			placeholder='Search on fetched posts'
			value={searchText}
			onChange={(e) => setSearchText(e.target.value)}
		/>
	);
};

export default SearchInput;
