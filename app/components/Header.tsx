import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-y-0 text-center bg-cream px-1 pb-2">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-row justify-between  items-center text-xs">
          <p>|| Shree Ganeshay Namah ||</p>
          <div className="flex items-center justify-center">
            <Image src="/logos/om.png" width={23} height={23} alt="Om" />
          </div>
          <p>|| Maa Shardaay Namah ||</p>
        </div>

        <a className="flex flex-row items-center" href="/">
          <div className="flex items-center justify-center ">
            <Image
              src="/logos/omkarsangeet.png"
              width={225}
              height={225}
              alt="Omkar Sangeet Mahavidhyalay Ahmedabad logo"
            />
          </div>

          <div>
            <p className="text-3xl md:text-4xl text-pink-900 font-bold text-left md:text-center">
              Omkar Sangeet Mahavidhyalay
            </p>
          </div>
        </a>

        <div>
          <p className="text-lg  font-bold text-sky-900">
            Akhil Bharatiya Gandharva <br />
            Mahavidyalaya Mandal Mumbai, <br />
            Miraj (Government Approved)
          </p>
        </div>

        <div className="flex justify-center text-cream mt-3 mb-2">
          <div className="flex items-center justify-between w-2/3 sm:w-1/3 h-11 bg-pink-800 rounded-full max-w-xs">
            <a
              href="tel:+91-9428124511"
              target="_blank"
              className="flex h-full"
            >
              <Image
                src="/socialmedia/callus.png"
                width={45}
                height={20}
                alt="phone omkar sangeet mahavidhyalay"
              />
            </a>
            <a
              href="tel:+91-9428124511"
              className=" text-xl h-full flex items-center justify-center "
            >
              Contact Us
            </a>
            <a
              href="https://wa.me/919725920213?text=I'm%20interested%20in%20joining%20for%20Vocal%20Classes."
              target="_blank"
              className=" flex h-full"
            >
              <Image
                className="m-1 opacity-90 brightness-90"
                src="/socialmedia/whatsapp.png"
                width={35}
                height={20}
                alt="whatsapp omkar sangeet mahavidhyalay"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
