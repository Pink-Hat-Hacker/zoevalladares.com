import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faSpotify, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <main className="p-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Zoë Y. Valladares</h1>
        <FontAwesomeIcon icon={faGithub} style={{color: "#f514b6",}} />
        <FontAwesomeIcon icon={faLinkedin} style={{color: "#f514b6",}} />
        <FontAwesomeIcon icon={faSpotify} style={{color: "#f514b6",}} />
        <FontAwesomeIcon icon={faInstagram} style={{color: "#f514b6",}} />
      </div>
      
      <p className="mb-6 text-lg">
        Welcome! Check out my <Link href="/portfolio" className="text-blue-600 underline">projects</Link>.
      </p>
    </main>
  );
}