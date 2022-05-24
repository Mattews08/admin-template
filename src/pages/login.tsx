import AuthInput from '../components/Auth/AuthInput'
import {useState} from 'react'
import Logo from '../components/template/Logo'

export default function Login() {
    const [mode, setMode] = useState<'login' | 'register'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onSubmit() {
        if (mode === 'login') {
            console.log('login')
        } else {
            console.log('cadastre-se')
        }
        console.log
    }

    return (
        <div className="flex h-screen items-center justify-center m-auto">
            <div hidden className="hidden md:block md:w-1/2">
                <img src="bg.jpg" alt="tela de login" className="w-full h-screen object-cover"/>
            </div>
            <div className="m-10 lg:w-1/2">
                <div className="m-auto py-20 px-12 sm:p-20 xl:w-10/12">
                    <div className="space-y-4">
                        <a href="">
                            <Logo/>
                        </a>
                        <p className="font-medium text-lg text-gray-600">
                            {mode === 'login' ? 'Bem-vindo! Faça login primeiro' : 'Cadastre-se na plataforma'}
                        </p>
                    </div>

                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        <button
                            className="py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
                            <div className="flex gap-4 justify-center">
                                <img src="Google.svg" alt="tela de login" className="w-5"/>
                                <span
                                    className="block w-max font-medium tracking-wide text-sm text-blue-700">com Google</span>
                            </div>
                        </button>
                        <button
                            className="py-3 px-6 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
                            <div className="flex gap-4 items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5"
                                     viewBox="0 0 16 16">
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                                <span
                                    className="block w-max font-medium tracking-wide text-sm text-white">com Github</span>
                            </div>
                        </button>
                    </div>

                    <div role="hidden" className="mt-12 border-t">
                        <span className="block w-max mx-auto -mt-3 px-6 text-center text-gray-500 bg-white">Ou</span>
                    </div>

                    <form className="space-y-2 py-6">
                        <div>
                            <AuthInput label="E-mail" value={email} onChange={setEmail} type="email" required/>
                        </div>

                        <div className="flex flex-col">
                            <AuthInput label="Senha" value={password} onChange={setPassword} type="password" required/>
                            <button type="reset" className="w-max p-3 -mr-3">
                                <span className="text-sm tracking-wide text-blue-600">Esqueceu a senha?</span>
                            </button>
                            <button onClick={onSubmit}
                                    className={`w-full px-6 py-3 rounded-xl bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800 font-semibold text-white text-lg`}>
                                {mode === 'login' ? 'Entrar' : 'Cadastre-se'}
                            </button>

                            {
                                mode === 'login' ? (
                                    <p className="w-max p-3 -mr-3">
                                        <a onClick={() => setMode('register')} className="text-sm tracking-wide text-blue-600 cursor-pointer">
                                            Crie um conta gratuitamente!
                                        </a>
                                    </p>
                                ) : (
                                    <p className="w-max p-3 -mr-3">
                                        <a onClick={() => setMode('register')} className="text-sm tracking-wide text-blue-600 cursor-pointer">
                                            Entre com as suas informações!
                                        </a>
                                    </p>
                                )
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}