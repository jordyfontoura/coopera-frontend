"use client";
export function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]

  if (src.includes("cloudinary.com")) {
    return src.replace("upload/", `upload/${params.join(',')}/`)
  }

  return src
}