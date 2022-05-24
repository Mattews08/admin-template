import React, {ReactNode} from 'react'
import Title from './Title'
import ButtonTheme from './ButtonTheme'
import useAppData from '../data/hook/useAppData'

type HeaderProps = {
    title: string
    subtitle: string
}

export default function Header(props: HeaderProps) {
    const {theme, altTheme} = useAppData()

    return (
        <div className="flex">
            <Title title={props.title} subtitle={props.subtitle} />
            <div className="flex flex-grow justify-end">
                <ButtonTheme theme={theme} altTheme={altTheme} />
            </div>
        </div>

    )
}