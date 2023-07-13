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
    <main className=" bg-pink-900 text-cream p-4">
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
          <h1 className="text-3xl my-5">
            Internationally Approved Certificate Courses
          </h1>
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
      </div>
    </main>
  );
}
