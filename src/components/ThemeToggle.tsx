import { useTheme } from '../providers/theme-provider'
import { Sun, Moon } from 'lucide-react';
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  }

  return (
    <button className="cursor-pointer text-2xl p-2 transition-colors hover:text-primary" onClick={toggleTheme}>
      <span className="sr-only">Change theme</span>
      {theme === 'dark' ? <Sun size={26} /> : <Moon size={26}/>}
    </button>
  )
}

export default ThemeToggle