function Wrapper({children,color}){
  return(
    <div style={{Color: color, padding: '20px'}}>
      {children}
    </div>
  )
}

export default Wrapper;