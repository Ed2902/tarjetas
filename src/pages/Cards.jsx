import React from "react";
import { useParams } from "react-router-dom";
import { getCards, getCardBySlug } from "../services/cards.service";
import BusinessCard from "../components/BusinessCard/BusinessCard";
import CardList from "../components/CardList";

export default function CardsPage() {
  const { slug } = useParams();
  if (slug) {
    const card = getCardBySlug(slug);
    return <BusinessCard card={card} />;
  }
  const cards = getCards();
  return (
    <main className="min-h-dvh py-8">
      <div className="mx-auto max-w-[420px] px-4">
        <CardList cards={cards} />
      </div>
    </main>
  );
}
