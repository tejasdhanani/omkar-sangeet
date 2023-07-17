import Link from "next/link";

export default function Gallery() {
  const images = [
    "Dhananjay Acharya Omkar Sangeet.jpeg",
    "Ongoing Class 1 Omkar Sangeet.jpeg",
    "Ongoing Class 2 Omkar Sangeet.jpeg",
    "Ongoing Class 3 Omkar Sangeet.jpeg",
    "Ongoing Class 4 Omkar Sangeet.jpeg",
  ];

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
                src={`gallery/${image}`}
                alt={image.split(".")[0]}
                className="max-w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
