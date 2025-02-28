'use server';

import { createStreamableValue } from 'ai/rsc';
import { CoreMessage, streamText, tool } from 'ai';
import { openai } from '@ai-sdk/openai';
//import { Weather } from '@/components/weather';
import { generateText } from 'ai';
import { createStreamableUI } from 'ai/rsc';
import { ReactNode } from 'react';
import { z } from 'zod';

import readline from "node:readline";
import { http, createWalletClient, parseEther, GetBalanceParameters, erc20Abi, createPublicClient, formatEther } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { getOnChainTools } from "@goat-sdk/adapter-vercel-ai";
//import { Token, erc20 } from "@goat-sdk/plugin-erc20";
//import { erc4626, Vault } from "@goat-sdk/plugin-erc4626";
//import { erc4626, Vault } from "../erc4626";
//import { sendETH } from "@goat-sdk/wallet-evm";
//import { viem } from "@goat-sdk/wallet-viem";
import { ChainKey, createConfig, EVM } from '@lifi/sdk'
import { ChainId, getQuote } from '@lifi/sdk'
import { executeRoute, getRoutes, getToken } from '@lifi/sdk'

import { arbitrum, mainnet, mantle, optimism, polygon, Chain, bsc, avalanche } from 'viem/chains'
import { Route } from '@/components/routeCard';

const account = privateKeyToAccount(process.env.WALLET_PRIVATE_KEY as `0x${string}`);
const myAddress = account.address;
const chains: Chain[] = [arbitrum, mainnet, optimism, polygon, mantle, bsc, avalanche];

const client = createWalletClient({
  account,
  chain: mainnet,
  transport: http(),
});

const publicClient = createPublicClient({
  chain: mantle,
  transport: http()
})

createConfig({
  integrator: "OsirisAI",
  providers: [
    EVM({
      getWalletClient: async () => client,
      switchChain: async (chainId) =>
        // Switch chain by creating a new wallet client
        createWalletClient({
          account,
          chain: chains.find((chain) => chain.id === chainId) as Chain,
          transport: http(),
        }),
    }),
  ],
});

require("dotenv").config();

const ChainIdMap = [
  { id: 1, name: 'Ethereum', symbol: 'ETH' },
  { id: 137, name: 'Polygon', symbol: 'POL' },
  { id: 56, name: 'Binance Smart Chain', symbol: 'BNB' },
  { id: 100, name: 'xDai', symbol: 'DAI' },
  { id: 250, name: 'Fantom', symbol: 'FTM' },
  { id: 43114, name: 'Avalanche', symbol: 'AVAX' },
  { id: 42161, name: 'Arbitrum', symbol: 'ARB' },
  { id: 10, name: 'Optimism', symbol: 'OPT' },
  { id: 8453, name: 'Base', symbol: 'BAS' },
  { id: 5000, name: 'Mantle', symbol: 'MNT' },
];


/*
const walletClient = createWalletClient({
  account: account,
  transport: http("https://rpc.sepolia.mantle.xyz"),
  chain: mantleSepoliaTestnet,
});
// Define sozuHausResident token
const sozuHausResident: Token = {
  decimals: 18,
  symbol: "SHR",
  name: "SozuHausResident",
  chains: {
    "5003": {
      // Mantle Sepolia chain ID
      contractAddress: "0xdeB1e008F224c959B75aCCA5413a150DC7049E67", // Replace with actual contract address
    },
  },
};

// Define sozuHausResident Vault
const sozuHausResidentVault: Vault = {
  name: "SozuHausResidentVault",
  chains: {
    "5003": {
      // Mantle Sepolia chain ID
      contractAddress: "0x28c52E6c053AD4F2727E2F8de2AD5B81139ca9D4", // Replace with actual contract address
    },
  },
};
*/
/*
const tools = await getOnChainTools({
  wallet: viem(walletClient),
  plugins: [
    sendETH() as any, // Enable ETH transfers
    erc20({ tokens: [sozuHausResident] }), // Enable ERC20 token operations
    erc4626({ vaults: [sozuHausResidentVault] }), // Enable ERC4626 vault operations
  ],
});
*/


export interface Message {
  role: 'user' | 'assistant';
  content: string;
  display?: ReactNode;
}

