import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <Image
        src={"https://media.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy.gif"}
        // layout={'responsive'}
        height={175}
        width={175}
        alt={`A cute animal!`}
        unoptimized={true}
      />

      <div>
        <h1>Welcome to Giphy App</h1>
        <p>Please choose an option:</p>
        <ul>
          <li>
            <Link href="/ironman-giphy">
              <div>Iron Man Giphy</div>
            </Link>
          </li>
          <li>
            <Link href="/search-giphy">
              <div>Search Your Giphy</div>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
