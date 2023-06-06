"use client"

import { useEffect, useState } from "react";

export default function useThemeSwitcher() {
    const [theme, setTheme] = useState('light')
    const activeTheme = theme === 'dark' ? 'light' : 'dark'

    useEffect(() => {
        const root = window.document.documentElement;

		root.classList.remove(activeTheme);
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
    }, [theme, activeTheme])

    return { activeTheme, setTheme };
}