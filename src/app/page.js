import Image from "next/image";
import Link from "next/link";
import { Montserrat } from 'next/font/google'
 
const montserrat = Montserrat({ subsets: ['latin'] })
export default function Home() {
  return (
    <div className={montserrat.className}>

    <main className="flex h-screen flex-col items-center justify-around p-24">
        <div>
        <div class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
          Welcome to Your Giphy</div>
        </div>
        <div className="w-1/2">

      <Image
        src={"https://media.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy.gif"}
        layout={'responsive'}
        height={175}
        width={175}
        alt={`A cute animal!`}
        unoptimized={true}
      />
</div>
      <div>
        
        <ul className="flex gap-16">
          <li>
            <Link href="/ironman-giphy">
              <div className="text-xl text-red-400 font-bold tracking-wide hover:text-red-500 transition  duration-200 ease-in-out hover:animate-pulse">
                Iron Man Giphy</div>
            </Link>
          </li>
          <li>
            <Link href="/search-giphy">
            <div className="text-xl text-red-400 font-bold tracking-wide hover:text-red-500 transition  duration-200 ease-in-out hover:animate-pulse">
                Search Your Giphy</div>
            </Link>
          </li>
        </ul>
      </div>
    </main>
    </div>
  );
}
