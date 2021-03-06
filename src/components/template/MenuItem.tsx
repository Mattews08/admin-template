import Link from 'next/link'

type MenuItemProps = {
    url?: string
    text: string
    icon: any
    className?: string
    onClick?: (e: any) => void
}

export default function MenuItem(props: MenuItemProps) {

    function renderLink() {
        return (
            <a className={`flex flex-col justify-center items-center h-20 w-30 ${props.className} text-gray-600`}>
                {props.icon}
                <span className="text-xs font-light">
                        {props.text}
                    </span>
            </a>
        )
    }

    return (
        <li onClick={props.onClick} className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
            {props.url ? (
                <Link href={props.url}>
                    {renderLink()}
                </Link>
            ) : renderLink()}

        </li>
    )
}