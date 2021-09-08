import { Route, Switch } from 'react-router-dom';
import React from 'react';
// import component
import ShowCalendar from './ShowCalendar/ShowCalendar';
import ListTask from './ListTask';
import Loading from './loading';
// import ListTask from './ListTask';
// import ShowCalendar from './ShowCalendar/ShowCalendar';
//

// import style
import './style.css';
//
export default function Root() {
  const [loading, setLoading] = React.useState(false);
  return (
    <>
      <Switch>
        <Route path='/tasks'>
          <ListTask loading={(v) => setLoading(v)} />
        </Route>

        <Route path='/'>
          <ShowCalendar loading={(v) => setLoading(v)} />
        </Route>
      </Switch>
      <Loading loading={loading} />
    </>
  );
}
