import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// import component
const ShowCalendar = React.lazy(() => import('./ShowCalendar/ShowCalendar'));
const ListTask = React.lazy(() => import('./ListTask'));
import Loading from './loading';
// import ListTask from './ListTask';
// import ShowCalendar from './ShowCalendar/ShowCalendar';
//

// import style
import './style.css';
//
export default function Root() {
  return (
    <>
      <Switch>
        <Route path='/tasks'>
          <Suspense fallback={<div>Loading...</div>}>
            <ListTask />
          </Suspense>
        </Route>

        <Route path='/'>
          <Suspense fallback={<div>Loading...</div>}>
            <ShowCalendar />
          </Suspense>
        </Route>
      </Switch>
      <Loading />
    </>
  );
}
