export default function Home() {
  const courses = [
    "Vocal",
    "Guitar",
    "Tabla",
    "Guitar",
    "Keyboard",
    "Sugam Sangeet",
    "Kathak",
    "Western",
  ];

  return (
    <main>
      <p className="text-xl">
        Welcome to Omkar Sangeet Maha-Vidhyalay located in{" "}
        <strong>Ahmedabad</strong>, a special place where you can discover the
        wonderful world of Indian classical music. Our friendly teachers will
        help you learn how to sing, play the harmonium, tabla, guitar and many
        more instruments. Whether you are just starting out or have some
        experience, our classes are designed to make learning easy and fun. Come
        join us where we explore the magical melodies and rhythms of Indian
        classical music together!
      </p>

      <section className="py-10">
        <h1 className="text-3xl my-5">
          International Approved Certificate Courses
        </h1>
        <div className="flex justify-center items-center flex-row flex-wrap">
          {courses.map((course, i) => (
            <div
              key={i}
              className="p-2 flex items-center justify-center rounded text-white text-xl bg-pink-900 m-2 w-40 h-18 min-[450px]:w-44"
            >
              {course}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
