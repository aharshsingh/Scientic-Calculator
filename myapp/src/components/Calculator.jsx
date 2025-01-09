import React from 'react';
import Display from './Display';
import Simpleops from './Simpleops';
import Complexops from './Complexops';

export default function Calculator() {
  return (
    <div className="flex justify-center py-10">
      <div className="h-[509px] w-full sm:w-[400px] md:w-[600px] lg:w-[888px] border border-gray-600 rounded-lg mx-4 sm:mx-8">
        <div>
            <Display />
        </div>
        <div className="flex">
          <Complexops />
          <Simpleops />
        </div>
      </div>
    </div>
  );
}
