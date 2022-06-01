const NavUser = () => {
  return (
    <aside className="nav-user">
      <div className="header-user">
        <div className="img-user">
          <a href>
            {" "}
            <img
              src="https://i.pinimg.com/564x/c6/1b/c6/c61bc60abe7dbbcfe84c58f6670de613.jpg"
              class="user-img"
              alt=""
            />
          </a>
        </div>
        <div className="info-user">
          <h3>zenla nolen</h3>
          <p>tai khoan vip</p>
        </div>
        <div className="bell-user">
          <i className="fa-solid fa-bell" />
        </div>
      </div>
      <div className="main-history">
        <div className="title-history">
          <h4>Recent played</h4>
          <a href>see all</a>
        </div>
        <div className="table-history">
          <table className="table table-list-history">
            <tbody>
              <tr className>
                <td>
                  <img
                    src="https://avatar-ex-swe.nixcdn.com/song/2021/04/09/d/9/d/6/1617948771476_640.jpg"
                    className="img-playlist-history"
                    alt=""
                  />
                </td>
                <td>
                  <h3 className="title-song">kiss me more</h3>
                  <p className="artist-song">doja cat</p>
                </td>
                <td>
                  <p className="time-history">8min ago</p>
                </td>
              </tr>
              <tr className>
                <td>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/vi/1/1e/Poster_b%C3%A0i_h%C3%A1t_%22Stay%22.png"
                    className="img-playlist-history"
                    alt=""
                  />
                </td>
                <td>
                  <h3 className="title-song">stay</h3>
                  <p className="artist-song">The Kid LAROI, Justin Bieber</p>
                </td>
                <td>
                  <p className="time-history">8min ago</p>
                </td>
              </tr>
              <tr className>
                <td>
                  <img
                    src="https://i.ytimg.com/vi/QArpN-UJCFg/sddefault.jpg"
                    className="img-playlist-history"
                    alt=""
                  />
                </td>
                <td>
                  <h3 className="title-song">that hilarious</h3>
                  <p className="artist-song">charlie puth</p>
                </td>
                <td>
                  <p className="time-history">8min ago</p>
                </td>
              </tr>
              <tr className>
                <td>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/f/f9/The_Chainsmokers_This_Feeling.png"
                    className="img-playlist-history"
                    alt=""
                  />
                </td>
                <td>
                  <h3 className="title-song">This Feeling</h3>
                  <p className="artist-song">the chainsmokers</p>
                </td>
                <td>
                  <p className="time-history">8min ago</p>
                </td>
              </tr>
              <tr className>
                <td>
                  <img
                    src="https://cdns-images.dzcdn.net/images/cover/1130d6301d5e87976279ea2f706fcc26/350x350.jpg"
                    className="img-playlist-history"
                    alt=""
                  />
                </td>
                <td>
                  <h3 className="title-song">Complicated</h3>
                  <p className="artist-song">Avril Lavigne</p>
                </td>
                <td>
                  <p className="time-history">8min ago</p>
                </td>
              </tr>
              <tr className>
                <td>
                  <img
                    src="https://i1.sndcdn.com/artworks-kvEhsVnVg7yy1zFE-ohSQWw-t500x500.jpg"
                    className="img-playlist-history"
                    alt=""
                  />
                </td>
                <td>
                  <h3 className="title-song">Up</h3>
                  <p className="artist-song">Cardi B</p>
                </td>
                <td>
                  <p className="time-history">8min ago</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </aside>
  );
};

export default NavUser;
