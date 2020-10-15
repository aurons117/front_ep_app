import axios from 'axios';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home({ categories }) {
  return (
    <>
      <Head>
        <title>Portafolio de productos EP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.nav}>
        <img src="/logo.png" alt="Logo Siemens" />
      </div>
      <div className={styles.container}>

        <main className={styles.main}>
          <header className={styles.header}>
            <h1>Portafolio de productos EP</h1>
            <h2>Categorías</h2>
          </header>

          {
            categories?.map((category, id) => (
              <div key={id} className={styles.category_container}>
                <h3>{category.name}</h3>
                <div className={styles.category_description}>
                  <img src={`${category.category_image.url}`} alt='Imagen de categoría' className={styles.categories_images} />
                  <div className={styles.category_links}>
                    {
                      category.subcategories.map((subcategory, id) => (
                        <Link href='/subcategories/[id]' as={`/subcategories/${subcategory.subcategory_id}`} key={id}>
                          <a>{subcategory.name}</a>
                        </Link>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }

        </main>

        <footer className={styles.footer}>
          <p>Footer de la aplicación</p>
        </footer>
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
