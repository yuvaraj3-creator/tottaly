"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

function SearchResults() {
  const q = useSearchParams().get("q")?.toLowerCase() || "";
  const r = products.filter((p) =>
    (p.title + " " + p.brand + " " + p.category).toLowerCase().includes(q)
  );

  return (
    <>
      <p className="muted mt-2">
        {q ? `Results for “${q}”` : "Type a product in the search box."}
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {r.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
      {q && !r.length && (
        <div className="card p-10 mt-8 text-center">No matching demo products yet.</div>
      )}
    </>
  );
}

export default function Search() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-black">Search results</h1>
      <Suspense fallback={<div className="card p-10 mt-8 text-center">Loading search results...</div>}>
        <SearchResults />
      </Suspense>
    </main>
  );
}
