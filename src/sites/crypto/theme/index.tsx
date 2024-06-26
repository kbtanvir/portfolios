import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const colors = {
  text: "#fff",
  hover: "#00C4F4",
  orange: "#FF9700",
  green: "#12D176",
  red: "#FF1D45",
  blue: "#007FF4",
  green2: "#005F73",
};

export const classes = {
  textColor: `text-[#00C4F4]`,
  span: `[&>span]:text-[#00C4F4] [&>span]:underline [&>span]:font-bold`,
  textHoverColor: `hover:text-[#00C4F4]`,
  buttonBG: `bg-slate-900 text-white`,
  buttonHover: `hover:bg-transparent hover:text-black hover:ring-slate-900`,
  ringColor: `ring-slate-900`,
  linkMobileHover: `hover:border-b-[#00C4F4]`,
};

export function LinkText({
  children = <>This is a link</>,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `cursor-pointer transition-all ${classes.textHoverColor}`,
        className,
      )}
    >
      {children}
    </div>
  );
}
export function Heading3({
  children = <>This is heading 3</>,
  reverseColor = false,
  className,
}: {
  children?: React.ReactNode;
  reverseColor?: boolean;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "relative flex items-center gap-4  text-[16px] font-bold uppercase max-sm:text-[14px]",
        !reverseColor ? "text-white" : `text-black`,
        className,
      )}
    >
      <span
        className="size-2 rounded-full"
        style={{
          backgroundColor: colors.hover,
        }}
      />
      {children}

      <span
        className=" size-2 rounded-full"
        style={{
          backgroundColor: colors.hover,
        }}
      />
    </h3>
  );
}
export function Heading2({
  reverseColor = false,
  children = <>This is heading 2</>,
  className,
}: {
  reverseColor?: boolean;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        `text-[44px] font-bold leading-[1.3em] max-sm:text-[28px] max-sm:leading-normal`,
        !reverseColor ? "text-white" : `text-black`,
        `[&>span]:text-[#00C4F4]`,
        className,
      )}
    >
      {children}
    </h2>
  );
}
export function PrimaryButton({
  children = <>Primary Button</>,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        `max-sm:max-w-auto h-[50px]  min-w-[200px] rounded-full bg-transparent px-5 font-bold uppercase text-white ring-[3px] ring-[${colors.hover}] hover:bg-transparent  hover:text-[${colors.hover}] hover:ring-2`,
        className,
      )}
    >
      {children}
    </Button>
  );
}
