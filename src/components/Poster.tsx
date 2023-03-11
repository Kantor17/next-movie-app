import posterPlaceholder from "../../public/poster-placeholder.jpg";

export const Poster = ({ src, title }: { src: string; title: string }) => {
  return (
    <img
      height={350}
      src={src !== "N/A" ? src : posterPlaceholder.src}
      alt={`${title} poster`}
    />
  );
};
