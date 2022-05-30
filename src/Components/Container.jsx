import { useTheme } from "../Context/ThemeContext";

export default function Container() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`container ${theme}`}>
      <h1>{theme}</h1>
      <br />
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {" "}
        Değiştir
      </button>
    </div>
  );
}
