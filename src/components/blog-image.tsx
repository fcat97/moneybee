'use client';

import Image, { type ImageLoaderProps, type ImageProps } from 'next/image';

function staticBlogLoader({ src, width }: ImageLoaderProps) {
  return src.replace(/\.jpg$/, `-${width <= 480 ? 480 : 1200}.webp`);
}

/** Prebuilt responsive images work on GitHub Pages without an image API. */
export function BlogImage(props: Omit<ImageProps, 'loader' | 'unoptimized'>) {
  return <Image {...props} loader={staticBlogLoader} unoptimized={false} />;
}
