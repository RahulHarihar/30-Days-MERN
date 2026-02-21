import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>("light");

	useEffect(() => {
		const root = document.documentElement;

		if (theme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
	}, [theme]);

	function toggleTheme() {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within ThemeProvider");
	}
	return context;
}

export { ThemeProvider, useTheme };
