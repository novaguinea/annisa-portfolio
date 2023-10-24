import Head from 'next/head';
import Link from 'next/link';
import {VscGithub} from "react-icons/vsc";
import {RiMediumLine, RiLinkedinBoxLine} from "react-icons/ri";
import {BsMoonStarsFill} from "react-icons/bs";
import {useState} from 'react';

export default function Home() {
  const[darkMode, setDarkMode] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
    <Head>
        <title>This is Annisa</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

      <main className='scroll-smooth'>

        <section className='bg-fuchsia-50 font-semibold text-slate-600 dark:bg-slate-800'>

          {/* Navigation Bar Section */}
          <nav className={`inline-flex bg-inherit p-2 mt-0 fixed w-full z-10 top-0 dark:text-rose-100`}>
              <ul className='container mx-auto flex flex-wrap py-5 justify-center gap-24'>
                <li>
                  <Link href={`/#aboutme`} className='cursor-pointer hover:text-rose-400 hover:font-semibold'>About Me</Link>
                </li>
                {/* <li>
                  <Link href='/#learningjourney' className='cursor-pointer hover:text-rose-400 hover:font-semibold'>Learning Journey</Link>
                </li> */}
                {/* <li>
                  <Link href=''>Education</Link>
                </li> */}
                <li>
                  <Link href={`/#experience`} className='cursor-pointer hover:text-rose-400 hover:font-semibold'>Work Experience</Link>
                </li>

                <li>
                  <Link href={`/#techstack`} className='cursor-pointer hover:text-rose-400 hover:font-semibold'>More?</Link>
                </li>
              </ul>

              <div className='absolute top-5 right-16'>
                <div className='px-5 py-2 mt-2 border-none rounded-xl text-pink-50 bg-yellow-400 dark:bg-sky-800 hover:text-sky-800 dark:hover:text-yellow-400 dark:text-yellow-50 cursor-pointer'
                    onClick={() => setDarkMode(!darkMode)}>
                      <BsMoonStarsFill className='mx-auto' />
                </div>
              </div>
          </nav>

          <div id='aboutme' className="pt-28 pb-24 min-h-screen relative">
          {/* Greetings Section */}
            <div className='mb-5'>
              <img id="fotoAku" className='shadow-custom vert-move rounded-full' src="https://firebasestorage.googleapis.com/v0/b/xxxxx-5413a.appspot.com/o/foto-square.jpg?alt=media&token=d6998b27-2188-4b05-b102-b14de6bc4c22"></img>
            </div>
            <div className='px-60 text-center py-2'>
              <h1 className='mb-5 text-rose-400'> 
                <b>
                  Annisa Novaguinea
                </b> 
              </h1>
              <p className='self-desc dark:text-rose-100'>
                A fresh graduate information system student from UPN Veteran Jakarta. Passionate about creating best experience product for everyone!✨
              </p>
            </div>
            {/* Social Media Section */}
            <div className='mt-10'>
              <div className="text-center text-5xl flex justify-center gap-36 dark:text-rose-50">
                <Link className='text-center text-5xl' target={'_blank'} href={`https://www.linkedin.com/in/novaguinea/`}>
                  <RiLinkedinBoxLine className='cursor-pointer hover:text-rose-400' />
                </Link>
                <Link className='text-center text-5xl' target={'_blank'} href={`https://medium.com/@novaguinea`}>
                  <RiMediumLine className='cursor-pointer hover:text-rose-400' />
                </Link>
                <Link className='text-center text-5xl' target={'_blank'} href={`https://github.com/novaguinea`}>
                  <VscGithub className='cursor-p ointer hover:text-rose-400'/>
                </Link>
              </div>
            </div>
          </div >

          {/* <hr id='learningjourney' className='dark:bg-slate-800 justify-center'></hr>
          
          <div className='text-left px-36 pt-16 pb-24 gap-12 grid grid-cols-2'>

            <div className='text-right mr-6'>
              <h2>
                Learning Journey
              </h2>
              <p className='dark:text-rose-50'>
                Here are my potions after a lot of experiments!🧪
              </p>
            </div>


            <div className='grid grid-cols-2 text-center text-gray-800 dark:text-rose-50 gap-4'>
              <div className='cursor-pointer porto-card bg-rose-200 hover:bg-rose-400 hover:text-rose-50 dark:bg-slate-600 hover:dark:bg-rose-200 dark:hover:text-rose-500 p-10'>
                <a href='twitter.com'>Product Management</a>
              </div>
              <div className='cursor-pointer porto-card bg-rose-200 hover:bg-rose-400 hover:text-rose-50 dark:bg-slate-600 hover:dark:bg-rose-200 dark:hover:text-rose-500 p-10'>
                <a>Business Intelligence</a> 
              </div>
              <div className='cursor-pointer porto-card bg-rose-200 hover:bg-rose-400 hover:text-rose-50 dark:bg-slate-600 hover:dark:bg-rose-200 dark:hover:text-rose-500 p-10'>
                <a>UI/UX Design</a> 
              </div>
              <div className='cursor-pointer porto-card bg-rose-200 hover:bg-rose-400 hover:text-rose-50 dark:bg-slate-600 hover:dark:bg-rose-200 dark:hover:text-rose-500 p-10'>
                <a>Web Development</a>
              </div>
            </div>
          </div> */}

          <hr className='dark:bg-slate-800 justify-center'></hr>

          {/* <hr id='projects' className='dark:bg-slate-800 justify-center'></hr>

          <div className='pt-16'>
            
            <h2 className='text-left px-24 mb-3'>Projects🏗️</h2>
            <p className='px-24 mb-12'>
              These are my projects built with my colleagues (actually they are my friends✌🏻)
            </p>

            <div className='grid gap-y-0 grid-cols-2 pb-24 text-center'>
                <div className='project-box cursor-pointer porto-card bg-rose-200 hover:bg-rose-400 hover:text-rose-50 dark:bg-slate-600 hover:dark:bg-rose-200 dark:hover:text-rose-500'>
                  <Link target={"_blank"} className='' href={'https://youtu.be/q-mwxW9WANI'}>
                    <h3 className='font-bold mb-3'>Discharge Planning System</h3>
                    <p>
                      Discharge Planning system was built for hospitals in Bali to input patients’ medical record. This website is integrated with AyoPulih app to monitoring their patient after recover from COVID-19.
                    </p>
                    <p className='mt-12 font-xxs'>Creators: Annisa Novaguinea, Jovanka Samudra, Naufal Rachmandani</p>
                  </Link>
                </div>
                
                <div className='project-box cursor-pointer porto-card bg-rose-200 hover:bg-rose-400 hover:text-rose-50 dark:bg-slate-600 hover:dark:bg-rose-200 dark:hover:text-rose-500'>
                  <Link target={"_blank"} href={'https://ormawa.upnvj.ac.id/'}>
                    <h3 className='font-bold mb-3'>SIWA UPN Veteran Jakarta</h3> 
                    <p>
                      This project was built to help the administration of organizations in UPN Veteran Jakarta. SIWA serves digitalization of administration for less contact during COVID-19 and less paper use.
                    </p>
                  </Link>
                </div>
            </div>

          </div> */}

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
                          <h3 className='font-semibold tracking-wide text-rose-500 dark:text-rose-200'>System Analyst - AdMedika (Telkom Group)</h3>
                          {/* <br/> */}
                          <p className='mt-2 list-disc text-xs font-light dark:text-rose-50'>Oct 2023 - Present</p>
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
                          <h3 className='font-semibold tracking-wide text-rose-500 dark:text-rose-200'>Product Management Intern - OY! Indonesia</h3>
                          {/* <br/> */}
                          <p className='mt-2 list-disc text-xs font-light dark:text-rose-50'>Apr 2023 - Sep 2023</p>
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

          <div id='techstack' className='pt-16 pb-24'>
            {/* tech stack */}
            
            <h2 className='text-center pb-12'>My tech side💻</h2>

            <div className='grid gap-y-2 grid-cols-3 pb-24'>
                <img className='grid-techstack' src='https://firebasestorage.googleapis.com/v0/b/xxxxx-5413a.appspot.com/o/php.png?alt=media&token=fa6a458a-9dc8-431b-a824-b1c26e9597a7'></img>
                <img className='grid-techstack' src='https://firebasestorage.googleapis.com/v0/b/xxxxx-5413a.appspot.com/o/ci.png?alt=media&token=2d836f8d-cd89-4907-b876-bba5e38d734f'></img>
                {/* <img className='grid-techstack' src='https://firebasestorage.googleapis.com/v0/b/xxxxx-5413a.appspot.com/o/figma.png?alt=media&token=74f5b04c-1142-4f1f-bc38-da92f2a80834'></img> */}
                <img className='grid-techstack' src='https://firebasestorage.googleapis.com/v0/b/xxxxx-5413a.appspot.com/o/nextjs.png?alt=media&token=671f9e3c-1209-4120-89aa-b81204e64c38'></img>
                <img className='grid-techstack' src='https://firebasestorage.googleapis.com/v0/b/xxxxx-5413a.appspot.com/o/mysql.png?alt=media&token=5a5ce1ef-d01d-45e4-8d5b-fcf44fb8e027'></img>
                {/* <img className='grid-techstack' src='https://firebasestorage.googleapis.com/v0/b/xxxxx-5413a.appspot.com/o/golang.png?alt=media&token=9cb1685d-64f8-4aae-abbf-7803e02804dc'></img> */}
                <img className='grid-techstack' src='https://firebasestorage.googleapis.com/v0/b/xxxxx-5413a.appspot.com/o/bootstrap-logo.svg?alt=media&token=166e326b-4059-44f1-9a73-a5cd62824434'></img>
                <img className='grid-techstack' src='https://firebasestorage.googleapis.com/v0/b/xxxxx-5413a.appspot.com/o/tailwindcss.png?alt=media&token=bdd45018-54f6-4dc7-bccf-f357fb3cf56f' alt='Tailwind CSS'></img>
            </div>

          </div>

        </section>
      </main>
    </div>
  )
}
