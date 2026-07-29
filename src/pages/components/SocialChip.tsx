import Iconify from "@/components/iconify";
import type { Social } from "@/types";

const SocialChip = ({ item }: { item: Social }) => {
  return (
    <a href={item.href} target={item.target} rel="noreferrer">
      <div className="bg-inner-card-bg rounded-full py-2 px-3 flex gap-2 items-center hover:bg-inner-card-bg/70 transition-colors duration-200">
        <Iconify icon={item.icon} fontSize={16} />
        <span className="text-sm font-medium">{item.label}</span>
      </div>
    </a>
  );
};

export default SocialChip;
