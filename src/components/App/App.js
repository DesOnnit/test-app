import { React, useState, useEffect } from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import SortBar from "../SortBar/SortBar.js";
import UsersList from "../UsersList/UsersList.js";
import UserProfile from "../UserProfile/UserProfile.js";
import { data } from "../../utils/constants/constants.js";
import Preloader from "../Preloader/Preloader.js";
import validate from "../../utils/validate/validate.js";
import "./App.css";

function App() {
  const [users, setUsers] = useState(data);
  const history = useHistory();
  const [statusPreloader, setStatusPreloader] = useState(false);
  function clickEdit(id) {
    history.push(`/users/${id}`);
  }

  function sortUsersCity() {
    setUsers(
      [...data].sort((a, b) => {
        if (a.address.city > b.address.city) {
          return 1;
        } else if (a.address.city < b.address.city) {
          return -1;
        }
        return 0;
      })
    );
    setStatusPreloader(true);
    setTimeout(() => setStatusPreloader(false), 1000);
  }
  function sortUsersCompany() {
    setUsers(
      [...data].sort((a, b) => {
        if (a.company.name > b.company.name) {
          return 1;
        } else if (a.company.name < b.company.name) {
          return -1;
        }
        return 0;
      })
    );
    setStatusPreloader(true);
    setTimeout(() => setStatusPreloader(false), 1000);
  }

  useEffect(() => {
    setStatusPreloader(true);
    setTimeout(() => setStatusPreloader(false), 1000);
  }, []);

  return (
    <div className="App">
      <SortBar
        sortUsersCity={sortUsersCity}
        sortUsersCompany={sortUsersCompany}
      />

      <Switch>
        <Route exact path="/">
          <Preloader statusPreloader={statusPreloader} />
          <UsersList
            statusPreloader={statusPreloader}
            users={users}
            clickEdit={clickEdit}
          />
        </Route>
        <Route path="/users/:id">
          <UserProfile users={users} validate={validate} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