const tools = {

  /*
  const data = await publicClient.readContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: wagmiAbi,
  functionName: 'totalSupply',
})
  */
  getMyWalletAddress: tool({
    description: 'Get my wallet address',
    parameters: z.object({}),
    execute: async () => {
      return myAddress;
    },
  }),
  getBalance: tool({
    description: 'Get the balance of the native token',
    parameters: z.object({
      //chainId: z.union([z.string(), z.number()]).refine((val): val is ChainKey | ChainId => {
      //  return typeof val === 'string' || typeof val === 'number';
      //}),
      //tokenAddress: z.string().describe('The token name to get the info for'),
      walletAddress: z.string().describe('The wallet address to get the balance for'),
    }),
    execute: async ({
      //chainId, 
      //tokenAddress, 
      walletAddress }: {
        //chainId: ChainKey | ChainId, 
        //tokenAddress: string, 
        walletAddress: string
      }) => {
      const balance = await publicClient.getBalance({
        address: walletAddress as `0x${string}`,
      })
      const balanceAsEther = formatEther(balance)
      console.log('el balance es: ', balanceAsEther);
      return balanceAsEther.toString();
    },
  }),

  getBalanceofToken: tool({
    description: 'Get the balance of the ERC20 token on the provided chain',
    parameters: z.object({
      //chainId: z.union([z.string(), z.number()]).refine((val): val is ChainKey | ChainId => {
      //  return typeof val === 'string' || typeof val === 'number';
      //}),
      chainId: z.number().describe('The chain ID to get the balance from'),
      tokenAddress: z.string().describe('The token name to get the info for'),
      walletAddress: z.string().describe('The wallet address to get the balance for'),
    }),
    execute: async ({
      chainId,
      tokenAddress, walletAddress }: {
        chainId: ChainKey | ChainId,
        tokenAddress: string, walletAddress: string
      }) => {
      const chainName = chains.find((chain) => chain.id === chainId) as Chain;
      console.log('chainName: ', chainName.nativeCurrency.name);
      //publicClient.chain = chainName.nativeCurrency.name;

      const quote = await publicClient.readContract({
        address: tokenAddress as `0x${string}`,
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: [walletAddress as `0x${string}`],
      })
      console.log('el balance es: ', quote);
      return quote.toString();
    },
  }),

  resolveChain: tool({
    description: 'Resolve the chain name to chain ID',
    parameters: z.object({
      chainName: z.string().describe('The chain name to resolve'),
    }),
    execute: async ({ chainName }) => {
      try {
      const chainId = getChainIdByName(chainName);
      console.log(chainId);
      return chainId;
      } catch (error) {
        console.log('error: ', error);
        return error;
      }
    },
  }),

  getToken: tool({
    description: 'Get the token info for the provided chain',
    parameters: z.object({
      chainId: z.union([z.string(), z.number()]).refine((val): val is ChainKey | ChainId => {
        return typeof val === 'string' || typeof val === 'number';
      }),
      tokenAddress: z.string().describe('The token name to get the info for'),
    }),
    execute: async ({ chainId, tokenAddress }: { chainId: ChainKey | ChainId, tokenAddress: string }) => {
      try {
        const quote = await getToken(chainId, tokenAddress);
        console.log(quote);
        return quote;

      } catch (error) {
        console.log('error: ', error);
        return error;
      }
    },
  }),

  getAmountWithDecimals: tool({
    description: 'Get the amount with token decimals',
    parameters: z.object({
      fromAmount: z.string().describe('The amount to get the route for'),
      chainId: z.union([z.string(), z.number()]).refine((val): val is ChainKey | ChainId => {
        return typeof val === 'string' || typeof val === 'number';
      }),
      tokenAddress: z.string().describe('The token name to get the info for'),
    }),
    execute: async ({ chainId, tokenAddress, fromAmount }:
      { chainId: ChainKey | ChainId, tokenAddress: string, fromAmount: string }) => {
      try {
        const quote = await getToken(chainId, tokenAddress);
        console.log("token decimals here: ",quote.decimals);
        return (Number(fromAmount) * 10 ** quote.decimals).toString();

      } catch (error) {
        console.log('error: ', error);
        return error;
      }
    },
  }),
  /*
  getTokenDecimals: tool({
    description: 'Get the token decimals',
    parameters: z.object({
      chainId: z.union([z.string(), z.number()]).refine((val): val is ChainKey | ChainId => {
        return typeof val === 'string' || typeof val === 'number';
      }),
      tokenAddress: z.string().describe('The token name to get the info for'),
    }),
    execute: async ({ chainId, tokenAddress }: { chainId: ChainKey | ChainId, tokenAddress: string }) => {
      const quote = await getToken(chainId, tokenAddress);
      console.log(quote);
      return quote;
    },
  }),
  */
  quote: tool({
    description: 'Get the quote',
    parameters: z.object({
      fromChain: z.union([z.string(), z.number()]).describe('The chain ID to get the quote from'),
      toChain: z.union([z.string(), z.number()]).describe('The chain ID to get the quote to'),
    }),
    execute: async ({ fromChain, toChain }: { fromChain: string | number, toChain: string | number }) => {
      const quote = await getQuote({
        fromAddress: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
        fromChain,
        toChain,
        fromToken: '0x0000000000000000000000000000000000000000',
        toToken: '0x0000000000000000000000000000000000000000',
        fromAmount: '1000000000000000000',
      });
      console.log(quote);
      return quote;
    },
  }),

  route: tool({
    description: 'Get the route from chainId to chainid fromtokenaddress to totokenaddress from amount and wallet address',
    parameters: z.object({
      fromChainId: z.number().describe('The chain ID to get the quote from'),
      toChainId: z.number().describe('The chain ID to get the quote to'),
      fromTokenAddress: z.string().describe('The token name to get the route from'),
      toTokenAddress: z.string().describe('The token name to get the route to'),
      fromAmount: z.string().describe('The amount to get the route for but you have to add the decimals'),
      fromAddress: z.string().describe('The address to get the funds from'),
    }),
    execute: async ({ fromChainId, toChainId, fromTokenAddress, toTokenAddress, fromAmount }:
      { fromChainId: number, toChainId: number, fromTokenAddress: string, toTokenAddress: string, fromAmount: string }) => {

      try {
        const token = await getToken(toChainId, fromTokenAddress);
        console.log("token decimals here: ",token.decimals);
        const fromAmountGood = (Number(fromAmount) * 10 ** token.decimals).toString();

        const quote = await getRoutes({
          fromChainId,
          toChainId,
          fromTokenAddress,//: '0x0000000000000000000000000000000000000000',
          toTokenAddress,//: '0x0000000000000000000000000000000000000000',
          fromAmount: fromAmountGood,//: (Number(fromAmount)*10*18).toString(),//: '1000000000000000', // 10 USDC
          fromAddress: myAddress,
          //toAddress: myAddress,
        });
        if (quote && typeof quote === 'object' && 'routes' in quote && Array.isArray(quote.routes) && quote.routes.length > 0) {
          return quote.routes[0];
        } else {
          return quote;
        }

      } catch (error) {
        console.log('error: ', error);
        return error;
      }


      //console.log('type: ',typeof quote);
      /*
      if (quote && typeof quote === 'object' && 'routes' in quote && Array.isArray(quote.routes) && quote.routes.length > 0) {
        //console.log(quote[0]);
        console.log('Executing route',quote.routes[0]);
        const route = quote.routes[0];
        const executedRoute = await executeRoute(route, {
          // Gets called once the route object gets new updates
          updateRouteHook(route) {
            console.log(route)
          },
        })

        return executedRoute;
      } else {
        console.log('Returning the quote',quote);
        return quote;
      }*/

      //return quote;
    },
  }),
};

