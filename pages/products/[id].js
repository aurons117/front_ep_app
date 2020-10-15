import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import styles from '../../styles/products.module.css';

export default function Products({ data }) {
    const router = useRouter();
    const [product, setProduct] = useState({
        data: null,
        loading: true
    });

    useEffect(() => {
        setProduct({
            ...data,
            loading: false
        });
    }, []);

    const handleBack = () => {
        router.back();
    };

    return (
        <>
            <Head>
                <title>{`Siemens EP - ${product.name}`}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <div className={styles.container}>
                {
                    product.loading ? <h1>Loading</h1> :
                        <main className={styles.main}>
                            <header className={styles.header}>
                                <h1>Portafolio de productos EP</h1>
                                <h2>Producto - {data.name}</h2>
                            </header>
                            <h3>Descripción</h3>
                            <p>{product.description}</p>
                            <img src={`${product.product_image[0].url}`} alt="Imagen del producto" className={styles.product_images} />
                            
                            <h3>Características técnicas</h3>

                            <div>
                                {
                                    product.attribute.map(atributo =>
                                        <div key={atributo.id}>
                                            <p>{atributo.attribute} - {atributo.value}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </main>
                }
                <footer className={styles.footer}>
                    <p>Footer</p>
                </footer>
            </div>
        </>
    );
}

// // This function gets called at build time
// export async function getStaticPaths() {
//     // Call an external API endpoint to get posts
//     const { data } = await axios.get('http://18.191.231.159:1337/products');

//     // Get the paths we want to pre-render based on posts
//     const paths = data.map(product => `/products/${product.product_id}`);

//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
// }

// export async function getStaticProps({ params }) {
//     // Se obtienen todos los productos, se filtra el que coincide con el param enviado
//     const products = await axios.get(`http://18.191.231.159:1337/products/`);
//     const data = products.data.filter(product => {
//         return params.id === product.product_id;
//     });

//     return {
//         props: {
//             data: data[0]
//         }
//     }
// }

// This gets called on every request
export async function getServerSideProps({ params }) {
    // Se obtienen todos los productos, se filtra el que coincide con el param enviado
    const products = await axios.get(`http://localhost:1337/products/`);
    const data = products.data.filter(product => {
        return params.id === product.product_id;
    });

    return {
        props: {
            data: data[0]
        }
    }
}
