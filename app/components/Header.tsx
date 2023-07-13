import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-y-0 text-center bg-cream px-1 pb-2">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-row justify-between  items-center text-xs">
          <p>|| Shree Ganeshay Namah ||</p>
          <div className="flex items-center justify-center">
            <Image src="/om.png" width={23} height={23} alt="Om" />
          </div>
          <p>|| Maa Shardaay Namah ||</p>
        </div>

        <div className="flex flex-row items-center ">
          {/* <div className="flex items-center justify-center">
            <Image src="/om.png" width={40} height={40} alt="Om" />
          </div> */}
          <div className="flex items-center justify-center ">
            <Image
              src="/omkarsangeet.png"
              width={225}
              height={225}
              alt="Picture of the author"
              // className=""
            />
          </div>

          <div className="">
            {/* <p className="text-lg text-sky-800 font-mono py-2">
              Akhil Bharatiya Gandharva Mahavidyalaya Mandal Mumbai, <br />
              Mirag (Government Approved)
            </p> */}
            <p className="text-3xl md:text-4xl text-pink-900 font-bold text-left md:text-center">
              Omkar Sangeet Mahavidhyalay
            </p>
          </div>
        </div>

        <div>
          {/* <p className="text-2xl text-pink-900 font-bold">
            Omkar Sangeet Mahavidhyalay
          </p> */}

          <p className="text-lg text-sky-800 font-mono py-2">
            Akhil Bharatiya Gandharva Mahavidyalaya Mandal Mumbai, <br />
            Mirag (Government Approved)
          </p>
        </div>
      </div>
    </header>
  );
}
