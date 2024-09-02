const CardDetails = ({ params } : { params: { id: string } }) => {
  const { id } = params;
  
  return (
    <div>
      <span> Hello from {id}</span>
    </div>
  )
}

export default CardDetails;
