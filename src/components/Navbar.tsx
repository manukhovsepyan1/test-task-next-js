import Link from "next/link";

const Navbar: React.FC = () => {

  return <nav className="p-4 bg-indigo-500 text-white">
    <Link href="/">Home</Link>
    <Link href="/users" className="ml-4">Users</Link>
  </nav>
};

export default Navbar;
