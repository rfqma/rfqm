import { Social } from "@/types";
import Link from "next/link";
import CustomIconify from "./CustomIconify";

const SocialChip = ({ item }: { item: Social }) => {
  return (
    <Link href={item.href} target={item.target}>
      <div className="bg-inner-card-bg rounded-full py-2 px-3 flex gap-2 items-center hover:bg-inner-card-bg/70 transition-colors duration-200">
        <CustomIconify icon={item.icon} fontSize={16} />
        <span className="text-sm font-medium">{item.label}</span>
      </div>
    </Link>
  );
};

export default SocialChip;
