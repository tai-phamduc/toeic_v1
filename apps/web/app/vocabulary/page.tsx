"use client";

import React from 'react';
import Link from 'next/link'; // 1. Import Link component
import { vocabularyBooks } from './data';

export default function VocabularyPage() {
  return (
    <div className='container mx-auto max-w-screen-xl px-4 py-8'>
      
      {/* 2. ADDED: Back to Home Button */}
      <div className="mb-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 hover:text-primary transition-colors font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-primary mb-8">Vocabulary</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vocabularyBooks.map((book, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <div className="w-full">
                <img 
                    src={book.image_link} 
                    alt={book.name} 
                    className="w-full h-full object-cover" 
                />
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">{book.name}</h2>

                <div className="flex gap-2 items-center mb-4">
                  <img src="https://res.cloudinary.com/dalaaegob/image/upload/v1769774878/dictionary-icon_qxfgms.png" alt="" />
                  <p className="text-gray-600">Words: {book.word_count}</p>
                </div>
                
                {/* 3. UPDATED: Start Learning Button 
                   - Changed from <button> to <Link> for navigation.
                   - Added 'block' and 'text-center' to maintain button appearance.
                   - href needs to match your folder structure (e.g., /learn/1 or /book/1).
                */}
                <Link 
                  href={`/vocabulary/book${index+1}`} 
                  className="mt-auto block w-full bg-primary text-white font-bold py-2 px-4 rounded-2xl hover:opacity-90 transition-opacity text-center"
                >
                    START LEARNING
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}