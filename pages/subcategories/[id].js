import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import styles from '../../styles/subcategories.module.css';

export default function Products({ data }) {

    return (
        <>
            <Head>
                <title>{`Siemens EP - ${data.name}`}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Navbar />

            <div className={styles.container}>

                <main className={styles.main}>
                    <header className={styles.header}>
                        <h1>Portafolio de productos EP</h1>
                        <h2>Subcategoría - {data.name}</h2>
                    </header>

                    {
                        data.products.map((product, id) => {
                            return (
                            <div className={styles.product_container} key={id}>
                                <h3>{product.name}</h3>
                                <img src={`${product.product_image[0].url}`} alt='Imagen de producto' className={styles.product_images} />
                                <p>{product.description}</p>
                                <Link href='/products/[id]' as={`/products/${product.product_id}`} key={id}>
                                    <a>Conocer más</a>
                                </Link>
                            </div>
                        )})
                    }

                    <br />

                </main>

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
//     const { data } = await axios.get('http://18.191.231.159:1337/subcategories');

//     // Get the paths we want to pre-render based on posts
//     const paths = data.map(subcategory => `/subcategories/${subcategory.subcategory_id}`);

//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
// }

// export async function getStaticProps({ params }) {
//     // Se obtienen todos los productos, se filtra el que coincide con el param enviado
//     const subcategories = await axios.get(`http://18.191.231.159:1337/subcategories/`);
//     const data = subcategories.data.filter(subcategory => {
//         return params.id === subcategory.subcategory_id;
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
    const subcategories = await axios.get(`http://localhost:1337/subcategories/`);
    const data = subcategories.data.filter(subcategory => {
        return params.id === subcategory.subcategory_id;
    });

    return {
        props: {
            data: data[0]
        }
    }
}
