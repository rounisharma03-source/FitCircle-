import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  fallbackSubtitle?: string;
  className?: string;
  containerClassName?: string;
}

export function ResilientImage({
  src,
  alt,
  fallbackTitle,
  fallbackSubtitle,
  className = 'w-full h-full object-cover',
  containerClassName = '',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F7FAF8] via-[#E8F3F1] to-[#EDF5E9] border border-[#123047]/10 p-6 text-center ${containerClassName}`}
      >
        <div className="w-11 h-11 rounded-full bg-[#0B8F86]/10 text-[#0B8F86] flex items-center justify-center mb-3">
          <ImageOff className="w-5 h-5" aria-hidden="true" />
        </div>
        <p className="font-display font-semibold text-sm text-[#123047]">{fallbackTitle}</p>
        {fallbackSubtitle && (
          <p className="text-xs text-[#4A6072] mt-1 max-w-xs">{fallbackSubtitle}</p>
        )}
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onError={() => setHasError(true)}
        className={className}
      />
    </div>
  );
}
