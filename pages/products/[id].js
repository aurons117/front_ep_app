import React from "react";
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/products.module.scss';
import Product_image from "../../components/product_image";

export default function Products() {
  return (
    <>
      <Head>
        <title>Portafolio de productos EP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.display}>
        <header className={styles.header}>
          <h1>Especificaciones de producto</h1>
          <div>
            {/* <img src="/safety.png" alt="Imágen del producto" /> */}
            <Product_image />
          </div>
        </header>

        <main>
          <article>
            <h1>Interruptores de caja moldeada 3VA</h1>

            <section>
              <button>Info</button>
              <button>Descargas</button>
              <button>FAQ</button>
            </section>

            <section>
              <h2>Características</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam rem sunt libero. Cum officia impedit vitae, atque tenetur vel distinctio.</p>
            </section>

            <section>
              <h2>Especificaciones técnicas</h2>
              <ul>
                <li><span>Protección: </span>LI</li>
                <li><span>Corriente: </span>25-1600 A</li>
                <li><span>Tensión: </span>110-600 VCA</li>
              </ul>
            </section>

          </article>
        </main>

      </div>

    </>
  );
}

// export default function Products({ data }) {
//     const router = useRouter();
//     const [product, setProduct] = useState({
//         data: null,
//         loading: true
//     });

//     useEffect(() => {
//         setProduct({
//             ...data,
//             loading: false
//         });
//     }, []);

//     const handleBack = () => {
//         router.back();
//     };

//     return (
//         <>
//             <Head>
//                 <title>{`Siemens EP - ${product.name}`}</title>
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>

//             <Navbar />

//             <div className={styles.container}>
//                 {
//                     product.loading ? <h1>Loading</h1> :
//                         <main className={styles.main}>
//                             <header className={styles.header}>
//                                 <h1>Portafolio de productos EP</h1>
//                                 <h2>Producto - {data.name}</h2>
//                             </header>
//                             <h3>Descripción</h3>
//                             <p>{product.description}</p>
//                             <img src={`${product.product_image[0].url}`} alt="Imagen del producto" className={styles.product_images} />

//                             <h3>Características técnicas</h3>

//                             <div>
//                                 {
//                                     product.attribute.map(atributo =>
//                                         <div key={atributo.id}>
//                                             <p>{atributo.attribute} - {atributo.value}</p>
//                                         </div>
//                                     )
//                                 }
//                             </div>
//                         </main>
//                 }
//                 <footer className={styles.footer}>
//                     <p>Footer</p>
//                 </footer>
//             </div>
//         </>
//     );
// }

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
// export async function getServerSideProps({ params }) {
//     // Se obtienen todos los productos, se filtra el que coincide con el param enviado
//     const products = await axios.get(`http://13.58.149.30:1337/products/`);
//     const data = products.data.filter(product => {
//         return params.id === product.product_id;
//     });

//     return {
//         props: {
//             data: data[0]
//         }
//     }
// }
