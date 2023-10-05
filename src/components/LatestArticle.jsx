export default function LatestArticle() {
  return (
    <section className="relative bottom-[12rem] px-12 bg-[#fafafa]">
      <h1 className="text-4xl mb-12">Latest Articles</h1>
      <section className="flex gap-x-4">
        <article className="bg-white basis-1/4">
          <img
            src="/image-currency.jpg"
            alt="currency"
            className="rounded-md mb-4"
          />
          <p className="text-[#e8e7ec] text-xs mb-4 pl-4">By Claire Robinson</p>
          <h3 className="text-2xl pl-4 w-[70%] mb-4">
            Receive money in any currency with no fees
          </h3>
          <p className=" pl-4 w-[85%] mb-6">
            The world is getting smaller and we&apos;re becoming more mobile. So
            why should you be forced to only receive money in a single...
          </p>
        </article>

        <article className="bg-white basis-1/4">
          <img
            src="/image-restaurant.jpg"
            alt="restaurant"
            className="rounded-md mb-4 "
          />
          <p className="text-[#e8e7ec] text-xs mb-4 pl-4">By Wilson Hutton</p>
          <h3 className="text-2xl pl-4 w-[70%] mb-4">
            Treat yourself without worrying about money
          </h3>
          <p className=" pl-4 w-[85%] mb-6">
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you...
          </p>
        </article>

        <article className="bg-white basis-1/4">
          <img
            src="/image-plane.jpg"
            alt="plane"
            className="rounded-md mb-4 "
          />
          <p className="text-[#e8e7ec] text-xs mb-4 pl-4">By Wilson Hutton</p>
          <h3 className="text-2xl pl-4 w-[70%] mb-4">
            Take your Easybank card wherever you go
          </h3>
          <p className=" pl-4 w-[85%] mb-6">
            We want you to enjoy your travels. This is why we don&apos;t charge
            any fees on purchases while you&apos;re abroad. We&apos;ll even show
            you...
          </p>
        </article>
        <article className="bg-white basis-1/4">
          <img
            src="/image-confetti.jpg"
            alt="confetti"
            className="rounded-md mb-4"
          />
          <p className="text-[#e8e7ec] text-xs mb-4 pl-4">By Claire Robinson</p>
          <h3 className="text-2xl pl-4 w-[70%] mb-4">
            Our invite-only Beta accounts are now live!
          </h3>
          <p className=" pl-4 w-[85%] mb-6">
            After a lot of hard work by the whole team, we&apos;re excited to
            launch our closed beta. It&apos;s easy to request an invite through
            the site...
          </p>
        </article>
      </section>
    </section>
  );
}
