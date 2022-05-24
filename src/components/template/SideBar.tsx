import React, {ReactNode} from 'react'
import {IconHome, IconLogout, IconNotification, IconSettings} from '../icons'
import MenuItem from './MenuItem'
import Logo from './Logo'

export default function SideBar() {
    return (
        <aside className="flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900">
            <div
                className="
                flex
                flex-col
                items-center
                justify-center
                bg-gradient-to-r
                from-indigo-500
                to-purple-800
                h-20
                w-20"
            >
                <Logo/>
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" text="Home" icon={IconHome}/>
                <MenuItem url="/notification" text="Notificações" icon={IconNotification}/>
                <MenuItem url="/settings" text="Ajustes" icon={IconSettings}/>
            </ul>
            <ul>
                <MenuItem onClick={() => console.log('logout')} text="Sair" icon={IconLogout}
                          className="text-red-600 hover:bg-red-400 hover:text-white dark:text-red-400 dark:hover:text-white"/>
            </ul>
        </aside>

    )
}