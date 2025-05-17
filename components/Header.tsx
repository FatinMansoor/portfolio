import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className = "flex justify-between items-center px-6 py-4 border-b">
            <h1 className="font-bold text-lg">Fatin Sadab Mansoor</h1>
            <nav className = "flex items-center gap-4 text-sm">
                <a href = "#projects" className = "hover:underline">Projects</a>
                <a href = "#contact" className = "hover:underline">Contact</a>

                {mounted && (
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className = "ml-4 border px-2 py-1 rounded"
                        >
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                )}
            </nav>
        </header>
    )
}