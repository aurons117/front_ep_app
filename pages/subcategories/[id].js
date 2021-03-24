import React from "react";
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/subcategories.module.scss';
import environmentURL from "../../data/environment";

export default function Subcategories({ data }) {
	const router = useRouter();

	const handleBack = () => {
		router.back();
	};

	const order_objects = (a, b) => {
		if (a.name > b.name) {
			return 1;
		}
		if (a.name < b.name) {
			return -1;
		}
		// a must be equal to b
		return 0;
	};

	return (
		<>
			<Head>
				<title>{`Siemens EP - subfamilia de producto`}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.subcategories_container}>
				<div className={styles.subcategories_overlay}>
					<div className={styles.subcategories_content}>

						<header className={styles.header}>
							<Link href="/">
								<img src="/logo.png" alt="Logo Siemens" />
							</Link>
							<span onClick={handleBack}>Regresar</span>
							{/* <input placeholder="Búsqueda" /> */}
						</header>

						<main className={styles.main}>
							<h1>{data.name}</h1>
							<section className={styles.subcategories_subcategories}>
								{
									data.products.sort(order_objects).map((product, id) => {
										return (
											<div className={`${styles.subcategories_subcategory} animate__animated animate__fadeIn`} key={id} >
												<h2>{product.name}</h2>
												<div alt={`Imagen de ${product.name}`} title={product.description}>
													<img src={product.product_image[0].url} />
												</div>
												<Link href='/products/[id]' as={`/products/${product.product_id}`}>
													<a>Ver detalle</a>
												</Link>
											</div>
										);
									})
								}

							</section>
						</main>

					</div>

					<div className={styles.subcategories_aside}>
					</div>

				</div>
			</div>

		</>
	);
}

// This function gets called at build time
export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const { data } = await axios.get(`${environmentURL}/subcategories`);

	// Get the paths we want to pre-render based on posts
	const paths = data.map(subcategory => `/subcategories/${subcategory.subcategory_id}`);

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	// Se obtienen todos los productos, se filtra el que coincide con el param enviado
	const subcategories = await axios.get(`${environmentURL}/subcategories`);
	const data = subcategories.data.filter(subcategory => {
		return params.id === subcategory.subcategory_id;
	});

	return {
		props: {
			data: data[0]
		}
	}
}

// This gets called on every request
// export async function getServerSideProps({ params }) {
// 	// Se obtienen todos los productos, se filtra el que coincide con el param enviado
// 	const subcategories = await axios.get(`${environmentURL}/subcategories/`);
// 	const data = subcategories.data.filter(subcategory => {
// 		return params.id === subcategory.subcategory_id;
// 	});

// 	return {
// 		props: {
// 			data: data[0]
// 		}
// 	}
// }
