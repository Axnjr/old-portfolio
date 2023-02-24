export default function Menu({ bg, col }) {
  function Close() {
    document.querySelector(".menu").style.transform = "translateY(-100vh)";
  }
  function Hover(id) {
    document.getElementById(id).style.WebkitTextFillColor = bg;
  }
  function HoverEnd(id) {
    document.getElementById(id).style.WebkitTextFillColor = col;
  }

  return (
    <>
      <div className="menu" style={{ backgroundColor: bg, color: col }}>
        <div>
          <svg
            onClick={Close}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.4}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <section style={{ color: col }}>
            <h1
              id="mh1"
              onMouseEnter={() => Hover("mh1")}
              onTouchStart={() => Hover("mh1")}
              onMouseLeave={() => HoverEnd("mh1")}
              onTouchEnd={() => HoverEnd("mh1")}
              onClick={Close}
            >
              <a href="#abt">ABOUT</a>
            </h1>
            <h1
              id="mh2"
              onMouseEnter={() => Hover("mh2")}
              onMouseLeave={() => HoverEnd("mh2")}
              onTouchStart={() => Hover("mh2")}
              onTouchEnd={() => HoverEnd("mh2")}
              onClick={Close}
            >
              <a href="#pro">WORK</a>
            </h1>
            <h1
              id="mh3"
              onMouseEnter={() => Hover("mh3")}
              onMouseLeave={() => HoverEnd("mh3")}
              onTouchStart={() => Hover("mh3")}
              onTouchEnd={() => HoverEnd("mh3")}
              onClick={Close}
            >
              <a href="#end">CONTACT</a>
            </h1>
            <h1
              id="mh4"
              onMouseEnter={() => Hover("mh4")}
              onMouseLeave={() => HoverEnd("mh4")}
              onTouchStart={() => Hover("mh4")}
              onTouchEnd={() => HoverEnd("mh4")}
              onClick={Close}
            >
              <a href="https://www.linkedin.com/in/yakshit/">LINKEDIN</a>
            </h1>
            <h1
              id="mh5"
              onMouseEnter={() => Hover("mh5")}
              onMouseLeave={() => HoverEnd("mh5")}
              onTouchStart={() => Hover("mh5")}
              onTouchEnd={() => HoverEnd("mh5")}
              onClick={Close}
            >
              <a href="https://www.linkedin.com/in/yakshit/">GITHUB</a>
            </h1>
          </section>
        </div>
      </div>
    </>
  );
}