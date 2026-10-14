import Image from "next/image";
import { PawPrint } from "lucide-react";

/**
 * A breed photo, or a quiet placeholder when we have no freely licensed photo of that breed.
 * A missing photo is better than one of the wrong breed. Parent must be `relative` with a size.
 */
export default function BreedImage({ src, alt, sizes, priority = false, className = "" }: { src: string | null | undefined; alt: string; sizes: string; priority?: boolean; className?: string }) {
  if (src) return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />;
  return (
    <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface text-label-3" role="img" aria-label={`No photo of the ${alt.replace(/ (dog|cat)$/, "")} yet`}>
      <PawPrint size={28} strokeWidth={1.5} aria-hidden />
      <span className="text-[13px]">No photo yet</span>
    </span>
  );
}
