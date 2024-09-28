import Image from "next/image";
import nextImage from "../../assets/nextjs.png";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Image Optimizations Page</h1>
      <h2 className="text-2xl text-center">Regular Image Tag</h2>
      <img
        width={500}
        height={500}
        src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
        alt="next-image"
        className="mx-auto"
      />
      <h2 className="text-2xl text-center">NextJS Image Tag</h2>
      <Image
        src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
        alt="next-image"
        width={500}
        height={500}
        className="mx-auto"
      ></Image>
      <h2 className="text-2xl text-center">Local Image </h2>
      <Image
        src={nextImage}
        alt="next-image"
        width={500}
        height={500}
        className="mx-auto"
      ></Image>
    </div>
  );
};

export default GalleryPage;
