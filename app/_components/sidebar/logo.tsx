import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex gap-1">
      <div className="size-8.5 rounded-lg border border-primary-accent shadow-logo flex justify-center">
        <Image height={18.92} width={19.94} src="/logo.svg" alt="logo" />
      </div>
      <div className="shadow-logo border border-primary-accent rounded-lg px-3 flex">
        <Image height={17.87} width={84.21} src="/wordmark.svg" alt="logo" />
      </div>
    </div>
  );
};
