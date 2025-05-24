import React from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
export default function Box(props) {
  if(props.flag==1) return <Box1 />;
  else return <Box2 />
    
  
}
