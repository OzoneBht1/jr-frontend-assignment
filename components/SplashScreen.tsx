import Image from "next/image";

export default function SplashScreen() {
  return (
    <div className="flex items-center justify-center pt-10 px-3">
      <div className="flex w-1/2 items-center justify-center">
        <div className="flex flex-col gap-6 w-full items-end">
          <Image
            src="/play.png"
            alt="music-play-button-logo"
            width={60}
            height={60}
          />

          <h6
            style={{ flex: 1, flexWrap: "wrap" }}
            className="uppercase font-extrabold text-8xl text-right"
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
