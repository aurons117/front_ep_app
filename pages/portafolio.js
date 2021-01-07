import React from "react";
import axios from 'axios';
import Head from 'next/head';
import styles from '../styles/Portafolio.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ categories }) {
  console.log(categories);
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

      <div className={styles.portafolio_container}>

        <div className={styles.portafolio_overlay}>

          <div className={styles.content_lay}>

            <header className={styles.header}>
              <Link href="/">
                <img src="/logo.png" alt="Logo Siemens" />
              </Link>
              {/* <input placeholder="Búsqueda" /> */}
            </header>

            <main className={styles.main}>
              <section className={styles.normative}>
                <h1>Normativa</h1>
                <form id="formClassification">
                  <label htmlFor="normative_IEC" className={styles.b_contain}>
                    <span>IEC</span>
                    <input type="checkbox" id="normative_IEC" name="normative_IEC" value="iec" />
                    <div className={styles.b_input}></div>
                  </label>
                  <label htmlFor="normative_UL" className={styles.b_contain}>
                    <span>UL</span>
                    <input type="checkbox" id="normative_UL" name="normative_UL" value="ul" />
                    <div className={styles.b_input}></div>
                  </label>
                  <label htmlFor="normative_NOM" className={styles.b_contain}>
                    <span>NOM</span>
                    <input type="checkbox" id="normative_NOM" name="normative_NOM" value="nom" />
                    <div className={styles.b_input}></div>
                  </label>
                </form>
              </section>

              <section className={styles.application_products}>
                <h1>Área de aplicación</h1>
                <input type="submit" id="option1" name="option1" form="formClassification" value="option" />
                <input type="submit" id="option2" name="option2" form="formClassification" value="option" />
                <input type="submit" id="option3" name="option3" form="formClassification" value="option" />
                <input type="submit" id="option4" name="option4" form="formClassification" value="option" />
                <input type="submit" id="option12" name="option12" form="formClassification" value="option" />
              </section>

              <section className={styles.types_products}>
                <h1>Tipo de producto</h1>
                <input type="submit" id="option5" name="option5" form="formClassification" value="option" />
                <input type="submit" id="option6" name="option6" form="formClassification" value="option" />
                <input type="submit" id="option7" name="option7" form="formClassification" value="option" />
                <input type="submit" id="option8" name="option8" form="formClassification" value="option" />
              </section>
            </main>

          </div>

          <div className={styles.aside}>
            <div className={styles.aside_free}>
              <span onClick={handleBack}>Regresar</span>
            </div>
            <div className={styles.aside_image}>
              <img src="/safety.png" alt="Img de producto" />
            </div>
          </div>

        </div>

      </div>

    </>
  );
}

// export async function getStaticProps() {
//   const { data } = await axios.get(`http://18.191.231.159:1337/categories/`);

//   const categories = data.map(category => {
//     return {
//       name: category.name,
//       id: category.category_id,
//       category_image: category.category_image,
//       subcategories: category.subcategories,
//     };
//   });

//   return {
//     props: {
//       categories
//     }
//   }
// }

// This gets called on every request
// Solo durante el desarrollo y carga de base de datos por parte de los ingenieros de producto
export async function getServerSideProps() {
  const { data } = await axios.get(`http://localhost:1337/categories/`);

  const categories = data.map(category => {
    return {
      name: category.name,
      id: category.category_id,
      category_image: category.category_image,
      subcategories: category.subcategories,
    };
  });

  return {
    props: {
      categories
    }
  }
}
