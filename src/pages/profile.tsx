import Head from 'next/head'
import Layout from '../components/template/Layout'

export default function Profile() {
    return (
        <Layout title="Meu perfil" subtitle="minhas informações">
            <Head>
                <title>oioio</title>
            </Head>
           <h1>perfil</h1>
        </Layout>
    )
}