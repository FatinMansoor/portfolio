const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Example Project */}
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold">My Portfolio Website</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Built with Next.js, Tailwind, and shadcn/ui.
          </p>
          <a
            href="https://fatinmansoor.github.io"
            className="text-blue-500 underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site ↗
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
