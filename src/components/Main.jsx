export default function Main() {
  return (
    <main className="relative bottom-[16rem] z-10 flex flex-col w-full">
      <div className="flex bg-[#fafafa]">
        <section
          className="flex flex-col justify-center gap-y-6 pl-12 
        "
        >
          <h2 className="text-4xl text-[#2d3049] leading-snug">
            Next generation digital banking
          </h2>
          <p className="text-[18px] text-[#a7a6ab] ">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <button className="bg-[#31d35c] text-white z-30 py-2 w-[10rem] rounded-3xl hover:cursor-pointer">
            Request Invite
          </button>
        </section>
        <section className="overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // eslint-disable-next-line react/no-unknown-property
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="1271"
            height="1034"
          >
            <defs>
              <linearGradient
                id="c"
                x1="0%"
                x2="99.58%"
                y1="36.147%"
                y2="63.736%"
              >
                <stop offset="0%" stopColor="#33D35E" />
                <stop offset="100%" stopColor="#2AB6D9" />
              </linearGradient>
              <filter
                id="a"
                width="104.9%"
                height="135.9%"
                x="-4.8%"
                y="-17.6%"
                filterUnits="objectBoundingBox"
              >
                <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                  stdDeviation="38.5"
                />
                <feColorMatrix
                  in="shadowBlurOuter1"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0240111451 0"
                />
              </filter>
              <path
                id="b"
                d="M69.445 572.84L203.73 707.112a100 100 0 0070.708 29.286h70.693a100 100 0 0170.708 29.287l161.04 161.027A100 100 0 00647.584 956h388.853c44.964 0 81.415-36.45 81.415-81.414a81.414 81.414 0 00-23.848-57.57l-86.392-86.386c-12.033-12.032-12.034-31.54-.002-43.574a30.812 30.812 0 0121.788-9.025c17.017 0 30.812-13.795 30.812-30.812 0-8.172-3.246-16.01-9.025-21.788L855.85 430.11a100 100 0 00-70.708-29.287H550.7a100 100 0 01-70.708-29.287l-35.253-35.25A100 100 0 00374.032 307H138.88c-31.769 0-57.523 25.754-57.523 57.523a57.523 57.523 0 0016.85 40.676l28.761 28.76c15.886 15.884 15.887 41.64.003 57.525a40.676 40.676 0 01-28.764 11.915c-22.465 0-40.677 18.211-40.677 40.676a40.676 40.676 0 0011.915 28.764z"
              />
            </defs>
            <g fill="none" fillRule="evenodd" transform="translate(15)">
              <use fill="#000" filter="url(#a)" xlinkHref="#b" />
              <use fill="#2D314D" xlinkHref="#b" />
              <path
                fill="url(#c)"
                d="M207.445 265.84L341.73 400.112a100 100 0 0070.708 29.286h70.693a100 100 0 0170.708 29.287l161.04 161.027A100 100 0 00785.584 649h388.853c44.964 0 81.415-36.45 81.415-81.414a81.414 81.414 0 00-23.848-57.57l-86.392-86.386c-12.033-12.032-12.034-31.54-.002-43.574a30.812 30.812 0 0121.788-9.025c17.017 0 30.812-13.795 30.812-30.812 0-8.172-3.246-16.01-9.025-21.788L993.85 123.11a100 100 0 00-70.708-29.287H688.7a100 100 0 01-70.708-29.287l-35.253-35.25A100 100 0 00512.032 0H276.88c-31.769 0-57.523 25.754-57.523 57.523a57.523 57.523 0 0016.85 40.676l28.761 28.76c15.886 15.884 15.887 41.64.003 57.525a40.676 40.676 0 01-28.764 11.915c-22.465 0-40.677 18.211-40.677 40.676a40.676 40.676 0 0011.915 28.764z"
              />
            </g>
          </svg>
          <img
            src="/image-mockups.png"
            alt="phone"
            className="absolute top-[20%] right-[-10rem] h-100"
          ></img>
        </section>
      </div>

      <section className="bg-[#f4f5f7]">
        <div className="flex flex-col justify-center gap-y-6 pl-12 w-2/5 bg-[#f4f5f7] mb-16">
          <h2 className="text-4xl text-[#2d3049] leading-snug mt-6">
            Why choose Easybank?
          </h2>
          <p className="text-[18px] text-[#a7a6ab]">
            We leverage Open Banking to turn your bank into your financial hub.
            Control your finances like never before.
          </p>
        </div>

        <div className="flex px-12 gap-x-2 my-28">
          <div className="flex flex-col">
            <img
              src="/icon-online.svg"
              alt="bank-logo"
              className="w-[72px] h-[72px]"
            />
            <h1 className="font-medium py-6 text-xl">Online Banking</h1>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>

          <div className="flex flex-col">
            <img
              src="/icon-budgeting.svg"
              alt="budget-logo"
              className="w-[72px] h-[72px]"
            />
            <h1 className="font-medium py-6 text-xl">Simple Budgeting</h1>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you&apos;re close to hitting your limits.
            </p>
          </div>

          <div className="flex flex-col">
            <img
              src="/icon-onboarding.svg"
              alt="onboarding-logo"
              className="w-[72px] h-[72px]"
            />
            <h1 className="font-medium py-6 text-xl ">Fast Onboarding</h1>
            <p>
              We don&apos;t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>

          <div className="flex flex-col">
            <img
              src="/icon-online.svg"
              alt="bank-logo"
              className="w-[72px] h-[72px]"
            />
            <h1 className="font-medium py-6 text-xl">Open API</h1>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
