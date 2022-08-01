type AuthInputProps = {
    label: string;
    value: any;
    required?: boolean;
    type?: 'text' | 'email' | 'password';
    onChange: (e: any) => void;
};

export default function AuthInput(props: AuthInputProps) {
    return (
        <div className="flex flex-col mt-4">
            <label>{props.label}</label>
            <input
                className={`
                    px-4 py-3 rounded-lg bg-gray-200 mt-2 text-black
                    border focus:border-blue-500 focus:bg-white
                    focus:outline-none
                `}
                type={props.type ?? 'text'}
                value={props.value}
                onChange={(e) => props.onChange?.(e.target.value)}
                required={props.required}
            />
        </div>
    );
}
