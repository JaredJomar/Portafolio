export default function Footer() {
  return (
    <footer className="bg-card-background py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-text-secondary">
          © {new Date().getFullYear()} JJJ. All projects under MIT License.
        </p>
      </div>
    </footer>
  )
}

