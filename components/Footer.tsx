export default function Footer() {
  return (
    <footer className="text-center py-8 text-sm text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} Fatin Mansoor</p>
      <div className="mt-2 flex justify-center gap-4">
        <a href="https://github.com/FatinMansoor" className="hover:underline" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/your-link" className="hover:underline" target="_blank">LinkedIn</a>
        <a href="mailto:fatin@example.com" className="hover:underline">Email</a>
      </div>
    </footer>
  )
}
