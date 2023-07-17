import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-4 text-base bg-cream text-pink-950">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Follow Us</h1>

          <div className="flex mt-1 gap-2">
            <a
              href="https://www.instagram.com/omkarsangeet/"
              target="_blank"
              rel="nofollow"
            >
              <Image
                src="/socialmedia/instagram.png"
                width={40}
                height={40}
                alt="instagram link of omkar sangeet"
              />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100094631352523"
              target="_blank"
              rel="nofollow"
            >
              <Image
                src="/socialmedia/facebook.png"
                width={40}
                height={40}
                alt="facebook link of omkar sangeet"
              />
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-semibold">Contact</h1>
          <strong>Hours: </strong>Mon-Sat: 5-9pm <br />
          <span className="underline">Shree Dhananjay P. Acharya</span>
          <br />
          F-3 Panchvilla Tower <br />
          Near B.D.Rao Hall
          <br />
          Bhuyangdev to Memnagar Road
          <br />
          Ahmedabad - 380052
          <br />
          {"Phone: "}
          <a href="tel:+91-9428124511" className="text-blue-800">
            94281 24511
          </a>
          &nbsp;/ &nbsp;
          <a href="tel:+91-9725920213" className="text-blue-800">
            97259 20213
          </a>
          <br />
          Email:&nbsp;
          <a
            href="mailto: omkarsangeet1071@gmail.com"
            className="text-blue-800"
          >
            omkarsangeet1071@gmail.com
          </a>
        </div>
      </div>

      <div className="flex justify-center mt-3">
        <iframe
          width="800"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCEQAP30lV3ZIObM1EJ7ibpun4tn2tg8xI&q=place_id:ChIJjayz9u2FXjkRITu2YbinYhk"
        ></iframe>
      </div>

      <div className="flex justify-center mt-6 mb-2">
        Developed with &#9829; by&nbsp;
        <a
          href="https://linkedin.com/in/tejasdhanani"
          target="_blank"
          className="underline"
        >
          Tejas
        </a>
      </div>
    </footer>
  );
}
