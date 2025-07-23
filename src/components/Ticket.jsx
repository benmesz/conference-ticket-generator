const Ticket = ({ data }) => {
  return (
    <>
      <div>
        <h1>
          Congrats, <span className="gradient-text">{data.name}</span>! Your
          ticket is ready.
        </h1>
        <h2>
          We've emailed your ticket to <br /> <span>{data.email}</span> and will
          send updates in <br /> the run up to the event.
        </h2>
      </div>
      <section className="ticket">
        <div className="ticket-container">
          <div className="conference-info">
            <img src="./logo-full.svg" alt="Conference logo" />
            <p>Jan 31, 2025 / Austin, TX</p>
          </div>
          <div className="personal-info">
            {/* Avatar image is hardcoded now, needs to be changed to be dynamic. */}
            <img src="./image-avatar.jpg" />
            <div>
              <h2>{data.name}</h2>
              <p className="github-handle">
                <img src="./icon-github.svg" /> @{data.username}
              </p>
            </div>
          </div>
        </div>
        <div className="serial">
          <p>#01609</p>
        </div>
      </section>
    </>
  );
};

export default Ticket;
