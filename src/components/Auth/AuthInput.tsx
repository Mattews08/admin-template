type AuthInputProps = {
    label: string
    value: any
    required?: boolean
    type?: 'text' | 'email' | 'password'
    onChange: (e: any) => void
}

export default function AuthInput(props: AuthInputProps) {
    return (
        <div className="flex flex-col mt-4">
            <label>{props.label}</label>
            <input
                className={`w-full py-3 px-6 
                                ring-1 ring-gray-300 rounded-xl 
                                placeholder-gray-600 bg-transparent 
                                transition disabled:ring-gray-200 
                                disabled:bg-gray-100 disabled:placeholder-gray-400 
                                invalid:ring-red-400 focus:invalid:outline-none`}
                type={props.type ?? 'text'} value={props.value}
                onChange={e => props.onChange?.(e.target.value)} required={props.required}/>
        </div>

    )
}