function getChainIdByName(chainName: string): number | undefined {
  const chain = ChainIdMap.find(chain => chain.name.toLowerCase() === chainName.toLowerCase());
  return chain ? chain.id : undefined;
}


// Streaming Chat 
export async function continueTextConversation(messages: CoreMessage[]) {
  //console.log("continueTextConversation", messages);

  const result = await generateText({
    model: openai("gpt-4o-mini") as any,
    tools: tools,
    maxSteps: 10, // Maximum number of tool invocations per request
    messages,
    onStepFinish: (event) => {
      console.log('tool results aqui: ', event.toolResults);
    },
  });
  //console.log('result props: ',result.response);

  const stream = createStreamableValue(result.text);
  return stream.value;
}

// Gen UIs 
export async function continueConversation(history: Message[]) {
  const stream = createStreamableUI();

  const result = await generateText({
    model: openai("gpt-4o-mini") as any,
    tools: tools,
    maxSteps: 10, // Maximum number of tool invocations per request
    messages: history,
    onStepFinish: (event) => {
      console.log('results aqui: ', event.toolResults);
    },
  });

  return {
    messages: [
      ...history,
      {
        role: 'assistant' as const,
        content:
          result.text,
        display: stream.value,
      },
    ],
  };
}

// Utils
export async function checkAIAvailability() {
  const envVarExists = !!process.env.OPENAI_API_KEY;
  return envVarExists;
}