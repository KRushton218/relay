import React from 'react';
import clsx from 'clsx';

export const SectionSeparator = ({ fromClass, toClass }) => {
  console.log(fromClass, toClass);
  return (
    <div className="h-32 w-full pointer-events-none -mt-16 z-0 relative">
      <div
        className={clsx(
          'absolute inset-0 bg-gradient-to-b',
          fromClass,
          toClass
        )}
      />
    </div>
  );
};