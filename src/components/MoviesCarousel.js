import React from "react";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";

const MoviesCarousel = () => {
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
  ];
  return (
    <>
      <Flicking
        circular={true}
        plugins={plugins}
        defaultIndex={1}
        panelsPerView={1.1}
      >
        <div
          className="card-panel "
          style={{
            width: "100%",
            height: "550px",
            background: "pink",
          }}
        >
          1
        </div>

        <div
          className="card-panel "
          style={{
            width: "100%",
            height: "550px",
            background: "yellow",
          }}
        >
          2
        </div>
        <div
          className="card-panel "
          style={{
            width: "100%",
            height: "550px",
            background: "magenta",
          }}
        >
          3
        </div>
      </Flicking>
      <Flicking moveType="freeScroll" bound={true} style={{ padding: "10px" }}>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🍎 Apple
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🍉 Watermelon
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🥝 Kiwi
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🍎 Apple
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🍉 Watermelon
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🥝 Kiwi
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🍎 Apple
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🍉 Watermelon
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🥝 Kiwi
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🍎 Apple
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🍉 Watermelon
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🥝 Kiwi
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🍎 Apple
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🍉 Watermelon
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🥝 Kiwi
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🍎 Apple
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🍉 Watermelon
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🥝 Kiwi
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🍎 Apple
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🍉 Watermelon
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🥝 Kiwi
        </span>
        <span className="button mr-2 is-white" style={{ padding: "10px" }}>
          🍎 Apple
        </span>
      </Flicking>
      ;
    </>
  );
};

export default MoviesCarousel;
