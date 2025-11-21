import styles from "@/components/ui/Button.module.css";
import { useRouter } from "next/navigation";

export default function Button({ label, variant = "primary", ...props }) {
  const className =
    variant === "secondary" ? styles.secondaryButton : styles.primaryButton;

  return (
    <button className={className} {...props}>
      {label}
    </button>
  );
}
