import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav
      className="flex items-center px-8 py-1 justify-between w-screen backdrop-blur-sm bg-black/20 fixed"
      style={{ zIndex: "5000" }}
    >
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src="/logo.png" className="h-20" alt="logo" />
      </a>

      <a
        target="_blank"
        href="http://cognitia_nitm.bio.link/"
        class="ticket-link"
      >
        <div class="ticket">
          <div class="pulse">
            <svg
              width="45"
              height="45"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M64.2857 51.4286H79.6038C79.4365 51.6295 79.2688 51.8053 79.1016 51.9559C78.9343 52.1066 78.7836 52.2322 78.6496 52.3326L78.4989 52.5335L47.2098 82.6674C46.6071 83.2701 45.8705 83.5714 45 83.5714C44.1295 83.5714 43.3929 83.2701 42.7902 82.6674L11.4509 52.4331C11.2835 52.3663 10.9319 52.0313 10.3962 51.4286H28.9286C29.6652 51.4286 30.3264 51.2026 30.9124 50.7506C31.4983 50.2986 31.875 49.721 32.0424 49.0179L35.558 34.9052L45.1004 68.404C45.3013 69.0735 45.6864 69.626 46.2556 70.0614C46.8248 70.4968 47.4777 70.7143 48.2143 70.7143C48.9174 70.7143 49.5536 70.4968 50.1228 70.0614C50.6918 69.626 51.077 69.0735 51.2779 68.404L58.6105 44.0458L61.423 49.6708C62.0257 50.8425 62.9799 51.4286 64.2857 51.4286ZM90 29.9331C90 34.788 88.2758 39.8103 84.827 45H66.2946L60.7199 33.9007C60.4522 33.3315 60.0253 32.8795 59.4392 32.5447C58.8531 32.2098 58.2424 32.0759 57.606 32.1429C56.0993 32.3103 55.1617 33.0804 54.7935 34.4531L48.3147 56.0491L38.471 21.596C38.2701 20.9264 37.8767 20.3739 37.2907 19.9386C36.7048 19.5033 36.0435 19.2857 35.3069 19.2857C34.5703 19.2857 33.9174 19.5117 33.3482 19.9637C32.779 20.4158 32.4107 20.9933 32.2433 21.6964L26.4174 45H5.17299C1.72433 39.8103 0 34.788 0 29.9331C0 22.567 2.12611 16.8081 6.37835 12.6563C10.6306 8.50447 16.5067 6.42859 24.0067 6.42859C26.0826 6.42859 28.2003 6.78854 30.3599 7.50839C32.5195 8.22824 34.5285 9.19925 36.3867 10.4213C38.245 11.6434 39.8437 12.7902 41.183 13.8616C42.5223 14.933 43.7946 16.0714 45 17.2768C46.2054 16.0714 47.4777 14.933 48.817 13.8616C50.1563 12.7902 51.755 11.6434 53.6133 10.4213C55.4715 9.19925 57.4805 8.22824 59.6401 7.50839C61.7997 6.78854 63.9176 6.42859 65.9933 6.42859C73.4931 6.42859 79.3692 8.50447 83.6216 12.6563C87.874 16.8081 90 22.567 90 29.9331Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </a>

      <a href="http://nitm.ac.in" target="_blank" rel="noopener noreferrer">
        <img src="/NITM.png" alt="nitm-logo" className="h-20" />
      </a>
    </nav>
  );
};

export default Navbar;
