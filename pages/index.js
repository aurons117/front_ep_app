import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import FacebookLogo from "../public/facebook.svg";
import WebLogo from "../public/sphere.svg";
import MailLogo from "../public/envelop.svg";


export default function Home() {
  return (
    <>
      <Head>
        <title>Portafolio de productos EP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.home_container}>

        <div className={styles.home_overlay}>

          <nav className={styles.nav}>
            <Link href="/">
              <img src="/logo.png" alt="Logo Siemens" />
            </Link>
            <div>
              <Link href="/portafolio">
                <a>Portafolio</a>
              </Link>
              <Link href="/contacto">
                <a>Contacto</a>
              </Link>
            </div>
          </nav>


          <main className={styles.main}>
            <h1>EP-HUB <span>Mx</span></h1>
          </main>


          <footer className={styles.footer}>
            <div>
              <a href="https://www.facebook.com/groups/ElectricalProductsMX/?ref=share" target="_blank">
                <FacebookLogo />
              </a>
              <span />
              <a href="http://www.siemens.com/electrical-products-mx" target="_blank">
                <WebLogo />
              </a>
              <span />
              <a href="https://new.siemens.com/mx/es/productos/automatizacion/oficinas-ventas.html" target="_blank">
                Distribuidores
            </a>
              <span />
              <a href="mailto:electricalproducts.mx@siemens.com">
                <MailLogo /> &nbsp;
                electricalproducts.mx@siemens.com
            </a>
            </div>
            <p>Todos los derechos reservados. Siemens México 2020</p>
          </footer>

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
// export async function getServerSideProps() {
//   const { data } = await axios.get(`http://13.58.149.30:1337/categories/`);

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
