export default function Home() {
  const courses = {
    Tabla: `Fri: 4:45pm to 5:30pm`,
    Guitar: "Tue: 4:45pm to 5:30pm",
    Vocal: "Wed: 5:45pm to 6:30pm",
    Harmonium: "Mon: 4:45pm to 5:30pm",
  } as any;

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
        <h1 className="text-3xl my-5">Courses</h1>
        <div className="flex md:flex-row md:flex-wrap justify-center items-center flex-col ">
          {Object.keys(courses).map((course): any => (
            <div className="text-white bg-pink-900 w-full md:max-w-md m-2 text-2xl h-16 flex items-center justify-center rounded">
              <div className="p-2 text-center">{course}</div>
              {/* <div className="bg-pink-800 p-2">{courses[course]}</div> */}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
