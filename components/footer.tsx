import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-1 bg-orange-500" />
              <span className="text-xl font-semibold">Touch Archive</span>
            </div>
            <p className="text-gray-400">
              254 Chapman Rd, Ste 208 #1924
              <br />
              Newark, Delaware 19702
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">support@toucharchive.com</p>
            <p className="text-gray-400">(555) 123-4567</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/touchscreen-software" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Touchscreen Software
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Touch Archive by Touchstone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
