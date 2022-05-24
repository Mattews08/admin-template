import React, {ReactNode} from 'react'
import Header from './Header'
import Content from './Content'
import SideBar from './SideBar'
import useAppData from '../data/hook/useAppData'

type LayoutProps = {
    title: string
    subtitle: string
    children?: ReactNode
}

export default function Layout(props: LayoutProps) {
    const {theme} = useAppData()

    return (
        <div className={`${theme} flex h-screen w-screen`}>
            <SideBar/>
            <div className="flex flex-col w-screen p-7 bg-gray-300 dark:bg-gray-800">
                <Header title={props.title} subtitle={props.subtitle}/>
                <Content>
                    {props.children}
                </Content>
            </div>
        </div>

    )
}