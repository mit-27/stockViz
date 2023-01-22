import React,{useEffect,useRef} from 'react'
const {tableau} = window;



const Graph1 = ({sourceURL}) => {

  const ref = useRef(null);
  // const url = sourceURL;

  const initViz = () => {
    new tableau.Viz(ref.current,sourceURL,{
      width:'100%',
      height:"90vh"
    })
  }

  useEffect(initViz,[]);



  return <div ref={ref} />;
}

export default Graph1