import React from "react";
import { useRouter } from "next/router";

import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import { format, parseISO } from "date-fns";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(parseISO(startDate), "dd MMMM yy");
  const formattedEndDate = format(parseISO(endDate), "dd MMMM yy");
  const range = `${formattedStartDate}-${formattedEndDate}`;
  // console.log(router.query);
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sx">
            300+ stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6 ">
            {" "}
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div>
            {searchResults.record.map((item) => (
              <InfoCard
                key={item.total}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
          {searchResults.record.map((item) => (
            <InfoCard
              key={item.star}
              img={item.img}
              location={item.location}
              title={item.title}
              description={item.description}
              star={item.star}
              price={item.price}
              total={item.total}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Search;
export async function getServerSideProps() {
  const searchResults = await fetch(
    "https://api.jsonbin.io/v3/b/6412a34fc0e7653a0588afba",
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
      searchResults,
    },
  };
}
