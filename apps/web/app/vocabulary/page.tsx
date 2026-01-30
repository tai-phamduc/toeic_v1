"use client"; 

import React from 'react';
import { vocabularyBooks } from './data';

export default function VocabularyPage() {
  return (
    // 'container' in Tailwind behaves differently than Bootstrap. 
    // We add 'max-w-screen-xl' to constrain width on large screens.
    <div className='container mx-auto max-w-screen-xl px-4 py-8'>
      
      <h1 className="text-3xl font-bold text-primary mb-8">Vocabulary</h1>
      
      {/* GRID SYSTEM:
         - grid-cols-1: 1 column on mobile
         - md:grid-cols-2: 2 columns on tablets
         - lg:grid-cols-3: 3 columns on desktop (Replaces col-md-4)
         - gap-6: Adds space between grid items (Replaces margins like m-2)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vocabularyBooks.map((book, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Image Container with fixed height for consistency */}
            <div className="w-full">
                <img 
                    src={book.image_link} 
                    alt={book.name} 
                    className="w-full h-full object-cover" 
                />
            </div>
            
            {/* Card Body */}
            <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">{book.name}</h2>

                <div className="flex gap-2 items-center mb-4">
                  <img src="https://res.cloudinary.com/dalaaegob/image/upload/v1769774878/dictionary-icon_qxfgms.png" alt="" />
                  <p className="text-gray-600">Words: {book.word_count}</p>
                </div>
                
                {/* 'mt-auto' pushes the button to the bottom if titles vary in height */}
                <button className="mt-auto w-full bg-primary text-white font-bold py-2 px-4 rounded-2xl hover:opacity-90 transition-opacity cursor-pointer">
                    START LEARNING
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}