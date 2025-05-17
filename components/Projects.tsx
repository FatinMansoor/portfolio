export default function Projects() {
  return (
    <section id="projects" className="text-center py-16 px-4">
      <h2 className="text-2xl font-semibold mb-8">Projects</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Harmoniq 🎵</h3>
          <p className="text-sm text-muted-foreground mb-1">
            A music-sharing web app using Spotify & YouTube APIs.
          </p>
          <a
            href="https://harmoniqmusic.vercel.app/youtube"
            target="_blank"
            className="text-blue-500 underline text-sm"
          >
            Visit Harmoniq ↗
          </a>
        </div>

        <div>
          <h3 className="text-lg font-medium">Old GitHub Portfolio</h3>
          <p className="text-sm text-muted-foreground mb-1">
            My original static site hosted on GitHub Pages.
          </p>
          <a
            href="https://fatinmansoor.github.io"
            target="_blank"
            className="text-blue-500 underline text-sm"
          >
            Visit GitHub Pages Site ↗
          </a>
        </div>
      </div>
    </section>
  )
}
