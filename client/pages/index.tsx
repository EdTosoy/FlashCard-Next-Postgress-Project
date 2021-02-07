import { ApolloClient, InMemoryCache } from "@apollo/client";
import Category from "components/Category";
import Features from "components/Features";
import Footer from "components/Footer";
import NewsLetter from "components/NewsLetter";
import Testimonials from "components/Testimonials";
import { initializeApollo } from "lib/apolloClient";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Category />
      <Features />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}