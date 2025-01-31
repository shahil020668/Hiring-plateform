'use client';

import { Image } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";

export function ImageGallery({ images }) {
  return (
    <h1>you</h1>
    // <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    //   {images.map((image, index) => (
    //     <Dialog key={index}>
    //       <DialogTrigger asChild>
    //         <div className="relative aspect-square cursor-pointer hover:opacity-90 transition-opacity">
    //           <Image
    //             src= " https://lucide.dev/icons/image"
    //             alt={image.alt}
    //             fill
    //             className="object-cover rounded-lg"
    //           />
    //         </div>
    //       </DialogTrigger>
    //       <DialogContent className="max-w-3xl">
    //         <div className="relative aspect-video">
    //           <Image
    //             src={image.url}
    //             alt={image.alt}
    //             fill
    //             className="object-contain"
    //           />
    //         </div>
    //       </DialogContent>
    //     </Dialog>
    //   ))}
    // </div>
  );
}
