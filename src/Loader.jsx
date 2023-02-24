import { useEffect, useRef } from "react";
import "./assets/App.css";
import gsap from "gsap";
import { useSpring, animated } from "react-spring"; // loading animations

export default function Loader({ body }) {
  const load = useRef(null);
  const loaderCover = useRef(null);
  const loaderConatiner = useRef(null);
  const props = useSpring({
    val: 100,
    from: { val: 0 },
    delay: 500,
    config: {
      mass: 1,
      tension: 28,
      friction: 10,
      duration: 2000,
    },
  });

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".number", {
        transform: "translateY(-5dvh)",
        duration: "2", //2
      });

      gsap.to(loaderCover.current, {
        height: "100dvh",
        transform: "translateY(-50dvh)",
        duration: "1", //2
        delay: "3", //3
      });

      gsap.to(loaderConatiner.current, {
        opacity: "0",
        duration: "1", //2
        delay: "3", //4
      });

      gsap.to(body.current, {
        opacity: "1",
        duration: "1", //2
        delay: "4", //6
      });

      gsap.to(loaderConatiner.current, {
        display:"none",
        delay:"4"
      })

      return () => ctx.revert();
    }, load);
  }, []);

  return (
    <>
      <div ref={loaderConatiner}>
        <div ref={load} className="load">
          <div
            className="seprating-divs-loader"
          ></div>
          <h1 className="number">
            <animated.div>
              {props.val.to((val) => Math.floor(val))}
            </animated.div>
          </h1>
          <div
            ref={loaderCover}
            className="seprating-divs-loader"
          ></div>
        </div>
      </div>
    </>
  );
}
