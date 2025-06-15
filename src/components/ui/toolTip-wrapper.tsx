import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipArrow, TooltipProvider } from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
export default function TooltipWrapper({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent
          arrowPadding={10}
          side="bottom"
          sideOffset={10}
          className="bg-slate-500 text-white"
        >
          <TooltipArrow className="fill-slate-500" />
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
