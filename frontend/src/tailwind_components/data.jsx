import React from 'react';
// import me from '../../img/self.png';
import classNames from 'classnames';
import {Box} from "@mui/material";
import {info} from "../info/Info";
// import Style from './tailwind.css';

export default function Data() {

   return (
 
<>
<article class="rounded-lg border border-gray-100 bg-white p-6">
  <div class="flex items-center justify-between">
    <div>
      <p class="text-sm text-gray-500">Profit</p>

      <p class="text-2xl font-medium text-gray-900">$240.94</p>
    </div>

    <span class="rounded-full bg-blue-100 p-3 text-blue-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </span>
  </div>

  <div class="mt-1 flex gap-1 text-green-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>

    <p class="flex gap-2 text-xs">
      <span class="font-medium"> 67.81% </span>

      <span class="text-gray-500"> Since last week </span>
    </p>
  </div>
</article>

<article class="rounded-lg border border-gray-200 bg-white p-6">
  <div class="flex items-center justify-between">
    <div>
      <p class="text-sm text-gray-500">Profit</p>

      <p class="text-2xl font-medium text-gray-100">$240.94</p>
    </div>

    <span class="rounded-full bg-blue-100 p-3 text-blue-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </span>
  </div>

  <div class="mt-1 flex gap-1 text-red-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
      />
    </svg>

    <p class="flex gap-2 text-xs">
      <span class="font-medium"> 67.81% </span>

      <span class="text-gray-500"> Since last week </span>
    </p>
  </div>
</article>

</>
   )
}
