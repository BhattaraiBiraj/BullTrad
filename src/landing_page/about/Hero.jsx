function Hero() {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="fs-4 mt-5 text-center">
          We started by making trading accessible. Now we're focused on making
          it effortless.
        </h1>
      </div>
      <div className="row border-top my-5 text-muted">
        <div className="col-6 mt-5 p-5 lh-lg">
          <p>
            BullTrad started with a simple idea — investing in Nepal's markets
            shouldn't be complicated or expensive. The name reflects exactly
            that: confidence in the market ('Bull') paired with straightforward
            trading ('Trad').
          </p>
          <p>
            Since then, we've focused on building tools that make investing more
            accessible, from beginner-friendly interfaces to transparent,
            flat-fee pricing.
          </p>
          <p>Today, thousands of investors across Nepal use BullTrad to manage their portfolios, trade equities, and grow their wealth — all from one platform.</p>
        </div>
        <div className="col-6 mt-5 p-5 lh-lg">
            <p>Beyond the platform itself, we run educational content and community discussions to help traders and investors build real market knowledge, not just execute trades.</p>
            <p>We're also exploring partnerships with local fintech initiatives to strengthen Nepal's broader investment ecosystem.</p>
            <p>There's always something new in progress — new features, better tools, and updates we regularly share with our community.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
