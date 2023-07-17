export default function Home() {
  const courses = [
    "Vocal",
    "Harmonium",
    "Tabla",
    "Guitar",
    "Keyboard",
    "Sugam",
    "Kathak",
    "Western",
  ];

  return (
    <main className=" bg-pink-900 text-cream py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-justify">
          Welcome to Omkar Sangeet Maha-Vidhyalay located in{" "}
          <strong>Ahmedabad</strong>, a special place where you can discover the
          wonderful world of Indian classical music. <br />
          <br />
          Our Guruji{" "}
          <strong className="bg-cream text-pink-900 px-1 rounded">
            Shree Acharya Dhananjay P.
          </strong>{" "}
          with other teachers will help you learn how to sing, play the
          harmonium, tabla, guitar and many more instruments. Whether you are
          just starting out or have some experience, our classes are designed to
          make learning easy and fun. Come join us where we explore the magical
          melodies and rhythms of Indian classical music together!
        </p>

        <section className="py-5">
          <div className="text-3xl my-3">
            Internationally Approved Certificate Courses
          </div>
          <ul className="list-inside list-disc mb-3">
            <li>General Classes: 2 x 45 mins Weekly Classes</li>
            <li>Personal Classes Available On Request</li>
          </ul>
          <div className="flex justify-center items-center flex-row flex-wrap">
            {courses.map((course, i) => (
              <div
                key={i}
                className="italic p-1 flex items-center justify-center rounded text-cream text-xl  border-2 border-cream m-2 w-40 h-18 min-[450px]:w-44"
              >
                {course}
              </div>
            ))}
          </div>
        </section>

        <section className="flex justify-center items-center">
          <a className="relative md:w-4/5" href="/gallery">
            <img
              src="/gallery/Ongoing Class 1 Omkar Sangeet.jpeg"
              alt="Background"
              className="w-full filter brightness-50"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-4xl font-bold text-white">Gallery</h1>
            </div>
          </a>
        </section>
      </div>
    </main>
  );
}
