"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumb = () => {
  const pathname = usePathname();

  // Split the pathname into parts
  const paths = pathname.split("/").filter((path) => path !== ""); // Removing empty parts

  // If we're on the homepage, return null to hide breadcrumbs
  if (paths.length === 0) return null;

  return (
    <div className=" text-sm text-gray-300">
      <Link href="/" className="hover:text-[#FF9F0D]">
        Home
      </Link>
      {paths.map((path, index) => {
        const pathName = path.charAt(0).toUpperCase() + path.slice(1); // Capitalize each part

        // Create the current path (from root to the current path segment)
        const currentPath = `/${paths.slice(0, index + 1).join("/")}`;

        return (
          <span key={index}>
            {" > "}
            <Link href={currentPath} className="hover:text-[#FF9F0D]">
              {pathName}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
