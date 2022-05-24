import {createContext, useState} from 'react'

type ITheme = 'dark' | ''

type AppContextProps = {
    theme?: ITheme
    altTheme?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: any) {
    const [theme, setTheme] = useState<ITheme>('dark')

    function altTheme() {
        setTheme(theme === '' ? 'dark' : '')
    }

    return (
        <AppContext.Provider value={{
            theme,
            altTheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext