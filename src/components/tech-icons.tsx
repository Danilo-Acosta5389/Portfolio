"use client";

import { useThemeContext } from "@/context/theme-context";
import { useEffect, useId, useState } from "react";
import clsx from "clsx";
import { Button } from "@heroui/react";

export function TechIcons() {
  const { theme } = useThemeContext();
  const baseUrl = "https://skillicons.dev/icons?i=";
  const iconsTheme = `&theme=${theme === "dark" ? "light" : "dark"}`;
  const icons =
    "java,aws,azure,bash,cs,debian,docker,dotnet,wasm,dynamodb,express,git,github,githubactions,html,js,kali,linux,materialui,mongodb,mysql,nextjs,nginx,nodejs,npm,pnpm,postgres,powershell,raspberrypi,react,redux,tailwind,ts,ubuntu,unity,visualstudio,vite,vscode";
  const iconsArr = icons.split(",");
  const [showMore, setShowMore] = useState(9);

  useEffect(() => {}, [showMore]);

  return (
    <div className="flex flex-col items-center">
      <div className="max-h-[1000px] border-3 border-black">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-2 max-w-7xl mx-auto">
          {iconsArr.map((item, i) =>
            i <= showMore ? (
              <div
                key={i}
                className={clsx(
                  "relative bg-gradient-to-b p-2 rounded-3xl flex flex-col place-self-center space-y-4 items-center w-fit px-5",
                  {
                    "from-neutral-100 to-white": theme !== "dark",
                    "dark:from-neutral-900 dark:to-neutral-950":
                      theme === "dark",
                  }
                )}
              >
                <Grid size={20} />
                <p
                  className={clsx(
                    "text-lg font-bold relative z-20 self-start pl-2",
                    {
                      "text-neutral-800": theme !== "dark",
                      "dark:text-white": theme === "dark",
                    }
                  )}
                >
                  {iconsArr[i]}
                </p>
                <img
                  width={150}
                  src={`${baseUrl}${iconsArr[i]}${iconsTheme}`}
                />
              </div>
            ) : null
          )}
        </div>
      </div>
      <Button
        onPress={() => setShowMore(25 % iconsArr.length)}
        className=" w-8 h-8"
      >
        Show more
      </Button>
    </div>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const { theme } = useThemeContext();
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div
        className={clsx(
          "absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100",
          {
            "from-zinc-100/30 to-zinc-300/30": theme !== "dark",
            "dark:from-zinc-900/30 dark:to-zinc-900/30": theme === "dark",
          }
        )}
      >
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className={clsx("absolute inset-0 h-full w-full  mix-blend-overlay", {
            "stroke-black/10 fill-black/10": theme !== "dark",
            "dark:fill-white/10 dark:stroke-white/10": theme === "dark",
          })}
        />
      </div>
    </div>
  );
};

export function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();
  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${generateUUID()}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export const techIconsBaseUrl = "https://skillicons.dev/icons?i=";
export const icons =
  "java,aws,azure,bash,cs,debian,docker,dotnet,wasm,dynamodb,express,git,github,githubactions,html,js,kali,linux,materialui,mongodb,mysql,nextjs,nginx,nodejs,npm,pnpm,postgres,powershell,raspberrypi,react,redux,tailwind,ts,ubuntu,unity,visualstudio,vite,vscode";
export const iconsArr = icons.split(",");

export function TechIconsCard({ i, theme }: { i: number; theme: string }) {
  const iconsTheme = `&theme=${theme === "dark" ? "light" : "dark"}`;
  return (
    <div
      key={i}
      className={clsx(
        "relative bg-gradient-to-b p-2 rounded-3xl flex flex-col place-self-center space-y-4 items-center w-fit",
        {
          "from-neutral-100 to-white": theme !== "dark",
          "dark:from-neutral-900 dark:to-neutral-950": theme === "dark",
        }
      )}
    >
      {/* <Grid size={20} /> */}
      <p
        className={clsx("text-lg font-bold relative z-20 self-start pl-2", {
          "text-neutral-800": theme !== "dark",
          "dark:text-white": theme === "dark",
        })}
      >
        {iconsArr[i]}
      </p>
      <img width={150} src={`${techIconsBaseUrl}${iconsArr[i]}${iconsTheme}`} />
    </div>
  );
}
