import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function AboutCard() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Osiris AI</CardTitle>
          <CardDescription>Cross-Chain swaps using Vercel-AI and Lifi SDK</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground/90 leading-normal prose"> 
          <p className="mb-3 font-semibold">Test these prompts:</p>
          <ul className="flex flex-col mb-2">
          <li>→ Get the route from "avalanche" to "binance smart chain" "AVAX" to "BNB from 0.2 AVAX my wallet address</li>
          <li>→ Get the route from "binance smart chain" to "avalanche" "BNB to "AVAX" from 0.007 BNB my wallet address</li>
          <li>→ get route from avalanche to "binance smart chain" for "AVA" to "BNB" for 5 AVA from my wallet address</li>
          <li>→ get the "avax" token info </li>
          <li>→ get my AVAX balance on avalanche</li>
          <li>→ get my BNB balance on binance smart chain</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
