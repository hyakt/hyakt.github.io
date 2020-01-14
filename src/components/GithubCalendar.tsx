import React, { useRef, useEffect } from 'react'
import Calendar from 'github-calendar'
import { useStaticQuery, graphql } from 'gatsby'

import 'github-calendar/dist/github-calendar.css'
import 'github-calendar/dist/github-calendar-responsive.css'

export default ({user}: {user: string}) => {
  const calenderRef = useRef(null);

  useEffect(() => {
    new Calendar(
      calenderRef.current,
      user,
      {responsive: true}
    );
  });

  return <div className={'calendar'} ref={calenderRef} />
}

