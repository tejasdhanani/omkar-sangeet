import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-4 text-base bg-cream text-pink-950">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Follow Us</h1>

          <div className="flex mt-1 gap-2">
            <a href="https://www.instagram.com/omkarsangeet/" target="_blank">
              <Image
                src="/instagram.png"
                width={40}
                height={40}
                alt="instagram"
              />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100094631352523"
              target="_blank"
            >
              <Image
                src="/facebook.png"
                width={40}
                height={40}
                alt="instagram"
              />
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-semibold">Contact</h1>
          <strong>Hours: </strong>Mon-Sat: 5-9pm <br />
          Shree Dhananjay P. Acharya
          <br />
          F-3, Panchvilla Tower, Nr. B.D.Rao Hall
          <br />
          Bhuyangdev to Memnagar Rd.,
          <br />
          Memnager - Ahmedabad- 52.
          <br />
          <a href="tel:+91-9428124511">M. 94281 24511</a>
          <br />
          <a href="tel:+91-9725920213">M. 97259 20213</a>
          <br />
          omkarsangeet1071@gmail.com
        </div>
      </div>
    </footer>
  );
}
