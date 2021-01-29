import React from "react";
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/products.module.scss';
import Product_image from "../../components/product_image";
import environmentURL from "../../data/environment";

export default function Products({ data }) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Portafolio de productos EP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<<<<<<< HEAD
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
=======
      <div className={styles.display}>
        <div className={styles.header_product}>
          <Link href="/">
            <img src="/logo.png" alt="Logo Siemens" />
          </Link>
          <span onClick={handleBack}>Regresar</span>
        </div>

        <div className={styles.content_container}>
          <header className={styles.header}>
            <h1>Especificaciones de producto</h1>
            <div className={`${styles.product_image} animate__animated animate__fadeIn`}>
              <Product_image url={data.product_image[0].url} />
>>>>>>> 6962892c89610011a1ccfb92660cf3733acd1be9
            </div>
          </header>

          <main className={styles.main}>
            <article className={styles.article}>
              <h1>{data.name}</h1>

              <section className={styles.downloads}>
                <button>Info</button>
                <button>Descargas</button>
                <button>FAQ</button>
              </section>

              <section className={styles.description}>
                <h2>Descripción</h2>
                <p>{data.description}</p>
              </section>

              <section className={styles.specs}>
                <h2>Especificaciones técnicas</h2>
                <ul>
                  {
                    data.attribute.map((atributo, id) => {
                      return (
                        <li key={id}><span className={styles.att}>{atributo.attribute}: </span> <span>{atributo.value}</span></li>
                      );
                    })
                  }
                </ul>
              </section>

              <section className={styles.content_distributors}>
                <p>
                  Adquiere tus productos con nuestros
                  <a href="https://new.siemens.com/mx/es/productos/automatizacion/oficinas-ventas.html" target="_blank"> distribuidores oficiales Siemens.</a>
                </p>
              </section>

            </article>
          </main>
        </div>

      </div>

    </>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const { data } = await axios.get(`${environmentURL}/products`);

    // Get the paths we want to pre-render based on posts
    const paths = data.map(product => `/products/${product.product_id}`);

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    // Se obtienen todos los productos, se filtra el que coincide con el param enviado
<<<<<<< HEAD
    const products = await axios.get(`http://localhost:1337/products/`);
=======
    const products = await axios.get(`${environmentURL}/products/`);
>>>>>>> 6962892c89610011a1ccfb92660cf3733acd1be9
    const data = products.data.filter(product => {
        return params.id === product.product_id;
    });

    return {
        props: {
            data: data[0]
        }
    }
}

// This gets called on every request
// export async function getServerSideProps({ params }) {
//   // Se obtienen todos los productos, se filtra el que coincide con el param enviado
//   const products = await axios.get(`${environmentURL}/products/`);
//   const data = products.data.filter(product => {
//     return params.id === product.product_id;
//   });

//   return {
//     props: {
//       data: data[0]
//     }
//   }
// }
