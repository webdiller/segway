import Link from "next/link";

export default function UiLink({
  download = "false",
  href = "#",
  target = "_self",
  classNameLink,
  icon,
  innerText = "Custom link",
} = {}) {
  return (
    <Link href={href}>
      <a target={target} download={download} className={`ui-btn ${classNameLink}`}>
        <span>{innerText} {icon}</span>
      </a>
    </Link>
  );
}
