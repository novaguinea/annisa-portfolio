import Head from 'next/head';
import Link from 'next/link';
import {VscGithub} from "react-icons/vsc";
import {RiMediumLine, RiLinkedinBoxLine} from "react-icons/ri";
import {BsMoonStarsFill} from "react-icons/bs";
import {useState} from 'react';

export default function Timeline({event, noHeader}) {


    return(
        <Link>
            <hr id='experience' className='dark:bg-slate-800 justify-center'></hr>

          <h2 className='text-center mb-8 pt-6'>Work Experience</h2>

          <div className='timeline-style'>
            <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

              <div class="relative text-gray-700 antialiased text-sm font-semibold">
                
                {/* <!-- Vertical bar running through middle --> */}
                <div class="hidden sm:block w-1 bg-rose-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

                {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                <div class="mt-6 sm:mt-0 sm:mb-12">
                  <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-start w-full mx-auto items-center">
                      <div class="w-full sm:w-1/2 sm:pr-8">
                        <div class="p-4 bg-white dark:bg-slate-600 rounded">
                          <h3 className='font-semibold tracking-wide text-rose-500 dark:text-rose-200'>Product Management Intern - Vidio</h3>
                          {/* <br/> */}
                          <p className='mt-2 list-disc text-xs font-light dark:text-rose-50'>Feb 2022 - Dec 2022</p>
                        </div>
                      </div>
                    </div>
                    <div class="rounded-full bg-rose-400 border-rose-50 dark:border-slate-800 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </div>
                  </div>
                </div>

                {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                <div class="mt-6 sm:mt-0 sm:mb-12">
                  <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-end w-full mx-auto items-center">
                      <div class="w-full sm:w-1/2 sm:pl-8">
                        <div class="p-4 bg-white dark:bg-slate-600 rounded">
                          <h3 className='font-semibold tracking-wide text-rose-500 dark:text-rose-200'>Quality Assurance (Manual Tester) - Campaign.com</h3>
                          {/* <br/> */}
                          <p className='mt-2 list-disc text-xs font-light dark:text-rose-50'>Apr 2021 - Sep 2021</p>
                        </div>
                      </div>
                    </div>
                    <div class="rounded-full bg-rose-400 border-rose-50 dark:border-slate-800 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                     
                    </div>
                  </div>
                </div>

                {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                <div class="mt-6 sm:mt-0 sm:mb-12">
                  <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-start w-full mx-auto items-center">
                      <div class="w-full sm:w-1/2 sm:pr-8">
                        <div class="p-4 bg-white dark:bg-slate-600 rounded">
                          <h3 className='font-semibold tracking-wide text-rose-500 dark:text-rose-200'>PIC and Quality Assurance - SIWA UPNVJ</h3>
                          {/* <br/> */}
                          <p className='mt-2 list-disc text-xs font-light dark:text-rose-50'>Apr 2021 - Dec 2021</p>
                        </div>
                      </div>
                    </div>
                    <div class="rounded-full bg-rose-400 border-rose-50 dark:border-slate-800 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </div>
                  </div>
                </div>

                {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                <div class="mt-6 sm:mt-0 sm:mb-12">
                  <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-end w-full mx-auto items-center">
                      <div class="w-full sm:w-1/2 sm:pl-8">
                        <div class="p-4 bg-white dark:bg-slate-600 rounded">
                          <h3 className='font-semibold tracking-wide text-rose-500 dark:text-rose-200'>PIC and Front End Developer - AyoPulih</h3>
                          {/* <br/> */}
                          <p className='mt-2 list-disc text-xs font-light dark:text-rose-50'>Apr 2021 - Jun 2021</p>
                        </div>
                      </div>
                    </div>
                    <div class="rounded-full bg-rose-400 border-rose-50 dark:border-slate-800 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                     
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </Link>
    )
}