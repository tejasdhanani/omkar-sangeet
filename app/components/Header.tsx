import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col gap-y-1 text-center pb-4">
      <div className="flex flex-row justify-between text-xs">
        <p>|| Shree Ganeshay Namah ||</p>
        <p>|| Maa Shardaay Namah ||</p>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <Image src="/om.png" width={60} height={60} alt="Om" />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/omkarsangeet.png"
            width={225}
            height={225}
            alt="Picture of the author"
          />
        </div>
      </div>

      <div>
        <div className="text-4xl text-pink-900 font-bold">
          Omkar Sangeet
          <br />
          Mahavidhyalay
        </div>

        <div className="text-xl text-sky-800 font-mono py-2">
          Akhil Bharatiya Gandharva <br />
          Mahavidyalaya Mandal Mumbai, <br />
          Mirag (Government Approved)
        </div>
      </div>
    </header>
  );
}
