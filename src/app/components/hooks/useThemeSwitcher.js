'use client'

import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {

    const preferDarkQuery = '(prefers-color-scheme: dark)'
    const [theme, setTheme] = useState('')

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery)
        const userPreference = window.localStorage.getItem('theme')
        const root = window.document.documentElement
        const handleChange = () => {
            if (userPreference) {
                const checkTheme = userPreference === 'dark' ? 'dark' : 'light'
                setTheme(checkTheme);
                if (checkTheme === 'dark') {
                    document.documentElement.classList.add('dark')
                } else {
                document.documentElement.classList.remove('dark')
            } 
        } else {
            const checkTheme = mediaQuery.matches ? 'dark' : 'light'
            setTheme(checkTheme);
            if (checkTheme === 'dark') {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }
        }
        mediaQuery.addEventListener('change', handleChange)
        handleChange()
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    useEffect(() => {
        const root = window.document.documentElement
        if (theme === 'dark') {
            root.classList.add('dark')
            window.localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            window.localStorage.setItem('theme', 'light')
        }
    }, [theme])
     return { theme, setTheme }
    }

export default useThemeSwitcher;
