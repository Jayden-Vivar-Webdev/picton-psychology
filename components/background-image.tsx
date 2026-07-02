import Image from "next/image";

export default function BackgroundImage({
  imagesrc,
  imagealt,
}: {
  imagesrc: string;
  imagealt: string;
}) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Image
        src={imagesrc}
        alt={imagealt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      {/* Soft brand wash: keeps foliage visible but text fully readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
    </div>
  );
}
