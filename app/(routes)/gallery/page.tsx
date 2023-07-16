import Link from "next/link";

export default function Gallery() {
  const images = ["4.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "5.jpeg"];

  return (
    <main className=" bg-pink-900 text-cream py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="underline text-lg">
          Go back to Home
        </Link>

        <div className="pt-4">
          {images.map((image, index) => (
            <div className="my-2" key={index}>
              <img
                src={image}
                alt="Image description"
                className="max-w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
