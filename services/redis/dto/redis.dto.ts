import { Component, FunctionComponent } from "react";
import { Redis } from "../../../shared/types/redis";
  FunctionComponent,
} from 'react';

import { Redis } from '../../../shared/types/redis';

// ! Just shows off ways to use TS
export class RedisDto<Cache> {
  bootTime: Date;
  aStuff: string;
  bStuff: Int32Array;
  cStuff: FunctionComponent;
  element: Component;
  set:(cache: Cache) => Redis<Cache>;
  // TODO actually finish
}


// ! TOTTES FORGOT  - there are two ways to make a field optional:
// ! { field?: value }
// ? means just that the value is optional.  
// ? The other option is to put a single pipe in and have a second 
// ? type like _undefined_ or null, but that's much more specific than 
// ? just optionlThe other option is to put a single pipe in and 
// ? have a second value like undefined or no, but that's much more s
// ? pecific than just optional

export interface OpenAIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage: Usage;
  reason?: string;
}

export interface Choice {
  text: string;
  index: number;
  logprobs?: LogProbs; 
  finish_reason: string;
}

export interface LogProbs {
  tokens: string[];
  token_logprobs: number[];
  // Optional field, can be null or a mapping of token to probability
  // ! THIS IS TOO COMPLEX TO USEFUL
  // * what It's saying is that it's in array they can take an parameter
  // * of either nul *!speficically not undefined or something else!*
  // * or an objects where the key type is a string, that's why it's 
  // * those brackets, so the key can be typedand the value of that key
  // * is going to be a number 
  top_logprobs: Array<null | { [token: string]: number }>; 
  text_offset: number[];
}

export interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}
