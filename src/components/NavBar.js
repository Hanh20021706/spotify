const NavBar = () => {
  return (
    <section className="nav-page">
      <nav className="nav-list-app">
        <ul>
          <li>
            <a href>
              <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
                alt=""
                className="img-logo"
              />
            </a>
          </li>
          <li>
            <a href>
              <i className="fa-solid fa-house-chimney" />
              home
            </a>
          </li>
          <li>
            <a href>
              {" "}
              <i className="fa-solid fa-arrow-trend-up" />
              trends{" "}
            </a>
          </li>
          <li>
            <a href>
              {" "}
              <i className="fa-solid fa-music" />
              library{" "}
            </a>
          </li>
          <li>
            <a href>
              <i className="fa-solid fa-calendar-week" />
              discover weekly
            </a>
          </li>
          <li>
            <a href>
              <i className="fa-solid fa-compact-disc" />
              make for you
            </a>
          </li>
          <li>
            <a href>
              <i className="fa-brands fa-mix" />
              daily mix
            </a>
          </li>
          <li>
            <a href>
              <i className="fa-solid fa-heart" />
              like songs
            </a>
          </li>
          <li>
            <a href>
              <i className="fa-solid fa-users" />
              favorite artist
            </a>
          </li>
          <li>
            <a href>
              <i className="fa-solid fa-list" />
              playlist
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
