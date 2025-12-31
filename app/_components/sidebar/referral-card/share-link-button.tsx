import ShareLinkIcon from "@/public/sidebar/share-link.svg";
export const ShareLinkButton = () => {
  return (
    <button className="h-8.5 rounded-lg border border-primary-brand px-2 py-4 gap-1 flex items-center w-fit cursor-pointer">
      <span className="font-bold text-sm text-primary-brand font-aeonik">
        SHARE LINK
      </span>
      <span className="size-3 grid place-items-center">
        <ShareLinkIcon className="text-primary-brand" />
      </span>
    </button>
  );
};
