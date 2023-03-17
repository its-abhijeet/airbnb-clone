import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
const Home = ({ exploreData, cardData }) => {
  return (
    <div className="">
      <Head>
        <title>Abhijeet AirBnB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Main */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Pull some data from a server - API Endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 mlg:grid-cols-3 xl:grid-cols-4">
            {exploreData.record.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-4 p-3 -ml-3 overflow-scroll scrollbar-hide">
            {cardData.record.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Magnificient Outdoors"
          description="Wishlists curated by AirBnB."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
};
// https://www.jsonkeeper.com/b/4G1G
// https://www.jsonkeeper.com/b/VHHT
export async function getStaticProps() {
  const exploreData = await fetch(
    "https://api.jsonbin.io/v3/b/641073b3c0e7653a0587bd79",
    {
      method: "GET",
      headers: {
        "X-Master-Key":
          "$2b$10$vQKqCgcAZz/eJv1Qhha.SeVtjpQd1RUVgHDJZnU/UhEfP7Na9htcu",
      },
    }
  ).then((res) => res.json());
  const cardData = await fetch(
    "https://api.jsonbin.io/v3/b/6410762bace6f33a22eea7ff",
    {
      method: "GET",
      headers: {
        "X-Master-Key":
          "$2b$10$vQKqCgcAZz/eJv1Qhha.SeVtjpQd1RUVgHDJZnU/UhEfP7Na9htcu",
      },
    }
  ).then((res) => res.json());
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
export default Home;
