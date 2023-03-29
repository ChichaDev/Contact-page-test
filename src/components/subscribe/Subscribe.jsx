import "./Subscribe.css";

// moved to a separate entity for reuse
export const Subscribe = () => {
  return (
    <form>
      <div className="subscribe-form">
        <div>
          <h3>Join Our Newsletter</h3>
        </div>
        <div className="text-field__group">
          <input
            className="text-field__input"
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
          />
          <button className="text-field__btn" type="submit">
            Subscribe
          </button>
        </div>
        <div>
          <h4>
            * Will send you weekly updates for your better tool management.
          </h4>
        </div>
      </div>
    </form>
  );
};
