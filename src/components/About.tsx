// TODO : update about

import { Avatar, Button } from "./ui";
import { Lucide, Simple } from "./icons";

export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        <Avatar src="/ultracompute_i.png" alt="profile-picture">
          <Lucide.IconUser className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-2">
          <h1 className="font-medium text-lg lg:text-xl">極致計算研究所</h1>
          <h2 className="font-medium text-2xl lg:text-3xl">Ultracompute Institute</h2>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p>
          The mission of the Ultracompute Institute (Ultracompute) is to build the world’s first ultracomputer capable of running the world’s first Artificial Ultraintelligence (AUI). We believe that while Artificial Superintelligence (ASI) may ultimately be achievable with classical computing, Artificial Ultraintelligence will require an entirely new computational paradigm – quantum computing. That is why, in addition to advancing our quantum software research, we are now proposing the development of a new kind of computational system: Ultracomputer 1 (UC-1), the world’s first quantum ultracomputer, and Q-I/O (QIO), a next-generation quantum-native architecture designed for Artificial Ultraintelligence.
        </p>
        <p>
          極致計算研究所（Ultracompute）的使命是打造全球首台量子超級電腦，以實現全球首個「人工終極智慧」（Artificial Ultraintelligence，AUI）。我們相信，儘管「人工超級智慧」（ASI）最終或許能透過古典計算實現，但「人工終極智慧」將需要一種全新的計算範式——量子計算。因此，我們除了持續推進量子軟體研究外，目前也正提出開發一種全新計算系統的構想：Ultracomputer 1（UC-1），全球首台量子超級電腦；以及 Q-I/O（QIO），專為人工終極智慧設計的新一代量子原生架構。
        </p>
      </div>

      <div className="flex self-stretch justify-end">
        <Button as="a" href="https://discord.gg/edkgtYGMVg" target="_blank" aria-label="Discord">
          <Simple.IconDiscord />
          Join our Discord
        </Button>
      </div>
    </div>
  );
};
