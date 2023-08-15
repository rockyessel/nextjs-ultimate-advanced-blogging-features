

interface Props {}

const BlogDetailedPage = () => {


  return (
    <section>
      <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
        <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
          <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
            <header className='mb-4 lg:mb-6 not-format'>
              <address className='flex items-center mb-6 not-italic'>
                <div className='inline-flex items-center mr-3 text-sm dark:text-white'>
                  <img
                    className='mr-4 w-16 h-16 rounded-full'
                    src='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
                    alt='Jese Leos'
                  />
                  <div>
                    <a
                      href='#'
                      rel='author'
                      className='text-xl font-bold dark:text-white'
                    >
                      Jese Leos
                    </a>
                    <p className='text-base font-light text-gray-500 '>
                      Graphic Designer, educator & CEO Flowbite
                    </p>
                    <p className='text-base font-light text-gray-500 '>
                      <time dateTime='2022-02-08' title='February 8th, 2022'>
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className='mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl dark:text-white'>
                Best practices for successful prototypes
              </h1>
            </header>
            <p className='lead'>
              Flowbite is an open-source library of UI components built with the
              utility-first classes from Tailwind CSS. It also includes
              interactive elements such as dropdowns, modals, datepickers.
            </p>
            <p>
              Before going digital, you might benefit from scribbling down some
              ideas in a sketchbook. This way, you can think things through
              before committing to an actual design project.
            </p>
            <p>
              But then I found a{' '}
              <a href='https://flowbite.com'>
                component library based on Tailwind CSS called Flowbite
              </a>
              . It comes with the most commonly used UI components, such as
              buttons, navigation bars, cards, form elements, and more which are
              conveniently built with the utility classes from Tailwind CSS.
            </p>
            <figure>
              <img
                src='https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png'
                alt=''
              />
              <figcaption>Digital art by Anonymous</figcaption>
            </figure>
            <h2>Getting started with Flowbite</h2>
            <p>
              First of all you need to understand how Flowbite works. This
              library is not another framework. Rather, it is a set of
              components based on Tailwind CSS that you can just copy-paste from
              the documentation.
            </p>
            <p>
              It also includes a JavaScript file that enables interactive
              components, such as modals, dropdowns, and datepickers which you
              can optionally include into your project via CDN or NPM.
            </p>
            <p>
              You can check out the{' '}
              <a href='https://flowbite.com/docs/getting-started/quickstart/'>
                quickstart guide
              </a>{' '}
              to explore the elements by including the CDN files into your
              project. But if you want to build a project with Flowbite I
              recommend you to follow the build tools steps so that you can
              purge and minify the generated CSS.
            </p>
            <p>
              Youll also receive a lot of useful application UI, marketing UI,
              and e-commerce pages that can help you get started with your
              projects even faster. You can check out this{' '}
              <a href='https://flowbite.com/docs/components/tables/'>
                comparison table
              </a>{' '}
              to better understand the differences between the open-source and
              pro version of Flowbite.
            </p>
            <h2>When does design come in handy?</h2>
            <p>
              While it might seem like extra work at a first glance, here are
              some key moments in which prototyping will come in handy:
            </p>
            <ol>
              <li>
                <strong>Usability testing</strong>. Does your user know how to
                exit out of screens? Can they follow your intended user journey
                and buy something from the site youve designed? By running a
                usability test, youll be able to see how users will interact
                with your design once its live;
              </li>
              <li>
                <strong>Involving stakeholders</strong>. Need to check if your
                GDPR consent boxes are displaying properly? Pass your prototype
                to your data protection team and they can test it for real;
              </li>
              <li>
                <strong>Impressing a client</strong>. Prototypes can help
                explain or even sell your idea by providing your client with a
                hands-on experience;
              </li>
              <li>
                <strong>Communicating your vision</strong>. By using an
                interactive medium to preview and test design elements,
                designers and developers can understand each other — and the
                project — better.
              </li>
            </ol>
            <h3>Laying the groundwork for best design</h3>
            <p>
              Before going digital, you might benefit from scribbling down some
              ideas in a sketchbook. This way, you can think things through
              before committing to an actual design project.
            </p>
            <p>
              Lets start by including the CSS file inside the <code>head</code>{' '}
              tag of your HTML.
            </p>
            <h3>Understanding typography</h3>
            <h4>Type properties</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h4>Baseline</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h4>Measurement from the baseline</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h3>Type classification</h3>
            <h4>Serif</h4>
            <p>
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter. Typefaces with serifs
              are called serif typefaces. Serif fonts are classified as one of
              the following:
            </p>
            <h4>Old-Style serifs</h4>
            <ul>
              <li>Low contrast between thick and thin strokes</li>
              <li>Diagonal stress in the strokes</li>
              <li>Slanted serifs on lower-case ascenders</li>
            </ul>
            <img
              src='https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png'
              alt=''
            />
            <ol>
              <li>Low contrast between thick and thin strokes</li>
              <li>Diagonal stress in the strokes</li>
              <li>Slanted serifs on lower-case ascenders</li>
            </ol>
            <h3>Laying the best for successful prototyping</h3>
            <p>
              A serif is a small shape or projection that appears at the
              beginning:
            </p>
            <blockquote>
              <p>
                Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application.
              </p>
            </blockquote>
            <h4>Code example</h4>
            <p>
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter. Typefaces with serifs
              are called serif typefaces. Serif fonts are classified as one of
              the following:
            </p>

            <h4>Table example</h4>
            <p>
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Date &amp; Time</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>United States</td>
                  <td>April 21, 2021</td>
                  <td>
                    <strong>$2,300</strong>
                  </td>
                </tr>
                <tr>
                  <td>Canada</td>
                  <td>May 31, 2021</td>
                  <td>
                    <strong>$300</strong>
                  </td>
                </tr>
                <tr>
                  <td>United Kingdom</td>
                  <td>June 3, 2021</td>
                  <td>
                    <strong>$2,500</strong>
                  </td>
                </tr>
                <tr>
                  <td>Australia</td>
                  <td>June 23, 2021</td>
                  <td>
                    <strong>$3,543</strong>
                  </td>
                </tr>
                <tr>
                  <td>Germany</td>
                  <td>July 6, 2021</td>
                  <td>
                    <strong>$99</strong>
                  </td>
                </tr>
                <tr>
                  <td>France</td>
                  <td>August 23, 2021</td>
                  <td>
                    <strong>$2,540</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>Best practices for setting up your prototype</h3>
            <p>
              <strong>Low fidelity or high fidelity?</strong> Fidelity refers to
              how close a prototype will be to the real deal. If youre simply
              preparing a quick visual aid for a presentation, a low-fidelity
              prototype — like a wireframe with placeholder images and some
              basic text — would be more than enough. But if youre going for
              more intricate usability testing, a high-fidelity prototype — with
              on-brand colors, fonts and imagery — could help get more pointed
              results.
            </p>
            <p>
              <strong>Consider your user</strong>. To create an intuitive user
              flow, try to think as your user would when interacting with your
              product. While you can fine-tune this during beta testing,
              considering your users needs and habits early on will save you
              time by setting you on the right path.
            </p>
            <p>
              <strong>Start from the inside out</strong>. A nice way to both
              organize your tasks and create more user-friendly prototypes is by
              building your prototypes ‘inside out. Start by focusing on what
              will be important to your user, like a Buy now button or an image
              gallery, and list each element by order of priority. This way,
              youll be able to create a prototype that puts your users needs at
              the heart of your design.
            </p>
            <p>
              And there you have it! Everything you need to design and share
              prototypes — right in Flowbite Figma.
            </p>
            <section className='not-format'>
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-lg lg:text-2xl font-bold dark:text-white'>
                  Discussion (20)
                </h2>
              </div>
              <form className='mb-6'>
                <div className='py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
                  <label className='sr-only'>Your comment</label>
                  <textarea
                    id='comment'
                    className='px-0 w-full text-sm border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800'
                    placeholder='Write a comment...'
                    required
                  ></textarea>
                 
                </div>
                <button
                  type='submit'
                  className='inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'
                >
                  Post comment
                </button>
              </form>
              <article className='p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900'>
                <footer className='flex justify-between items-center mb-2'>
                  <div className='flex items-center'>
                    <p className='inline-flex items-center mr-3 text-sm dark:text-white'>
                      <img
                        className='mr-2 w-6 h-6 rounded-full'
                        src='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
                        alt='Michael Gough'
                      />
                      Michael Gough
                    </p>
                    <p className='text-sm text-gray-600 '>
                      <time title='February 8th, 2022'>Feb. 8, 2022</time>
                    </p>
                  </div>
                  <button
                    id='dropdownComment1Button'
                    data-dropdown-toggle='dropdownComment1'
                    className='inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                    type='button'
                  >
                    <svg
                      className='w-5 h-5'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'></path>
                    </svg>
                    <span className='sr-only'>Comment settings</span>
                  </button>
                  {/* <!-- Dropdown menu --> */}
                  <div
                    id='dropdownComment1'
                    className='hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
                  >
                    <ul
                      className='py-1 text-sm text-gray-700 dark:text-gray-200'
                      aria-labelledby='dropdownMenuIconHorizontalButton'
                    >
                      <li>
                        <a
                          href='#'
                          className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                        >
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p>
                  Very straight-to-point article. Really worth time reading.
                  Thank you! But tools are just the instruments for the UX
                  designers. The knowledge of the design tools are as important
                  as the creation of the design strategy.
                </p>
                <div className='flex items-center mt-4 space-x-4'>
                  <button
                    type='button'
                    className='flex items-center text-sm text-gray-500 hover:underline '
                  >
                    <svg
                      aria-hidden='true'
                      className='mr-1 w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                      ></path>
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
            </section>
          </article>
        </div>
      </main>
    </section>
  );
};

export default BlogDetailedPage;
