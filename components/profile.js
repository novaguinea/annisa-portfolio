export default function Profile() {
    return (
        <div>
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
                <Link className='text-center text-5xl' target={'_blank'} href={'https://www.linkedin.com/in/novaguinea/'}>
                  <RiLinkedinBoxLine className='cursor-pointer hover:text-rose-400' />
                </Link>
                <Link className='text-center text-5xl' target={'_blank'} href={'https://medium.com/@novaguinea'}>
                  <RiMediumLine className='cursor-pointer hover:text-rose-400' />
                </Link>
                <Link className='text-center text-5xl' target={'_blank'} href={'https://github.com/novaguinea'}>
                  <VscGithub className='cursor-p ointer hover:text-rose-400'/>
                </Link>
              </div>
            </div>
        </div>
    )
}