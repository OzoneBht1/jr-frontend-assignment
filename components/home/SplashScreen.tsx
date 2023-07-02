import Image from "next/image";

export default function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center pt-10 md:px-3 md:w-full md:flex md:flex-row">
      <div className="flex w-1/2 items-center justify-center md:flex-col">
        <div className="flex flex-col gap-6 w-full items-end">
          <Image
            src="/download.png"
            alt="music-play-button-logo"
            width={200}
            height={120}
          />

          <h6
            style={{ flex: 1, flexWrap: "wrap" }}
            className="uppercase font-extrabold text-2xl text-right md:text-4xl lg:text-6xl xl:text-8xl"
          >
            Live Your Day With Music
          </h6>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <Image
          src="/SplashVector.jpg"
          alt="girl-listening-to-music-vector"
          width={450}
          height={450}
        />
      </div>
    </div>
  );
}
