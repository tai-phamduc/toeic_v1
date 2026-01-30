import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { vocabularyBooks } from "../data"; // Adjust path if needed

export default async function BookPage({ params }: { params: { bookSlug: string } }) {
  // 1. Await params (required in newer Next.js versions)
  const { bookSlug } = await params;

  // 2. Extract ID from "book1" -> 1
  const bookId = parseInt(bookSlug.replace("book", ""));
  const book = vocabularyBooks.find((b) => b.name.includes(`Book ${bookId}`));

  if (!book) {
    return notFound(); // Shows 404 if book doesn't exist
  }

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8">
      {/* Breadcrumb / Back Button */}
      <Link href="/vocabulary" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Books
      </Link>

      <h1 className="text-3xl font-bold mb-2">{book.name}</h1>
      <p className="text-gray-600 mb-8">{book.word_count} Words</p>

      {/* Unit Grid */}
      <div className="flex flex-col gap-3">
        {book.units.map((unit) => (
          <Link 
            key={unit.id} 
            href={`/vocabulary/${bookSlug}/unit${unit.id}`}
            className="block group"
          >
            <div className="bg-secondary rounded-lg p-4 hover:shadow-md transition-shadow hover:border-primary">
              <h3 className="font-semibold text-lg group-hover:text-primary mt-1">
                <span className="text-xs font-bold text-gray-400 uppercase py-3">Unit {unit.id}</span>
                {unit.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}