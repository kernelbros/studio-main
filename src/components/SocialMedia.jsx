import Link from "next/link";
import clsx from "clsx";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

export const SocialMediaProfiles = [
  {
    title: "YouTube",
    href: "https://www.youtube.com/KernnelBros",
    icon: BsYoutube,
  },
  {
    title: "GitHub",
    href: "https://github.com/KernnelBros",
    icon: BsGithub,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/KernnelBros",
    icon: BsFacebook,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/KernelBros/",
    icon: BsLinkedin,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/KernnelBros",
    icon: BsTwitter,
  },
];

const SocialMedia = ({ className = "", invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-6", // Más compacto y responsive
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map(({ title, href, icon: Icon }) => (
        <li key={title}>
          <Link
            href={href}
            aria-label={`Visit ${title}`}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "transition-colors duration-200",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <Icon className="h-6 w-6" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
